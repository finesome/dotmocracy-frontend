import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../res/colors.json';


const StyledButton = styled.button`
    display: block;
    width: 160px;
    height: 64px;
    
    border: none;
    cursor: pointer;
    
    text-transform: uppercase;
    background-color: ${colors.accent};
    padding: 12px 0;
    
    color: white;
    font-size: 28px;
    line-height: 28px;
    border-radius: 2px;
`;

export default class LoginButton extends Component {

    onClickHandler() {
        console.log("login button clicked");
    }

    render(){
        return (
            <StyledButton {...this.props} onClick={this.onClickHandler.bind(this)}>{this.props.text}</StyledButton>
        );
    }
}