import { db } from '../FireBase/FireBase'; 
import { collection, query, where, getDocs } from 'firebase/firestore';


const checkPhoneExistForgotPassword = async (phoneNumber) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('phone', '==', phoneNumber));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return {
        success: true,
        message: 'Phone number exists in the system.',
        exists: true
      };
    } else {
      return {
        success: false,
        message: 'Please create a new account From SignUp Page.',
        exists: false
      };
    }
  } catch (error) {
    console.error('Error checking phone in Firestore:', error);
    return {
      success: false,
      message: 'An error occurred while checking the phone number.',
      exists: false
    };
  }
};

export default checkPhoneExistForgotPassword;
