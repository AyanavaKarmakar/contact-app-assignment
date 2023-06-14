import { StyleSheet, View } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ContactList, SearchBar } from './components'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const queryClient = new QueryClient()

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <SearchBar />
          </View>

          <View style={styles.contactListContainer}>
            <ContactList />
          </View>
        </View>
      </QueryClientProvider>
    </Provider>
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
