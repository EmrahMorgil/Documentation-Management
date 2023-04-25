import React from "react";
import { user } from "../types/Type";
import { useState } from "react";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import { IItemProp } from "../types/Type";

const User: React.FC<IItemProp> = ({ item }) => {
  const [updateControl, setUpdateControl] = useState<boolean>(false);

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
          {updateControl ? (
            <>
              <UpdateUser item={item} setUpdateControl={setUpdateControl} />
            </>
          ) : (
            <>
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
              <td style={{ display: "flex", flexDirection: "column" }}>
                <button className="btn btn-success">Projects</button>
                <button
                  className="btn btn-warning"
                  onClick={() => setUpdateControl(true)}
                >
                  Update
                </button>
                <DeleteUser id={item.id} />
              </td>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
