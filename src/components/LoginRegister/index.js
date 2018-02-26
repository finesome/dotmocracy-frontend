import React, { Component } from 'react';
import styled from 'styled-components';

import TextInput from '../TextInput';
import CountableTextInput from '../CountableTextInput';

const Fade = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
    width: 400px;
    height: 365px;
    padding: 16px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.div`
    width: 200px;
    height: 80px;
    margin: 8px auto;
    background-color: #944040;
`;

export default class LoginRegister extends Component {
    render() {
        return (
            <Fade>
                <Modal>
                    <Logo />
                    <form>
                        <TextInput type="email" hint="Email" />
                        <CountableTextInput type="password" hint="Password" maxLength="30" />                        
                    </form>                
                </Modal>
            </Fade>
        );
    }
}