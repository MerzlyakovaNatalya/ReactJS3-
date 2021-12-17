import { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './MessageList.module.css';
import { useParams } from 'react-router-dom';
import { CHATS } from './../../../../helpers/mock';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { create } from '@mui/material/styles/createTransitions';
import { getMessagesFromStore, getMessages, getChatMessagesById } from '../../../../store/messages/selectors';
import { hasChatById } from '../../../../store/chats/selectors';
import { createMessage } from '../../../../store/messages/action';

const MessageList = () => {
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

    /*const onChangeMessageInput = (event) => {
        setValue(event.target.value);  
    };*/
    
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
              label="Cообщение"
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
                Отправить
              </Button>
            </form>
        </div>
        </>
    )
}

export default MessageList;