import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``;
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials, thunkApi) => {
        try {
            const response = await axios.post('users/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkApi) => {
        try {
            const response = await axios.post('users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkApi) => {
        try {
            await axios.post('users/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh', async(_, thunkApi) => {
        const state = thunkApi.getState();
        const persistToken = state.auth.token;
        if (persistToken === null) {
            return thunkApi.rejectWithValue('Token undefined');
        }
        try {
            setAuthHeader(persistToken);
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)