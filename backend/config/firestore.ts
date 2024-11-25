import admin from 'firebase-admin';

import serviceAccount from './firebasekeys.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});

const firestore = admin.firestore();

export default firestore;