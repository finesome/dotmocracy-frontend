import React, { Component } from 'react';
import styled from 'styled-components';

const Attribution = styled.p`
    font-size: 3vh;
`;

const FooterBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;


export default class Footer extends Component {
    render() {
        return (
            <FooterBlock>
                <Attribution>© Brogrammers, 2018</Attribution>
            </FooterBlock>
        );
    }
}         
