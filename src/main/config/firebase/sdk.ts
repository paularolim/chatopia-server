import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { env } from '../env';

const firebaseApp = initializeApp({
  apiKey: env.firebase_apiKey,
  authDomain: env.firebase_authDomain,
  projectId: env.firebase_projectId,
  storageBucket: env.firebase_storageBucket,
  messagingSenderId: env.firebase_messagingSenderId,
  appId: env.firebase_appId,
  measurementId: env.firebase_measurementId,
});

const firebaseAuth = getAuth(firebaseApp);

export { firebaseAuth };
