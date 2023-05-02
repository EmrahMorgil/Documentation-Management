import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { user } from "../../types/Type";
import { setUsers } from "../../redux/users/usersSlice";
import { updateUsers } from "../../services/userService";

const OnUserProjectAddButton = ({ userId, item, addButtonControl, setAddButtonControl }: { userId: string, item: any, addButtonControl: any, setAddButtonControl: any }) => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  const handleClick = () => {
    setAddButtonControl(true);

    const newArr = users.map((users: user) => {
      if (users.id === userId) {
        const newUser = { ...users };
        newUser.visibilityProjects = [...users.visibilityProjects, item];
        updateUsers(userId, newUser);
        //api
        return newUser;
      }
      return users;
    });

    dispatch(setUsers(newArr));
  };

  return (
    <button
      className="btn btn-success"
      onClick={handleClick}
      disabled={addButtonControl}
    >
      Add
    </button>
  );
};

export default OnUserProjectAddButton;
