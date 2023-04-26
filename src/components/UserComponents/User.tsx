import React from "react";
import DeleteUser from "./DeleteUser";
import { IItemProp } from "../../types/Type";
import UpdateUser from "./UpdateUser";

const User: React.FC<IItemProp> = ({ item }) => {
  return (
    <>
      <tr>
        <td scope="row">{item.id}</td>
        <td scope="row">{item.name}</td>
        <td scope="row">{item.surname}</td>
        <td scope="row">{item.password}</td>
        <td scope="row">{item.role}</td>
        <td scope="row">{item.visibilityProjects}</td>
        <td scope="row">{item.createdDate}</td>
        <td scope="row">{item.updatedDate}</td>
        <td scope="row">{item.createdPerson}</td>
        <td scope="row">{item.updatedPerson}</td>
        <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
          <button className="btn btn-success">Projects</button>
          <UpdateUser item={item} />
          <DeleteUser id={item.id} />
        </td>
      </tr>
    </>
  );
};

export default User;
