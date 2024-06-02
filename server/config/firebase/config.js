
const admin = require("firebase-admin")
var serviceAccount = require("./config.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://space-y-a17b7.appspot.com'
})

module.exports = admin