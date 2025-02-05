import { RootState } from "@/redux/store";
import {  IUser } from "@/types";
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";


interface InitialState {
    users: IUser[];
   
}
const initialState: InitialState = {
    users: [
        {
            "id": "1",
            "name": "Grocery Shopping",
       
        },
    ],
};

type DraftUser = Pick<IUser, 'name' >

const createUser = (userData: DraftUser): IUser => {
    return { id: nanoid(),  ...userData }
}
const userSlice = createSlice({
    name: "user",
    initialState : initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DraftUser>) => {

            const userData = createUser(action.payload)
            state.users.push(userData);
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(task => task.id !== action.payload)
        },
    },

});

export const selectUser = (state: RootState) => state.user.users


export const { addUser, deleteUser } = userSlice.actions
export default userSlice.reducer;
