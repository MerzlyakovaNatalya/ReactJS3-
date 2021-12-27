import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import { Profile } from './routes/Profile';
import { Chats } from './routes/chats/Chats';
import Header from './components/header/Header';
import { Animals } from './routes/new/index';



function App() {
  return (
    <div className="App">
        <div className="wrap">
          <Header></Header>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<Profile/>} />
              <Route path="chats/*" element={<Chats/>} />
              <Route path="new" element={<Animals/>} />
              <Route path="*" element={"NotFound"}/>
        </Routes>
        </div>
      </div>
  );
}

export default App;

