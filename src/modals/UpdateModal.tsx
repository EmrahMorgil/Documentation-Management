import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { user } from "../types/Type";
import { updateUsers } from "../services/userService";
import { setUsers } from "../redux/users/usersSlice";

const UpdateModal = ({ item }: { item: any }) => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const activeUser = useSelector(
    (state: RootState) => state.users.activeUser.name
  );
  const [updatedUser, setUpdatedUser] = useState<user>({
    id: item.id,
    name: item.name,
    surname: item.surname,
    password: item.password,
    role: item.role,
    visibilityProjects: item.visibilityProjects,
    createdPerson: item.createdPerson,
    createdDate: item.createdDate,
    updatedDate: item.updatedDate,
    updatedPerson: item.updatedPerson,
  });

  const updateUser = async (item: user) => {
    let nowDate = new Date().toString().substring(0, 24);
    const setUpdatedUser = { ...updatedUser };
    setUpdatedUser.updatedDate = nowDate;
    setUpdatedUser.updatedPerson = activeUser;

    const {
      id,
      name,
      surname,
      password,
      role,
      visibilityProjects,
      createdPerson,
      createdDate,
      updatedDate,
      updatedPerson,
    } = setUpdatedUser;

    updateUsers(item.id, setUpdatedUser);
    //api

    const newArr = users.map((users: user) => {
      if (users.id === item.id) {
        return {
          id,
          name,
          surname,
          password,
          role,
          visibilityProjects,
          createdPerson,
          createdDate,
          updatedDate,
          updatedPerson,
        };
      }
      return users;
    });
    dispatch(setUsers(newArr));
  };

  const handleChange = (e: any) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="modal fade"
      id={item.id}
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
              <form style={{ width: "400px", textAlign: "center" }}>
                <h3>Update User</h3>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedUser.name}
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedUser.surname}
                    name="surname"
                    className="form-control"
                    placeholder="Surname"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedUser.password}
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={updatedUser.role}
                    name="role"
                    className="form-control"
                    placeholder="Role"
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
              type="button"
              className="btn btn-warning"
              data-dismiss="modal"
              onClick={() => updateUser(item)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
