import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import {
    Box,
    Button,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import FilterContact from 'components/FilterName/FilterContact';

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

const AddContact = () => {
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

    useEffect(() => {
        if (errors?.name) {
            toast.error(`${errors.name.message}`);
        }
        if (errors?.number) {
            toast.error(`${errors.number.message}`);
        }
    }, [errors]);

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
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb='40px'
        >
            <Box
                width="sm"
                height="auto"
                pb="30px"
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
                        Add contact
                    </Text>
                    <InputGroup mb="20px">
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
                            placeholder="Enter name"
                        />
                    </InputGroup>
                    <InputGroup mb="20px">
                        <InputLeftElement pointerEvents="none">
                            <PhoneIcon />
                        </InputLeftElement>
                        <Input
                            type="tel"
                            name="number"
                            {...register('number')}
                            aria-invalid={errors.number ? 'true' : 'false'}
                            placeholder="Enter phone"
                        />
                    </InputGroup>

                    <Button
                        type="submit"
                        variant="solid"
                        display="inline-block"
                        colorScheme="teal"
                        mb="35px"
                    >
                        Add contact
                    </Button>
                    <FilterContact />
                </form>
            </Box>
        </Box>
    );
};

export default AddContact;
