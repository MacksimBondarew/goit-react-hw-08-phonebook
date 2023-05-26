import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { registerUser } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import {
    Input,
    Box,
    InputGroup,
    InputLeftElement,
    Text,
    Button,
} from '@chakra-ui/react';
import { Icon, EmailIcon, LockIcon } from '@chakra-ui/icons';
import { toast } from 'react-toastify';

const LinkForm = styled(Link)`
    color: teal;
    text-align: center;
    margin-left: 5px;
    font-weight: 700;
`;

const schema = object({
    name: string()
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Name may contain only letters, apostrophe, dash and spaces'
        )
        .required(),
    email: string()
        .matches(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            'Email may contain only letters, apostrophe, dash and spaces'
        )
        .required(),
    password: string()
        .matches(/.{7,}/, 'The password must be at least 7 characters long')
        .required(),
}).required();

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch();
    const deliveryDataUser = (email, name, password) => {
        dispatch(
            registerUser({
                name,
                email,
                password,
            })
        );
    };

    const deliveryData = data => {
        const { email, name, password } = data;
        deliveryDataUser(email, name, password);
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
                        Registration
                    </Text>
                    <Box display="flex">
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <Icon viewBox="0 0 32 32">
                                    <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                                </Icon>
                            </InputLeftElement>
                            <Input
                                type="text"
                                name="name"
                                {...register('name')}
                                aria-invalid={errors.name ? 'true' : 'false'}
                                size="md"
                                mb="20px"
                                placeholder="Enter name"
                            ></Input>
                            {errors.name &&
                                errors.name &&
                                toast.error(`${errors.name.message}`)}
                        </InputGroup>
                    </Box>
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
                            {errors.email &&
                                toast.error(`${errors.email.message}`)}
                        </InputGroup>
                    </Box>
                    <Box>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <LockIcon />
                            </InputLeftElement>
                            <Input
                                type="password"
                                name="password"
                                {...register('password')}
                                aria-invalid={
                                    errors.password ? 'true' : 'false'
                                }
                                size="md"
                                mb="20px"
                                placeholder="Enter password"
                            />
                            {errors.password &&
                                errors.password &&
                                toast.error(`${errors.password.message}`)}
                        </InputGroup>
                    </Box>
                    <Text mb="10px" fontWeight="500" fontSize="15px">
                        If you are already registered, log in using your
                        {<LinkForm to="/authorisation/login">Login</LinkForm>}
                    </Text>

                    <Button
                        variant="solid"
                        display="inline-block"
                        colorScheme="teal"
                        type="submit"
                    >
                        Register
                    </Button>
                </form>
            </Box>
        </Box>
    );
}
