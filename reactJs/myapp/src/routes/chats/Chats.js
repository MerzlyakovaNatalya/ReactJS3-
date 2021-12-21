import { MessagesList } from './components/messageList/MessageList';
import ChatList from './components/chatList/ChatList';
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import { withChats } from '../../hocs/withChats';

export const ChatsRender = ({
                          chats,
                          onCreateChat,
                          onDeleteChat
                        }) => {

    return (
        <>
        <ChatList list={chats} onDelete={onDeleteChat}></ChatList>
        <Button onClick={onCreateChat}>CreateChat</Button>
        <div className="message"> 
        <Routes>
                 <Route path=":chatId" element={<MessagesList/>} />
        </Routes>
        </div>
        </>
    )
}

export const Chats = withChats(ChatsRender);