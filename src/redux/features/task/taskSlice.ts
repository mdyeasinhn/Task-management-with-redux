import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";


interface  InitialState {
    tasks : ITask[];
    filter : "all" | "high" | "medium" | "low" 
}
const initialState : InitialState ={
    tasks :[ ],
    filter : "all",
};

type DraftTask = Pick<ITask, 'title'| 'description' | 'dueDate' |"priority">

const createTask = (taskData : DraftTask) : ITask =>{
    return {id : nanoid(), isCompleted : false, ...taskData}
}
const taskSlice = createSlice({
    name : "task",
    initialState ,
    reducers  :{
        addTask : (state, action : PayloadAction<DraftTask>) =>{

        const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        }
    }
});

export const selectTasks =(state : RootState) =>{
    return state.todo.tasks
};
export const selectFilter =(state : RootState) =>{
    return state.todo.filter;
};

export const {addTask} = taskSlice.actions
export default taskSlice.reducer;