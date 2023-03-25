const { db } = require('./firebaseService')

const createDeck = async (payload) => {
	const { userId, deckName, deckDescription } = payload
	const res = await db.collection('users').doc(userId).collection('decks').add({
		name: deckName,
		description: deckDescription
	})
	return res
}

const getDecks = async (userId) => {
	const res = await db.collection('users').doc(userId).collection('decks').get()
	let decks = res.docs.map(doc => {
		return {
			id: doc.id, 
			...doc.data()
		}
	})
	return decks
}

module.exports = { createDeck, getDecks }