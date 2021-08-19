import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const counter = useSelector(state => state.counter);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button

      >
        {' + '}
      </button>
      <button

      >
        {' - '}
      </button>
      <hr />
      {
        // Implement the todo list

      }
    </div>
  );
};

export default App;
