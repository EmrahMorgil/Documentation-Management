import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { project, user, visibilityProjects } from "../../types/Type";
import Project from "./Project";
import { setProjects, setVisibilityProjects } from "../../redux/projects/projectsSlice";


const ProjectsList = ({projectsControl, userId}: {projectsControl: string, userId?: string}) => {
  
  const projects = useSelector((state: RootState) => state.projects.projects);
  const [projectSorted, setProjectSorted] = useState({ sorted: "projectName", isReversed: false });
  const [totalSorted, setTotalSorted] = useState({sorted: "totalContent", isReversed: false});
  const [roleSorted, setRoleSorted] = useState({sorted: "visibilityRole", isReversed: false});
  const [filterValues, setFilterValues] = useState({projectName: "", createdDate: "", updatedDate: "", visibilityRole: 0});
  const adminLoggedIn = useSelector((state:RootState)=>state.users.adminLoggedIn);
  const activeUser: user = useSelector((state: RootState)=>state.users.activeUser);
  const visibilityProjects = useSelector((state: RootState)=>state.projects.visibilityProjects);
  const dispatch = useDispatch();

  const handleChange = (e: any) =>{
    setFilterValues({...filterValues, [e.target.name]: e.target.value});
    if(e.target.name==="visibilityRole")
    {
      setFilterValues({...filterValues, "visibilityRole": (e.target.value)});
    }
  }
  

  const sortByTotalContent = () => {

    let variableProject;
    activeUser.role===1 ? variableProject = projects : variableProject = visibilityProjects; 

    const sortedData = [...variableProject].sort((a, b) => {
      if (totalSorted.isReversed) {
        return a.totalContent - b.totalContent;
      }
      return b.totalContent - a.totalContent;
    });
  
    
    if(activeUser.role===0)
    {
      dispatch(setVisibilityProjects(sortedData));
    }else{
      dispatch(setProjects(sortedData));
    }
    setTotalSorted({ sorted: "totalContent", isReversed: !totalSorted.isReversed });
  };
  
  const sortByProjectName = () => {
    let variableProject;
    activeUser.role===1 ? variableProject = projects : variableProject = visibilityProjects; 

    const sortedData = [...variableProject].sort((a, b) => {
      if (projectSorted.isReversed) {
        return b.projectName.localeCompare(a.projectName);
      }
      return a.projectName.localeCompare(b.projectName);
    });
  
    if(activeUser.role===0)
    {
      dispatch(setVisibilityProjects(sortedData));
    }else{
      dispatch(setProjects(sortedData));
    }
    setProjectSorted({ sorted: "projectName", isReversed: !projectSorted.isReversed });
  };
  const sortByVisibilityRole = () => {

    let variableProject;
    activeUser.role===1 ? variableProject = projects : variableProject = visibilityProjects; 

    const sortedData = [...variableProject].sort((a, b) => {
      if (roleSorted.isReversed) {
        return a.visibilityRole - b.visibilityRole;
      }
      return b.visibilityRole - a.visibilityRole;
    });
  
    if(activeUser.role===0)
    {
      dispatch(setVisibilityProjects(sortedData));
    }else{
      dispatch(setProjects(sortedData));
    }
    setRoleSorted({ sorted: "visibilityRole", isReversed: !roleSorted.isReversed });
  };


  

  return (
    <div className="container">
      <table className="table table-striped">
      <thead className="thead-dark">
          <th scope="col"></th>
          <th scope="col"><input name="projectName" size={10} onChange={handleChange}/></th>
          <th scope="col"><input name="createdDate" size={7} onChange={handleChange}/></th>
          <th scope="col"><input name="updatedDate" size={7} onChange={handleChange}/></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          {(projectsControl!=="allProjects" || !adminLoggedIn) && <th scope="col"></th>}
        </thead>
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th onClick={sortByProjectName} scope="col">Project Name
           {projectSorted.sorted ? (projectSorted.isReversed ? "▲" : "▼"):null}
         </th>
            <th scope="col">Created Date</th>
            <th scope="col">Updated Date</th>
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
            <th onClick={sortByTotalContent} scope="col">Total Content 
          {totalSorted.sorted  ? (totalSorted.isReversed ? "▲" : "▼"):null}
            </th>
            <th onClick={sortByVisibilityRole} scope="col">Visibility Role
            {roleSorted.sorted  ? (roleSorted.isReversed ? "▲" : "▼"):null}
            </th>
            {(projectsControl!=="allProjects" || !adminLoggedIn) && <th scope="col">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {adminLoggedIn ? projects.map((item: project, i: number) =>{
            if(item.projectName.toLowerCase().includes(filterValues.projectName.toLowerCase()) && item.createdDate.includes(filterValues.createdDate) && item.updatedDate.includes(filterValues.updatedDate))
            {
              return <Project project={item} key={i} projectsControl={projectsControl} userId={userId}/>
            }
          }
          ) 
          : 
          visibilityProjects.map((visibilityProject: visibilityProjects, i: number)=>{
            if(activeUser.id===visibilityProject.userId)
            {
              if(visibilityProject.projectName.toLowerCase().includes(filterValues.projectName.toLowerCase()))
              {
                return <Project project={visibilityProject} key={i} projectsControl={"visibilityProjectsMap"}/>
              }
            }
          })}
          
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;
