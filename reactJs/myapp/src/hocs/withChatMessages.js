import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getChatMessagesById } from '../store/messages/selectors';
import { hasChatById } from '../store/chats/selectors';
import { createMessage } from '../store/messages/action';
import { sendMessageWithThunk } from '../store/messages/action';
import { USER_AUTHOR } from '../constants/userAuthor';
import { useRef } from 'react';

export const withChatMessages = (Component) => {
    return (props) => {

        const {chatId} = useParams(); 
        const dispatch = useDispatch();
        const messageList = useSelector(getChatMessagesById(chatId));
        const hasChat = useSelector(hasChatById(chatId));


        const onSubmitMessage = (text) => {
            dispatch(sendMessageWithThunk(USER_AUTHOR, text, chatId))
        };

        return <Component
           {...props}
           messageList={messageList}
           hasChat={hasChat}
           onSubmitMessage={onSubmitMessage}
           />
    }
}