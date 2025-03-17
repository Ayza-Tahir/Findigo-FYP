import { View, StyleSheet, Image, Text, Dimensions,ActivityIndicator } from 'react-native'; 
import Logo from '../../assets/icon.png'; 
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

function FindigoStart({navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Poppins: require('../../assets/Poppins-Regular.ttf'), 
      });
      setFontLoaded(true);
    };
    loadFonts();
    
    const timer = setTimeout(() => {
      navigation.navigate('ChooseRole'); 
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigation]);

  if (!fontLoaded) {
  return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderS} />;  
  }

  return (
    <View style={styles.containerS}>
      <Image 
        source={Logo} 
        style={styles.logo} 
      />
      <Text style={styles.text}>FINDIGO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerS: {
    flex: 1, 
    backgroundColor: '#00B1D0', 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  logo: {
    width: width * 0.30,  
    height: height * 0.20, 
    resizeMode: 'contain', 
  },
  text: {
    fontSize: width * 0.15, 
    fontWeight: '600',   
    lineHeight: height * 0.15,  
    fontFamily: 'Poppins', 
    color: '#FFFFFF', 
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4.86 }, 
    shadowOpacity: 0.25,   
    shadowRadius: 4.86,   
     marginTop: -height * 0.04,
  },
   loaderS: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
  },
});

export default FindigoStart;
