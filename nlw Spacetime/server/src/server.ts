import 'dotenv/config'

import fastify from  "fastify"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from "./routes/memories"

const app = fastify()

app.register(cors, {
  origin : true, // comand origin being true make all urls from frontend can acess the back end, origin: [https://lcoalhost3000] its a example for one url receive acess
})

app.register(jwt, {
  secret : 'spacetime', // secret kinda encrypt jwt tokens generated to be different than others jwt tokens from anothers backends, the name between '' can random 
})

app.register(authRoutes)
app.register(memoriesRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('🚀HTTP server running on http://localhost:3333')
})