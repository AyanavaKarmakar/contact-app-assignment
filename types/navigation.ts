import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RouteProp } from '@react-navigation/native'
import type { IContact } from './contact'

export type RootStackParamList = {
  ContactListScreen: undefined
  ContactDetailsScreen: IContact
}

export type ContactListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ContactListScreen'
>

export type ContactDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ContactDetailsScreen'
>

export type ContactDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ContactDetailsScreen'
>
