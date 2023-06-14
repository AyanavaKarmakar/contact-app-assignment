import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SortTypeState {
  sortType: 'asc' | 'desc'
}

const initialState: SortTypeState = {
  sortType: 'asc',
}

export const searchBarSortTypeSlice = createSlice({
  name: 'sortType',
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortType = action.payload
    },
  },
})

export const { changeSortType } = searchBarSortTypeSlice.actions

export default searchBarSortTypeSlice.reducer
