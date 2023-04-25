import React from 'react'
import { project } from '../../types/Type'
import DeleteProject from './DeleteProject'

interface IProject{
    item: project,
}

const Project: React.FC<IProject> = ({item}) => {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Name </th>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>Created Person</th>
            <th>Updated Person</th>
            <th>Total Content</th>
            <th>Visibility Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <td>{item.id}</td>
          <td>{item.projectName}</td>
          <td>{item.createdDate}</td>
          <td>{item.updatedDate}</td>
          <td>{item.createdPerson}</td>
          <td>{item.updatedPerson}</td>
          <td>{item.totalContent}</td>
          <td>{item.visibilityRole}</td>
          <td style={{ display: "flex", flexDirection: "column" }}>
            <button className="btn btn-success">Content</button>
            <DeleteProject id={item.id}/>
            {/* <UpdateUser item={item} />
            <DeleteUser id={item.id} /> */}
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default Project