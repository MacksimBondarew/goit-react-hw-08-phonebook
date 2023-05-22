import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import {
    Header,
    Nav,
    Authorization,
    Link,
} from '../../style/SharedLayout.styled';
export default function SharedLayout() {
    return (
        <>
            <Header>
                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/contacts">Contacts</Link>
                </Nav>
                <Authorization>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
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
