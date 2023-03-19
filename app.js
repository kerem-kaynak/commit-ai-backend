const { checkIfAuthenticated } = require('./helpers/auth')
const cors = require('@fastify/cors')

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

const PORT = parseInt(parseInt(process.env.PORT)) || 8080
const HOST = parseInt(parseInt(process.env.HOST)) || '0.0.0.0'

const start = async () => {
	await fastify.listen({ port: PORT, host: HOST })
	fastify.log.info(`Server is now listening on port: ${PORT}`)
}

start()