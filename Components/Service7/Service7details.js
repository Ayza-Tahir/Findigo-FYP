
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ActivityIndicator,ScrollView } from 'react-native';
import Home from '../../assets/Home.png';
import Like from '../../assets/Favourities.png';
import Category from '../../assets/Servies.png';
import Discount from '../../assets/Discounts.png';
import Location from '../../assets/Location.png';
// import verified from '../../assets/verified.png';
// import mysave from '../../assets/mysave.png';
// import mysaveFilled from '../../assets/filledheart.png';
// import starFilled from '../../assets/starFilled.png';
// import starUnfilled from '../../assets/starUnfilled.png';
// import viewProfile from '../../assets/profileViewArrow.png';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function Service7details({ route, navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/Poppins-Regular.ttf'),
    Montserrat: require('../../assets/Montserrat-Regular.ttf'),
  });

  const [selectedDistance, setSelectedDistance] = useState('5km');
  

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderSr} />;
  }

  const { id, name, icon } = route.params;
  








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
      


      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
       
 <View style={styles.serviceBox}>
    <Text style={styles.boxTitle}>Service Details</Text>
    <Text style={styles.boxContent}>
      This is the content inside the white box. You can add more details here based on your needs.
    </Text>
  </View>

  {[...Array(5)].map((_, index) => (
    <View key={index} style={styles.serviceBox}>
      <Text style={styles.boxTitle}>Service Box {index + 1}</Text>
      <Text style={styles.boxContent}>Dynamic content for box {index + 1}.</Text>
    </View>
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

container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
    paddingTop: height * 0.08,
    paddingBottom: height * 0.1,
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

    scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: height * 0.01, 
  },

 





serviceBox: {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '96%', 
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

boxTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#00B1D0',
  marginBottom: 8,
},

boxContent: {
  fontSize: 14,
  color: '#333333',
  lineHeight: 20,
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

export default Service7details;



