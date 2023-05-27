import { deleteContact } from 'redux/contacts/operations';
import {
    ContactNameSpan,
    ContactNumberSpan,
    RemoveContact,
} from '../../style/NameList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Td, Th, Tr } from '@chakra-ui/react';

const ContactName = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const deleteName = nameId => {
        dispatch(deleteContact(nameId));
    };
    return (
        <>
            <Th textAlign='center'>{name}</Th>
            <Th textAlign='center'>{number}</Th>
            <Th textAlign='center' type="button" onClick={() => deleteName(id)}>
                Видалити
            </Th>
        </>
    );
};
ContactName.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactName;
