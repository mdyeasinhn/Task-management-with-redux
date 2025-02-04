import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/taskSlice"
import userReducer from './features/user/userslice'




export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo  : taskReducer,
        user : userReducer,
    },


});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

