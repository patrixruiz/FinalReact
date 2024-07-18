
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASZ5O1AlB87_QfsV8yNc8mCHzDXAF-RoA",
  authDomain: "patricio392-8fb97.firebaseapp.com",
  projectId: "patricio392-8fb97",
  storageBucket: "patricio392-8fb97.appspot.com",
  messagingSenderId: "161727236385",
  appId: "1:161727236385:web:76d5b8cb02d10ec3f41660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//funcion para ver mostrar los productos
export async function getProducts(){
    const response = await getDocs(collection(db, "products"));
    const listaProds=[];
    response.forEach((docu)=> listaProds.push({id: docu.id, ...docu.data()}))
    return listaProds;
}

//funcion para ver los detalles de los productos
export async function getProduct(id){
    const docRef = doc(db, "products", id);
    const response = await getDoc(docRef); 

    if(response.exists()){
        return {id: response.id, ...response.data()}
    } else {
        throw new Error("No hay Documento");
    }
    
}


//Generar una orden
export async function addOrder(orderData, cartItems, total) {
    const ordersCollection = collection(db, 'Orders');
    const neworder = {
        ...orderData, items: cartItems, total, date: new Date(),
    };
    const docRef = await addDoc(ordersCollection, neworder);
    console.log('Doc ref generado: ' + docRef);
    console.log('Id generado: ' + docRef.id);
    return docRef.id;
  }

