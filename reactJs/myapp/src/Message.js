import './Message.css';

function Message(props) {
    return(
        <div className="wrap-message">
          <p className="text-message">{props.name}</p>
        </div>
    );
}

export default Message;