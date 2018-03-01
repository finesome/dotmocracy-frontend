import React, { Component } from 'react';
import styled from 'styled-components';
import Button from "components/Button";


const StyledButton = styled( Button )`
    width: 24vh;
    height: 10vh;
    
    border-radius: 2px;
    
    font-size: 5vh;
    line-height: 5vh;
`;

export default class LoginButton extends Component {

    onClickHandler( event ) {
        console.log( "login button clicked" );
    }

    render() {
        return (
            <StyledButton {...this.props} onClick={this.onClickHandler.bind( this )}>{this.props.text}</StyledButton>
        );
    }
}