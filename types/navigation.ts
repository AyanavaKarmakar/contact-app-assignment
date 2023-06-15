import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  ContactListScreen: undefined
  ContactDetailsScreen: undefined
}

export type ContactListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ContactListScreen'
>

export type ContactDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ContactDetailsScreen'
>
