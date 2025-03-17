import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native';
import discount from '../../assets/discount.png';
import Home from '../../assets/Home.png';
import Like from '../../assets/Favourities.png';
import Category from '../../assets/Servies.png';
import Discount from '../../assets/Discounts.png';
import Location from '../../assets/Location.png';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function Discountss({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/Poppins-Regular.ttf'),
    Montserrat: require('../../assets/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderSr} />;
  }

  return (
    <View style={styles.containerAS}>
      <Image source={discount} style={styles.imageAS} />
      <Text style={styles.textAS}>Exclusive Discounts</Text>
      <View style={styles.footerContainerAS}>
        <View style={styles.footerIconContainer} onTouchEnd={() => navigation.navigate('Homes')}>
          <Image source={Home} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Home</Text>
        </View>
        <View style={styles.footerIconContainer} onTouchEnd={() => navigation.navigate('Likes')}>
          <Image source={Like} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Favourites</Text>
        </View>
        <View style={styles.footerIconContainer} onTouchEnd={() => navigation.navigate('Servicess')}>
          <Image source={Category} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Services</Text>
        </View>
        <View style={styles.footerIconContainer} onTouchEnd={() => navigation.navigate('Locationss')}>
          <Image source={Location} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Location</Text>
        </View>
        <View style={styles.footerIconContainer} onTouchEnd={() => navigation.navigate('Discountss')}>
          <Image source={Discount} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Discounts</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAS: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
    paddingTop: height * 0.08,
    paddingBottom: height * 0.1,
  },
  imageAS: {
    width: width * 0.35,
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10,
  },
  textAS: {
    fontFamily: 'Montserrat',
    fontSize: width < 350 ? 18 : width * 0.07,
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: 29.26,
    textAlign: 'center',
    color: '#00B1D0',
    backgroundColor: '#F1FFF3',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  footerContainerAS: {
    width: '100%',
    height: height * 0.1,
    backgroundColor: '#00B1D0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
  },
  footerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIconText: {
    fontFamily: 'Poppins',
    fontSize: width < 350 ? 10 : 12,
    fontStyle: 'italic',
    fontWeight: '300',
    lineHeight: 12,
    textAlign: 'center',
    color: '#000000',
    marginTop: 5,
  },
  footerIcon: {
    width: width < 350 ? 25 : 30,
    height: width < 350 ? 25 : 30,
  },
  loaderSr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
  },
});

export default Discountss;
