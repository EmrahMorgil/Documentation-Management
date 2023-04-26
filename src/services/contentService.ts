import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { project } from "../types/Type";



export const getContentsAsync: any = createAsyncThunk("contents/getContentsAsync", async (id) => {
  const res = await axios.get(`http://localhost:3004/projects/${id}/contents`);
  return res.data;
}
);

export const addContents = async(updatedContent: any)=>{
    await axios.post("http://localhost:3004/contents", updatedContent);
  }