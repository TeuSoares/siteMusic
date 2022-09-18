import {Navigate} from "react-router-dom";

import { useContext} from "react"

import { AuthContext } from "../../contexts/AuthContext";

const PrivateUserFalse = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext);

    if(isAuthenticated){
        return <Navigate to="/" />;
    }else{
        return children;
    }

}
 
export default PrivateUserFalse;