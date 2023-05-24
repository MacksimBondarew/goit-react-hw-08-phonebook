import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectEmail } from 'redux/auth/selectors';

export default function UserMenu() {
    const dispatch = useDispatch();
    return (
        <div>
            <p>{useSelector(selectEmail)}</p>
            <button onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    );
}
