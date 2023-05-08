import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { project } from "../../types/Type";
import Project from "./Project";
import { setProjects } from "../../redux/projects/projectsSlice";


const ProjectsList = ({projectsControl, userId, filterValue}: {projectsControl: string, userId?: string, filterValue: string}) => {
  
  const projects = useSelector((state: RootState) => state.projects.projects);
  const [projectSorted, setProjectSorted] = useState({ sorted: "projectName", isReversed: false });
  const [totalSorted, setTotalSorted] = useState({sorted: "totalContent", isReversed: false});
  const dispatch = useDispatch();

  const sortByTotalContent = () => {
    const sortedData = [...projects].sort((a, b) => {
      if (totalSorted.isReversed) {
        return a.totalContent - b.totalContent;
      }
      return b.totalContent - a.totalContent;
    });
  
    dispatch(setProjects(sortedData));
    setTotalSorted({ sorted: "totalContent", isReversed: !totalSorted.isReversed });
  };
  
  const sortByProjectName = () => {
    const sortedData = [...projects].sort((a, b) => {
      if (projectSorted.isReversed) {
        return b.projectName.localeCompare(a.projectName);
      }
      return a.projectName.localeCompare(b.projectName);
    });
  
    dispatch(setProjects(sortedData));
    setProjectSorted({ sorted: "projectName", isReversed: !projectSorted.isReversed });
  };
  

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th onClick={sortByProjectName} scope="col">Project Name {" "}
           {projectSorted.sorted ? (projectSorted.isReversed ? "▲" : "▼"):null} 
        {/* {sorted.sorted==="projectName" ? renderArrow():null}  */}
         </th>
            <th scope="col">Created Date</th>
            <th scope="col">Updated Date</th>
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
            <th onClick={sortByTotalContent} scope="col">Total Content 
          {totalSorted.sorted  ? (totalSorted.isReversed ? "▲" : "▼"):null}
           {/* {sorted.sorted==="totalContent" ? renderArrow():null} */}
            </th>
            <th scope="col">Visibility Role</th>
            {projectsControl!=="adminLoggedInProjects" && <th scope="col">Actions</th>}
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
