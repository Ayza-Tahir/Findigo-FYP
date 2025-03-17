import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, ActivityIndicator,TouchableOpacity } from 'react-native';
import AvailableServices from '../../assets/Availableservices.png';
import Home from '../../assets/Home.png';
import Like from '../../assets/Favourities.png';
import Category from '../../assets/Servies.png';
import Discount from '../../assets/Discounts.png';
import Location from '../../assets/Location.png';
import AutoRepair from '../../assets/AutoRepair.png';
import FSalon from '../../assets/FemaleSalon.png';
import HealthCare from '../../assets/HealthCare.png';
import HouseHold from '../../assets/HouseHold.png';
import Maid from '../../assets/Maid.png';
import MSalon from '../../assets/MaleSalon.png';
import TechRepair from '../../assets/TechRepair.png';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function Servicess ({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/Poppins-Regular.ttf'),
    Montserrat: require('../../assets/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderSr} />;
  }

  const services = [
    { id: 1, name: 'Auto Services & Maintenance', icon: AutoRepair, navigateTo: 'Service1' },
    { id: 2, name: 'Household Repair', icon: HouseHold, navigateTo: 'Service2' },
    { id: 3, name: "Women's Salon", icon: FSalon, navigateTo: 'Service3' },
     { id: 4, name: 'Tech Repair', icon: TechRepair, navigateTo: 'Service4' },
    { id: 5, name: 'Health Care', icon: HealthCare, navigateTo: 'Service5' },
    { id: 6, name: 'Maid & Cleaning', icon: Maid,  navigateTo: 'Service6'},
    { id: 7, name: "Men's Salon", icon: MSalon, navigateTo: 'Service7' },
    
  ];

  return (
    <View style={styles.containerAS}>
      <Image source={AvailableServices} style={styles.imageAS} />
      <Text style={styles.textAS}>Available Services</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}
       showsVerticalScrollIndicator={false}>
       {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceBox}
            onPress={() => navigation.navigate(service.navigateTo)} // Navigate to specific page
          >
            <Image source={service.icon} style={styles.serviceImage} />
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  scrollContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  serviceBox: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start', 
  width: 300,
  height: 90,  
  backgroundColor: '#FFFFFF',
  borderRadius: 4.14,
  paddingHorizontal: 15, 
  marginBottom: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
   borderWidth: 0.91, 
  borderColor: '#00B1D0', 
  borderStyle: 'solid', 
},
serviceImage: {
  width: 80, 
  height: 80, 
  resizeMode: 'contain', 
  marginRight: 40, 
},
serviceText: {
  fontFamily: 'Poppins',
  fontSize: 16,
  color: '#00B1D0',
  textAlign: 'left',
  flexShrink: 1, 
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

export default Servicess;
