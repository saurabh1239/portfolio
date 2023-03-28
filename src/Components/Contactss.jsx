import React from 'react'
import styled from 'styled-components'
import Maps from "./Maps"

const Section = styled.div`
    height:100vh;
    scroll-snap-align:center;
   

`;
const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:space-between;
gap:50px;
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content:flex-end;

`
const Form = styled.form`
width:500px;
display:flex;
flex-direction:column;
gap:25px;
`
const Title = styled.h1`
font-weight: bold ;
font-size: 60px;

`
const Input = styled.input`
padding: 20px;
background-color: #e8e6e6;
border: none;
border-radius: 5px;
`
const TextArea = styled.textarea`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #e8e6e6;
`
const Button = styled.button`
background-color: #da4ea2;
color: white;
border: none;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
padding: 20px;
`
const Right = styled.div`
flex:1;
`
// const Container = styled.div`
// `
const Contactss = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Form>
                        <Title>Contact Us</Title>
                        <Input placeholder='Name' name='name' />
                        <Input placeholder='Email' email="email" />
                        <TextArea placeholder='Write a message' rows={10} name="message" />
                        <Button> Submit</Button>
                    </Form>
                </Left>
                <Right>
                    <Maps/>
                </Right>
            </Container>
        </Section>
    )
}

export default Contactss