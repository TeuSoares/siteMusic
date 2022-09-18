import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

import Form from "../layout/form/Form";
import Label from "../layout/form/Label";
import Input from "../layout/form/Input";
import Button from "../layout/form/Button";
import LinkButton from "../layout/form/LinkButton";
import ProgressBar from "../layout/ProgressBar";

import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const {authenticatedLogin} = useContext(AuthContext);

    const navigate = useNavigate()

    const [login, setLogin] = useState("");
    const [message, setMessage] = useState("");
    const [classMsg, setClassMsg] = useState("");
    const [progressBar, setProgressBar] = useState(false);

    const submit = e => {
        e.preventDefault();

        if(!login.username || !login.password){
            setMessage("Preencha todos os campos!!")
            setClassMsg("msg background-error")

            setTimeout(() => {
                setMessage("")
                setClassMsg("")
            }, 3000)

            return false;
        }

        setProgressBar(true)

        axios.post('http://localhost/server/login.php', JSON.stringify(login))
        .then((response) => {
            const { data } = response

            setTimeout(() => {
                setProgressBar(false)

                if(data.row > 0){
                    authenticatedLogin();
                    navigate("/painelControl");
                    localStorage.setItem("session", data.token);
                }else{
                    setMessage("Usuário e(ou) Senha incorretos")
                    setClassMsg("msg background-error");
                    setLogin("");
    
                    setTimeout(() => {
                        setMessage("")
                        setClassMsg("")
                    }, 3000)
    
                    return false;
                }

            }, 5000)

        })
        .catch(erro => {
            setTimeout(() => {
                setProgressBar(false);

                console.log(erro)
                setMessage("Estamos com problemas no servidor. Tente novamente mais tarde")
                setClassMsg("msg background-error");
            }, 5000)

        })

    }

    const handleChange = e => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    return ( 
        <section>
            {progressBar && <ProgressBar />}
            <Form
                submit={submit}
                text="Login"
                contents={
                    <>
                        <Label text="Usuário:" />
                        <Input 
                            name="username" 
                            type="text"
                            id="username"
                            handleOnChange={handleChange}
                            value={login.username ? login.username : ""}
                        />

                        <Label text="Senha:" />
                        <Input 
                            name="password" 
                            type="password" 
                            id="password"
                            handleOnChange={handleChange}
                            value={login.password ? login.password : ""}
                        />
                    </>
                }
                buttonFlex={
                    <>
                        <Button type="submit" text="Entrar" />
                        <LinkButton to="/cadastro" text="Cadastro" />
                    </>
                }
                msg={message}
                classMsg={classMsg}
            />
        </section>
    );
}
 
export default Login;