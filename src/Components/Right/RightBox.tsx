import styled from 'styled-components';
import Detail from './Detail';
import Empty from './Empty';
import { useRecoilValue } from 'recoil';
import { selectedContactState } from '../../store';

const Box = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const RightBox = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  return <Box>{selectedContact ? <Detail contact={selectedContact} /> : <Empty />}</Box>;
};

export default RightBox;
