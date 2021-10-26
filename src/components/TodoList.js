import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};