import type { ContactDetailsScreenNavigationProp } from '../types/navigation'
import { View, Text, Button } from 'react-native'

interface Props {
  navigation: ContactDetailsScreenNavigationProp
}

export function ContactDetailsScreen({ navigation }: Props) {
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
