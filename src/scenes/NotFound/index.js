import React, { Component } from 'react';
import styled from 'styled-components';
import notfound from '../../res/images/404.svg';

const StyledContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    // position: fixed;
    // top: 0;
    // left: 0;
    background-color: #f1f2f7;
`;

const StyledErrorCaption = styled.div`
    width: 246px;
    font-family: 'Roboto', sans-serif;
    font-size: 144px;
`;

const StyledErrorImage = styled.img`

`;

const StyledErrorText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
`;

export default class NotFound extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledErrorCaption>
                    404
                </StyledErrorCaption>
                <StyledErrorImage src={notfound} />
                <StyledErrorText>
                    Requested page was not found
                </StyledErrorText>
            </StyledContainer>
        );
    }
}