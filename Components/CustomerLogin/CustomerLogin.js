// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const { width, height } = Dimensions.get('window');

// function CustomerLogin({ navigation }) {  // Ensure navigation is passed as a prop
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Text Section at the Top */}
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>Welcome</Text>
//         <Text style={styles.text1}>Access Local Service</Text>
//       </View>

//       {/* Bottom Section */}
//       <View style={styles.container1}>
//         <View style={styles.inputContainer}>
//           {/* Email Input */}
//           <TextInput
//             style={styles.input}
//             placeholder="Email Address"
//             placeholderTextColor="#888"
//             keyboardType="email-address"
//           />

//           {/* Password Input with Eye Icon */}
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={styles.passwordInput}
//               placeholder="Password"
//               placeholderTextColor="#888"
//               secureTextEntry={!passwordVisible}
//             />
//             <TouchableOpacity
//               style={styles.eyeIcon}
//               onPress={() => setPasswordVisible(!passwordVisible)}
//             >
//               <Ionicons
//                 name={passwordVisible ? 'eye' : 'eye-off'}
//                 size={width * 0.06}
//                 color="#888"
//               />
//             </TouchableOpacity>
//           </View>
//            {/* Forget Password */}
//           <TouchableOpacity
//             style={styles.forgetPassword}
//             onPress={() => navigation.navigate('ForgotPassword')} // Navigate to Forget Password screen
//           >
//             <Text style={styles.forgetText}>Forget Password?</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#00B1D0',
//   },
//   textContainer: {
//     position: 'absolute',
//     top: height * 0.1,
//     width: '100%',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: width * 0.1,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   text1: {
//     fontSize: width * 0.035,
//     fontWeight: '600',
//     color: '#000000',
//     textAlign: 'center',
//   },
//   container1: {
//     position: 'absolute',
//     top: height * 0.22,
//     width: '100%',
//     height: height * 0.78,
//     backgroundColor: '#F1FFF3',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     borderTopLeftRadius: width * 0.21,
//     borderTopRightRadius: width * 0.21,
//   },
//   inputContainer: {
//     width: '80%',
//     alignItems: 'center',
//     marginTop: height * 0.18,
//   },
//   input: {
//     width: '100%',
//     height: height * 0.062,
//     backgroundColor: '#FFF',
//     borderRadius: width * 0.03,
//     paddingHorizontal: width * 0.04,
//     fontSize: width * 0.04,
//     color: '#333',
//     marginBottom: height * 0.02,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: height * 0.002 },
//     shadowOpacity: 0.1,
//     shadowRadius: width * 0.015,
//     elevation: 2,
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   passwordInput: {
//     width: '100%',
//     height: height * 0.062,
//     backgroundColor: '#FFF',
//     borderRadius: width * 0.03,
//     paddingHorizontal: width * 0.04,
//     fontSize: width * 0.04,
//     color: '#333',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: height * 0.002 },
//     shadowOpacity: 0.1,
//     shadowRadius: width * 0.015,
//     elevation: 2,
//   },
//  eyeIcon: {
//   position: 'absolute',
//   right: width * 0.05, // Keep some space from the right edge
//   top: '50%',
//   transform: [{ translateY: -width * 0.03 }], // Adjust based on icon size
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// forgetPassword: {
//     alignSelf: 'flex-end',
//     marginTop: height * 0.02, // Space below password input
//   },
//   forgetText: {
//     fontSize: width * 0.04,
//     color: '#007AFF',
//     fontWeight: '500',
//   },

// });

// export default CustomerLogin;


import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function CustomerLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to toggle screens

  return (
    <View style={styles.container}>
      {/* Text Section at the Top */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text1}>
          {showForgotPassword ? 'Reset Your Password' : 'Access Local Service'}
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.container1}>
        <View style={styles.inputContainer}>
          {showForgotPassword ? (
            // Forgot Password Section
            <>
              <Text style={styles.instructions}>
                Enter your email, and we'll send you a reset link.
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#888"
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.resetButton}>
                <Text style={styles.resetButtonText}>Send Reset Link</Text>
              </TouchableOpacity>

              {/* Back to Login */}
              <TouchableOpacity onPress={() => setShowForgotPassword(false)}>
                <Text style={styles.backToLogin}>← Back to Login</Text>
              </TouchableOpacity>
            </>
          ) : (
            // Login Form
            <>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#888"
                keyboardType="email-address"
              />

              {/* Password Input with Eye Icon */}
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="#888"
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <Ionicons
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    size={width * 0.06}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>

              {/* Forgot Password Text */}
              <TouchableOpacity onPress={() => setShowForgotPassword(true)}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B1D0',
  },
  textContainer: {
    position: 'absolute',
    top: height * 0.1,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: width * 0.1,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  text1: {
    fontSize: width * 0.035,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  container1: {
    position: 'absolute',
    top: height * 0.22,
    width: '100%',
    height: height * 0.78,
    backgroundColor: '#F1FFF3',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: width * 0.21,
    borderTopRightRadius: width * 0.21,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: height * 0.18,
  },
  input: {
    width: '100%',
    height: height * 0.062,
    backgroundColor: '#FFF',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.04,
    color: '#333',
    marginBottom: height * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: height * 0.002 },
    shadowOpacity: 0.1,
    shadowRadius: width * 0.015,
    elevation: 2,
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  passwordInput: {
    width: '100%',
    height: height * 0.062,
    backgroundColor: '#FFF',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.04,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: height * 0.002 },
    shadowOpacity: 0.1,
    shadowRadius: width * 0.015,
    elevation: 2,
  },
  eyeIcon: {
    position: 'absolute',
    right: width * 0.05,
    top: '50%',
    transform: [{ translateY: -width * 0.03 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    position: 'absolute',
    right: 10,
    bottom: -height * 0.03,
    color: '#007BFF',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
  instructions: {
    fontSize: width * 0.045,
    textAlign: 'center',
    color: '#333',
    marginBottom: height * 0.02,
  },
  resetButton: {
    width: '100%',
    height: height * 0.062,
    backgroundColor: '#00B1D0',
    borderRadius: width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  resetButtonText: {
    fontSize: width * 0.045,
    color: '#FFF',
    fontWeight: '600',
  },
  backToLogin: {
    marginTop: height * 0.02,
    color: '#007BFF',
    fontSize: width * 0.04,
    fontWeight: '600',
  },
});
