import { useState, useEffect } from "react";
import "./todo.css";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function getTodoList() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodoList(await response.json());
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
