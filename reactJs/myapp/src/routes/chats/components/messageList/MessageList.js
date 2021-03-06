
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { withChatMessages } from '../../../../hocs/withChatMessages';
import style from './MessageList.module.css';
import { Form } from './form';
import { useEffect } from "react";

export const MessagesRender = ({
                            messageList,
                            hasChat,
                            onSubmitMessage,
                              }) => {
const navigate = useNavigate();

useEffect(() => {
if (!hasChat) {
  return navigate('/chats');
 }
}, []) 
                                
    return (
     <>  
      <div className={style.messageList}>{messageList}
           {/*{messageList.map((item, index)=>(
              <p key={index}>{item.author} - {item.text}</p>
            ))}*/}
       </div>
      <div>
          <Form onSubmitMessage={onSubmitMessage}/>
        </div>
      </>
         )
          }
                                
     export const MessagesList = withChatMessages(MessagesRender);

/*const MessageList = () => {
    const {chatId} = useParams();
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatId));
    const hasChat = useSelector(hasChatById(chatId));
     
    const inputRef = useRef();
    
    //const [messageList, setMessageList] = useState([]);
    //const [value, setValue] = useState("");

    const sendMessage = (author, text) => {
        const newMessageList = {
            author,
            text
        };
        dispatch(createMessage(newMessageList, chatId ))
    };

    //const resetForm = () => {
    //    setValue("");
    //};

    const onSubmitMessage = (value) => {
        sendMessage("user", value);
        {/*resetForm();*/}
    };

    useEffect(() => {
        if (!messageList || messageList.length === 0) {
           return;
        }

        const tail = messageList[messageList.length - 1];
        if(tail.author === "bot") {
            return;
        }
        
        sendMessage("bot", "hello");
    }, [messageList]);

    useEffect(() => {
        inputRef.current.focus()
    });

    {/*useEffect(() => {
        if (!CHATS.find(({ id }) => id === chatId)) {
      return navigate('/chats');}
    })*/}

    if (!hasChat) {
        return navigate('/chats');
    }

    return (
        <>  
            <div className={style.messageList}>
                {messageList.map((item, index)=>(
                    <p key={index}>{item.author} - {item.text}</p>
                ))}
            </div>
            <div>
            <form noValidate autoComplete="off" onSubmit={onSubmitMessage}>
            <TextField
              inputRef={inputRef}
              onChange={(event) => event.target.value}
              label="C????????????????"
              variant="outlined"
              color="secondary"
              sx={{marginBottom: 2,
                   marginTop: 2,
                   outline: 0
                  }}
            />
              <Button 
              type="submit"
              color="secondary"
              variant="contained"
              sx={{
                marginLeft: 1,
                marginTop: 4.3
            }}
              >
                ??????????????????
              </Button>
            </form>
        </div>
        </>
    )
}

export default MessageList;*/