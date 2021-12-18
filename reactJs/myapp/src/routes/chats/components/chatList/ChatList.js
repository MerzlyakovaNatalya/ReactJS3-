import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CHATS } from './../../../../helpers/mock'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ChatList = ({list, onDelete}) => {

    return (
        <>
        <List
        sx={{marginRight: 5}}>
            {list.map(item => (
                <ListItem key={item.id} {...item}>
                    <Link to={`/chats/${item.id}`}>{item.name}</Link>
                    <button type="button" onClick={onDelete}></button>
                    {/*<Button to="/chats/:chatId" component={Link} color="inherit">{item.name} {`/chats/${item.id}`}
                    </Button>*/}
                </ListItem>
            ))}
        </List>
        </>
    )
}

export default ChatList;