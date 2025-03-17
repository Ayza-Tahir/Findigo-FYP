import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

function BusinessSignUp() {
  const navigation = useNavigation(); // Access navigation prop

  // Function to handle navigation
  const navigateToServices = () => {
    navigation.navigate('Homes'); // Navigate to the 'Services' page
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToServices} activeOpacity={0.7}>
        <Text style={styles.text}>Welcome to the Business SignUp page!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#00B1D0',
    textAlign: 'center',
  },
});

export default BusinessSignUp;
