import { ScrollView, StyleSheet, Text, View } from 'react-native'
import type { ContactListScreenNavigationProp } from '../../types/navigation'
import type { IContact } from '../../types/contact'
import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { Card } from './card'
import { makeSelectSortedAndFilteredContacts } from '../../redux/searchBarSelectors'

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

interface Props {
  navigation: ContactListScreenNavigationProp
}

export function Container({ navigation }: Props) {
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
   * memoized selector to sort and filter contacts based on the search text & sort order
   */
  const contactsSelector = makeSelectSortedAndFilteredContacts(contactList)
  const sortedAndFilteredContacts = useSelector(contactsSelector)

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
      {sortedAndFilteredContacts.map((contact: IContact) => (
        <Card key={contact.index} {...contact} navigation={navigation} />
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
