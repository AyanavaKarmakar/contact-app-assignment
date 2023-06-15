import { View, Text, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'
import type {
  ContactDetailsScreenNavigationProp,
  ContactDetailsScreenRouteProp,
} from '../types/navigation'

interface Props {
  navigation: ContactDetailsScreenNavigationProp
}

export function ContactDetailsScreen({ navigation }: Props) {
  const { picture, age, firstname, surname, gender, company, email, phone } =
    useRoute<ContactDetailsScreenRouteProp>().params

  console.log(picture, age, firstname, surname, gender, company, email, phone)

  return (
    <View>
      <Text>Contact Details Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ContactListScreen')}
      />
    </View>
  )
}
