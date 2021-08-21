import styled from 'styled-components';
import { Suspense } from 'react';
import LoadingBox from './Components/LoadingBox';
import MainBox from './Components/MainBox';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: black;
  font-size: large;
  font-weight: bold;
  margin-bottom: 15px;
`;

const App = () => {
  return (
    <MainContainer>
      <Suspense fallback={<LoadingBox />}>
        <Title>Unit6 연락처</Title>
        <MainBox />
      </Suspense>
    </MainContainer>
  );
};

export default App;
