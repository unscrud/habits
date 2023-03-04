import cors from "@fastify/cors";
import Fastify from "fastify";
import { prisma } from "./lib/prisma";
const app = Fastify()

app.register(cors, {
  origin: ['http://localhost:3000']
})

app.listen({
  port: 3333
}).then(()=>{
  console.log('HTTP Server running!')
})