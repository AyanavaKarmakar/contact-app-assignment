import { configureStore } from '@reduxjs/toolkit'
import changeSortTypeReducer from './searchBar/searchBarSortTypeSlice'
import searchQueryReducer from './searchBar/searchBarFindConnectionSlice'

export const store = configureStore({
  reducer: {
    sortTypeReducer: changeSortTypeReducer,
    searchQueryReducer: searchQueryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
