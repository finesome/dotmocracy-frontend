import React, { Component } from 'react';
import styled from 'styled-components';

import LoginButton from '../../components/LoginButton';

import Banner from './components/Banner';
import Text from './components/Text';
import Footer from './components/Footer';

// import colors from '../../res/colors.json';


const Background = styled.div`
    background-color: #2C3E50;
    max-height:100vh;
    max-width:100%;
    color:white;
    font-family:'Ubuntu';
    min-height:100vh;
    display: flex;
    flex-direction:column;
`;

const BodyWrapper = styled.div`
    background-color: #354B60;
    display:flex;
    justify-content:center;
    height:80vh;
    align-items:center;
`;

const Block = styled.div`
    width: 400px;
    height: 300px;
    margin: 30px;
`;

const RightBlock = styled(Block)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
`

const Header = styled.div`
    height: 10vh;
`;




export default class Landing extends Component {

    onButtonClick(){
        console.log('login button clicked');
    }

    
  render() {
    return (
      <div>
        <Background>
            <Header/>
            <BodyWrapper >
                <Banner/>
                <RightBlock>
                    <Text/>
                    <LoginButton  onClick = {this.onButtonClick.bind(this)} text="Sign in"/>
                </RightBlock>
            </BodyWrapper>
            <Footer/>
        </Background>
      </div>
    );
  }
}