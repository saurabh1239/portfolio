import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Hero = () => {
    const Section = styled.div`
    height:100vh;
    scroll-snap-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    `
    const Container = styled.div`
    height:100vh;
    scroll-snap-align:center;
    width:1400px;
    display:flex;
    justify-content:space-between;
    `
    const Left = styled.div`
        flex:2;
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:20px;

    `
    const Title = styled.h1`
        font-size:74px;
    `
    const WhatWeDo = styled.div`
        display:flex; 
        align-items:center;
        gap:10px;
    `
    const Line = styled.img`
        height:5px
    `
    const Subtitle = styled.h2`
        color: #da4ea2
    `
    const Desc = styled.p`
        font-size:24px;
        color:lightgray
    `
    const Button = styled.button`
        background-color: #da4ea2;
        color:white;
        padding:10px;
        border:none;
        width:100px;
        border-radius:5px;
        cursor:pointer;
    `
    const Right = styled.div`
        flex:3;
        position : relative;    
    `
    const Img = styled.img`
        width:800px;
        height:600px;
        object-fit:contain;
        position:absolute;
        top:0;
        left:0;
        right:0;
        margin:auto;
        animation:animate 2s infinite ease alternate;
        @keyframes animate {
            to {
              transform: translateY(20px);
            }
          } 
        `
    // const Right = styled.div`
    //     `
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWeDo>
                        <Line src='./img/line.png'/>
                        <Subtitle>What We Do</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        we enjoy creating delightfull, human-centered digital experience
                    </Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Img src='./img/moon.png'/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero