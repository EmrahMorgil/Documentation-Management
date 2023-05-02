import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { project, visibilityProjects } from "../types/Type";


export const getVisibilityProjectsAsync: any = createAsyncThunk("visibilityProject/getVisibilityProjectAsync", async () => {
    const res = await axios.get("http://localhost:3004/visibilityProjects");
    return res.data;
  }
);

// export const addVisibilityProjects = async(updatedProject: any)=>{
//   await axios.post("http://localhost:3004/projects", updatedProject);
// }

// export const deleteVisibilityProjects = async (id: string) => {
//   await axios.delete(`http://localhost:3004/projects/${id}`);
// };

export const addVisibilityProjectsApi = async(addVisibilityProject: any) => {
  await axios.post("http://localhost:3004/visibilityProjects", addVisibilityProject);
};

export const deleteVisibilityProjects = async(id: string) => {
  await axios.delete(`http://localhost:3004/visibilityProjects/${id}`);
};

