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
                <ListItem key={item.id}>
                    <Link to={`/chats/${item.id}`}>{item.name}</Link>
                    <Button onClick={onDelete} color="inherit">Delete
                    </Button>
                </ListItem>
            ))}
        </List>
        </>
    )
}

export default ChatList;