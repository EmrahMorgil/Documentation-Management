import React from "react";
import { project, user } from "../../types/Type";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/users/usersSlice";
import { updateUsers } from "../../services/userService";

const RemoveOnUserProject = ({ item, userId }: { item: project, userId: string }) => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  const handleClick = (userId: string) => {
        // console.log(userId);
        const newArr = users.map((user: user)=>{
            if(user.id===userId)
            {
                const newUser = {...user};
                const newArray = user.visibilityProjects.filter((project: project)=>{
                    if(project!==item)
                    {
                        return project;
                    }
                })
                newUser.visibilityProjects = newArray;
                updateUsers(userId,newUser);
                //api
                return newUser;
            }
            return user;
        })
        dispatch(setUsers(newArr));
        
  };
  return (
    <div className="col">
      <button className="btn btn-danger" onClick={()=>handleClick(userId)}>
        X
      </button>
    </div>
  );
};

export default RemoveOnUserProject;
