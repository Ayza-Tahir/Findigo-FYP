import { db } from '../FireBase/FireBase'; 
import { collection, query, where, getDocs } from 'firebase/firestore'; 

const LoginData = async (phone, password) => {
  try {
   
    const userCollectionRef = collection(db, 'users');
    
  
    const phoneQuery = query(userCollectionRef, where('phone', '==', phone));
    const querySnapshot = await getDocs(phoneQuery);
    
    if (querySnapshot.empty) {
      return { success: false, message: 'Phone number not found.' };
    }

   
    const userDoc = querySnapshot.docs[0].data();
    
 
    if (password !== userDoc.password) {
      return { success: false, message: 'Incorrect password.' };
    }

    
    return { success: true, message: 'Login successful!', user: { id: querySnapshot.docs[0].id, name: userDoc.name, phone: userDoc.phone } };

  } catch (error) {
    console.error('Error during login:', error);
    throw error; 
  }
};

export default LoginData;
