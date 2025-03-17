import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';  
import { useFonts } from 'expo-font'; 
import LogoB from '../../assets/icon.png';  
import BackArrow from '../../assets/arrow.png';  

const { width, height } = Dimensions.get('window'); 

function BuisnessSide({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/Poppins-Regular.ttf'),
    Montserrat: require('../../assets/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loader} />;  
  }

  return (
    <View style={styles.containerB}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('ChooseRole')}  
      >
        <Image source={BackArrow} style={styles.arrowImage} />
      </TouchableOpacity>

      <Image source={LogoB} style={styles.logoB} />
      <Text style={styles.textB}>FINDIGO</Text>
      <Text style={styles.textB1}>Your Gateway to Local Customers</Text>

      <TouchableOpacity
        style={styles.buttonB}
        onPress={() => navigation.navigate('BusinessLogin')}  
      >
        <Text style={styles.buttonTextB}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonB1}
        onPress={() => navigation.navigate('BusinessSignUp')}  
      >
        <Text style={styles.buttonTextB1}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerB: {
    flex: 1,
    backgroundColor: '#F1FFF3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.05,
    width: width * 0.12,
    height: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#1E1E1E',
  },
  arrowImage: {
    width: width * 0.04,
    height: height * 0.04,
  },
  logoB: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain',
  },
  textB: {
    fontSize: width * 0.14,
    fontWeight: '600',
    lineHeight: width * 0.2,
    fontFamily: 'Poppins',
    color: '#00B1D0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4.86 },
    shadowOpacity: 0.25,
    shadowRadius: 4.86,
  },
  textB1: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: width * 0.04,
    fontWeight: '400',
    lineHeight: width * 0.06,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonB: {
    backgroundColor: '#00B1D0',
    borderRadius: 50,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    marginVertical: height * 0.02,
    width: width * 0.75,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextB: {
    fontFamily: 'Montserrat',
    fontSize: width * 0.05,
    fontWeight: '700',
    lineHeight: width * 0.07,
    textAlign: 'left',
    textDecorationStyle: 'solid',
    color: '#FFFFFF',
  },
  buttonB1: {
    backgroundColor: '#CCF6D2',
    borderRadius: 50,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    marginVertical: height * 0.02,
    width: width * 0.75,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextB1: {
    fontFamily: 'Montserrat',
    fontSize: width * 0.05,
    fontWeight: '700',
    lineHeight: width * 0.07,
    textAlign: 'left',
    textDecorationStyle: 'solid',
    color: '#000000',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
  },
});

export default BuisnessSide;
