import { Avatar, Box, Button, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectEmail, selectName } from 'redux/auth/selectors';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    return (
        <Box display="flex" alignItems="center">
            <Avatar
                mr="10px"
                width="38px"
                height="38px"
                name={name}
                src="https://bit.ly/tioluwani-kolawole"
            />
            <Text mr="10px">{useSelector(selectEmail)}</Text>
            <Button
                rightIcon={
                    <Icon viewBox="0 0 32 32" fill='white'>
                        <path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>
                    </Icon>
                }
                colorScheme="teal"
                onClick={() => dispatch(logOut())}
            >
                Logout
            </Button>
        </Box>
    );
}
