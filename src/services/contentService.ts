import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { project } from "../types/Type";


export const addContents = async(updatedContent: any)=>{
    await axios.post("http://localhost:3004/contents", updatedContent);
  }