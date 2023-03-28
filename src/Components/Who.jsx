import React from 'react'
import styled from 'styled-components'

const Who = () => {
    const Section = styled.div`
    height:100vh;
    scroll-snap-align:center;
    display:flex;
    justify-content:center;
    `
    const Container = styled.div`
    height:100vh;
    scroll-snap-align:center;
    width:1400px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    `
    const Left = styled.div`
        flex:1

    `
    const Right = styled.div`
    flex:1;
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
    const Img = styled.img`
        
        `
    // const Right = styled.div`
    //     `
    return (
        <Section>
            <Container>
                <Left>
                    left
                </Left>
                <Right>
                    <Title>Think outside the square box</Title>
                    <WhatWeDo>
                        <Line src='./img/line.png'/>
                        <Subtitle>Who we are</Subtitle>
                    </WhatWeDo>
                    <Desc>                        
                        a creative group of designers and developers with a passion for the arts
                    </Desc>
                    <Button>See our works</Button>
                    
                </Right>
            </Container>
        </Section>
    )
}

export default Who