import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { project, user, visibilityProjects } from '../../../types/Type';
import UserProjects from './UserProjects';
import { setProjects, setVisibilityProjects } from '../../../redux/projects/projectsSlice';

const UserProjectsList: React.FC = () => {

    const activeUser: user = useSelector((state: RootState)=>state.users.activeUser);
    const visibilityProjects = useSelector((state: RootState)=>state.projects.visibilityProjects);
    const [filterProjectName, setFilterProjectName] = useState<string>("");

    const [projectSorted, setProjectSorted] = useState({ sorted: "projectName", isReversed: false });
    const [totalSorted, setTotalSorted] = useState({sorted: "totalContent", isReversed: false});
    const [roleSorted, setRoleSorted] = useState({sorted: "visibilityRole", isReversed: false});
    const dispatch = useDispatch();

    const sortByTotalContent = () => {
      const sortedData = [...visibilityProjects].sort((a, b) => {
        if (totalSorted.isReversed) {
          return a.totalContent - b.totalContent;
        }
        return b.totalContent - a.totalContent;
      });
    
      dispatch(setVisibilityProjects(sortedData));
      setTotalSorted({ sorted: "totalContent", isReversed: !totalSorted.isReversed });
    };
    
    const sortByProjectName = () => {
      const sortedData = [...visibilityProjects].sort((a, b) => {
        if (projectSorted.isReversed) {
          return b.projectName.localeCompare(a.projectName);
        }
        return a.projectName.localeCompare(b.projectName);
      });
    
      dispatch(setVisibilityProjects(sortedData));
      setProjectSorted({ sorted: "projectName", isReversed: !projectSorted.isReversed });
    };
   



  return (
<div className="container mt-5">
      <table className="table table-striped">
      <thead className="thead-dark">
          <th scope="col"></th>
          <th scope="col"><input size={10} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFilterProjectName(e.target.value)}/></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
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
            
            <th scope="col">Actions</th>
          </tr>
        </thead>
  <tbody>
    {visibilityProjects.map((visibilityProject: visibilityProjects, i: number)=>{
      if(activeUser.id===visibilityProject.userId)
      {
        if(visibilityProject.projectName.toLowerCase().includes(filterProjectName.toLowerCase()))
        {
          return <UserProjects visibilityProject={visibilityProject} key={i}/>
        }
      }
    })}
  </tbody>
</table>
</div>
  )
}

export default UserProjectsList