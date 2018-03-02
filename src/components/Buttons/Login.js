import React, { Component } from 'react';
import styled from 'styled-components';
import {DefaultButton as Button} from 'components/Buttons';
import { connect } from 'react-redux'
import { showLoginForm } from 'model'


const StyledButton = styled( Button )`
    width: 24vh;
    height: 10vh;
    border-radius: 2px;
    font-size: 5vh;
    line-height: 5vh;
`;

export default connect( null , dispatch => ({
        sign_in_action: () => {dispatch(showLoginForm())}
}))(class LoginButton extends Component {

    onClickHandler( event ) {
        console.log(showLoginForm)
        this.props.sign_in_action()
    }

    render() {
        return (
            <StyledButton {...this.props} onClick={this.onClickHandler.bind( this )}>{this.props.text}</StyledButton>
        );
    }
})
