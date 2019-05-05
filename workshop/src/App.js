import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="App">
      <button
        onClick={() => setCounter(counter + 1)}
        className="increment-counter"
      >
        +
      </button>
      <span className="counter-value">{counter}</span>

      <br />

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="example-text-input"
      />
      <span className="reflected-text">{text}</span>
    </div>
  );
}

export default App;
