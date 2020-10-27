import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:3001/';

const socket = io.connect('http://localhost:3001/');

// function App() {
//   const [response, setResponse] = useState('');

//   const [state, setState] = useState({});
//   const [chat, setChat] = useState([]);

//   useEffect(() => {
//     const socket = socketIOClient(ENDPOINT);
//     socket.on('message', (data) => {
//       setResponse(data);
//     });
//   }, []);

//   return <p>{response}</p>;
// }

// export default App;

function App() {
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit('message', { name, message });
    setState({ message: '', name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  console.dir(state);
  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>NC Messenger</h1>
        <div className="name-field">
          <input
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <input
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default App;
