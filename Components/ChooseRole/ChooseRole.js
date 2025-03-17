import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image ,TouchableOpacity,ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font'; 
const { width, height } = Dimensions.get('window');
const LogoC = require('../../assets/icon.png');

const ChooseRole = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins : require('../../assets/Poppins-Regular.ttf'),
    Montserrat : require('../../assets/Montserrat-Regular.ttf'),
    
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderR} />;  
  }

  return (
    <View style={styles.containerC}>
      <Image source={LogoC} style={styles.logoC} />
      <Text style={styles.textC}>FINDIGO</Text>
      <Text style={styles.textC1}>Register Now</Text>
      <Text style={styles.textC1}>Choose Your Role</Text>

      <TouchableOpacity
        style={styles.buttonC}
        onPress={() => navigation.navigate('CustomerSide')}
      >
        <Text style={styles.buttonTextC}>I am a Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonC1}
        onPress={() => navigation.navigate('BuisnessSide')}
      >
        <Text style={styles.buttonTextC1}>I am a Business Owner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerC: {
    flex: 1,
    backgroundColor: '#F1FFF3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  logoC: {
    width: width * 0.3,
    height: height * 0.15,
    resizeMode: 'contain',
    marginBottom: -height * 0.03,
  },
  textC: {
    fontSize: width * 0.12,
    fontWeight: '600',
    lineHeight: height * 0.15,
    fontFamily: 'Poppins', 
    color: '#00B1D0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4.86 },
    shadowOpacity: 0.25,
    shadowRadius: 4.86,
    textAlign: 'center',
    marginBottom: -height * 0.05,
  },
  textC1: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: width * 0.04,
    fontWeight: '400',
    lineHeight: height * 0.05,
    textAlign: 'center',
    marginBottom: -height * 0.01,
  },
  buttonC: {
    backgroundColor: '#00B1D0',
    borderRadius: 50,
    marginVertical: height * 0.015,
    paddingHorizontal: width * 0.1, 
    width: width * 0.75,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextC: {
    fontFamily: 'Montserrat', 
    fontSize: width * 0.05,
    fontWeight: '700',
    lineHeight: height * 0.06,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  buttonC1: {
    backgroundColor: '#CCF6D2',
    borderRadius: 50,
    marginVertical: height * 0.015,
     paddingHorizontal: width * 0.1, 
    width: width * 0.75,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextC1: {
    fontFamily: 'Montserrat', 
    fontSize: width * 0.045,
    fontWeight: '700',
    lineHeight: height * 0.06,
    textAlign: 'center',
    color: '#000000',
  },
   loaderR: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
  },
});

export default ChooseRole;
