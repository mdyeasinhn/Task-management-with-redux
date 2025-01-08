import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface  InitialState {
    tasks : ITask[];
    filter : "all" | "high" | "medium" | "low" 
}
const initialState : InitialState ={
    tasks :[
        {
            id :  " afjldfj",
            title : "intilaze frontend",
            description : "crate home page,and routeing ",
            dueDate : "",
            isCompleted : false,
            priority : "Low"
        },
        {
            id :  " afjldfj",
            title : "init git hub repo",
            description : "crate home page,and routeing ",
            dueDate : "",
            isCompleted : false,
            priority : "High"
        }
    ],
    filter : "all",
}
const taskSlice = createSlice({
    name : "task",
    initialState ,
    reducers  :{}
});

export const selecTasks =(state : RootState) =>{
    return state.todo.tasks
}
export default taskSlice.reducer;