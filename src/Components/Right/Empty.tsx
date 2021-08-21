import styled from 'styled-components';

const Box = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Empty = () => <Box>선택된 연락처가 없습니다.</Box>;

export default Empty;
