import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import {
    Header,
    Nav,
    Authorization,
    Link,
} from '../../style/SharedLayout.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
export default function SharedLayout() {
    const isLoggenIn =useSelector(selectIsLoggedIn); 
    return (
        <>
            <Header>
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/contacts">Contacts</Link>
                </Nav>
                <Authorization>
                    {isLoggenIn ? (
                        <UserMenu />
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </Authorization>
            </Header>
            <Suspense
                fallback={
                    <DotLoader
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            zIndex: '999',
                        }}
                        color="#3682d6"
                        cssOverride={{}}
                        loading
                        size={70}
                    />
                }
            >
                <Outlet />
            </Suspense>
        </>
    );
}
