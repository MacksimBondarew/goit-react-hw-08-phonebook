import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import {
    Header,
} from '../../style/SharedLayout.styled';
import Navigation from 'components/Navigation/Navigation';
export default function SharedLayout() {
    return (
        <>
            <Header>
                <Navigation />
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
