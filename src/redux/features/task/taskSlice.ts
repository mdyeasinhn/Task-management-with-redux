import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userslice";


interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low"
}
const initialState: InitialState = {
    tasks: [
        {
            "id": "1",
            "title": "Grocery Shopping",
            "description": "Buy milk, eggs, bread, and cheese.",
            "dueDate": "2024-03-15",
            "isCompleted": false,
            "priority": "high",
            assignedTo: null,
        },
    ],
    filter: "all",
};

type DraftTask = Pick<ITask, 'title' | 'description' | 'dueDate' | "priority" | "assignedTo">

const createTask = (taskData: DraftTask): ITask => {
    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false,
        assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
    }
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {

            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
            state.filter = action.payload
        },
        updateTask: (state, action: PayloadAction<{ id: string; updatedTask: DraftTask }>) => {
            const { id, updatedTask } = action.payload;
            state.tasks = state.tasks.map(task =>
                task.id === id ? { ...task, ...updatedTask } : task
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(deleteUser, (state, action) => {
            state.tasks.forEach((task) => {
                if (task.assignedTo === action.payload) {
                    task.assignedTo = null;
                }
            });
        });
    }
    

});

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;

    if (filter === 'low') {
        return state.todo.tasks.filter((task) => task.priority === 'low')
    } else if (filter === 'medium') {
        return state.todo.tasks.filter((task) => task.priority === 'medium')
    } else if (filter === 'high') {
        return state.todo.tasks.filter((task) => task.priority === 'low')

    } else {
        return state.todo.tasks
    }
};
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
};

export const { addTask, toggleCompleteState, deleteTask, updateTask, updateFilter } = taskSlice.actions
export default taskSlice.reducer;
