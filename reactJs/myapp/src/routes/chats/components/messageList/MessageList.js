
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
