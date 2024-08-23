import React, { useState } from 'react'
import TicTacToe from './tictac1'
import { Nav } from '../../components/nav/Nav'

function TicToe() {
    const [open, setOpen] = useState(false);

  return (
    <>
    <Nav open={open} setOpen={setOpen}/>
    <TicTacToe />
    </>
    
  )
}

export default TicToe