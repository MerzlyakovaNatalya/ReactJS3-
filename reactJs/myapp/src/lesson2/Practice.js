import { useState, useEffect } from 'react';

export const Practice = () => {
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

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);  
    };
    
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

    return (
        <div>
            <form onSubmit={onSubmitMessage}>
            <input type="text" onChange={onChangeMessageInput} value={value} placeholder="Cообщение"></input>
           <button type="submit">Отправить</button>
            </form>
            <div>
                {messageList.map((item, index)=>(
                    <p key={index}>{item.author} - {item.text}</p>
                ))}
            </div>
        </div>
    )
}