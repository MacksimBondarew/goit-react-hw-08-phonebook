import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export default function PrivateRoute({
    component: Component,
    redirectTo = '/',
}) {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggenIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
