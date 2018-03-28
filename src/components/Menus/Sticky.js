import React, { Component } from 'react';
import styled from 'styled-components';
import colors from 'res/colors.json';
import burger from 'res/icons/burger.svg';
import avatar from 'res/icons/avatar_placeholder.svg';


const HeaderDiv = styled.div`
    width: 100%;
    height: 64px;
    
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: ${colors.primaryDark};
    
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`;

const Burger = styled.button`
    height: 32px;
    width: 32px;
    margin: 16px;
    padding: none;
    
    border: none;
    
    background-color: transparent;
    background-image: url(${burger});
    
    cursor: pointer;
    
    &:focus {
        outline: none;
    }
`;

const SiteName = styled.h1`
    font-size: 28px;
    line-height: 32px;
    color: white;
    text-transform: uppercase;
    font-stretch: condensed;
`;

const SiteInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    float: left;
`;

const UserName = styled.span`
    font-size: 20px;
    line-height: 24px;
    font-stretch: condensed;
    color: white;
`;

const UserAvatar = styled.img`
    height: 32px;
    width: 32px;
    margin: 16px;
    border-radius: 24px;
`;

const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    float: right;
`;


export default class Sticky extends Component {
    render() {
        return (
            <HeaderDiv>
                <SiteInfoWrapper>
                    <Burger/>
                    <SiteName>dotmocracy</SiteName>
                </SiteInfoWrapper>
                <UserInfoWrapper>
                    <UserName>bro.grammar@dotmocracy.org</UserName>
                    <UserAvatar src={avatar}/>
                </UserInfoWrapper>
            </HeaderDiv>
        );
    }
}