import { configureStore } from '@reduxjs/toolkit'
import  favSlice  from './Fav'

export const store = configureStore({
  reducer: {
    fav : favSlice,
  },
})
