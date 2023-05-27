import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``;
};

export const registerUser = createAsyncThunk(
    'auth/register',
    async credentials => {
        try {
            const response = await axios.post('users/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            toast.error(
                `Sorry, but an error occurred during your registration`
            );
        }
    }
);
export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const response = await axios.post('users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        toast.error(
            `An error occurred while trying to sign in. It seems that you have entered incorrect user details`
        );
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await axios.post('users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistToken = state.auth.token;
        if (persistToken === null) {
            return thunkApi.rejectWithValue('Token undefined');
        }
        try {
            setAuthHeader(persistToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
