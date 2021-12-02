import './App.css';
import { Practice } from './lesson2/Practice';
import Message from './Message';

const textMessage = 'Моё второе задание на курсе React';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message name={textMessage}></Message>
      </header>
      <main>
        <Practice></Practice>
      </main>
    </div>
  );
}

export default App;

