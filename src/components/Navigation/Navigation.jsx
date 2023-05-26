import React from 'react';
import { Nav, Authorization, Link } from '../../style/SharedLayout.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Navigation() {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return (
        <>
            <Nav>
                <Link to="/">Home</Link>
                {isLoggenIn && <Link to="/contacts">Contacts</Link>}
            </Nav>
            <Authorization>
                {isLoggenIn ? (
                    <UserMenu />
                ) : (
                    <>
                        <Link to="/authorisation">Authorisation</Link>
                    </>
                )}
            </Authorization>
        </>
    );
}
