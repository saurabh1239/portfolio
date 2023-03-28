import React, { useState } from 'react'
import styled from 'styled-components'

const Data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
];

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
    display:flex;
    align-items:center;
    // justify-content:center;
    `;
const List = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:20px;
`;
const Listitems = styled.li`
font-size: 90px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;
@media only screen and (max-width: 768px) {
  font-size: 24px;
  color: white;
  -webkit-text-stroke: 0px;
}
::after {
  content: "${(props) => props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: pink;
  width: 0px;
  overflow: hidden;
  white-space: nowrap;
}
&:hover {
  ::after {
    animation: moveText 0.5s linear both;
    @keyframes moveText {
      to {
        width: 100%;
      }
    }
  }
}
`;

const Right = styled.div`
flex: 1;
`
const Img = styled.img`

    `
const Works = () => {
    const [work, setWork] = useState("Web Design")
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {Data.map((item) =>
                            <Listitems key={item} text={item} onClick={()=>setWork(item)}>
                                {item}
                            </Listitems>
                        )}
                    </List>
                </Left>
                <Right>
                    right
                </Right>
            </Container>
        </Section>
    )
}

export default Works