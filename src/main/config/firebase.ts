import admin from 'firebase-admin';
import serviceAccount from '../../../serviceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key,
    projectId: serviceAccount.project_id,
  }),
});

const auth = admin.auth();

export { auth };
