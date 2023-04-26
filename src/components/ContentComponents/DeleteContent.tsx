import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { content } from '../../types/Type';
import { deleteContents } from '../../services/contentService';
import { setContents } from '../../redux/contents/contentsSlice';

const DeleteContent = ({id}: {id: string}) => {


  const dispatch = useDispatch();
  const contents = useSelector((state: RootState) => state.contents.contents);

  const deleteContent = (id: string) => {
    deleteContents(id);
    //api

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