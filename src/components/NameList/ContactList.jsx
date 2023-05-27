import ContactName from '../ContactName/ContactName';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectContacts,
    selectFilter,
    selectLoading,
    selectError,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { featchContacts } from '../../redux/contacts/operations';
import { DotLoader } from 'react-spinners';
import { Table, Tbody, Tr } from '@chakra-ui/react';
import styled from 'styled-components';

const Error = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #ff4d4f;
    margin-top: 20px;
`;

const ContactList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(featchContacts());
    }, [dispatch]);
    const filter = useSelector(selectFilter);
    const contacts = useSelector(selectContacts);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);

    const getVisibleName = () => {
        const normalizedName = filter.toLowerCase();
        const filterContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedName)
        );
        return [...filterContacts].sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name)
        );
    };
    return (
        <>
            {loading && (
                <>
                    <DotLoader
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            zIndex: '999',
                        }}
                        color="#3682d6"
                        cssOverride={{}}
                        loading
                        size={50}
                    />
                </>
            )}
            {error ? (
                <>
                    <Error>
                        Sorry, an error occurred while loading this page. Please
                        try again later
                    </Error>
                </>
            ) : (
                <>
                    <Table>
                        <Tbody>
                            {getVisibleName().map(({ id, name, number }) => (
                                <Tr
                                    background="white"
                                    justifyContent="space-between"
                                    key={id}
                                >
                                    <ContactName
                                        id={id}
                                        name={name}
                                        number={number}
                                    />
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </>
            )}
        </>
    );
};

export default ContactList;
