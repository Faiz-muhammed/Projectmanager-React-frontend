import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
  name: "team",
  initialState: {
    value: false,
  },
  reducers: {
    invite_Team: (state, action) => {
      state.value = action.payload.team;
    },
  },
});

export const { invite_Team } = teamSlice.actions;

export default teamSlice.reducer;
