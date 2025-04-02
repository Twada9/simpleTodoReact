import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from './store/store'
import { addTodo, removeTodo, toggleComplete, setDate } from "./store/todoSlice";
import './TodoList.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

function TodoList() {
    const todosState = useSelector<RootState, RootState["todos"]>((state) => state.todos)
    const dispatch = useDispatch()
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    return (
        <>
            <ul>
                {todosState.todos.map((todo) => (
                    <li key={todo.id}>
                        <p className='text' onClick={() => dispatch(removeTodo(todo.id))}>{todo.text}</p>
                        <p className='completed' onClick={() => dispatch(toggleComplete(todo.id))}>{todo.completed ? "完了" : "未完了"}</p>
                        <p className='date'>{todo.date?.toDateString() ?? "期限なし"}</p>
                        <button onClick={ () => dispatch(setDate({ id: todo.id, date: new Date() })) }>日付</button>    
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                label="日付を選択"
                                value={selectedDate}
                                onChange={
                                    (newValue) => {
                                        setSelectedDate(newValue);
                                        if (newValue) {
                                            dispatch(setDate({ id: todo.id, date: newValue.toDate() }))
                                        }
                                    }
                                }
                            />
                        </LocalizationProvider>                    

                    </li>
                ))}
            </ul>
            <button onClick={ () => dispatch(addTodo("todo3")) }>追加</button>

        </>

        
    )
}

export default TodoList
