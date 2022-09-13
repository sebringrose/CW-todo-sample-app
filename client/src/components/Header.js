import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../state/actions';

const Header = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewToDoText] = useState("");

  return <header>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>Testing Todos</h1>
      <span>
        <input 
          type="text" 
          value={newTodoText}
          onChange={(e) => setNewToDoText(e.target.value)} 
        />
        <button onClick={() => {
          addTodo(dispatch, newTodoText);
          setNewToDoText("");
        }}>ADD</button>
      </span>
    </div>
    <hr />
  </header>;
};

export default Header;
