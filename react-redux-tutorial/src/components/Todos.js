// 프레젠테이셔널 컴포넌트 : 상태 업뎃에는 관여하지 않고 그저 props만 받아와서 화면에 띄움
import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>delete</button>
    </div>
  );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">upload</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default Todos;