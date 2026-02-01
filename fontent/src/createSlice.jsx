import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    TOTALProducts: (state, action) => {
      state.value = action.payload
    },
    FileReader: (state, action) => {
      state.value = action.payload
    },
  },
})

// actions export
export const { TOTALProducts, FileReader } = counterSlice.actions

// reducer export
export default counterSlice.reducer
