import { createSlice } from "@reduxjs/toolkit";
import { getContentsAsync } from "../../services/contentService";

const initialState: any = {
  contents: [],
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
    builder.addCase(getContentsAsync.fulfilled, (state, action) => {
      state.contents = action.payload;
    });
  },
});

export default contentsSlice.reducer;
export const {addNewContent, setContents} = contentsSlice.actions;
