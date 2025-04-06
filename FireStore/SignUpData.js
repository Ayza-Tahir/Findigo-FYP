import { db } from '../FireBase/FireBase'; 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'; 

const SignUpData = async (name, phone, password) => {

  try {
    
    const userCollectionRef = collection(db, 'users');
    const phoneQuery = query(userCollectionRef, where('phone', '==', phone));
    const querySnapshot = await getDocs(phoneQuery);
    
   
    if (!querySnapshot.empty) {
    
     return { success: false, message: 'Phone number already exists.' };
    }

  
    const docRef = await addDoc(userCollectionRef, {
      name: name,
      phone: phone,
      password: password,
      createdAt: new Date().toISOString(),
    });

    console.log('User data stored successfully with ID:', docRef.id);
     
      return { success: true, id: docRef.id };
  } 
  catch (error) 
  {
    console.error('Error storing data in Firestore:', error);
    throw error;  
  }
};

export default SignUpData;
