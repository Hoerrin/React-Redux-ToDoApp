import * as React from "react";
import { TaskItem } from "./TaskItem";
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from "./tasksListSlice";


export function TasksList() {
    const tasks = useSelector((state) => state.tasksList)
    const dispatch = useDispatch()
    
    const taskToTaskItem = task => {
        const title = task.title;
        const description = task.description;
        const completed = task.completed
        const tag = task.tag;
        const tagColor = task.tagColor
        return <TaskItem title={title} description={description} completed={completed} tag={tag} tagColor={tagColor}/>
    };

    return (
        <>
            <button onClick={() => dispatch(addTask())}>Create task</button>
            <ul className="">
                {tasks.map(taskToTaskItem)}
            </ul>
        </>

    );
}
