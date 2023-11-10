import axios from 'axios'

//Módulo para trabalhar com apis, Disponobiliza


export const eventsResource = '/Evento'
export const nextEventResource = '/Evento/ListarProximos'
export const eventsTypeResource = '/TipoEvento'

export const eventsTypeResource


const apiPort = '7118'
const localApiUrl = `http://localhost:${apiPort}/api`
const externalApiUrl = null


const api = axios.create({
    baseURL: localApiUrl
})

export default api

