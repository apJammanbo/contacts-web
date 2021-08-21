import styled from 'styled-components';
import SearchBox from './SearchBox';
import ContactCard from './ContactCard';
import { useRecoilValue } from 'recoil';
import { contactsState, keyWordState } from '../../store';
import { Contact } from '../../types';

const Box = styled.div`
  flex: 1;
  border-right: 1px solid #9b9b9b;
  display: flex;
  flex-direction: column;
`;

const ListBox = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

const hasKeyword = (keyword: string, contact: Contact) => {
  if (!keyword) {
    return true;
  }

  for (const value of Object.values(contact)) {
    if (value.toString().includes(keyword)) {
      return true;
    }
  }
  return false;
};

const LeftBox = () => {
  const keyword = useRecoilValue<string>(keyWordState);
  const contacts = useRecoilValue<Contact[]>(contactsState);

  return (
    <Box>
      <SearchBox />
      <ListBox>
        {contacts
          .filter((contact) => hasKeyword(keyword, contact))
          .map((contact: Contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
      </ListBox>
    </Box>
  );
};

export default LeftBox;
