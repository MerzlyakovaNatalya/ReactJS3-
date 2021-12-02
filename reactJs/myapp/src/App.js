import './App.css';
import Message from './Message';
import img from "./images.png"

const textMessage = 'Моё первое задание на курсе React';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message name={textMessage}></Message>
        <p><img src={img} alt="lorem"></img></p>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;

