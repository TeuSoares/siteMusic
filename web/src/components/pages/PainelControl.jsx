import {Link} from "react-router-dom"

import { useContext } from "react"

import "./PainelControl.css"

import { AuthContext } from "../../contexts/AuthContext";

const PainelControl = () => {
    const {logout} = useContext(AuthContext);

    return ( 
        <section className="container-panel">
            <div className="panelControl">
                <h1>Painel de Controle</h1>
                <div className="flex-link">
                    <Link to="/insertMusic">Inserir uma nova música</Link>
                    <Link to="/admMusic">Gerenciar suas músicas</Link>
                    <Link to="/login" onClick={() => logout()}>Sair</Link>
                </div>
            </div>
        </section>
    );
}
 
export default PainelControl;