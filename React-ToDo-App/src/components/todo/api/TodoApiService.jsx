import axios from "axios";


const apiClient = axios.create(
    {
        baseURL : "http://localhost:8080"
    }
)

export const retrieveAllTodosForUsernameApi = (username) => apiClient.get(`/todos/${username}/todos`);


export const deleteTodoforIdApi = (username , id)=>apiClient.delete(`todos/${username}/todos/${id}`)

export const updateTodoforIdApi = (username , id)=>apiClient.get(`todos/${username}/todos/${id}`)