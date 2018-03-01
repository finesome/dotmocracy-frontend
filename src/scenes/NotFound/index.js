import React, { Component } from 'react';
import styled from 'styled-components';
import notFound from 'res/images/404.svg';
import colors from 'res/colors.json';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    
    width: 100%;
    height: 100vh;
    
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: ${colors.background};
    text-align: center;
`;

const StyledErrorCaption = styled.h1`
    font-stretch: expanded;
    font-size: 20vh;
    line-height: 20vh;
    margin-top: -10vh;
`;

const StyledErrorImage = styled.img`
    height: 40vh;
    max-width: 100%;
    margin: 4vh 0;
`;

const StyledErrorText = styled.h3`
    font-stretch: expanded;
    font-size: 6vh;
    line-height: 6vh;
`;

export default class NotFound extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledErrorCaption>
                    404
                </StyledErrorCaption>
                <StyledErrorImage src={notFound}/>
                <StyledErrorText>
                    Requested page was not found
                </StyledErrorText>
            </StyledContainer>
        );
    }
}