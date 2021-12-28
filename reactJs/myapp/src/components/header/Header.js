import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

const Header = () => {
  return (
   
     <AppBar position="static">
       <Toolbar>
        <Button to="/" component={Link} color="inherit">
          Home
        </Button>
        <Button to="/profile" component={Link} color="inherit">
          Profile
        </Button>
        <Button to="/chats" component={Link} color="inherit">
          Chats
        </Button>
        <Button to="/new" component={Link} color="inherit">
          New
        </Button>
        <Button to="/signup" component={Link} color="inherit">
        Registration
        </Button>
        <Button to="/login" component={Link} color="inherit">
        Login
        </Button>
       </Toolbar>
     </AppBar>
   
  )
}

export default Header;