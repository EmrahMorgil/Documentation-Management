import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { user } from "../../types/Type";
import User from "./User";

const UsersList: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name </th>
            <th scope="col">Surname</th>
            <th scope="col">Password </th>
            <th scope="col">Role</th>
            <th scope="col">Projects</th>
            <th scope="col">Created Date</th>
            <th scope="col">Updated Date</th>
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: user, i: number) => (
            <User user={user} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
