import { useDispatch } from 'react-redux';
import { removeTodo, completeTodo, unCompleteTodo } from '../state/actions';

const List = ({ todos, completed }) => {
  const dispatch = useDispatch();
  if (!todos[0]) return null;

  return <div style={{ marginBottom: '50px' }}>
    <h2>{!completed ? 'To do:' : 'Completed:'}</h2>
    {todos.map(todo => <h2 key={todo.id}>
      <span>
        <input 
          type='checkbox' 
          defaultChecked={completed}
          onClick={() => !completed 
            ? completeTodo(dispatch, todo) 
            : unCompleteTodo(dispatch, todo)
          }
        />
      </span>
      {todo.text}
    </h2>)}
  </div>;
};

export default List;
