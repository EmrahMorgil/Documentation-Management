import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUsers } from "../redux/users/usersSlice";
import { RootState } from "../redux/store";
import { user } from "../types/Type";
import UsersList from "../components/UsersList";

import AddModal from "../modals/AddModal";

const AddUser = () => {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <div>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "30px" }}
        >
          <div>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add User
            </button>

            <AddModal />
          </div>
          <Link to="/home">
            <button className="btn btn-danger">Back</button>
          </Link>
        </div>
        {users.map((item: user, i: number) => (
          <UsersList item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AddUser;
