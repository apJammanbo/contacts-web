import styled from 'styled-components';
import { Contact } from '../../types';

const Item = styled.dl`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const Title = styled.dt`
  font-weight: bold;
  padding: 5px;
`;

const Content = styled.dd`
  padding: 5px;
`;

const Detail = ({ contact }: { contact: Contact }) => (
  <>
    <Item>
      <Title>이름</Title>
      <Content>{contact.name}</Content>
    </Item>
    <Item>
      <Title>나이</Title>
      <Content>{contact.age}</Content>
    </Item>
    <Item>
      <Title>전화번호</Title>
      <Content>{contact.phoneNumber}</Content>
    </Item>
    <Item>
      <Title>Email</Title>
      <Content>{contact.email}</Content>
    </Item>
    <Item>
      <Title>설명</Title>
      <Content>{contact.description}</Content>
    </Item>
  </>
);

export default Detail;
