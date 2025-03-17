import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator,ScrollView  } from 'react-native';
import loc from '../../assets/TechRepair.png';
import Home from '../../assets/Home.png';
import Like from '../../assets/Favourities.png';
import Category from '../../assets/Servies.png';
import Discount from '../../assets/Discounts.png';
import Location from '../../assets/Location.png';
import Service4a from '../../assets/Service4.1.png';
import Service4c from '../../assets/Service4.3.png';
import Service4d from '../../assets/Service4.4.png';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function Service4({route,navigation }) {
    const { serviceName } = route.params || {}; 
  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/Poppins-Regular.ttf'),
    Montserrat: require('../../assets/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderSr} />;
  }
const services = [
    { id: 1, name: 'Laptop Fix', icon: Service4a },
    { id: 2, name: 'TV Fix', icon: Service4c },
    { id: 3, name: 'Mobile Fix', icon: Service4d },
   
  ];


 useEffect(() => {
    if (serviceName) {
      const matchedService = services.find(service => service.name === serviceName);
      if (matchedService) {
        navigation.replace('Service1details', {
          id: matchedService.id,
          name: matchedService.name,
          icon: matchedService.icon,
        });
      }
    }
  }, [serviceName]);




  return (
    <View style={styles.containerAS}>
      <Image source={loc} style={styles.imageAS} />
      <Text style={styles.textAS}>Tech Repair Services</Text>


<ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.gridContainer}>
          {services.map((service) => (
            <View key={service.id} style={styles.serviceBox}
            
            
            onTouchEnd={() =>
                navigation.navigate('Service4details', {
                   id:service.id,
                  name: service.name,
                  icon: service.icon,
                })
              }>

            
            
            
            
            
              <Image source={service.icon} style={styles.serviceImage} />
              <Text style={styles.serviceText}>{service.name}</Text>
            </View>
          ))}
        </View>
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
     resizeMode: 'contain',
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
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  serviceBox: {
    width: width * 0.28,
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  serviceImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  serviceText: {
    fontFamily: 'Poppins',
    fontSize: width < 350 ? 12 : 14,
    fontWeight: '500',
    color: '#333333',
    marginTop: 5,
    textAlign: 'center',
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

export default Service4;
