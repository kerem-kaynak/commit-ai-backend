const { db } = require('./firebaseService')

const createCard = async (payload) => {
	const { userId, deckId, cardFront, cardBack } = payload
	const res = await db.collection('users').doc(userId).collection('decks').doc(deckId).collection('cards').add({
		front: cardFront,
		back: cardBack
	})
	return res
}

const getCards = async (userId, deckId) => {
	const res = await db.collection('users').doc(userId).collection('decks').doc(deckId).collection('cards').get()
	let cards = res.docs.map(doc => {
		return {
			id: doc.id, 
			...doc.data()
		}
	})
	return cards
}

const getCard = async (userId, deckId, cardId) => {
	const res = await db.collection('users').doc(userId).collection('decks').doc(deckId).collection('cards').doc(cardId).get()
	return { id: res.id, ...res.data() }
}

module.exports = { createCard, getCards, getCard }