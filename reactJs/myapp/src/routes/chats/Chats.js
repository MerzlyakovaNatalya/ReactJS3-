import MessageList from './components/messageList/MessageList';
import ChatList from './components/chatList/ChatList';
import { CHATS } from './../../helpers/mock';
import { Routes, Route } from 'react-router-dom';

const Chats = () => {
    return (
        <>
        <ChatList list={CHATS}></ChatList>
        <div className="message"> 
        <Routes>
                 <Route path=":chatId" element={<MessageList/>} />
        </Routes>
        </div>
        </>
    )
}

export default Chats;