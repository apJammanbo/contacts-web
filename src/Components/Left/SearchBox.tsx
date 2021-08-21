import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { keyWordState } from '../../store';

const Box = styled.div`
  background-color: #f8f8f8;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #9b9b9b;
`;

const Input = styled.input`
  flex: 1;
  font-size: medium;
  padding: 10px;
  outline-color: #28adfa;
`;

const SearchBox = () => {
  const [keyWord, setKeyWord] = useRecoilState(keyWordState);
  return (
    <Box>
      <Input
        value={keyWord}
        onChange={(e) => setKeyWord(e.target.value)}
        placeholder="검색어를 입력하세요."
      ></Input>
    </Box>
  );
};

export default SearchBox;
