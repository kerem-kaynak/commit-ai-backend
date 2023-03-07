const fastify = require('fastify')({
	logger: true,
	prettyPrint: true,
	disableRequestLogging: false
})

fastify.get('/', async (req, res) => { res.send({ test: 'hello' }) })

const PORT = parseInt(parseInt(process.env.PORT)) || 8080
const HOST = parseInt(parseInt(process.env.HOST)) || '0.0.0.0'

const start = async () => {
	await fastify.listen({ port: PORT, host: HOST })
	fastify.log.info(`Server is now listening on port: ${PORT}`)
}

start()