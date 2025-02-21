import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const productsSllice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: function (state, actions) {
      state.value.push(actions.payload);
    },
    deletee: function (state, actions) {
      state.value = state.value.filter((item, index) => {
        return index != actions.payload;
      });
    },
  },
});

export const {add, deletee} = productsSllice.actions;
export default productsSllice.reducer;