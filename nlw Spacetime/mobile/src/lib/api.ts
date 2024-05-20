import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.0.252:3333', // normalmente seria http://localhost:3333 mas no android as vezes nao le "localhost" entao em vez disso coloca o numero da maquina que no caso é 192.168.0.252 
})