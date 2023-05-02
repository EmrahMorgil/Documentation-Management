import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { project, user, visibilityProjects } from "../../types/Type";
import { updateUsers } from "../../services/userService";
import { setUsers } from "../../redux/users/usersSlice";
import { setVisibilityProjects } from "../../redux/projects/projectsSlice";
import { deleteVisibilityProjects } from "../../services/visibilityProjectServise";

const OnUserProjectRemoveButton = ({userId,item,addButtonControl,setAddButtonControl, dynamicId}: {
  userId?: string;
  item: any;
  addButtonControl: any;
  setAddButtonControl: any;
  dynamicId: any;
}) => {
  const users = useSelector((state: RootState) => state.users.users);
  const visibilityProjects = useSelector((state:RootState)=>state.projects.visibilityProjects);
  const dispatch = useDispatch();

  const handleClick = () => {

    setAddButtonControl(false);
    
    const newArr = visibilityProjects.filter((item: visibilityProjects, i:number)=>{
      if(item.id!==dynamicId)
      {
        return item;
      }
    });
    dispatch(setVisibilityProjects(newArr));
    //api    
    deleteVisibilityProjects(dynamicId);
  };

  return (
    <button
      className="btn btn-danger"
      onClick={handleClick}
      disabled={!addButtonControl}
    >
      X
    </button>
  );
};

export default OnUserProjectRemoveButton;