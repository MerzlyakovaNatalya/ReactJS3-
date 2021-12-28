import { Link } from "react-router-dom";

const Home = () => {
    return (
      <>
      <h1>Home</h1> 
      <div>
      <Link to="/login">Sign In</Link>
    </div>
    <div>
      <Link to="/signup">Sign Up</Link>
    </div>
      </> 
    )
}

export default Home;