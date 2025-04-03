import { useSelector, useDispatch } from "react-redux";
import { RootState } from './store/store'
import { addTodo, removeTodo, toggleComplete } from "./store/todoSlice";
import './TodoList.css'
function TodoList() {
    const todosState = useSelector<RootState, RootState["todos"]>((state) => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <ul>
                {todosState.todos.map((todo) => (
                    <li key={todo.id}>
                        <p className='text' onClick={() => dispatch(removeTodo(todo.id))}>{todo.text}</p>
                        <p className='completed' onClick={() => dispatch(toggleComplete(todo.id))}>{todo.completed ? "完了" : "未完了"}</p>
                    </li>
                ))}
            </ul>
            <button onClick={ () => dispatch(addTodo("todo3")) }>追加</button>
        </>

        
    )
}

export default TodoList
