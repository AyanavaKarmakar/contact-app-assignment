import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
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

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.circleContainer}>
          <Image style={styles.picture} source={{ uri: picture }} />
        </View>

        <Text>{`${firstname} ${surname}`}</Text>
        <Text>{`Age: ${age}`}</Text>
        <Text>{`Gender: ${gender}`}</Text>
        <Text>{`Company: ${company}`}</Text>
        <Text>{`Email: ${email}`}</Text>
        <Text>{`Phone: ${phone}`}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ContactListScreen')}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
  },

  picture: {
    width: 200,
    height: 200,
  },

  circleContainer: {
    position: 'absolute',
    top: -100,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },

  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 100,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginBottom: 16,
    width: 350,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginBottom: 16,
    width: 350,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
