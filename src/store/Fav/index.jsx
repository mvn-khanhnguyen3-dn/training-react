import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const favSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggle:(state,value) =>{
      const index = state.value.indexOf(value.payload);
      if(index !== -1){
        state.value.splice(index,1)
      }
      else{
        state.value.push(value.payload)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = favSlice.actions

export default favSlice.reducer
