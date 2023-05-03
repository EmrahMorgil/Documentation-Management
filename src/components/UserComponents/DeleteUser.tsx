import React from "react";
import { deleteUsers } from "../../services/userService";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { user } from "../../types/Type";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/users/usersSlice";

interface Id{
  id: string;
}

const DeleteUser: React.FC<Id> = ({ id }) => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  const deleteUser = (id: string) => {
    deleteUsers(id);
    //api

    const newArr = users.filter((users: user) => {
      if (users.id !== id) {
        return users;
      }
    });
    dispatch(setUsers(newArr));
  };

  return (
    <button className="btn btn-danger" onClick={() => deleteUser(id)}>
      Delete
    </button>
  );
};

export default DeleteUser;
