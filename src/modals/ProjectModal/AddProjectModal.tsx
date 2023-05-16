import React, {useState} from 'react'
import { nanoid } from 'nanoid';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProject } from '../../redux/projects/projectsSlice';
import { addProjects } from '../../services/projectService';
import {toast} from "react-toastify";
import { project } from '../../types/Type';

const AddProjectModal: React.FC = () => {


    const dispatch = useDispatch();
    const activeUser = useSelector((state: RootState) => state.users.activeUser);

    const [newProject, setNewProject] = useState<project>({
        id: "",
        projectName: "",
        createdDate: "2023",
        updatedDate: "2023",
        createdPerson: "emrah",
        updatedPerson: "emrah",
        totalContent: 0,
        visibilityRole: 0,
      });
      


      const createNewProject = ()=>{
        const updatedProject = { ...newProject };
        let date = new Date();
        let nowDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

        updatedProject.id = "id"+nanoid();
        updatedProject.createdDate = nowDate;
        updatedProject.updatedDate = nowDate;
        updatedProject.createdPerson = activeUser.name;
        updatedProject.updatedPerson = activeUser.name;
        dispatch(addNewProject(updatedProject));
        addProjects(updatedProject);
      }

    const addProject = () =>{
        
        createNewProject();
  
        //proje ekledikten sonra alanların temizlenmesi.
        setNewProject({id: "",projectName: "",createdDate: "",updatedDate: "",createdPerson: "",updatedPerson: "",totalContent: 0,visibilityRole: 0});
        toast.success("Project successfully added");
      }
    const handleChange = (e: any) =>{
        setNewProject({ ...newProject, [e.target.name]: e.target.value });
    }


  return (
    <div
      className="modal fade"
      id="addProject"
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
                marginTop: "50px",
              }}
            >
              <form>
                <div><h3 style={{marginBottom: "50px" ,width: "400px", textAlign: "center" }}>Add Project</h3></div>
               
                <div className="form-outline mb-4">
                <label htmlFor="exampleInput">Project Name</label>
                  <input
                    type="text"
                    value={newProject.projectName}
                    onChange={handleChange}
                    name="projectName"
                    className="form-control"
                  />
                </div>

                <div className="form-outline mb-4">
                <label htmlFor="exampleInput">Role</label>
                  <input
                    type="text"
                    value={newProject.visibilityRole}
                    onChange={handleChange}
                    name="visibilityRole"
                    className="form-control"
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
              className="btn btn-success"
              data-dismiss="modal"
              onClick={addProject}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProjectModal