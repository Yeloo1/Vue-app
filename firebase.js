const admin = require("firebase-admin");
const serviceAccount = require("./service-account-key.json");  // Ensure this is correct

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db };
