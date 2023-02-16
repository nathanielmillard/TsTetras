import styled from "styled-components"
import Cell from "./Cell";

const Board = styled.div`
  height: 75vh;
  width: 40vh;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const GameBoard = ({height, width}) => {
  const cells = []
  for(let i = 0; i < height * width; i++) {
    cells.push(<Cell></Cell>)
  }
  return (<Board>{cells}</Board>)
}

export default GameBoard
