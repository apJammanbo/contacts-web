import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { create } from '../../apis';
import { contactsState, editedContactState } from '../../store';
import EditItem from './EditItem';

const Box = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1``;

const ButtonBox = styled.div`
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  background: #28adfa;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #28adfa;
  border-radius: 3px;
`;

const CancelButton = styled.button`
  background: white;
  color: #28adfa;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #28adfa;
  border-radius: 3px;
`;

const EditBox = ({ setIsEdit }: { setIsEdit: (isEdit: boolean) => void }) => {
  const [editedContact, setEditedContact] = useRecoilState(editedContactState);
  const [contacts, setContacts] = useRecoilState(contactsState);

  const handleChange = (keyString: string, value: string) => {
    const newEditContact: any = { ...editedContact };
    newEditContact[keyString] = value;
    setEditedContact(newEditContact);
  };

  const handleSave = async () => {
    const response = await create(editedContact);
    if (response.ok) {
      const contact = await response.json();
      setContacts([...contacts, contact]);
      setEditedContact({});
      setIsEdit(false);
    }
  };

  const handleCancel = () => {
    setEditedContact({});
    setIsEdit(false);
  };

  return (
    <Box>
      <Title>{editedContact.id ? '연락처를 업데이트 하세요' : '연락처를 등록하세요'}</Title>
      <EditItem title="이름" keyString="name" value={editedContact.name} onChange={handleChange} />
      <EditItem
        title="전화번호"
        keyString="phoneNumber"
        value={editedContact.phoneNumber}
        onChange={handleChange}
      />
      <EditItem title="나이" keyString="age" value={editedContact.age} onChange={handleChange} />
      <EditItem
        title="email"
        keyString="email"
        value={editedContact.email}
        onChange={handleChange}
      />
      <EditItem
        title="설명"
        keyString="description"
        value={editedContact.description}
        onChange={handleChange}
      />
      <ButtonBox>
        <ConfirmButton onClick={handleSave}>확인</ConfirmButton>
        <CancelButton onClick={handleCancel}>취소</CancelButton>
      </ButtonBox>
    </Box>
  );
};

export default EditBox;
