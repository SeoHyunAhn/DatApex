import firebase from 'firebase';
import firebaseConfig from '../config/firebase';

try {
    firebase.app();
}
catch( error ) {
    // Initialize Firebase
    firebase.initializeApp( firebaseConfig );
}

export default firebase;