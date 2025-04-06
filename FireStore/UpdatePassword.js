import { db } from '../FireBase/FireBase'; 
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';

const UpdatePassword = async (fullPhone, newPassword) => {
  try {
   
    const userCollectionRef = collection(db, 'users');
    

    const phoneQuery = query(userCollectionRef, where('phone', '==', fullPhone));
    const querySnapshot = await getDocs(phoneQuery);

    
    if (querySnapshot.empty) {
     
      return { success: false, message: 'No user found with the provided phone number.' };
    }

    
    const userDoc = querySnapshot.docs[0];
    const userDocRef = doc(db, 'users', userDoc.id);

    
    await updateDoc(userDocRef, {
      password: newPassword,
    });

   

    
    return { success: true, message: 'Password updated successfully.' };
  } catch (error) {
  
    console.error('Error updating password in Firestore:', error);

   
    return { success: false, message: error.message };
  }
};

export default UpdatePassword;
