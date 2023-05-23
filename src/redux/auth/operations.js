import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = ``;
// };

export const registerUser = createAsyncThunk('auth/register', async (dataRegister, thunkApi) => {
    try {
        const response = await axios.post('/users/signup', dataRegister);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

