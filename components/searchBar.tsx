import { useReducer } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

export function SearchBar() {
  const [sortOption, changeSortOption] = useReducer(
    (state: 'asc' | 'desc') => (state === 'asc' ? 'desc' : 'asc'),
    'asc',
  )

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <AntDesign
          name="search1"
          size={22}
          color="#999"
          style={styles.searchIcon}
        />

        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#000000"
        />

        <FontAwesome
          name={`sort-amount-${sortOption}`}
          onPress={changeSortOption}
          size={20}
          color="#000"
          style={styles.sortIcon}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },

  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 1,
  },

  searchIcon: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#f0f0f0',
    color: '#424242',
    fontSize: 18,
  },

  sortIcon: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
})
