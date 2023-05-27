import { useSelector, useDispatch } from 'react-redux';
import { changeFilterContact } from '../../redux/contacts/filter';
import { selectFilter } from '../../redux/contacts/selectors';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const FilterContact = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const changeFilter = e => {
        dispatch(changeFilterContact(e.target.value));
    };
    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                <Search2Icon />
            </InputLeftElement>
            <Input
                type="text"
                value={filter}
                onChange={changeFilter}
                size="md"
                placeholder="Enter a name for the filter"
                background="white"
            />
        </InputGroup>
    );
};

export default FilterContact;
