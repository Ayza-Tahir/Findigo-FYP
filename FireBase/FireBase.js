import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyCtMbSUJ-hrjoXQKGNGQEVuJQKFYHoZ4qY",
  authDomain: "findigofyp.firebaseapp.com",
  projectId: "findigofyp",
  storageBucket: "findigofyp.firebasestorage.app",
  messagingSenderId: "642848839911",
  appId: "1:642848839911:web:c0f5599e260b39b19eea42",
  measurementId: "G-MZWBLEN715"
};


const app = initializeApp(firebaseConfig);


const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, app, firebaseConfig };
