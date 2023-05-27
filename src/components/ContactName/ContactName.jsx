import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Td } from '@chakra-ui/react';

const ContactName = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const deleteName = nameId => {
        dispatch(deleteContact(nameId));
    };
    return (
        <>
            <Td fontWeight='500' fontSize="16px" textAlign="center">
                {name}
            </Td>
            <Td fontWeight='500' fontSize="15px" textAlign="center">
                {number}
            </Td>
            <Td
            fontWeight='500'
                fontSize="15px"
                color="red"
                cursor="pointer"
                textAlign="center"
                onClick={() => deleteName(id)}
            >
                Delete
            </Td>
        </>
    );
};

export default ContactName;
