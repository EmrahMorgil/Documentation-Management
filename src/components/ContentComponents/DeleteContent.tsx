import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { content, project } from '../../types/Type';
import { deleteContents } from '../../services/contentService';
import { setAllContents, setSelectContents } from '../../redux/contents/contentsSlice';
import { updateProjects } from '../../services/projectService';
import { setProjects } from '../../redux/projects/projectsSlice';

interface IDeleteContent{
  contentId: string;
  projectId?: string;
}

const DeleteContent: React.FC<IDeleteContent> = ({contentId, projectId}) => {


  const dispatch = useDispatch();
  const allContents = useSelector((state: RootState) => state.contents.allContents);
  const selectContents = useSelector((state: RootState) => state.contents.selectContents);


  const deleteContent = (id: string) => {
    //api
    deleteContents(id);


    const newArr = allContents.filter((contents: content) => {
      if (contents.id !== id) {
        return contents;
      }
    });

    const newArray = selectContents.filter((contents: content) => {
      if (contents.id !== id) {
        return contents;
      }
    });
    dispatch(setAllContents(newArr));
    dispatch(setSelectContents(newArray));
  };

  return (
    <button className="dropdown-item" onClick={() => deleteContent(contentId)}>
      Delete
    </button>
  )
}

export default DeleteContent