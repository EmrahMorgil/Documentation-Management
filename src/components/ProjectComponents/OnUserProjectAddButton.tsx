import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { project, user, visibilityProjects } from "../../types/Type";
import { setUsers } from "../../redux/users/usersSlice";
import { updateUsers } from "../../services/userService";
import { addVisibilityProjectsApi } from "../../services/visibilityProjectServise";
import { addVisibilityProjects } from "../../redux/projects/projectsSlice";
import { nanoid } from "nanoid";

const OnUserProjectAddButton = ({ userId, item, addButtonControl, setAddButtonControl, setDynamicId }: { userId?: string, item: project, addButtonControl: any, setAddButtonControl: any, setDynamicId: any }) => {
  
  const users = useSelector((state: RootState)=>state.users.users);

  const dispatch = useDispatch();


  const addProjectAmount = async()=>{
    let updatedProjectAmount: user ={id:"", name: "", surname: "", password: "", role: 0, createdDate: "", updatedDate: "", createdPerson: "", updatedPerson: "", totalProject: 0};
    const newUserArray = users.map((user: user)=>{
      if(user.id===userId)
      {
        updatedProjectAmount = {...user};
        updatedProjectAmount.totalProject++;
        return updatedProjectAmount
      }
      return user;
    });

    await updateUsers(updatedProjectAmount.id, updatedProjectAmount);

    dispatch(setUsers(newUserArray));
  }

  const handleClick = () => {

    setAddButtonControl(true);
    const {projectName, createdDate, updatedDate, createdPerson, updatedPerson, totalContent, visibilityRole } = item;
    const randomId = nanoid();
    setDynamicId(randomId);
    const newItem = {id: randomId, projectName, createdDate, updatedDate, createdPerson, updatedPerson, totalContent, visibilityRole, visibility: true, userId, projectId: item.id};
    addVisibilityProjectsApi(newItem);
    dispatch(addVisibilityProjects(newItem));

    
    setTimeout(addProjectAmount, 100);
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
