import { createSlice } from "@reduxjs/toolkit";

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
  },
  extraReducers: (builder) => {},
});

export default contentsSlice.reducer;
export const {addNewContent} = contentsSlice.actions;
