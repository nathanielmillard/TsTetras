import './App.css';
import GameBoard from './components/GameBoard';
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container className="App">
      <GameBoard/>
    </Container>
  );
}

export default App;
