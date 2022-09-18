import { useState } from "react"
import axios from "axios"

import Form from "../layout/form/Form";
import Label from "../layout/form/Label";
import Input from "../layout/form/Input";
import Button from "../layout/form/Button";
import LinkButton from "../layout/form/LinkButton";
import ProgressBar from "../layout/ProgressBar";

const InsertMusic = () => {

    const [music, setMusic] = useState("");
    const [message, setMessage] = useState("");
    const [classMsg, setClassMsg] = useState("");
    const [progressBar, setProgressBar] = useState(false);

    const submit = e => {
        e.preventDefault();

        if(!music.compositor || !music.musica || !music.genero || !music.url || !music.image){
            setMessage("Preencha todos os campos!!")
            setClassMsg("msg background-error")

            setTimeout(() => {
                setMessage("")
                setClassMsg("")
            }, 3000)

            return false;
        }

        setProgressBar(true)

        const dataForm = new FormData(e.target);

        axios.post('http://localhost/server/insertMusic.php', dataForm)
        .then((response) => {
            const { data } = response

            setTimeout(() => {
                setProgressBar(false)

                if(data === "Gravado"){
                    setMessage("Música inserida com sucesso!");
                    setClassMsg("msg background-success");
                    setMusic("");

                    setTimeout(() => {
                        setMessage("")
                        setClassMsg("")
                    }, 3000)
                }else{
                    setMessage("Houve um problema ao tentar inserir a música. Tente novamente mais tarde")
                    setClassMsg("msg background-error");
                    setMusic("");
    
                    setTimeout(() => {
                        setMessage("")
                        setClassMsg("")
                    }, 3000)
    
                    return false;
                }

            }, 5000)

        })
        .catch(erro => {
            setProgressBar(false)
            
            setTimeout(() => {
                console.log(erro)
                setMessage("Estamos com problemas no servidor. Tente novamente mais tarde")
                setClassMsg("msg background-error");
            }, 5000)

        })
    }

    const handleChange = e => setMusic({ ...music, [e.target.name]: e.target.value});

    return ( 
        <section>
            {progressBar && <ProgressBar />}
            <Form
                submit={submit}
                text="Insira uma nova Música"
                contents={
                    <>
                        <Label text="Compositor:" />
                        <Input 
                            name="compositor" 
                            type="text"
                            id="compositor"
                            handleOnChange={handleChange}
                            value={music.compositor ? music.compositor : ""}
                        />

                        <Label text="Música:" />
                        <Input 
                            name="musica" 
                            type="text" 
                            id="musica"
                            handleOnChange={handleChange}
                            value={music.musica ? music.musica : ""}
                        />

                        <Label text="Genêro:" />
                        <Input 
                            name="genero" 
                            type="text" 
                            id="genero"
                            handleOnChange={handleChange}
                            value={music.genero ? music.genero : ""}
                        />

                        <Label text="Link do YouTube:" />
                        <Input 
                            name="url" 
                            type="text" 
                            id="url"
                            handleOnChange={handleChange}
                            value={music.url ? music.url : ""}
                        />

                        <Label text="Thumbnail:" />
                        <Input 
                            name="image" 
                            type="file"
                            handleOnChange={handleChange}
                            value={music.image ? music.image : ""}
                        />
                    </>
                }
                buttonFlex={
                    <>
                        <Button type="submit" text="Inserir" />
                        <LinkButton to="/painelControl" text="Voltar" />
                    </>
                }
                msg={message}
                classMsg={classMsg}
            />
        </section>
    );
}
 
export default InsertMusic;