import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { project } from '../../types/Type';
import UserProjects from './UserProjects';

const UserProjectsList = ({filterValue}: {filterValue: any}) => {

    const activeUser = useSelector((state: RootState)=>state.users.activeUser);

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
  {activeUser.visibilityProjects.map((item: project, i: number)=>{
        if(item.projectName.toLowerCase().includes(filterValue.toLowerCase()))
        {
            return <UserProjects item={item} key={i}/>
        }
        })}
  </tbody>
</table>
</div>
  )
}

export default UserProjectsList