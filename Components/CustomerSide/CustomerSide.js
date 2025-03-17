import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions,ActivityIndicator } from 'react-native';  // Import Dimensions
import LogoCus from '../../assets/icon.png';  
import BackArrow from '../../assets/arrow.png';
const { width, height } = Dimensions.get('window'); 
import { useFonts } from 'expo-font'; 

const CustomerSide = ({ navigation }) => {
     const [fontsLoaded] = useFonts({
    Poppins : require('../../assets/Poppins-Regular.ttf'),
    Montserrat : require('../../assets/Montserrat-Regular.ttf'),
    
  });

  if (!fontsLoaded) {
   return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderC} />;  
  }
  return (
    <View style={styles.containerCus}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('ChooseRole')}  
      >
        <Image source={BackArrow} style={styles.arrowImage} />
      </TouchableOpacity>

      <Image 
        source={LogoCus} 
        style={styles.logoCus} 
      />
      <Text style={styles.textCus}>FINDIGO</Text>
      <Text style={styles.textCus1}>Your Gateway to Local Services</Text>
      
      <TouchableOpacity
        style={styles.buttonCus}
        onPress={() => navigation.navigate('CustomerLogin')}  
      >
        <Text style={styles.buttonTextCus}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.buttonCus1}
        onPress={() => navigation.navigate('CustomerSignUp')}  
      >
        <Text style={styles.buttonTextCus1}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCus: {
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
  logoCus: {
    width: width * 0.3,  
    height: width * 0.3,
    resizeMode: 'contain', 
  },
  textCus: {
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
  textCus1: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontSize: width * 0.04, 
    fontWeight: '400',
    lineHeight: width * 0.06,
    textAlign: 'center',
    marginBottom: 10, 
  },
  buttonCus: {
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
  buttonTextCus: {
    fontFamily: 'Montserrat', 
    fontSize: width * 0.05,  
    fontWeight: '700',       
    lineHeight: width * 0.07,        
    textAlign: 'left',       
    textDecorationStyle: 'solid', 
    color: '#FFFFFF',        
  },
  buttonCus1: {
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
  buttonTextCus1: {
    fontFamily: 'Montserrat',
    fontSize: width * 0.05,
    fontWeight: '700',
    lineHeight: width * 0.07,
    textAlign: 'left',
    textDecorationStyle: 'solid',
    color: '#000000',
  },
   loaderC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
  },
});

export default CustomerSide;
