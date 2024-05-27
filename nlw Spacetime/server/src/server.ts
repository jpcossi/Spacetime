import 'dotenv/config'

import fastify from "fastify"
import jwt from "@fastify/jwt"
import cors from "@fastify/cors"
import multipart from '@fastify/multipart'
import fastifyStatic from '@fastify/static'

import { resolve } from 'node:path'
import { authRoutes } from './routes/auth'
import { updloadRoutes } from './routes/upload'
import { memoriesRoutes } from "./routes/memories"

const app = fastify()

app.register(multipart)

app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads'
})

app.register(cors, {
  origin : true, // comand origin being true make all urls from frontend can acess the back end, origin: [https://lcoalhost3000] its a example for one url receive acess
})

app.register(jwt, {
  secret : 'spacetime', // secret kinda encrypt jwt tokens generated to be different than others jwt tokens from anothers backends, the name between '' can random 
})

app.register(authRoutes)
app.register(updloadRoutes)
app.register(memoriesRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0', // esse comando é necessario para funcionar no mobile
}).then(() => {
  console.log('🚀HTTP server running on http://localhost:3333')
})