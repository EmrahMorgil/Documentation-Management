import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { project, user } from "../../types/Type";
import { updateUsers } from "../../services/userService";
import { setUsers } from "../../redux/users/usersSlice";

const OnUserProjectRemoveButton = ({
  userId,
  item,
  addButtonControl,
  setAddButtonControl,
}: {
  userId: string;
  item: any;
  addButtonControl: any;
  setAddButtonControl: any;
}) => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  const handleClick = (userId: string) => {
    setAddButtonControl(false);
    const newArr = users.map((user: user) => {
      if (user.id === userId) {
        const newUser = { ...user };
        const newArray = user.visibilityProjects.filter((project: project) => {
          if (project !== item) {
            return project;
          }
        });
        newUser.visibilityProjects = newArray;
        updateUsers(userId, newUser);
        //api
        return newUser;
      }
      return user;
    });
    dispatch(setUsers(newArr));
  };

  return (
    <button
      className="btn btn-danger"
      onClick={() => handleClick(userId)}
      disabled={!addButtonControl}
    >
      X
    </button>
  );
};

export default OnUserProjectRemoveButton;
