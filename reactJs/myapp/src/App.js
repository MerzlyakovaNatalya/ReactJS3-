import './App.css';
import { MessageList } from './components/MessageList';
import Message from './components/Message';
import Navigation from './components/Navigation';

const textMessage = 'Моё третье задание на курсе React';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message name={textMessage}></Message>
      </header>
      <Navigation></Navigation>
      <main>
        <MessageList></MessageList>
      </main>
    </div>
  );
}

export default App;

