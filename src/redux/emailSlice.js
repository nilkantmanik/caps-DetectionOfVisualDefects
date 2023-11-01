import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    doctoremail:"",
}

export const emailSlice = createSlice({
    name:'email',
    initialState,
    reducers:{
        addEmail:(state,action) => {
            state.doctoremail = action.payload;
        },
        removeEmail: (state,action) =>{
            state.doctoremail = "";
        }
    }
})


export const { addEmail, removeEmail } = emailSlice.actions;

export default emailSlice.reducer;
