import "./Message.css";

const Message = ({ classMsg, msg }) => {
    return ( 
        <span className={classMsg}>{msg}</span>
    );
}
 
export default Message;