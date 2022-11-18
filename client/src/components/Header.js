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
      <h1>Sample Todo App</h1>
      <span>
        <label>
          New Todo:&nbsp;
          <input 
            type="text" 
            value={newTodoText}
            onChange={(e) => setNewToDoText(e.target.value)} 
          />
        </label>

        <button id="add" onClick={() => {
          addTodo(dispatch, newTodoText);
          setNewToDoText("");
        }}>ADD</button>
      </span>
    </div>
    <hr />
  </header>;
};

export default Header;
