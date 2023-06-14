import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchBarState {
  sortType: 'asc' | 'desc'
  searchQuery: string
}

const initialState: SearchBarState = {
  sortType: 'asc',
  searchQuery: '',
}

export const searchBarSlice = createSlice({
  name: 'searchBarSlice',
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortType = action.payload
    },

    findConnection: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
})

export const { changeSortType, findConnection } = searchBarSlice.actions

export default searchBarSlice.reducer
