import { TToast } from "@customtypes/index";
import { createSlice, nanoid } from "@reduxjs/toolkit";

interface IToastState {
  records: TToast[];
}

const initialState: IToastState = {
  records: [],
};

const ToastSlice = createSlice({
    name:"Toasts",
    initialState,
    reducers:{
        removeToast: (state, action) => {
          state.records = state.records.filter((el) => el.id !== action.payload);
        },
        addToast: (state, action) => {
        state.records.push({
            id: nanoid(),
            title: action.payload.title || action.payload.type,
            type: action.payload.type,
            message: action.payload.message,
          });
        },
    }

})
export default ToastSlice.reducer;
export const {removeToast,addToast} = ToastSlice.actions