import React from 'react';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Box, Text, Button } from '@chakra-ui/react';

export default function Home() {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="500px"
        >
            <Box
                width="sm"
                height="ms"
                pb="50px"
                pr="50px"
                pl="50px"
                bg="white"
                paddingTop="30px"
                borderRadius="20px"
                textAlign="center"
            >
                <Text fontSize="2xl" mb="30px">
                    Digital Contact Archive: Store, find and organize your
                    contacts with ease!"
                </Text>
                <>
                    <Link to={isLoggenIn ? '/contacts' : '/authorisation'}>
                        <Button colorScheme="teal" type="button">
                            Get started
                        </Button>
                    </Link>
                </>
            </Box>
        </Box>
    );
}
