import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CHATS } from './../../../../helpers/mock'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ChatList = () => {

    return (
        <>
        <List
        sx={{marginRight: 5}}>
            {CHATS.map(item => (
                <ListItem key={item.id}>
                    <Link to={`/chats/${item.id}`}>{item.name}</Link>
                    {/*<Button to="/chats/:chatId" component={Link} color="inherit">{item.name} {`/chats/${item.id}`}
                    </Button>*/}
                </ListItem>
            ))}
        </List>
        </>
    )
}

export default ChatList;