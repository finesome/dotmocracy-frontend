import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import colors from 'res/colors.json';
import bannerImage from 'res/images/banner.svg';

import { LoginButton } from 'components/Buttons';

import Text from './components/Text';
import Footer from './components/Footer';


const Background = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    width: 100%;
    
    background-color: ${colors.primaryDark};
    
    color: white;
`;

const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 80vh;
    background-color: ${colors.primary};
`;

const Block = styled.div`
    height: 80%;
    max-width: 40%;
    
    margin: 2%;
`;

const RightBlock = styled( Block )`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    text-align: left;
`;

const Banner = styled.img`
    height: 100%;
    max-width: 100%;
`;

const Header = styled.div`
    height: 10vh;
`;


export default connect (
    store => ({
        isAuthenticated: store.user.user !== null,
    })
) (class Landing extends Component {

    render() {
        let redirect = null;
        if (this.props.isAuthenticated) {
            redirect = <Redirect to={'/dashboard'}/>;
        }
        return (
            <div>
                {redirect}
                <Background>
                    <Header/>
                    <BodyWrapper>
                        <Block>
                            <Banner src={bannerImage} alt="banner"/>
                        </Block>
                        <RightBlock>
                            <Text/>
                            <LoginButton text="Sign in"/>
                        </RightBlock>
                    </BodyWrapper>
                    <Footer/>
                </Background>
            </div>
        );
    }
});
