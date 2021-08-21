import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.label`
  display: block;
  padding: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  outline-color: #28adfa;
  font-size: medium;
`;

const EditItem = ({
  title,
  value,
  keyString,
  onChange,
}: {
  title: string;
  value: string | undefined;
  keyString: string;
  onChange: (key: string, value: string) => void;
}) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Input value={value || ''} onChange={(e) => onChange(keyString, e.target.value)} />
    </Box>
  );
};

export default EditItem;
