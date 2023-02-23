import styled from "styled-components"

const StyledCell = styled.div`
  height: 5vh;
  width: 5vh;
  outline: 2px solid black;
  fill: ${({filled}) => filled ? 'red' : null};
`;

const Cell = ({filled}) => {
  return (<StyledCell filled={filled}></StyledCell>)
}

export default Cell
