import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import type { ContactListScreenNavigationProp } from '../../types/navigation'
import type { IContact } from '../../types/contact'

interface Props extends IContact {
  navigation: ContactListScreenNavigationProp
}

export function Card(props: Props) {
  const { navigation, picture, firstname, surname, company, email, phone } =
    props

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ContactDetailsScreen', props)}
    >
      <View style={styles.container}>
        <Image source={{ uri: picture }} style={styles.image} />

        <View style={styles.details}>
          <Text style={styles.name}>{`${firstname} ${surname}`}</Text>
          <Text style={styles.companyName}>{company}</Text>
          <Text style={styles.contact}>{phone}</Text>
          <Text style={styles.contact}>{email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  details: {
    marginLeft: 25,
    marginRight: 'auto',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  companyName: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 2,
  },

  contact: {
    fontSize: 16,
    color: '#666666',
  },
})
