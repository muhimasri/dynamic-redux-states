import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTodoList() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodoList(data);
      dispatch({
        type: 'UPDATE_TODO_LIST',
        value: data
      })
    }
    getTodoList();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((item) => (
          <tr key={item.id}>
            <td><TextBox id={item.id}></TextBox></td>
            <td><CheckBox id={item.id}></CheckBox></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TextBox = ({id}) => {
  const value = useSelector(state => state.todoList[id]?.title)
  const dispatch = useDispatch();
  function changeHandler(e) {
    dispatch({
      type: 'UPDATE_TODO_FIELD',
      value: {id, value: e.target.value, field: 'title'}
    })
  }
  return <input type="text" value={value} onChange={changeHandler} />
}

const CheckBox = ({id}) => {
  const value = useSelector(state => state.todoList[id]?.completed)
  const dispatch = useDispatch();
  function changeHandler(e) {
    dispatch({
      type: 'UPDATE_TODO_FIELD',
      value: {id, value: e.target.checked, field: 'completed'}
    })
  }
  return <input type="checkbox" value={value} onChange={changeHandler} />
}