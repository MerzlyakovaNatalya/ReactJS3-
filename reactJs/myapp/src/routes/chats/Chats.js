import MessageList from './components/messageList/MessageList';
import ChatList from './components/chatList/ChatList';
import { CHATS } from './../../helpers/mock';
import { Routes, Route } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { create } from '@mui/material/styles/createTransitions';
import { createChat, removeChat, setChats } from '../../store/chats/action';
import { nanoid } from 'nanoid';
import {getChatList} from '../../store/chats/selectors';
import {removeMessagesByChatID} from '../../store/messages/action';
 

const Chats = () => {
   
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback(() => {
        dispatch(createChat({
            id: nanoid(),
            name: "chatName"
        }))
    }, []);

    const onDelete = (chatId) => {
        dispatch(removeChat(chatId))
        dispatch(removeMessagesByChatID(chatId))
    }

    {/*useEffect(() => {
        dispatch(setChats(CHATS), [])
    })*/}

    return (
        <>
        <ChatList list={chats} onDelete={onDelete}></ChatList>
        <button onClick={onCreate}>Create chat</button>
        <div className="message"> 
        <Routes>
                 <Route path=":chatId" element={<MessageList/>} />
        </Routes>
        </div>
        </>
    );
};

export default Chats;