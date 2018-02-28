import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size:55px;
`;

const SubTitle = styled.h2`
    margin-bottom: 30px;
    font-size: 30px;
`

const P = styled.p`
    font-size: 22px;
`;



export default class Banner extends Component {
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