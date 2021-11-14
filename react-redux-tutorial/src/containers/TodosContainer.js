import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // 비구조화 할당을 통하여서 state에서 todos만 따로 분리해서 들고온거
  ({todos})=>({
    input: todos.input,
    todos:todos.todos,
  }),
  // 두번째 파라미터에 함수만 넣어줘도 알아서 dispatch하고 묶어준다.
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);