
const admin = require("firebase-admin")
const serviceAccount = process.env.FIREBASE_DB

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://space-y-a17b7.appspot.com'
})

module.exports = admin