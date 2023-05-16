import React from "react";
import { deleteUsers } from "../../services/userService";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { IUserProp, user } from "../../types/Type";
import { useDispatch } from "react-redux";
import { setUsers } from "../../redux/users/usersSlice";


const DeleteUser: React.FC<IUserProp> = ({ user }) => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  const deleteUser = (user: user) => {
    deleteUsers(user.id);
    //api

    const newArr = users.filter((users: user) => {
      if (users.id !== user.id) {
        return users;
      }
    });
    dispatch(setUsers(newArr));
  };

  return (
    <button className="btn btn-danger w-100 dropdown-item" onClick={() => deleteUser(user)}>
      Delete
    </button>
  );
};

export default DeleteUser;
