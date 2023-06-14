import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FindConnectionState {
  searchQuery: string
}

const initialState: FindConnectionState = {
  searchQuery: '',
}

export const searchBarFindConnectionSlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    findConnection: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
})

export const { findConnection } = searchBarFindConnectionSlice.actions

export default searchBarFindConnectionSlice.reducer
