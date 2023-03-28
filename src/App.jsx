import { useState } from 'react'

import './App.css'
import Hero from './Components/Hero'
import Who from './Components/Who'
import Works from './Components/Works'
import Contactss from './Components/Contactss'
import styled from 'styled-components'
import Navbar from './Components/Navbar'

function App() {
  const Container = styled.div`
  height:100vh;
  background: url("./img/bg.jpeg");
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  // scrollbar-width:none;
  color:white;
    &::-webkit-scrollbar{
      display:none;
    }

  `
  return (

    <Container>
      <Hero />
      <Who />
      <Works />
      <Contactss />
    </Container>

  )
}

export default App
