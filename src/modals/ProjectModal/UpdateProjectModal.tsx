import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { project } from "../../types/Type";
import { updateProjects } from "../../services/projectService"
import { setProjects } from '../../redux/projects/projectsSlice';

interface IUpdateProjectModal{
  project: project;
}

const UpdateProjectModal: React.FC<IUpdateProjectModal> = ({ project }) => {
    const dispatch = useDispatch();
    const projects = useSelector((state: RootState) => state.projects.projects);
    const activeUser = useSelector((state: RootState) => state.users.activeUser.name);

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
  

  const updateProject = async (updateProject: project) => {
    let nowDate = new Date().toString().substring(0, 24);
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
  };

  const handleChange = (e: any) => {
    setUpdatedProject({ ...updatedProject, [e.target.name]: e.target.value });
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
              marginTop: "150px",
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
