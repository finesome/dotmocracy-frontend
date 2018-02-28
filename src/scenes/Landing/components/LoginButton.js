import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../../res/colors.json';


const StyledButton = styled.button`
    display: block;
    background-color: ${colors.accent};
    
    width: 24vh;
    height: 10vh;
    
    border: none;
    border-radius: 2px;
    
    color: white;
    font-size: 5vh;
    line-height: 5vh;
    text-transform: uppercase;
    cursor: pointer;
`;

export default class LoginButton extends Component {

    onClickHandler(event) {
        console.log("login button clicked");
    }

    render(){
        return (
            <StyledButton {...this.props} onClick={this.onClickHandler.bind(this)}>{this.props.text}</StyledButton>
        );
    }
}