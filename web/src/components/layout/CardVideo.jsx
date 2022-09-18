import "./CardVideo.css"

const CardVideo = ({imgCompositor, nameCompositor, handleClickCardVideo}) => {
    return ( 
        <>
            <div className="card" onClick={handleClickCardVideo}>
                <div className="boxImg">
                    <img src={imgCompositor} alt={nameCompositor} />
                </div>
                <h2 className="boxH2">{nameCompositor}</h2>
            </div>
        </>
    );
}
 
export default CardVideo;