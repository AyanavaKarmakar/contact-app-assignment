import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SortTypeState {
  sortType: 'asc' | 'desc'
}

const initialState: SortTypeState = {
  sortType: 'asc',
}

export const counterSlice = createSlice({
  name: 'sortType',
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortType = action.payload
    },
  },
})

export const { changeSortType } = counterSlice.actions

export default counterSlice.reducer
