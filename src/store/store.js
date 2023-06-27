import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "../store/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});
