import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteProjects } from '../../services/projectService';
import { project, visibilityProjects } from '../../types/Type';
import { setProjects, setVisibilityProjects } from '../../redux/projects/projectsSlice';

interface IDeleteProject{
  project: project;
}

const DeleteProject: React.FC<IDeleteProject> = ({project}) => {


  const removeVisibilityProjectItem = () =>{
    const newArray = visibilityProjects.filter((visibilityProject: visibilityProjects)=>{
      if(visibilityProject.projectId!==project.id)
      {
        return visibilityProject;
      }
    })
    
    dispatch(setVisibilityProjects(newArray));
  }



  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const visibilityProjects = useSelector((state: RootState)=>state.projects.visibilityProjects);

  const deletedProject = (item: project) => {
    deleteProjects(item.id);
    //api

    const newArr = projects.filter((projects: project) => {
      if (projects.id !== item.id) {
        return projects;
      }
    });

    //visibilityProjects'den silme işlemi
    removeVisibilityProjectItem();

    dispatch(setProjects(newArr));
  };

  return (
    <button className="btn btn-danger" onClick={() => deletedProject(project)} style={{width: "100px"}}>
      Delete
    </button>
  )
}

export default DeleteProject