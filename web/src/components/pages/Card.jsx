import { useState, useEffect } from "react"
import { FaTimesCircle, FaHandPointDown } from 'react-icons/fa';
import axios from "axios"

import { FaMusic } from "react-icons/fa";

import CardVideo from "../layout/CardVideo";
import Iframe from "../layout/Iframe";
import ProgressBar from "../layout/ProgressBar";
import Message from "../layout/Message";

const Card = () => {

    const [requestVideos, setRequestVideos] = useState([])
    const [videoPrincipal, setVideoPrincipal] = useState("")
    const [message, setMessage] = useState("");
    const [classMsg, setClassMsg] = useState("");
    const [progressBar, setProgressBar] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setProgressBar(false)

            const fetchVideos = async () => {

                try{
                    const { data } = await axios.get(
                        "http://localhost/server/funcoes.php"
                    );
    
                    setRequestVideos(data);
                }
                catch(error){
                    setClassMsg("message background-error");
                    setMessage("Estamos com problemas no servidor. Tente novamente mais tarde");
                }

            };

            fetchVideos();

        }, 5000)

	}, []);

    const handleClickCardVideo = (id) => {
        const newVideoPrincipal = requestVideos.filter(video => video.IdVideo === id)

        setVideoPrincipal(newVideoPrincipal)
    }

    const closeMusic = () => {
        setVideoPrincipal("");
    }

    return ( 
        <>
            {videoPrincipal ? 
                (
                    videoPrincipal.map(music => 
                        (
                            <div className="container-principal" key={music.IdVideo}>
                                <div className="d-flex">
                                    <h1 className="title-h1">
                                        <FaMusic /> &nbsp; {music.musica}
                                    </h1>
                                    <button className="close" type="button" onClick={closeMusic}>
                                        <FaTimesCircle />
                                    </button>
                                </div>
                                <div className="boxMusicPrincipal">
                                    <Iframe 
                                        width="100%" 
                                        height="100%" 
                                        src={music.link} 
                                    />
                                </div>
                            </div>
                        )
                    )
                ) : (
                        <div className="container-principal">
                            <div className="boxMusicPrincipal">
                                <div className="imgDefault">
                                    <h1 className="title-h1">Selecione a música que você quer ouvir <FaHandPointDown /></h1>
                                </div>
                            </div>
                        </div>          
                    )
            }
            {progressBar ? <ProgressBar /> :
                <>
                    {requestVideos.length > 0 ? 
                        <div className="container-videos">
                            {requestVideos.map(video => (
                                <CardVideo 
                                    key={video.IdVideo} 
                                    imgCompositor={`http://localhost/server/photos/${video.foto}`}
                                    nameCompositor={video.compositor}
                                    handleClickCardVideo={() => handleClickCardVideo(video.IdVideo)}
                                />
                            ))}
                        </div> : <Message msg={message} classMsg={classMsg} />
                    }
                </>
            }
        </>
    );
}
 
export default Card;