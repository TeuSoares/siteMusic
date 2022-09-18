import { useState, useEffect } from "react"
import axios from "axios"

import { FaTrashAlt } from 'react-icons/fa';

import "./GerenciarMusic.css"

import Message from "../layout/Message";
import ProgressBar from "../layout/ProgressBar";

const GerenciarMusic = () => {
    const [requestMusicAdm, setRequestMusicAdm] = useState([])
    const [message, setMessage] = useState("");
    const [classMsg, setClassMsg] = useState("");
    const [progressBar, setProgressBar] = useState(true);
    const [statusDelete, setStatusDelete] = useState(false);
    const [idMusicDelete, setIdMusicDelete] = useState("");

    useEffect(() => {

        setTimeout(() => {
            setProgressBar(false);
    
            fetchMusicAdm();
        }, 5000)

	}, []);

    const fetchMusicAdm = async () => {

        try{
            const { data } = await axios.get(
                "http://localhost/server/funcoes.php"
            );

            setRequestMusicAdm(data);
        }
        catch(error){
            setClassMsg("message background-error");
            setMessage("Estamos com problemas no servidor. Tente novamente mais tarde");

            setTimeout(() => {
                setClassMsg("");
                setMessage("");
            }, 5000)
        }

    };

    const handleDelete = (IdVideo) => {
        setStatusDelete(true);
        setIdMusicDelete(IdVideo);

        setTimeout(() => {
            setStatusDelete(false);

            axios.delete(`http://localhost/server/delete.php?IdVideo=${IdVideo}`)
            .then((response) => {
                const { data } = response
    
                if(data == "Deletado"){
                    fetchMusicAdm();

                    setClassMsg("message background-success");
                    setMessage("Música deletada com sucesso!");
    
                    setTimeout(() => {
                        setClassMsg("");
                        setMessage("");
                    }, 3000)
                }else{
                    setClassMsg("message background-error");
                    setMessage("Houve algum erro ao tentar deletar a música. Tente novamente mais tarde!");
    
                    setTimeout(() => {
                        setClassMsg("");
                        setMessage("");
                    }, 5000)
                }
    
            })
            .catch(erro => {
                console.log(erro);
                setClassMsg("message background-error");
                setMessage("Estamos com problemas no servidor. Tente novamente mais tarde!");
    
                setTimeout(() => {
                    setClassMsg("");
                    setMessage("");
                }, 5000)
            })
        }, 5000)

    }

    return ( 
        <div className="admMusic">
            {progressBar ? <ProgressBar /> : 
                <>
                    <h1>Listas de músicas</h1>
                    {requestMusicAdm.length > 0 ? (
                        <>
                            <div className="container-table">
                                {!statusDelete && <Message msg={message} classMsg={classMsg} /> }
                                <div className="boxTable">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Compositor</th>
                                                <th>Gênero</th>
                                                <th>Música</th>
                                                <th>Excluir</th>
                                            </tr> 
                                        </thead>
                                        <tbody>
                                            {requestMusicAdm.map(musicAdm => (
                                                <tr key={musicAdm.IdVideo}>
                                                    <td>{musicAdm.IdVideo}</td>
                                                    <td>{musicAdm.compositor}</td>
                                                    <td>{musicAdm.genero}</td>
                                                    <td>{musicAdm.musica}</td>
                                                    <td>
                                                        {!statusDelete ? (
                                                            <button type="button" className="active" onClick={() => handleDelete(musicAdm.IdVideo)}>
                                                                <FaTrashAlt />
                                                            </button>
                                                        ) : (
                                                            musicAdm.IdVideo == idMusicDelete ? (<ProgressBar />) : (<button type="button" className="disabled" disabled><FaTrashAlt /></button>)
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Message msg={message} classMsg={classMsg} />
                    )}
                </>
            }
        </div>
    );
}
 
export default GerenciarMusic;