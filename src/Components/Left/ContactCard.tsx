import styled from 'styled-components';
import { Contact } from '../../types';
import { useRecoilState } from 'recoil';
import { selectedContactState } from '../../store';

const Card = styled.li<{ isSelect: boolean }>`
  display: flex;
  background-color: ${(props) => (props.isSelect ? '#28adfa' : 'inherit')};
`;

const Button = styled.button<{ isSelect: boolean }>`
  flex: 1;
  height: 80px;
  border: 0;
  border-bottom: 1px solid #d4d3d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  z-index: 0;
  background-color: transparent;
  color: ${(props) => (props.isSelect ? 'white' : 'inherit')};
`;

const Name = styled.div`
  padding: 5px;
`;

const PhoneNumber = styled.div`
  padding: 5px;
`;

const ContactCard = ({ contact }: { contact: Contact }) => {
  const [selectedContact, setSelectedContact] = useRecoilState(selectedContactState);
  return (
    <Card isSelect={selectedContact === contact}>
      <Button isSelect={selectedContact === contact} onFocus={() => setSelectedContact(contact)}>
        <Name>{contact.name}</Name>
        <PhoneNumber>{contact.phoneNumber}</PhoneNumber>
      </Button>
    </Card>
  );
};

export default ContactCard;
