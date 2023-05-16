import React, { useEffect } from "react";
import DeleteUser from "./DeleteUser";
import { IUserProp, visibilityProjects } from "../../types/Type";
import OnUserProjectsModal from "../../modals/UserModal/OnUserProjectsModal";
import AddOnUserProjectsModal from "../../modals/UserModal/AddOnUserProjectsModal";
import UserDetailModal from "../../modals/UserModal/UserDetailModal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const User: React.FC<IUserProp> = ({ user }) => {
  const visibilityProjects = useSelector(
    (state: RootState) => state.projects.visibilityProjects
  );

  const onUserProjectLength = () => {
    return visibilityProjects.filter(
      (item: visibilityProjects) => item.userId == user.id
    ).length;
  };

  return (
    <>
      <tr>
        <td scope="row">{user.id.substring(0, 2) + "..."}</td>
        <td scope="row">{user.name}</td>
        <td scope="row">{user.surname}</td>
        <td scope="row">{user.password}</td>
        <td scope="row">{user.role}</td>
        <td scope="row">{onUserProjectLength()}</td>
        <td scope="row">{user.createdDate}</td>
        <td scope="row">{user.updatedDate}</td>
        <td scope="row">{user.createdPerson}</td>
        <td scope="row">{user.updatedPerson}</td>
        <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Options
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button
                type="button"
                className="btn btn-success w-100 dropdown-item"
                data-toggle="modal"
                data-target={`#${user.id}` + "on"}
              >
                Projects
              </button>
              <button
                type="button"
                className="btn btn-outline-success w-100 dropdown-item"
                data-toggle="modal"
                data-target={`#${user.id}` + "add"}
              >
                Add Project
              </button>
              <button
                type="button"
                className="btn btn-warning w-100 dropdown-item"
                data-toggle="modal"
                data-target={`#${user.id}`}
              >
                Detail
              </button>
              <DeleteUser user={user} />
            </div>
          </div>

          <OnUserProjectsModal user={user} />
          <AddOnUserProjectsModal user={user} />
          <UserDetailModal user={user} />
        </td>
      </tr>
    </>
  );
};

export default User;
