const { checkIfAuthenticated } = require('./helpers/auth')
const cors = require('@fastify/cors')
const { createDeck, getDecks } = require('./helpers/decks')
const { createCard, getCards, getCard } = require('./helpers/cards')

const fastify = require('fastify')({
	logger: true,
	prettyPrint: true,
	disableRequestLogging: false
})

const registerCors = async () => {await fastify.register(cors, { 
	// put your options here
	origin: true,
	methods: ['GET']
})}

registerCors()

fastify.get('/', async (req, res) => { res.send({ test: 'hello2' }) })

fastify.route({
	method: 'GET',
	url: '/authed',
	preHandler: checkIfAuthenticated,
	handler: async (req, res) => {
		res.send('Success!')
	}
})

fastify.route({
	method: 'POST',
	url: '/createDeck',
	// preHandler: checkIfAuthenticated,
	handler: async (req, res) => {
		const createDeckResult = await createDeck(req.body)
		req.log.info(`Successfully created deck with ID: ${createDeckResult.id}`)
		res.status(200).send('Deck created!')
	}
})

fastify.route({
	method: 'POST',
	url: '/createCard',
	// preHandler: checkIfAuthenticated,
	handler: async (req, res) => {
		const createCardResult = await createCard(req.body)
		req.log.info(`Successfully created card with ID: ${createCardResult.id}`)
		res.status(200).send('Card created!')
	}
})

fastify.route({
	method: 'GET',
	url: '/getDecks',
	// preHandler: checkIfAuthenticated,
	handler: async (req, res) => {
		const decks = await getDecks(req.query.userId)
		res.status(200).send(decks)
	}
})

fastify.route({
	method: 'GET',
	url: '/getCards',
	// preHandler: checkIfAuthenticated,
	handler: async (req, res) => {
		const cards = await getCards(req.query.userId, req.query.deckId)
		res.status(200).send(cards)
	}
})

fastify.route({
	method: 'GET',
	url: '/getCard',
	// preHandler: checkIfAuthenticated,
	handler: async (req, res) => {
		const card = await getCard(req.query.userId, req.query.deckId, req.query.cardId)
		res.status(200).send(card)
	}
})

const PORT = parseInt(parseInt(process.env.PORT)) || 8080
const HOST = parseInt(parseInt(process.env.HOST)) || '0.0.0.0'

const start = async () => {
	await fastify.listen({ port: PORT, host: HOST })
	fastify.log.info(`Server is now listening on port: ${PORT}`)
}

start()