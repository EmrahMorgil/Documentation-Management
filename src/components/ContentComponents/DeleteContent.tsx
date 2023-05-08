import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { content, project } from '../../types/Type';
import { deleteContents } from '../../services/contentService';
import { setContents } from '../../redux/contents/contentsSlice';
import { updateProjects } from '../../services/projectService';
import { setProjects } from '../../redux/projects/projectsSlice';

interface IDeleteContent{
  id: string;
  projectId?: string;
}

const DeleteContent: React.FC<IDeleteContent> = ({id, projectId}) => {


  const dispatch = useDispatch();
  const contents = useSelector((state: RootState) => state.contents.contents);


  const projects = useSelector((state:RootState)=>state.projects.projects);


  //amount
  const deleteContentAmount = () =>{

    let updatedContentAmount: project ={id:"", projectName: "", createdDate: "", updatedDate: "", createdPerson: "", updatedPerson: "", totalContent: 0, visibilityRole: 1};

    let newArray = projects.map((item: project)=>{
      if(item.id === projectId)
      {
        updatedContentAmount = {...item};
        updatedContentAmount.totalContent--;

        return updatedContentAmount;
      }
      return item;
    })
    
    updateProjects(updatedContentAmount.id, updatedContentAmount);

    dispatch(setProjects(newArray));
  }


  const deleteContent = (id: string) => {
    //api
    deleteContents(id);


    //delete amount
    setTimeout(deleteContentAmount, 100);


    const newArr = contents.filter((contents: content) => {
      if (contents.id !== id) {
        return contents;
      }
    });
    dispatch(setContents(newArr));
  };

  return (
    <button className="btn btn-danger" onClick={() => deleteContent(id)}>
      Delete
    </button>
  )
}

export default DeleteContent