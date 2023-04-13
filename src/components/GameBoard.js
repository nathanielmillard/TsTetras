import React from 'react'
import styled from 'styled-components'
import Cell from './Cell.tsx'
import { SHAPES } from '../constants/shapes'
import { useState } from 'react'
import { useEffect } from 'react'

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
  let initialCells = []
  for (let i = 0; i < HEIGHT * WIDTH; i++) {
    initialCells.push(0)
  }
  const [cells, setCells] = useState(initialCells)
  const [cellComponents, setCellComponents] = useState([])
  useEffect(() => {
    setCells(renderShape(SHAPES[6][0], cells))
    let onload = cells.map(cell => {
      return cell > 0 ? <Cell filled/> : <Cell/>
    })
    setCellComponents(onload)
  }, [])
  const dropRow = () => {
    let fallingShape = SHAPES[6][0].map(cell => cell + 8)
    setCells(renderShape(fallingShape, cells))
    let onload = cells.map(cell => {
      return cell > 0 ? <Cell filled/> : <Cell/>
    })
    setCellComponents(onload)
  }
  return (<Board onClick={dropRow}>{cellComponents}</Board>)
}

export default GameBoard
