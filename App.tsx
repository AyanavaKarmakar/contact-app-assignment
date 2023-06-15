import { ContactDetailsScreen, ContactListScreen } from './screens'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const queryClient = new QueryClient()
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ContactListScreen"
              component={ContactListScreen}
              options={{ title: '', headerShown: false }}
            />

            <Stack.Screen
              name="ContactDetailsScreen"
              component={ContactDetailsScreen}
              options={{ title: '', headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  )
}
