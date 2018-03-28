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
                <Header>Kinda idea name</Header>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem massa, cursus finibus
                    tincidunt nec, dignissim a augue. Duis eleifend aliquam ipsum sed iaculis. Vivamus interdum
                    vestibulum quam sed bibendum. Cras velit erat, interdum vitae enim quis, consequat porta dolor.
                </Description>
                <Slider max={100}/>
            </Wrapper>
        );
    }
};