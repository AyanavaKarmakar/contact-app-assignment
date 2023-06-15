import type { ContactListScreenNavigationProp } from '../types/navigation'
import { ContactList, SearchBar } from '../components'
import { View, StyleSheet } from 'react-native'

interface Props {
  navigation: ContactListScreenNavigationProp
}

export function ContactListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>

      <View style={styles.contactListContainer}>
        <ContactList navigation={navigation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 100,
  },

  searchContainer: {
    width: '100%',
  },

  contactListContainer: {
    width: '100%',
    marginVertical: 12,
  },
})
