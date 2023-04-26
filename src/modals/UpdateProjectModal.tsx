import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { project } from "../types/Type";
import { updateProducts } from "../../src/services/projectService"
import { setProjects } from '../../src/redux/projects/projectsSlice';

const UpdateProjectModal = ({ item }: { item: project }) => {
    const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const activeUser = useSelector((state: RootState) => state.users.activeUser.name);

  const [updatedProject, setUpdatedProject] = useState<project>({
    id: item.id,
    projectName: item.projectName,
    createdDate: item.createdDate,
    updatedDate: item.updatedDate,
    createdPerson: item.createdPerson,
    updatedPerson: item.updatedPerson,
    totalContent: item.totalContent,
    visibilityRole: item.visibilityRole,
  });
  

  const updateProject = async (item: project) => {
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

    updateProducts(item.id,setUpdatedProject);

    const newArr = projects.map((projects: project) => {
      if (projects.id === item.id) {
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
    id={item.id}
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
            <form style={{ width: "400px", textAlign: "center" }}>
              <h3>Update Project</h3>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  value={updatedProject.projectName}
                  name="projectName"
                  className="form-control"
                  placeholder="Project Name"
                  onChange={handleChange}
                />
              </div>

        
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedProject.visibilityRole}
                    name="visibilityRole"
                    className="form-control"
                    placeholder="Role"
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
              onClick={() => updateProject(item)}
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
