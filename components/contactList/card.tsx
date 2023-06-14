import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export function Card() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'http://placehold.it/32x32' }}
        style={styles.image}
      />

      <View style={styles.details}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.companyName}>Company Name</Text>
        <Text style={styles.contactEmail}>+1-982-496-2907</Text>
      </View>
    </View>
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

  contactEmail: {
    fontSize: 16,
    color: '#666666',
  },
})
