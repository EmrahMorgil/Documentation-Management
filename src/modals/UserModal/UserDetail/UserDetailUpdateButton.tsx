import React from "react";
import { IUserDetailUpdateButton, user } from "../../../types/Type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { updateUsers } from "../../../services/userService";
import { setUsers } from "../../../redux/users/usersSlice";



const UserDetailUpdateButton: React.FC<IUserDetailUpdateButton> = ({user,updatedUser,buttonActive,setButtonActive}) => {
  const dispatch = useDispatch();
  const activeUser = useSelector(
    (state: RootState) => state.users.activeUser.name
  );
  const users = useSelector((state: RootState) => state.users.users);

  const updateUser = async (updateUser: user) => {
    setButtonActive(true);
    let date = new Date();
    let nowDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const setUpdatedUser = { ...updatedUser };
    setUpdatedUser.updatedDate = nowDate;
    setUpdatedUser.updatedPerson = activeUser;
    setUpdatedUser.totalProject = updateUser.totalProject;

    const {
      id,
      name,
      surname,
      password,
      role,
      createdPerson,
      createdDate,
      updatedDate,
      updatedPerson,
    } = setUpdatedUser;

    updateUsers(updateUser.id, setUpdatedUser);
    //api

    const newArr = users.map((users: user) => {
      if (users.id === updateUser.id) {
        return {
          id,
          name,
          surname,
          password,
          role,
          createdPerson,
          createdDate,
          updatedDate,
          updatedPerson,
          totalProject: updateUser.totalProject,
        };
      }
      return users;
    });
    dispatch(setUsers(newArr));
  };

  return (
    <button
      type="button"
      className="btn btn-warning"
      data-dismiss="modal"
      onClick={() => updateUser(user)}
      disabled={buttonActive}
    >
      Update
    </button>
  );
};

export default UserDetailUpdateButton;
