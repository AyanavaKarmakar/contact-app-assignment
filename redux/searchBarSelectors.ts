import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { IContact } from '../types/contact'

const selectSearchQuery = (state: RootState) =>
  state.searchBarReducer.searchQuery

const selectSortType = (state: RootState) => state.searchBarReducer.sortType

/**
 * @param contacts - array of contacts
 * @returns - array of contacts sorted and filtered by search query
 */
function makeSelectSortedAndFilteredContacts(contacts: IContact[] = []) {
  return createSelector(
    [selectSearchQuery, selectSortType],

    (searchQuery, sortType) => {
      return contacts
        .filter((contact) =>
          contact.firstname.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .sort((a, b) => {
          if (a.firstname === b.firstname) {
            return sortType === 'asc'
              ? a.surname.localeCompare(b.surname)
              : b.surname.localeCompare(a.surname)
          } else {
            return sortType === 'asc'
              ? a.firstname.localeCompare(b.firstname)
              : b.firstname.localeCompare(a.firstname)
          }
        })
    },
  )
}

export {
  selectSearchQuery,
  selectSortType,
  makeSelectSortedAndFilteredContacts,
}
