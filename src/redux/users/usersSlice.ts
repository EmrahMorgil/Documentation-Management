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
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload;
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
export const { setUserLoggedIn } = usersSlice.actions;
