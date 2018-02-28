import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../res/colors.json';


const StyledButton = styled.button`
    display: block;
    float: right;
    width: 128px;
    height: 48px;
    
    border: none;
    cursor: pointer;
    
    text-transform: uppercase;
    background-color: ${colors.accent};
    padding: 12px 0;
    
    color: white;
    font-size: 20px;
    border-radius: 4px;
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