import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../res/colors.json';

import TextInput from '../TextInput';

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

const Modal = styled.div`
    width: 320px;
    padding: 16px 40px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
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

const Link = styled.a`
    font-size: 18px;
    line-height: 22px;
    font-stretch: condensed;
    text-decoration-line: underline;
    color: ${colors.linkBlue};
    cursor: pointer;
`;

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
    line-height: 24px;
    font-stretch: expanded;
    border-radius: 4px;
`;

export default class LoginRegister extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            visible: true,
            isLogin: true,
        }
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

    submitForm(event) {
        event.preventDefault();
        switch (event.target.name) {
            case "login":
                console.log("me logging in", this.state.email, this.state.password);
                break;
            case "register":
                console.log("me registering", this.state.email, this.state.password);
                break;
            default:
                break;
        }
    }

    inputChangeHandler(event) {
        this.setState({
            ...this.state,
            [event.target.type]: event.target.value,
        });
    }


    render() {
        return (
            this.state.visible
                ? <Fade onClick={this.visibilityHandler.bind( this )}>
                    <Modal onClick={event => { event.stopPropagation()}}>
                        <Logo/>
                        <form>
                            <TextInput type="email" name="email" hint="Email"
                                       onChange={this.inputChangeHandler.bind(this)}/>
                            <TextInput type="password" name="password" hint="Password" maxLength="30"
                                       onChange={this.inputChangeHandler.bind(this)}/>
                            {this.state.isLogin
                                ? <FormSubmitWrapper>
                                    <LinkWrapper>
                                        <Link onClick={this.actionChangeHandler.bind( this )}>Need an account?</Link>
                                        <Link>Forgot password?</Link>
                                    </LinkWrapper>
                                    <StyledButton name="login" onClick={this.submitForm.bind( this )}>Login</StyledButton>
                                </FormSubmitWrapper>
                                : <FormSubmitWrapper>
                                    <LinkWrapper>
                                        <Link onClick={this.actionChangeHandler.bind( this )}>Have an account?</Link>
                                    </LinkWrapper>
                                    <StyledButton name="register" onClick={this.submitForm.bind( this )}>Register</StyledButton>
                                </FormSubmitWrapper>
                            }
                        </form>
                    </Modal>
                </Fade>
                : null
        );
    }
}