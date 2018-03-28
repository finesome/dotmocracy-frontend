import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from 'components/Cards';
import Slider from 'components/Slider';
import Header from 'components/Header';

import colors from 'res/colors.json';

const Description = styled.p`
    font-size: 16px;
    line-height: 18px;
    color: ${colors.mediumText};
`;

export default class Idea extends Component {
    render() {
        return (
            <Wrapper>
                <Header>{this.props.idea.name}</Header>
                <Description>
                    {this.props.idea.desc}
                </Description>
                <Slider max={100}/>
            </Wrapper>
        );
    }
};