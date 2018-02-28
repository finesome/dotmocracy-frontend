import React, { Component } from 'react';
import styled from 'styled-components';

const Attribution = styled.p`
    font-size:20px;
`;

const FooterBlock = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default class Footer extends Component {
    render() {
        return (
            <FooterBlock>
                <Attribution>©Brogrammers, 2018</Attribution>
            </FooterBlock>
        );
      }
}         
