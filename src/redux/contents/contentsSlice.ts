import { createSlice } from "@reduxjs/toolkit";
import { getContentsAsync } from "../../services/contentService";

const initialState: any = {
  contents: [],
  isLoading: "loading",
};

export const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {
    addNewContent: (state, action)=>{
        state.contents.push(action.payload);
      },
      setContents: (state, action)=>{
        state.contents = action.payload;
      }
  },
  extraReducers: (builder) => {
    builder.addCase(getContentsAsync.pending, (state, action)=>{
      state.isLoading = "loading";
    });
    builder.addCase(getContentsAsync.fulfilled, (state, action) => {
      state.contents = action.payload;
      state.isLoading = "fulfilled";
    });
  },
});

export default contentsSlice.reducer;
export const {addNewContent, setContents} = contentsSlice.actions;
