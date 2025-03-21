
import React, { useState } from 'react';
import { View,  FlatList,Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Home from '../../assets/Home.png';
import Like from '../../assets/Favourities.png';
import Category from '../../assets/Servies.png';
import Discount from '../../assets/Discounts.png';
import Location from '../../assets/Location.png';
import verified from '../../assets/verified.png';
import mysave from '../../assets/mysave.png';
import mysaveFilled from '../../assets/filledheart.png';
import starFilled from '../../assets/starFilled.png';
import starUnfilled from '../../assets/starUnfilled.png';
import viewProfile from '../../assets/profileViewArrow.png';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function Service1details({ route, navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/Poppins-Regular.ttf'),
    Montserrat: require('../../assets/Montserrat-Regular.ttf'),
  });

  const [selectedDistance, setSelectedDistance] = useState('5km');
  const [savedServices, setSavedServices] = useState({}); 

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderSr} />;
  }

  const { id, name, icon } = route.params;
  const allServices = {
 1: {
    '5km': [
      { name: 'Harry\'s Garage', work: 'Car Repair', distance: '1.05km', review: '2.0' },
       
    ],
    '10km': [
      { name: 'Freddie\'s Fix', work: 'Car Repair', distance: '7km', review: '3.0' },
    ],
    '15km': [
      { name: 'Jade\'s Auto Shop', work: 'Car Repair', distance: '12km', review: '1.0' },
    ],
    '20km': [
      { name: 'Will\'s Auto Works', work: 'Car Repair', distance: '17km', review: '4.0' },
    ],
  },
  2: {
    '5km': [{ name: 'Harry\'s AC Service', work: 'Car AC Maintenance', distance: '1.05km', review: '2.0' }],
    '10km': [{ name: 'Justin\'s AC Repairs', work: 'Car AC Maintenance', distance: '6km', review: '3.0' }],
    '15km': [{ name: 'AC Fix by Alan', work: 'Car AC Maintenance', distance: '13km', review: '4.0' }],
    '20km': [{ name: 'Cooling Solutions', work: 'Car AC Maintenance', distance: '16km', review: '1.0' }],
  },
  3: {
    '5km': [{ name: 'Jake\'s Tire Service', work: 'Tire Repair', distance: '2.5km', review: '3.0' }],
    '10km': [{ name: 'Tommy Tire Fix', work: 'Tire Repair', distance: '8km', review: '4.0' }],
    '15km': [{ name: 'Tire Care by Lisa', work: 'Tire Repair', distance: '14km', review: '2.0' }],
    '20km': [{ name: 'Mark\'s Tire Repair', work: 'Tire Repair', distance: '18km', review: '5.0' }],
  },
  4: {
    '5km': [{ name: 'Mona\'s Paint & Body', work: 'Paint & Body Work', distance: '3km', review: '4.0' }],
    '10km': [{ name: 'Chris Body Shop', work: 'Paint & Body Work', distance: '6km', review: '3.0' }],
    '15km': [{ name: 'Sharon\'s Auto Paint', work: 'Paint & Body Work', distance: '12km', review: '5.0' }],
    '20km': [{ name: 'Gary\'s Body Works', work: 'Paint & Body Work', distance: '19km', review: '4.0' }],
  },
  5: {
    '5km': [{ name: 'Liam\'s Brake Service', work: 'Brake Inspection', distance: '4.0km', review: '4.0' }],
    '10km': [{ name: 'Sara\'s Brake Checks', work: 'Brake Inspection', distance: '9km', review: '3.0' }],
    '15km': [{ name: 'Brake Experts by John', work: 'Brake Inspection', distance: '14km', review: '4.0' }],
    '20km': [{ name: 'Peter\'s Brake Service', work: 'Brake Inspection', distance: '19km', review: '5.0' }],
  },
  6: {
    '5km': [{ name: 'Noah\'s Engine Repair', work: 'Engine Repair', distance: '2.5km', review: '4.0' }],
    '10km': [{ name: 'Max Engine Fix', work: 'Engine Repair', distance: '5.5km', review: '3.0' }],
    '15km': [{ name: 'Eva\'s Engine Service', work: 'Engine Repair', distance: '13km', review: '2.0' }],
    '20km': [{ name: 'Alex\'s Engine Repair', work: 'Engine Repair', distance: '17km', review: '4.0' }],
  },
  7: {
    '5km': [{ name: 'Olivia\'s Auto Wash', work: 'Auto Wash', distance: '1.5km', review: '5.0' }],
    '10km': [{ name: 'Car Wash by Ben', work: 'Auto Wash', distance: '6km', review: '4.0' }],
    '15km': [{ name: 'Auto Shine by Zoe', work: 'Auto Wash', distance: '10km', review: '4.0' }],
    '20km': [{ name: 'Charlie\'s Car Wash', work: 'Auto Wash', distance: '18km', review: '4.0' }],
  },
  8: {
    '5km': [{ name: 'Battery Fix by Leo', work: 'Battery Repair', distance: '2km', review: '4.0' }],
    '10km': [{ name: 'Eva\'s Battery Service', work: 'Battery Repair', distance: '7km', review: '3.0' }],
    '15km': [{ name: 'Sam\'s Battery Fix', work: 'Battery Repair', distance: '10km', review: '2.0' }],
    '20km': [{ name: 'Battery Works by Carl', work: 'Battery Repair', distance: '18km', review: '5.0' }],
  },
  9: {
    '5km': [{ name: 'Clara\'s Bike Repair', work: 'Bike Repair', distance: '1.2km', review: '3.0' }],
    '10km': [{ name: 'Bike Fix by Jack', work: 'Bike Repair', distance: '6.5km', review: '4.0' }],
    '15km': [{ name: 'Ella\'s Bike Shop', work: 'Bike Repair', distance: '12km', review: '3.0' }],
    '20km': [{ name: 'Bike Works by Tom', work: 'Bike Repair', distance: '18km', review: '5.0' }],
  },
};


  const toggleSaveService = (serviceName) => {
    setSavedServices((prevState) => ({
      ...prevState,
      [serviceName]: !prevState[serviceName],
    }));
  };

const renderServices = () => {
  const selectedServices = allServices[id]?.[selectedDistance] || [];
  return (
    <FlatList
      data={selectedServices}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ServiceItem
          service={item}
          onToggleSave={() => toggleSaveService(item.name)}
          isSaved={savedServices[item.name]}
          onViewProfile={() => navigation.navigate('ViewProfile')}
        />
      )}
    />
  );
};
const ServiceItem = ({ service, onToggleSave, isSaved, onViewProfile }) => (
  <View style={styles.serviceContainer}>
    <View style={styles.serviceRow}>
      <Text style={styles.serviceNames}>{service.name}</Text>
      <View style={styles.verifiedSection}>
        <Image source={verified} style={styles.verifiedIcon} />
        <Text style={styles.verifiedText}>Verified</Text>
      </View>
    </View>
    <Text style={styles.serviceWork}>{service.work}</Text>
    <View style={styles.myserviceRow}>
      <Text style={styles.serviceDistance}>{service.distance}</Text>
      <TouchableOpacity onPress={onToggleSave} style={styles.heartButton}>
        <View style={styles.verifiedSection}>
          <Image source={isSaved ? mysaveFilled : mysave} style={styles.saveIcon} />
          <Text style={styles.verifiedText}>{isSaved ? 'Saved' : 'Save'}</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.reviewSection}>
      <Text style={styles.reviewText}>Reviews</Text>
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, starIndex) => (
          <Image
            key={starIndex}
            source={starIndex < service.review ? starFilled : starUnfilled}
            style={styles.starIcon}
          />
        ))}
        <Text style={styles.filledStarsCount}>{service.review}</Text>
      </View>
    </View>
    <TouchableOpacity onPress={onViewProfile} style={styles.viewProfileButton}>
      <View style={styles.profileContainer}>
        <Text style={styles.viewProfileText}>View Profile</Text>
        <Image source={viewProfile} style={styles.viewProfileImage} />
      </View>
    </TouchableOpacity>
  </View>
);


  const renderButtons = () => {
    const buttons = ['5km', '10km', '15km', '20km'];
    return buttons.map((button) => (
      <TouchableOpacity
        key={button}
        style={[styles.button, selectedDistance === button && styles.selectedButton]}
        onPress={() => setSelectedDistance(button)}
      >
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    
    <View style={styles.container}>
    
      <Image source={icon} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{name}</Text>
      <View style={styles.buttonsContainer}>{renderButtons()}</View>
      
      
      <View style={styles.serviceBox}>
        <View>{renderServices()}</View>
      </View>

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



  reviewSection: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  width: '100%',
   transform: 'translateY(-10px)',
},

reviewText: {
  fontSize: width * 0.032, 
  fontWeight: '400',  
  color : '#000000',
  fontStyle: 'italic', 
  flex: 1, 
},

starsContainer: {
  flexDirection: 'row', 
  alignItems: 'center', 
},

starIcon: {
  width: width * 0.05, 
  height: width * 0.05, 
},

filledStarsCount: {
  fontSize: width * 0.04,
   fontStyle: 'italic', 
   color: '#B0B0B0', 
  marginLeft: width * 0.02, 
},
viewProfileButton: {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: height * 0.02, 
},

profileContainer: {
  flexDirection: 'row',  
  alignItems: 'center', 
   justifyContent: 'center',   
},

viewProfileImage: {
  width: width * 0.05,   
  height: width * 0.07,
  resizeMode: 'contain',
},

viewProfileText: {
  fontSize: 14,          
  color: '#00B1D0',        
  fontWeight: 'bold', 
},


  heartButton: {
    padding: 10, 
  },
container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
    paddingTop: height * 0.08,
    paddingBottom: height * 0.1,
//  borderColor: 'red',
// backgroundColor: '#00B1D0', 

   
  },
  
  serviceImage: {
    width: width * 0.35,
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10,
      resizeMode: 'contain',
  },
  serviceName: {
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

buttonsContainer: {
  flexDirection: 'row', 
  flexWrap: 'nowrap', 
  justifyContent: 'center',
  alignItems: 'center', 
    marginTop: height * 0.01,
},

button: {
  backgroundColor: '#00B1D0',
  borderRadius: 5, 
  margin: width * 0.02,
  width: width * 0.20, 
  height: height * 0.06, 
  justifyContent: 'center', 
  alignItems: 'center', 
  display: 'flex',
  
},


buttonText: {
  fontSize: width * 0.04, 
  color: '#FFF',
  textAlign: 'center', 
  textAlignVertical: 'center', 
  display: 'flex', 
},

selectedButton: {
    backgroundColor: '#0098B8', 
     borderColor: '#000000',
      borderWidth: 1, 
  },


 serviceBox: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '90%', 
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
    height: height * 0.25, 
    padding: width * 0.05, 
    
  },

  



 serviceRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '100%', 
  },
  serviceNames: {
    fontSize: width * 0.04, 
    fontWeight: 'bold',
    flex: 1, 
  },
  verifiedSection: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  verifiedIcon: {
    width: width * 0.04, 
    height: width * 0.04, 
    resizeMode:'contain',
  },
  verifiedText: {
    fontSize: width * 0.035, 
    color: 'green',
    marginLeft: width * 0.01, 
  },

  saveIcon: {
    width: width * 0.07, 
    height: width * 0.07, 
  },

 myserviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
     transform: 'translateY(-10px)',
  },
  serviceDistance: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#50505080',
  },
  heartButton: {
    padding: 10, 
    
  },
  serviceWork: {
    fontFamily: 'Montserrat',
    fontSize: width * 0.032, 
    fontStyle: 'italic',
    fontWeight: '400',
    lineHeight: width * 0.038, 
    textAlign: 'left',
    color: '#50505080',
    marginTop: height * 0.008, 
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

export default Service1details;


