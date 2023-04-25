import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { user } from "../../types/Type";
import User from "./User";

const UsersList = () => {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <>
      {users.map((item: user, i: number) => (
        <User item={item} key={i} />
      ))}
    </>
  );
};

export default UsersList;
