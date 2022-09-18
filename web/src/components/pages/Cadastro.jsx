import { useState } from "react"
import axios from "axios"

import Form from "../layout/form/Form";
import Label from "../layout/form/Label";
import Input from "../layout/form/Input";
import Button from "../layout/form/Button";
import LinkButton from "../layout/form/LinkButton";
import ProgressBar from "../layout/ProgressBar";

const Cadastro = () => {

    const [cadastro, setCadastro] = useState("");
    const [message, setMessage] = useState("");
    const [classMsg, setClassMsg] = useState("");
    const [progressBar, setProgressBar] = useState(false);

    const submit = e => {
        e.preventDefault();

        if(!cadastro.username || !cadastro.password){
            setMessage("Preencha todos os campos!!")
            setClassMsg("msg background-error")

            setTimeout(() => {
                setMessage("")
                setClassMsg("")
            }, 3000)

            return false;
        }

        setProgressBar(true)

        axios.post('http://localhost/server/cadastro.php', JSON.stringify(cadastro))
        .then((response) => {
            const { data } = response

            setTimeout(() => {
                setProgressBar(false)

                if(data === "Cadastrado"){
                    setMessage("Dados cadastrado com sucesso!")
                    setClassMsg("msg background-success");
                    setCadastro("");

                    setTimeout(() => {
                        setMessage("")
                        setClassMsg("")
                    }, 4000)
                }else if(data.msg === "Já existe"){
                    setMessage(`Usuário ${data.usuario} já existe`)
                    setClassMsg("msg background-error");
                    setCadastro("");

                    setTimeout(() => {
                        setMessage("")
                        setClassMsg("")
                    }, 4000)
                }else{
                    setMessage("Houve um problema ao tentar finalizar seu cadastro. Tente novamente mais tarde")
                    setClassMsg("msg background-error");
                    setCadastro("");

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
                setProgressBar(false)

                console.log(erro)
                setMessage("Estamos com problemas no servidor. Tente novamente mais tarde")
                setClassMsg("msg background-error");
            }, 5000)
        })

    }

    const handleChange = e => {
        setCadastro({ ...cadastro, [e.target.name]: e.target.value })
    }

    return ( 
        <section>
            {progressBar && <ProgressBar />}
            <Form
                submit={submit}
                text="Faça seu Cadastro!"
                contents={
                    <>
                        <Label text="Cadastre seu usuário:" />
                        <Input 
                            name="username" 
                            type="text" 
                            id="username"
                            handleOnChange={handleChange}
                            value={cadastro.username ? cadastro.username : ""}
                        />

                        <Label text="Cadastre sua senha:" />
                        <Input 
                            name="password" 
                            type="password" 
                            id="password"
                            handleOnChange={handleChange}
                            value={cadastro.password ? cadastro.password : ""}
                        />
                    </>
                }
                buttonFlex={
                    <>
                        <Button name="finalizar" type="submit" text="Finalizar" />
                        <LinkButton to="/login" text="Voltar" />
                    </>
                }
                msg={message}
                classMsg={classMsg}
            />
        </section>
    );
}
 
export default Cadastro;