import React from 'react'
import styled from 'styled-components'

const StyledCell = styled.div`
  height: 5vh;
  width: 5vh;
  outline: 2px solid black;
  background-color: ${({ filled }) => filled ? 'red' : null};
`

const Cell = ({ filled }: {filled: boolean}) => {
  return (<StyledCell filled={filled}></StyledCell>)
}

export default Cell
