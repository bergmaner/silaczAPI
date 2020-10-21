const admin = require("firebase-admin");

const serviceAccount = require("../config/serviceAccountKey");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});