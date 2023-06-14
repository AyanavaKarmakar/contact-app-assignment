import { configureStore } from '@reduxjs/toolkit'
import searchBarReducer from './SearchBarSlice'

export const store = configureStore({
  reducer: {
    searchBarReducer: searchBarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
