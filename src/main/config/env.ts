import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  // firebase
  firebase_apiKey: process.env.FIREBASE_APIKEY || '',
  firebase_authDomain: process.env.FIREBASE_AUTHDOMAIN || '',
  firebase_projectId: process.env.FIREBASE_PROJECTID || '',
  firebase_storageBucket: process.env.FIREBASE_STORAGEBUCKET || '',
  firebase_messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID || '',
  firebase_appId: process.env.FIREBASE_APPID || '',
  firebase_measurementId: process.env.FIREBASE_MEASUREMENTID || '',
};
