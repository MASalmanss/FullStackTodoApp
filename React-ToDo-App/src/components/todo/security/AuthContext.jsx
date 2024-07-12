import { createContext, useState , useContext } from "react"

//Create a context
export const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)

//Share the created context with other components
export default function AuthProvider({children}) {

    //add some states for child components
    const [isAuthenticated , setAuthenticated] = useState(false)

    const [username , setUsername] = useState()


     
     
     function login(username , password){
         if (username === "akif" && password === "1234") {
             setAuthenticated(true)
             setUsername(username)
             return true
            } else {
                setAuthenticated(false)
                setUsername(null)
                return false
            }
        }
    function logout(){
        setAuthenticated(false)
    }
        const valueToBeShared = {  isAuthenticated , setAuthenticated , login , logout , username}

    return(
        <AuthContext.Provider value={ valueToBeShared }>
            {children}
        </AuthContext.Provider>
    )
}