import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { project, user, visibilityProjects } from '../../../types/Type';
import UserProjects from './UserProjects';

interface IFilterValue{
  filterValue: string;
}

const UserProjectsList: React.FC<IFilterValue> = ({filterValue}) => {

    const activeUser: user = useSelector((state: RootState)=>state.users.activeUser);
    const visibilityProjects = useSelector((state: RootState)=>state.projects.visibilityProjects);

  return (
<div className="container mt-5">
<table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Project Name </th>
      <th scope="col">Created Date</th>
      <th scope="col">Updated Date</th>
      <th scope="col">Created Person</th>
      <th scope="col">Updated Person</th>
      <th scope="col">Total Content</th>
      <th scope="col">Visibility Role</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {visibilityProjects.map((visibilityProject: visibilityProjects, i: number)=>{
      if(activeUser.id===visibilityProject.userId)
      {
        if(visibilityProject.projectName.toLowerCase().includes(filterValue.toLowerCase()))
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