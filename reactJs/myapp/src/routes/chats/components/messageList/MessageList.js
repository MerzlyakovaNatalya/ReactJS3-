import { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './MessageList.module.css';
import { useParams } from 'react-router-dom';
import { CHATS } from './../../../../helpers/mock';
import { useNavigate } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

const MessageList = () => {
    const {chatId} = useParams();
    let navigate = useNavigate();
     
    const inputRef = useRef();
    
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const resetForm = () => {
        setValue("");
    };

    const onSubmitMessage = (event) => {
        event.preventDefault();
        sendMessage("user", value);
        resetForm();
    };

    /*const onChangeMessageInput = (event) => {
        setValue(event.target.value);  
    };*/
    
    useEffect(() => {
        if (messageList.length === 0) {
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

    if (!CHATS.find(({ id }) => id === chatId)) {
        return navigate(-1);
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
              onChange={(event) => setValue(event.target.value)}
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