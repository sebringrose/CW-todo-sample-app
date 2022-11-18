import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, unCompleteTodo, removeTodo } from '../state/actions';

const List = ({ completed }) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const renderedTodos = todos.filter(todo => !completed ? !todo.completed : todo.completed);
  if (!renderedTodos[0]) return null;

  return <div style={{ marginBottom: '50px' }}>
    <h2>{!completed ? 'To do:' : 'Completed:'}</h2>
    {renderedTodos.map(todo => <div key={todo.id} style={{
      display: "flex",
      alignItems: "center"
    }}>
      <input 
        type='checkbox'
        role='checkbox'
        defaultChecked={completed}
        onClick={() => !completed 
          ? completeTodo(dispatch, todo) 
          : unCompleteTodo(dispatch, todo)
        }
      />
      <h3>{todo.text}</h3>
      {completed && <button class="remove" role="button" onClick={() => removeTodo(dispatch, todo)}>
        Remove
      </button>}
    </div>)}
  </div>;
};

export default List;
