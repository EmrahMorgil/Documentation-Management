import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { project } from "../types/Type";


export const getProjectsAsync: any = createAsyncThunk("products/getProductsAsync", async () => {
    const res = await axios.get("http://localhost:3004/projects");
    return res.data;
  }
);

export const addProjects = async(updatedProject: any)=>{
  await axios.post("http://localhost:3004/projects", updatedProject);
}

export const deleteProjects = async (id: string) => {
  await axios.delete(`http://localhost:3004/projects/${id}`);
};

export const updateProjects = async (id: string, setUpdatedProject: project) => {
  await axios.put(`http://localhost:3004/projects/${id}`, setUpdatedProject);
};

