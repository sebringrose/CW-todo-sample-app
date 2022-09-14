import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, unCompleteTodo } from '../state/actions';

const List = ({ completed }) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  if (!todos[0]) return null;

  return <div style={{ marginBottom: '50px' }}>
    <h2>{!completed ? 'To do:' : 'Completed:'}</h2>
    {todos.filter(todo => !completed ? !todo.completed : todo.completed).map(todo => <h2 key={todo.id}>
      <span>
        <input 
          type='checkbox'
          role='checkbox'
          defaultChecked={completed}
          onClick={() => !completed 
            ? completeTodo(dispatch, todo) 
            : unCompleteTodo(dispatch, todo)
          }
        />
      </span>
      {todo.text}
      {completed && <button role="button">Remove Todo</button>}
    </h2>)}
  </div>;
};

export default List;
