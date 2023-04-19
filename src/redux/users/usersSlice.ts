import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
//   users: [],
//   userLoggedIn: false,
//   registerControl: false,
//   welcomeUser: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default usersSlice.reducer;
