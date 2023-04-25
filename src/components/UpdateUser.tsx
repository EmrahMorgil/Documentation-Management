import React, {useState} from "react";
import { user } from "../types/Type";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { updateUsers } from "../services/userService";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/users/usersSlice";
import { IUpdateUser } from "../types/Type";


const UpdateUser: React.FC<IUpdateUser> = ({item,setUpdateControl}) => {

  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const activeUser = useSelector((state: RootState) => state.users.activeUser.name);
  const [updatedUser, setUpdatedUser] = useState<user>({id: item.id, name: item.name, surname: item.surname, password: item.password, role: item.role, visibilityProjects: item.visibilityProjects, createdPerson: item.createdPerson, createdDate: item.createdDate, updatedDate: item.updatedDate, updatedPerson: item.updatedPerson});


  const updateUser = async (item: user) => {
    let nowDate = new Date().toString().substring(0, 24);
    const setUpdatedUser = { ...updatedUser };
    setUpdatedUser.updatedDate = nowDate;
    setUpdatedUser.updatedPerson = activeUser;

    const {id,name,surname,password,role,visibilityProjects,createdPerson,createdDate,updatedDate,updatedPerson} = setUpdatedUser;

    setUpdateControl(false);
    updateUsers(item.id, setUpdatedUser);
    //api

    const newArr = users.map((users: user) => {
      if (users.id === item.id) {
        return {id,name,surname,password,role,visibilityProjects,createdPerson,createdDate,updatedDate,updatedPerson};
      }
      return users;
    });
    dispatch(setUsers(newArr));
  };

  const handleChange = (e: any) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  return (
      <>
        <input onChange={handleChange} placeholder="name" name="name" value={updatedUser.name}/>
        <input onChange={handleChange} placeholder="surname" name="surname" value={updatedUser.surname}/>
        <input onChange={handleChange} placeholder="password" name="password" value={updatedUser.password}/>
        <input onChange={handleChange} placeholder="role" name="role" value={updatedUser.role}/>
        <input onChange={handleChange} placeholder="project" name="project" value={updatedUser.visibilityProjects}/>
        <button className="btn btn-warning" onClick={() => updateUser(item)}>
          Update
        </button>
      </>
  );
};

export default UpdateUser;
