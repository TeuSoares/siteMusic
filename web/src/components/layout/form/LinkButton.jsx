import { Link } from "react-router-dom";

import "./LinkButton.css"

const LinkButton = ({to, text}) => {
    return <Link to={to} className="linkButton">{text}</Link>
}
 
export default LinkButton;