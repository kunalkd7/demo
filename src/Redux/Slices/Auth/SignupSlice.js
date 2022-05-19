import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: "",
}

export const SignupSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const {  } = SignupSlice.actions

export default SignupSlice.reducer