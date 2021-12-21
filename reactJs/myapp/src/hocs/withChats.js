
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeChat, addChat } from '../store/chats/action';
import { getChatList } from '../store/chats/selectors';
import {removeMessagesByChatID} from '../store/messages/action';
import { createChat } from '../helpers/index';

export const withChats = (Component) => {
    
    return (props) => {
        
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreateChat = useCallback(() => {
        dispatch(addChat(createChat('chat name')))
    }, []);

    const onDeleteChat = useCallback((chatId) => {
        dispatch(removeChat(chatId))
        dispatch(removeMessagesByChatID(chatId))
    }, [])

    return <Component
        {...props}
        chats={chats}
        onCreateChat={onCreateChat}
        onDeleteChat={onDeleteChat}
        />
    }
}