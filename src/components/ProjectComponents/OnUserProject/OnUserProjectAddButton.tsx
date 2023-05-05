import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { project, user, visibilityProjects } from "../../../types/Type";
import { setUsers } from "../../../redux/users/usersSlice";
import { updateUsers } from "../../../services/userService";
import { addVisibilityProjectsApi } from "../../../services/visibilityProjectServise";
import { addVisibilityProjects } from "../../../redux/projects/projectsSlice";
import { nanoid } from "nanoid";


interface IOnUserProjectAddButton{
  userId?: string;
  project: project;
}

const OnUserProjectAddButton: React.FC<IOnUserProjectAddButton> = ({ userId, project }) => {
  
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



    const {projectName, createdDate, updatedDate, createdPerson, updatedPerson, totalContent, visibilityRole } = project;
    const randomId = nanoid();
    const newItem = {id: randomId, projectName, createdDate, updatedDate, createdPerson, updatedPerson, totalContent, visibilityRole, visibility: true, userId, projectId: project.id};
    addVisibilityProjectsApi(newItem);
    dispatch(addVisibilityProjects(newItem));

    setTimeout(addProjectAmount, 100);
    alert("Proje kullanıcının üzerine başarıyla eklendi..")
  };

  return (
    <button
      className="btn btn-success"
      onClick={handleClick}
    >
      Add
    </button>
  );
};

export default OnUserProjectAddButton;
