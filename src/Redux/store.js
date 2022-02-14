import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./team/teamSlice";

export default configureStore({
  reducer: {
    team: teamReducer,
  },
});
