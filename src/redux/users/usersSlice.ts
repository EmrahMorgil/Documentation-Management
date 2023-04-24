import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAsync: any = createAsyncThunk("users/getUsersAsync",async () => {
    const res = await axios.get("http://localhost:3004/users");
    return res.data;
  }
);

const initialState: any = {
  users: [],
  userLoggedIn: false,
  activeUser: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload;
    },
    setAdminLoggedIn: (state, action) => {
      state.adminLoggedIn = action.payload;
    },
    setActiveUser: (state, action) =>{
      state.activeUser = action.payload;
    },
    setUsers: (state, action)=>{
      state.users = action.payload;
    },
    addUsers: (state, action)=>{
      state.users.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
export const { setUserLoggedIn, setAdminLoggedIn, setActiveUser, setUsers, addUsers } = usersSlice.actions;
