import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}
const App = () => {
  //eslint-disable-next-line
  /*const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 제작',
      checked: false,
    },
  ]);*/
  const [todos, setTodos] = useState(createBulkTodos); //만약 createBulkTodos() 로 적으면 리렌더링될 때마다 함수가 호출된다.
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    // todos가 바뀔 때마다 새롭게 함수가 만들어진다. (성능저하 발생)
    // 기존처럼 파라미터로 업데이트 할 값이 아니라 업데이트 방식을 정의한 함수를 넘긴다.
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    );
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;