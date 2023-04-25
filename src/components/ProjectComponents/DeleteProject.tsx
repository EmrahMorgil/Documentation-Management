import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteProducts } from '../../services/projectService';
import { project } from '../../types/Type';
import { setProjects } from '../../redux/projects/projectsSlice';

const DeleteProject = ({id}: {id: string}) => {


  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);

  const deleteUser = (id: string) => {
    deleteProducts(id);
    //api

    const newArr = projects.filter((projects: project) => {
      if (projects.id !== id) {
        return projects;
      }
    });
    dispatch(setProjects(newArr));
  };

  return (
    <button className="btn btn-danger" onClick={() => deleteUser(id)}>
      Delete
    </button>
  )
}

export default DeleteProject