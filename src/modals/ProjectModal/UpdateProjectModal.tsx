import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { project, visibilityProjects } from "../../types/Type";
import { updateProjects } from "../../services/projectService"
import { setProjects, setVisibilityProjects } from '../../redux/projects/projectsSlice';
import { updateVisibilityProjectsApi } from "../../services/visibilityProjectServise";

interface IUpdateProjectModal{
  project: project;
}

const UpdateProjectModal: React.FC<IUpdateProjectModal> = ({ project }) => {
    const dispatch = useDispatch();
    const projects = useSelector((state: RootState) => state.projects.projects);
    const activeUser = useSelector((state: RootState) => state.users.activeUser.name);
    const visibilityProjects = useSelector((state: RootState)=>state.projects.visibilityProjects);

  const [updatedProject, setUpdatedProject] = useState<project>({
    id: project.id,
    projectName: project.projectName,
    createdDate: project.createdDate,
    updatedDate: project.updatedDate,
    createdPerson: project.createdPerson,
    updatedPerson: project.updatedPerson,
    totalContent: project.totalContent,
    visibilityRole: project.visibilityRole,
  });
  

  const updateVisibilityProjectItem = () =>{
    const setUpdatedProject = { ...updatedProject };
    const {
      id,
      projectName,
      createdDate,
      updatedDate,
      createdPerson,
      updatedPerson,
      totalContent,
      visibilityRole,
    } = setUpdatedProject;

    const newArray: visibilityProjects = visibilityProjects.map((visibilityProject: visibilityProjects)=>{
      if(visibilityProject.projectId==project.id)
      {
        let projectId = visibilityProject.projectId; 
        let userId = visibilityProject.userId;
        const updatedVisibilityProject: visibilityProjects = {id, projectName, createdDate, updatedDate, createdPerson, updatedPerson, totalContent,visibilityRole,projectId,userId};
        updateVisibilityProjectsApi(visibilityProject.id, updatedVisibilityProject)
        return  updatedVisibilityProject
      }else{
        return visibilityProject;
      }
    });
    dispatch(setVisibilityProjects(newArray));

  }


  const updateProject = async (updateProject: project) => {
    let date = new Date();
    let nowDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    const setUpdatedProject = { ...updatedProject };
    setUpdatedProject.updatedDate = nowDate;
    setUpdatedProject.updatedPerson = activeUser;

    const {
      id,
      projectName,
      createdDate,
      updatedDate,
      createdPerson,
      updatedPerson,
      totalContent,
      visibilityRole,
    } = setUpdatedProject;

    updateProjects(updateProject.id,setUpdatedProject);

    const newArr = projects.map((projects: project) => {
      if (projects.id === updateProject.id) {
        return {
          id,
          projectName,
          createdDate,
          updatedDate,
          createdPerson,
          updatedPerson,
          totalContent,
          visibilityRole,
        };
      }
      return projects;
    });
    dispatch(setProjects(newArr));

    //visibilityProject'de var ise oradan da update işlemi yapılıyor.
    updateVisibilityProjectItem();
  };

  const handleChange = (e: any) => {
    setUpdatedProject({ ...updatedProject, [e.target.name]: e.target.value });
    if(e.target.name==="visibilityRole")
    {
      setUpdatedProject({...updatedProject, visibilityRole: Number(e.target.value)})
    }
  };

  return (
    <div
    className="modal fade"
    id={project.id}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <form>
             <div style={{marginBottom: "75px", width: "400px", textAlign: "center" }}> <h3>Update Project</h3></div>
              <div className="form-outline mb-4">
              <label htmlFor="exampleInput">Project Name</label>
                <input
                  type="text"
                  value={updatedProject.projectName}
                  name="projectName"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

        
                <div className="form-outline mb-4">
                <label htmlFor="exampleInput">Role</label>
                  <input
                    type="text"
                    value={updatedProject.visibilityRole}
                    name="visibilityRole"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-warning"
              data-dismiss="modal"
              onClick={() => updateProject(project)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UpdateProjectModal
