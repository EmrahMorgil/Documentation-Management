import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersAsync: any = createAsyncThunk("users/getUsersAsync",async () => {
    const res = await axios.get("http://localhost:3004/users");
    return res.data;
  }
);