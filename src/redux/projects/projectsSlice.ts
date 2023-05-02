import { createSlice } from "@reduxjs/toolkit";
import { getProjectsAsync } from "../../services/projectService";
import { getVisibilityProjectsAsync } from "../../services/visibilityProjectServise";

const initialState: any = {
  projects: [],
  visibilityProjects: [],
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
    },
    addVisibilityProjects: (state, action)=>{
      state.visibilityProjects.push(action.payload);
    },
    setVisibilityProjects: (state, action)=>{
      state.visibilityProjects = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProjectsAsync.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(getVisibilityProjectsAsync.fulfilled, (state, action)=>{
      state.visibilityProjects = action.payload;
    })
  },
});

export default projectsSlice.reducer;
export const { addNewProject, setProjects, addVisibilityProjects, setVisibilityProjects } = projectsSlice.actions;
