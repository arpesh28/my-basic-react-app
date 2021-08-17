import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: null,
  },
  reducers: {
    getmoviesuccess: (state, action) => {
      return {
        ...state,
        movie: action.payload,
      };
    },
  },
});

export const { getmoviesuccess } = movieSlice.actions;
export default movieSlice.reducer;
