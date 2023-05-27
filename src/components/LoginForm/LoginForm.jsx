import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import {
    Input,
    Box,
    InputGroup,
    InputLeftElement,
    Text,
    Button,
    InputRightElement,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
const LinkForm = styled(Link)`
    color: teal;
    text-align: center;
    margin-left: 5px;
    font-weight: 700;
`;

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const dispatch = useDispatch();
    const loginUser = (email, password) => {
        const contact = {
            email,
            password,
        };
        dispatch(login(contact));
    };

    const deliveryData = data => {
        const { email, password } = data;
        loginUser(email, password);
        reset();
    };
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="500px"
        >
            <Box
                width="sm"
                height="sm"
                pb="70px"
                pr="50px"
                pl="50px"
                bg="white"
                paddingTop="30px"
                borderRadius="20px"
                textAlign="center"
            >
                <form onSubmit={handleSubmit(deliveryData)}>
                    <Text
                        fontSize="30px"
                        textAlign="center"
                        fontWeight="semibold"
                        mb="10px"
                    >
                        Login
                    </Text>
                    <Box display="flex">
                    <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <EmailIcon />
                            </InputLeftElement>
                            <Input
                                type="text"
                                name="email"
                                {...register('email')}
                                aria-invalid={errors.email ? 'true' : 'false'}
                                size="md"
                                mb="20px"
                                placeholder="Enter email"
                            />
                        </InputGroup>
                    </Box>
                    <Box display="flex">
                        <InputGroup>
                        <InputLeftElement pointerEvents="none">
                                <LockIcon />
                            </InputLeftElement>
                        <Input
                            type={show ? 'text' : 'password'}
                            name="password"
                            {...register('password')}
                            aria-invalid={errors.password ? 'true' : 'false'}
                            size="md"
                                mb="40px"
                                placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                                <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleClick}
                                >
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                    <Text mb="30px" fontWeight="500" fontSize="15px">
                    If you are not registered yet, please click on
                        {<LinkForm to="/authorisation">Registration</LinkForm>}
                    </Text>
                    <Button
                        variant="solid"
                        display="inline-block"
                        colorScheme="teal"
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Box>
    );
}
