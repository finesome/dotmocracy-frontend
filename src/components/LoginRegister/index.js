import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'

import TextInput from 'components/TextInput';
import { DefaultButton as Button } from 'components/Buttons';
import Link from 'components/Link';
import Card from 'components/Card';


const Fade = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled( Card )`
    padding: 24px;
    width: 320px;
`;

const Logo = styled.div`
    width: 200px;
    height: 80px;
    margin: 8px auto;
    background-color: #944040;
`;

const FormSubmitWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
`;

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const LoginLink = styled( Link )`
    font-size: 18px;
    line-height: 24px;
`;

const StyledButton = styled( Button )`
    float: right;
    width: 128px;
    height: 48px;
 
    padding: 12px 0;
    
    font-size: 20px;
    line-height: 24px;
`;

export default connect(store => ({
    login_form_state: store.ui.login_form
}))(class LoginRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            visible: props.login_form_state != 0,
            isLogin: props.login_form_state == 1,
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...this.state,
            visible: nextProps.login_form_state != 0,
            isLogin: nextProps.login_form_state == 1,

        })
    }

    visibilityHandler() {
        this.setState( ( prevState ) => ({
            ...this.state,
            visible: !prevState.visible
        }) );
    }

    actionChangeHandler() {
        this.setState( ( prevState ) => ({
            ...this.state,
            isLogin: !prevState.isLogin
        }) );
    }

    submitForm( event ) {
        event.preventDefault();
        switch ( event.target.name ) {
            case "login":
                console.log( "me logging in", this.state.email, this.state.password );
                break;
            case "register":
                console.log( "me registering", this.state.email, this.state.password );
                break;
            default:
                break;
        }
    }

    inputChangeHandler( event ) {
        this.setState( {
            ...this.state,
            [event.target.type]: event.target.value,
        } );
    }


    render() {
        return (
            this.state.visible
                ? <Fade onClick={this.visibilityHandler.bind( this )}>
                    <Modal onClick={event => {
                        event.stopPropagation()
                    }}>
                        <Logo/>
                        <form>
                            <TextInput type="email" name="email" hint="Email"
                                       onChange={this.inputChangeHandler.bind( this )}/>
                            <TextInput type="password" name="password" hint="Password" maxLength="30"
                                       onChange={this.inputChangeHandler.bind( this )}/>
                            {this.state.isLogin
                                ? <FormSubmitWrapper>
                                    <LinkWrapper>
                                        <LoginLink onClick={this.actionChangeHandler.bind( this )}>Need an
                                            account?</LoginLink>
                                        <LoginLink>Forgot password?</LoginLink>
                                    </LinkWrapper>
                                    <StyledButton name="login" onClick={this.submitForm.bind( this )}>Login</StyledButton>
                                </FormSubmitWrapper>
                                : <FormSubmitWrapper>
                                    <LinkWrapper>
                                        <LoginLink onClick={this.actionChangeHandler.bind( this )}>Have an
                                            account?</LoginLink>
                                    </LinkWrapper>
                                    <StyledButton name="register"
                                                  onClick={this.submitForm.bind( this )}>Register</StyledButton>
                                </FormSubmitWrapper>
                            }
                        </form>
                    </Modal>
                </Fade>
                : null
        );
    }
})