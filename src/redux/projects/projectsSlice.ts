import { createSlice } from "@reduxjs/toolkit";
import { getProductsAsync } from "../../services/projectService";

const initialState: any = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addNewProject: (state, action)=>{
      state.projects.push(action.payload);
    },
    setProjects: (state, action)=>{
      state.projects = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.projects = action.payload;
      console.log(state.projects);
      
    });
  },
});

export default projectsSlice.reducer;
export const { addNewProject, setProjects } = projectsSlice.actions;
