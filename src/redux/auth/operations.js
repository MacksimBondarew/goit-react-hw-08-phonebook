import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = ``;
// };

export const registerUser = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const response = await axios.post('/users/signup', credentials);
        console.log(response.data);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.error;
    }
});

