import React from 'react';
import AddContact from '../components/AddContactForm';
import styled from 'styled-components';
import ContactList from 'components/NameList/ContactList';
const PhoneBook = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`;

export default function Contacts() {
    return (
        <PhoneBook>
            <AddContact />
            <ContactList />
        </PhoneBook>
    );
}
