import { useState, useEffect, createContext} from "react"
import axios from "axios";

export const AuthContext = createContext({
    isAuthenticated: false,
    authenticatedLogin: () => {},
    logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true || false);
    
    useEffect(() => {

      const newSession = async () => {
          let session = localStorage.getItem('session');

          if(session == null){
            setIsAuthenticated(false);
          }else{

            try{

              const authSession = 'Bearer ' + session;
    
              const { data } = await axios.get('http://localhost/server/auth.php', {
                headers: {
                  Authorization: authSession
                }
              })
      
              setIsAuthenticated(true);              
            }catch(error){
              if(error.response.data === 'EXPIRED'){
                setIsAuthenticated(false);
                localStorage.removeItem("session");
              }
            }

          }

      }

      newSession();
    }, []);

    const authenticatedLogin = () => {
      setIsAuthenticated(true);
    }

    const logout = () => {
      localStorage.removeItem("session");

      setIsAuthenticated(false);
    }

    return ( 
        <AuthContext.Provider value={{isAuthenticated, authenticatedLogin, logout}}>
            {children}
        </AuthContext.Provider>
    );
}