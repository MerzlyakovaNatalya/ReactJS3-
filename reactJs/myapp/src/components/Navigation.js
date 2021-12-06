import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navigation = () => {

    const menuItem = [
        {
          name: "Name",  
          id: "1",
        },
        {
           name: "Name", 
           id: "2"},
        {
           name: "Name", 
           id: "3"
        }
    ]

    return (
        <>
        <List
        sx={{marginRight: 5}}>
            {menuItem.map(item => (
                <ListItem key={item.id}>{item.name}</ListItem>
            ))}
        </List>
        </>
    )
}

export default Navigation;