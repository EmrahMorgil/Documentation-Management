import React, { useState } from "react";
import { nanoid } from "nanoid";
import { addUsers } from "../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addNewUser } from "../../redux/users/usersSlice";
import {toast} from "react-toastify";

const AddUserModal: React.FC = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state: RootState) => state.users.activeUser);
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    surname: "",
    password: "",
    role: 0,
    totalProject: 0,
    createdDate: "2023",
    updatedDate: "2023",
    createdPerson: "emrah",
    updatedPerson: "emrah",
  });

  const handleClick = async () => {
    let date = new Date();
    let nowDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

    const updatedUser = { ...newUser };
    updatedUser.id = "id"+nanoid();
    updatedUser.createdDate = nowDate;
    updatedUser.updatedDate = nowDate;
    updatedUser.createdPerson = activeUser.name;
    updatedUser.updatedPerson = activeUser.name;

    // debugger;
    addUsers(updatedUser);
    //api

    dispatch(addNewUser(updatedUser));
    setNewUser({
      id: "",
      name: "",
      surname: "",
      password: "",
      role: 0,
      totalProject: 0,
      createdDate: "",
      updatedDate: "",
      createdPerson: "",
      updatedPerson: "",
    });
    toast.success("user successfully added");
  };

  const handleChange = (e: any) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
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
                marginTop: "150px",
              }}
            >
              <form>
                <div style={{marginBottom: "50px", width: "400px", textAlign: "center"}}>
                  <h3>Add User</h3>
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="exampleInput">Name</label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={handleChange}
                    name="name"
                    className="form-control"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label htmlFor="exampleInput">Surname</label>
                  <input
                    type="text"
                    value={newUser.surname}
                    onChange={handleChange}
                    name="surname"
                    className="form-control"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={handleChange}
                    name="password"
                    className="form-control"
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
              type="button"
              className="btn btn-success"
              data-dismiss="modal"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
