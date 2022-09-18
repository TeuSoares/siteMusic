import {Navigate} from "react-router-dom";

import { useContext} from "react"

import { AuthContext } from "../../contexts/AuthContext";

const PrivateUserTrue = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext);
  
    if(!isAuthenticated){
        return <Navigate to="/login" />;
    }else{
        return children;
    }

}
 
export default PrivateUserTrue;