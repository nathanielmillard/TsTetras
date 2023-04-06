import React from 'react'
import styled from 'styled-components'
import Cell from './Cell.tsx'
import { SHAPES } from '../constants/shapes'

const HEIGHT = 15
const WIDTH = 8

const Board = styled.div`
  height: 75vh;
  width: 40vh;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const renderShape = (shape, gameBoard) => {
  const finalGameBoard = gameBoard
  shape.forEach((cell) => {
    finalGameBoard[cell] = 1
  })
  return finalGameBoard
  // return gameBoard.map((cell, index) => {
  //   if (shape.length === 1) {
  //     return shape[0][index] ? shape[0][index] : cell
  //   }
  //   if (index === 0) {
  //     return shape[0][index]
  //   }
  //   if (index % 8 === 0) {
  //     return shape[(index / 8)] ? shape[index / 8][0] : cell
  //   }
  //   return cell
  // })
}

const GameBoard = () => {
  let cells = []
  for (let i = 0; i < HEIGHT * WIDTH; i++) {
    cells.push(0)
  }
  cells = renderShape(SHAPES[6][0], cells)
  console.log(cells)
  const cellComponents = cells.map(cell => {
    return cell > 0 ? <Cell filled/> : <Cell/>
  })
  return (<Board>{cellComponents}</Board>)
}

export default GameBoard
