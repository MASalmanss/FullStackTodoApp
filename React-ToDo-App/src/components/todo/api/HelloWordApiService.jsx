import axios from 'axios'


const apiclient =  axios.create(
    {
        baseURL : "http://localhost:8080"
    }
)

export const retrieveHelloWorld = () =>  apiclient.get("/hello-world")

export const retrieveHelloWorldPathVaraible = () => apiclient.get("/hello-world/path-variable/minnos")