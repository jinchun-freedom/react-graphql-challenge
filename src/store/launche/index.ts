// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";
import { ListType } from "definition";

const currentType: ListType = ListType.Past;
export const LauncheSlice = createSlice({
  name: "launche",
  initialState: {
    currentType,
  },
  reducers: {
    handleChangeType: (state, action) => {
      state.currentType = action.payload;
    },
  },
});

export const { handleChangeType } = LauncheSlice.actions;
export default LauncheSlice.reducer;
