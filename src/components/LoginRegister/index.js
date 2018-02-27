import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../res/colors.json';

import TextInput from '../TextInput';
import CountableTextInput from '../CountableTextInput';

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
    border-radius: 4px;
`;

export default class LoginRegister extends Component {

    constructor() {
        super();

        this.state = {
            visible: true,
            isLogin: true,
        }
    }

    visibilityHandler() {
        this.setState( {
            visible: !this.state.visible
        } );
    }

    defaultClickHandler( event ) {
        event.stopPropagation();
    }

    clickHandler() {
        this.setState( {
            isLogin: !this.state.isLogin
        } );
    }

    render() {
        return (
            this.state.visible
                ? <Fade onClick={this.visibilityHandler.bind( this )}>
                    <Modal onClick={this.defaultClickHandler}>
                        <Logo/>
                        <form>
                            <TextInput type="email" hint="Email"/>
                            <CountableTextInput type="password" hint="Password" maxLength="30"/>
                            {this.state.isLogin
                                ? <FormSubmitWrapper>
                                    <LinkWrapper>
                                        <Link onClick={this.clickHandler.bind( this )}>Need an account?</Link>
                                        <Link>Forgot password?</Link>
                                    </LinkWrapper>
                                    <StyledButton>Login</StyledButton>
                                </FormSubmitWrapper>
                                : <FormSubmitWrapper>
                                    <LinkWrapper>
                                        <Link onClick={this.clickHandler.bind( this )}>Have an account?</Link>
                                    </LinkWrapper>
                                    <StyledButton>Register</StyledButton>
                                </FormSubmitWrapper>
                            }
                        </form>
                    </Modal>
                </Fade>
                : null
        );
    }
}