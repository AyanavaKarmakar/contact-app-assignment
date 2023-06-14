import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SortTypeState {
  sortType: string
}

const initialState: SortTypeState = {
  sortType: 'asc',
}

export const counterSlice = createSlice({
  name: 'sortType',
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload
    },
  },
})

export const { changeSortType } = counterSlice.actions

export default counterSlice.reducer
