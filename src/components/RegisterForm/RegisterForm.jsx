import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Error,
    ErroText,
    ErrorIcon,
} from '../../style/NameEditor.styled';
import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contacts/operations';
import { registerUser } from '../../redux/auth/operations';

const schema = object({
    name: string()
    .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
    email: string()
        .matches(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            "Email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
            name: "",
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch();
    const deliveryDataUser = (email, name, password) => {
        dispatch(registerUser({
            name,
            email,
            password,
        }));
    };

    const deliveryData = data => {
        const { email, name, password } = data;
        deliveryDataUser(email, name, password);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(deliveryData)}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                {...register('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
                <Error>
                    <ErrorIcon>⚠️</ErrorIcon>
                    <ErroText>{errors.name.message}</ErroText>
                </Error>
            )}
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
            <button type="submit">Register</button>
        </form>
    );
}