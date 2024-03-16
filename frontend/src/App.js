import React from 'react';
import './App.css';
import Chat from './components/Chat';
import ChatApp from './components/ChatApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-Time Chat</h1>
      </header>
      <aside className='App-recive'>
        <ChatApp />
      </aside>
      <div className="App-body">
        <Chat />
      </div>

    </div>
  );
}

export default App;
