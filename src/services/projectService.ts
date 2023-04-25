import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getProductsAsync: any = createAsyncThunk("products/getProductsAsync", async () => {
    const res = await axios.get("http://localhost:3004/projects");
    return res.data;
  }
);