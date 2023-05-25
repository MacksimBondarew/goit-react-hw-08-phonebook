import React from 'react';
import NameEditor from '../components/AddContactForm';
import NameList from '../components/NameList';
import FilterName from '../components/FilterName';
import { PhoneBook, TitleContacts, MainTitlePhoneBook } from '../style/App.styled';

export default function Contacts() {
    return (
        <PhoneBook>
            <MainTitlePhoneBook>Phonebook</MainTitlePhoneBook>
            <NameEditor />

            <TitleContacts>Contacts</TitleContacts>
            <FilterName />
            <NameList />
        </PhoneBook>
    );
}
