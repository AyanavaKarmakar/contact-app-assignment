import { configureStore } from '@reduxjs/toolkit'
import changeSortTypeReducer from './searchBar/searchBarSortTypeSlice'

export const store = configureStore({
  reducer: {
    sortTypeReducer: changeSortTypeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
