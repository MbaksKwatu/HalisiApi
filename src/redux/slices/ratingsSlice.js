import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ratings: {},
};

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    setRating: (state, action) => {
      const { id, score, comment } = action.payload;
      state.ratings[id] = { score, comment };
    },
  },
});

export const { setRating } = ratingsSlice.actions;

export default ratingsSlice.reducer;
