import React from "react";
import { user } from "../types/Type";

const UsersList = ({ item }: { item: user }) => {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name </th>
            <th>Surname</th>
            <th>Password </th>
            <th>Role</th>
            <th>Projects</th>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>Created Person</th>
            <th>Updated Person</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.surname}</td>
          <td>{item.password}</td>
          <td>{item.role}</td>
          <td>{item.visibilityProjects}</td>
          <td>{item.createdDate}</td>
          <td>{item.updatedDate}</td>
          <td>{item.createdPerson}</td>
          <td>{item.updatedPerson}</td>
          <td>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
