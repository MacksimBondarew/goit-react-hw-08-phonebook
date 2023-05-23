import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts';
import { filterReducer } from './contacts/filter';
import { authReducer } from './auth/slice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: authReducer,
    },
});