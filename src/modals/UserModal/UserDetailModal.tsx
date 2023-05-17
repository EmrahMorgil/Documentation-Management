import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { IUserProp, user } from "../../types/Type";
import { updateUsers } from "../../services/userService";
import { setUsers } from "../../redux/users/usersSlice";

const UserDetailModal: React.FC<IUserProp> = ({ user }) => {
  const [inputValue, setInputValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const activeUser = useSelector((state: RootState) => state.users.activeUser.name);
  const [updateButtonActive, setUpdateButtonActive] = useState(true);
  const [updatedUser, setUpdatedUser] = useState<user>({
    id: user.id,
    name: user.name,
    surname: user.surname,
    password: user.password,
    role: user.role,
    createdPerson: user.createdPerson,
    createdDate: user.createdDate,
    updatedDate: user.updatedDate,
    updatedPerson: user.updatedPerson,
    totalProject: user.totalProject,
  });

  const updateUser = async (updateUser: user) => {
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

  const undoUser = () => {
    setUpdatedUser({
      id: user.id,
      name: user.name,
      surname: user.surname,
      password: user.password,
      role: user.role,
      createdPerson: user.createdPerson,
      createdDate: user.createdDate,
      updatedDate: user.updatedDate,
      updatedPerson: user.updatedPerson,
      totalProject: user.totalProject,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    if (e.target.name === "role") {
      setUpdatedUser({ ...updatedUser, role: Number(e.target.value) });
    }


    
    
  };

  useEffect(() => {
    if(JSON.stringify(updatedUser)==JSON.stringify(user))
    {
      setUpdateButtonActive(true);
    }else{
      setUpdateButtonActive(false);
    }

  }, [updatedUser])
  
  

  return (
    <div
      className="modal fade"
      id={user.id}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <form>
                <div
                  style={{
                    marginBottom: "25px",
                    width: "400px",
                    textAlign: "center",
                  }}
                >
                  <h3>Update User</h3>
                </div>
                <div className="form-outline mb-4">
                  <label htmlFor="exampleInput">Name</label>
                  <input
                    type="text"
                    value={updatedUser.name} 
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="exampleInput">Surname</label>
                  <input
                    type="text"
                    value={updatedUser.surname}
                    name="surname"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="text"
                    value={updatedUser.password}
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="exampleInputRole1">Role</label>
                  <input
                    type="text"
                    value={updatedUser.role}
                    name="role"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
            disabled={isDisabled}
              type="button"
              className="btn btn-primary"
              onClick={undoUser}
            >
              Undo Changes
            </button>
            <button
              type="button"
              className="btn btn-warning"
              data-dismiss="modal"
              onClick={() => updateUser(user)}
              disabled={updateButtonActive}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
