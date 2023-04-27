import React, {useState} from 'react'
import { nanoid } from 'nanoid';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addContents } from '../services/contentService';
import { addNewContent } from '../redux/contents/contentsSlice';
import { getTotalContentAmount, updateProjects } from '../services/projectService';
import { project } from '../types/Type';
import { setProjects } from '../redux/projects/projectsSlice';

const AddContentModal = ({id}: {id: string}) => {
    
    const dispatch = useDispatch();
    const activeUser = useSelector((state: RootState) => state.users.activeUser);
    const projects = useSelector((state:RootState)=>state.projects.projects);

    const [newContent, setNewContent] = useState({
        id: "",
        contentName: "",
        createdDate: "2023",
        updatedDate: "2023",
        createdPerson: "emrah",
        updatedPerson: "emrah",
        contentVersion: 0,
        content: "",
        contentTags: "",
        projectId: id,
      });

    const handleClick = async() =>{
        let nowDate = new Date().toString().substring(0, 24);
        const updatedContent = { ...newContent };
        updatedContent.id = nanoid();
        updatedContent.createdDate = nowDate;
        updatedContent.updatedDate = nowDate;
        updatedContent.createdPerson = activeUser.name;
        updatedContent.updatedPerson = activeUser.name;
        updatedContent.projectId = id;

        //api

        //amount
        const totalContentAmount = await getTotalContentAmount(id)+1;
        
        addContents(updatedContent);
        dispatch(addNewContent(updatedContent));

        setNewContent({
            id: "",
            contentName: "",
            createdDate: "",
            updatedDate: "",
            createdPerson: "",
            updatedPerson: "",
            contentVersion: 0,
            content: "",
            contentTags: "",
            projectId: ""
          });

          
          //update amount
          let newArr = projects.map((item: project)=>{
            if(item.id === id)
            {
              let updatedContentAmount = {...item};
              updatedContentAmount.totalContent = totalContentAmount;
              updateProjects(id, updatedContentAmount);
              
              return updatedContentAmount;
            }
            return item;
          })
          dispatch(setProjects(newArr));
          
    }
    const handleChange = (e: any) =>{
        setNewContent({ ...newContent, [e.target.name]: e.target.value });
    }


  return (
    <div
      className="modal fade"
      id={`${id}`}
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
              <div><h3 style={{ width: "400px", textAlign: "center",marginBottom: "50px"}}>Add Content</h3></div> 
                <div className="form-outline mb-4">
                  <label htmlFor="exampleInput">Content Name</label>
                  <input
                    type="text"
                    value={newContent.contentName}
                    onChange={handleChange}
                    name="contentName"
                    className="form-control"
                  />
                </div>

                <div className="form-outline mb-4">
                <label htmlFor="exampleInput">Content Version</label>
                  <input
                    type="text"
                    value={newContent.contentVersion}
                    onChange={handleChange}
                    name="contentVersion"
                    className="form-control"
                  />
                </div>

                <div className="form-outline mb-4">
                <label htmlFor="exampleFormControlTextarea1">Please Content Write Here</label>
                
                  <textarea 
                    rows={9}
                    value={newContent.content}
                    onChange={handleChange}
                    name="content"
                    className="form-control"
                  />
                </div>

                <div className="form-outline mb-4">
                <label htmlFor="exampleInput">Content Tags</label>
                  <input
                    type="text"
                    value={newContent.contentTags}
                    onChange={handleChange}
                    name="contentTags"
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
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContentModal