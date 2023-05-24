import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Error,
    ErroText,
    ErrorIcon,
} from '../../style/NameEditor.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export default function LoginForm() {
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
        <form onSubmit={handleSubmit(deliveryData)}>
            <label htmlFor="email">email:</label>
            <input
                type="text"
                name="email"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
                <Error>
                    <ErrorIcon>⚠️</ErrorIcon>
                    <ErroText>{errors.email.message}</ErroText>
                </Error>
            )}
            <label htmlFor="password">password:</label>
            <input
                type="password"
                name="password"
                {...register('password')}
                aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
                <Error>
                    <ErrorIcon>⚠️</ErrorIcon>
                    <ErroText>{errors.password.message}</ErroText>
                </Error>
            )}
            <button type="submit">Authorisation</button>
        </form>
    );
}
