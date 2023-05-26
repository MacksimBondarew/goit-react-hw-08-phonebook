import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Input,
    FormFormik,
    AddContactButton,
    LabelName,
    LabelPhone,
} from '../../style/NameEditor.styled';
import { selectContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';

const schema = object({
    name: string()
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Name may contain only letters, apostrophe, dash and spaces'
        )
        .required(),
    number: string()
        .matches(
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, 5 min numbers'
        )
        .required(),
}).required();

const NameEditorHookForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            number: '',
        },
        resolver: yupResolver(schema),
    });
    const people = useSelector(selectContacts);
    const dispatch = useDispatch();
    const addName = (name, number) => {
        const contact = {
            id: nanoid(),
            name,
            number,
        };
        dispatch(addContact(contact));
    };

    function removeNonDigits(str) {
        return str.replace(/\D/g, '');
    }

    const deliveryData = data => {
        const { name, number } = data;
        const nameFound = people.find(
            person =>
                person.name.toLowerCase() === name.toLowerCase() ||
                removeNonDigits(person.number) === removeNonDigits(number)
        );

        if (nameFound) {
            alert(`${name} and phone number ${number} is already in contacts`);
            return;
        }
        addName(name, number);
        reset();
    };

    return (
        <FormFormik onSubmit={handleSubmit(deliveryData)}>
            <LabelName htmlFor="name">Name</LabelName>
            <Input
                type="text"
                name="name"
                {...register('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name &&
                errors.name &&
                toast.error(`${errors.name.message}`)}
            <LabelPhone htmlFor="number">Phone Number</LabelPhone>
            <Input
                type="tel"
                name="number"
                {...register('number')}
                aria-invalid={errors.number ? 'true' : 'false'}
            />
            {errors.number &&
                errors.number &&
                toast.error(`${errors.number.message}`)}

            <AddContactButton type="submit">add Contact</AddContactButton>
        </FormFormik>
    );
};

export default NameEditorHookForm;
