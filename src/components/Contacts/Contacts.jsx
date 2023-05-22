import React from 'react';
import NameEditor from '../NameEditor';
import NameList from '../NameList';
import FilterName from '../FilterName';
import { PhoneBook, TitleContacts, MainTitlePhoneBook } from '../../style/App.styled';

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
