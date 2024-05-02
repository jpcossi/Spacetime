import fastify from  "fastify"
import { memoriesRoutes } from "./routes/memories"
import cors from "@fastify/cors"

const app = fastify()

app.register(cors, {
  origin : true, // comand origin being true make all urls from frontend can acess the back end, origin: [https://lcoalhost3000] its a example for one url receive acess
})
app.register(memoriesRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('🚀HTTP server running on http://localhost:3333')
})