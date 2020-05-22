import * as firebase from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from '../config/firebase';

firebase.initializeApp(firebaseConfig);

export default firebase;
