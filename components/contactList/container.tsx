import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { Card } from './card'
import type { IContact } from '../../types/contact'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

async function fetchContacts(): Promise<IContact[]> {
  const response = await fetch(
    'https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17',

    {
      method: 'GET',
    },
  )

  const data = await response.json()

  return data as IContact[]
}

export function Container() {
  const [searchQuery, sortType] = useSelector((state: RootState) => [
    state.searchBarReducer.searchQuery,
    state.searchBarReducer.sortType,
  ])

  const {
    data: contactList,
    isLoading,
    isError,
  } = useQuery<IContact[], Error>({
    queryKey: ['fetchContacts'],
    queryFn: fetchContacts,
    enabled: true,
  })

  /**
   * @param contacts contacts to be sorted & filtered
   * @returns sorted & filtered contacts
   */
  function sortedAndFilteredContacts(contacts: IContact[]): IContact[] {
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
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error occurred while fetching contacts!
        </Text>
      </View>
    )
  }

  return (
    <ScrollView>
      {sortedAndFilteredContacts(contactList).map((contact: IContact) => (
        <Card key={contact.index} {...contact} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
})
