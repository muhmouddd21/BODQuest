import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@services/axios-global";
import axiosErrorHandle from "@utils/axiosErrorHandle";

const ActCheckAuth = createAsyncThunk('auth/ActCheckAuth',
    async(_,thunkApi)=>{
        const {rejectWithValue,fulfillWithValue}= thunkApi;

        try {
            const response = await api.post('/users/fresh'); 
            return fulfillWithValue(response.data)

        } catch (error) {
            return rejectWithValue(axiosErrorHandle(error))
        }

})

export default ActCheckAuth;