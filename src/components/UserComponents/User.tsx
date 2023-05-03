import React from "react";
import DeleteUser from "./DeleteUser";
import { IItemProp, visibilityProjects } from "../../types/Type";
import UpdateUser from "./UpdateUser";
import AddOnUserProjects from "./AddOnUserProjects";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const User: React.FC<IItemProp> = ({ item }) => {

  const visibilityProjects = useSelector((state: RootState)=>state.projects.visibilityProjects);

  return (
    <>
      <tr>
        <td scope="row">{item.id}</td>
        <td scope="row">{item.name}</td>
        <td scope="row">{item.surname}</td>
        <td scope="row">{item.password}</td>
        <td scope="row">{item.role}</td>
        <td scope="row">{visibilityProjects.length}</td>
        <td scope="row">{item.createdDate}</td>
        <td scope="row">{item.updatedDate}</td>
        <td scope="row">{item.createdPerson}</td>
        <td scope="row">{item.updatedPerson}</td>
        <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
          {/* <button className="btn btn-success">Projects</button> */}
          <AddOnUserProjects item={item}/>
          <UpdateUser item={item} />
          <DeleteUser id={item.id} />
        </td>
      </tr>
    </>
  );
};

export default User;
