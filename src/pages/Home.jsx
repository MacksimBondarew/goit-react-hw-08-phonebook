import React from 'react';
import { Wrapper, Title, Button, Section } from '../style/Home.styled';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function Home() {
  const isLoggenIn = useSelector(selectIsLoggedIn);
    return (
        <Section>
            <Wrapper>
                <Title>
                    Digital Contact Archive: Store, find and organize your
                    contacts with ease!"
                </Title>
                <>
                    <Link to={isLoggenIn ? "/home" : '/register'}>
                        <Button type="button">Get started</Button>
                    </Link>
                </>
            </Wrapper>
        </Section>
    );
}
