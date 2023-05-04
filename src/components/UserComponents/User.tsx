import React from "react";
import DeleteUser from "./DeleteUser";
import { IUserProp } from "../../types/Type";
import UpdateUser from "./UserModalConnection/UpdateUser";
import AddOnUserProjects from "./UserModalConnection/AddOnUserProjects";

const User: React.FC<IUserProp> = ({ user }) => {
  return (
    <>
      <tr>
        <td scope="row">{user.id.substring(0,2)+"..."}</td>
        <td scope="row">{user.name}</td>
        <td scope="row">{user.surname}</td>
        <td scope="row">{user.password}</td>
        <td scope="row">{user.role}</td>
        <td scope="row">{user.totalProject}</td>
        <td scope="row">{user.createdDate}</td>
        <td scope="row">{user.updatedDate}</td>
        <td scope="row">{user.createdPerson}</td>
        <td scope="row">{user.updatedPerson}</td>
        <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
          <AddOnUserProjects user={user} />
          <UpdateUser user={user} />
          <DeleteUser id={user.id} />
        </td>
      </tr>
    </>
  );
};

export default User;
