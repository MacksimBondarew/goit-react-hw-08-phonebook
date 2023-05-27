import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #3eb489;
    color: white;
    border-radius: 15px;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Link = styled(NavLink)`
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 1;
    }

    &.active {
        font-weight: bold;
        opacity: 1;
    }
`;

export const Authorization = styled.div`
    margin-left: auto;
    ${Link}:first-child {
        margin-right: 1rem;
    }
`;
