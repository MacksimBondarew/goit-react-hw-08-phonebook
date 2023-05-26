import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors'

export default function RestrictRoute({ component: Component, redirectTo = '/'}) {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ? <Navigate to={redirectTo} /> : Component;
}
