import React from "react";
import { user } from "../types/Type";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { updateUsers } from "../services/userService";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/users/usersSlice";


interface IUpdateUser{
  item: user,
  setUpdateControl: React.Dispatch<React.SetStateAction<boolean>>,
  updatedUser: user,
}


const UpdateUser: React.FC<IUpdateUser> = ({item,setUpdateControl,updatedUser}) => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const activeUser = useSelector((state: RootState) => state.users.activeUser.name);

  const updateUser = async (item: user) => {
    let nowDate = new Date().toString().substring(0, 24);
    const setUpdatedUser = { ...updatedUser };
    setUpdatedUser.updatedDate = nowDate;
    setUpdatedUser.updatedPerson = activeUser;

    const {
      id,
      name,
      surname,
      password,
      role,
      visibilityProjects,
      createdPerson,
      createdDate,
      updatedDate,
      updatedPerson,
    } = setUpdatedUser;

    setUpdateControl(false);
    updateUsers(item.id, setUpdatedUser);
    //api

    const newArr = users.map((users: user) => {
      if (users.id === item.id) {
        return {
          id,
          name,
          surname,
          password,
          role,
          visibilityProjects,
          createdPerson,
          createdDate,
          updatedDate,
          updatedPerson,
        };
      }
      return users;
    });
    dispatch(setUsers(newArr));
  };

  return (
    <button className="btn btn-warning" onClick={() => updateUser(item)}>
      Update
    </button>
  );
};

export default UpdateUser;
