const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')

const app = initializeApp({
	credential: applicationDefault()
})

const db = getFirestore()

module.exports = { db, app }