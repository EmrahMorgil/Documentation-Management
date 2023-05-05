import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { project } from "../../types/Type";
import Project from "./Project";
import { setProjects } from "../../redux/projects/projectsSlice";


const ProjectsList = ({projectsControl, userId, filterValue}: {projectsControl: string, userId?: string, filterValue: string}) => {
  const projects = useSelector((state: RootState) => state.projects.projects);
  // const [data, setData] = useState(projects);
  const [sorted, setSorted] = useState({ sorted: "totalContent", isReversed: false });
  const dispatch = useDispatch();
  
  const sortById = () => {
    const sortedData = [...projects].sort((a, b) => {
      if (sorted.isReversed) {
        return a.totalContent - b.totalContent;
      }
      return b.totalContent - a.totalContent;
    });
  
    dispatch(setProjects(sortedData));
    console.log(sortedData);
    setSorted({ sorted: "totalContent", isReversed: !sorted.isReversed });
  };
  
  const sortByProjectName = () => {
    const sortedData = [...projects].sort((a, b) => {
      if (sorted.isReversed) {
        return b.projectName.localeCompare(a.projectName);
      }
      return a.projectName.localeCompare(b.projectName);
    });
  
    dispatch(setProjects(sortedData));
    console.log(sortedData);
    
    setSorted({ sorted: "projectName", isReversed: !sorted.isReversed });
  };
  
 const renderArrow=()=>{
  if (sorted.isReversed) {
    return  "▲" 
  }return "▼"
 }


  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th onClick={sortByProjectName} scope="col">Project Name 
            {sorted.sorted==="projectName" ? renderArrow():null}  </th>
            <th scope="col">Created Date</th>
            <th scope="col">Updated Date</th>
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
            <th onClick={sortById} scope="col">Total Content
            {sorted.sorted==="totalContent" ? renderArrow():null}
            </th>
            <th scope="col">Visibility Role</th>
            {projectsControl!=="homePageProject" && <th scope="col">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {projects.map((item: project, i: number) =>{
            if(item.projectName.toLowerCase().includes(filterValue.toLowerCase()))
            {
              return <Project project={item} key={i} projectsControl={projectsControl} userId={userId}/>
            }
          }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;
