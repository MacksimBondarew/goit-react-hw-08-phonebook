import React from 'react';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Error,
    ErroText,
    ErrorIcon,
} from '../../style/NameEditor.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const schema = object({
    email: string()
        .matches(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            "Email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        )
        .required(),
        password: string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, 5 min numbers'
        )
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
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch();
    const loginUser = (email, password) => {
        const contact = {
            id: nanoid(),
            email,
            password,
        };
        dispatch(addContact(contact));
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
            <button type="submit">add Contact</button>
        </form>
    );
}