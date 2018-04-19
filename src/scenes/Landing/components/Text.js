import React, { Component } from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    font-size: 9vh;
    line-height: 12vh;
    font-stretch: expanded;
`;

const SubTitle = styled.h2`
    font-size: 5vh;
    line-height: 5vh;
`;

const P = styled.p`
    font-size: 4vh;
    line-height: 5vh;
    
    margin: 4vh 0;
`;


export default class Text extends Component {
    render() {
        return (
            <div>
                <Title>Dotmocracy</Title>
                <SubTitle>your opinion matters</SubTitle>
                <P>This platform was created for those who often cannot decide which idea to choose. We are here to help you</P>
            </div>
        );
      }
}