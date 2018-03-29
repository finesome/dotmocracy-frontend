import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from 'components/Cards';
import Slider from '../Slider';
import Header from 'components/Header';

import colors from 'res/colors.json';

const Description = styled.p`
    font-size: 16px;
    line-height: 18px;
    color: ${colors.mediumText};
`;

const ColorCode = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 16px;
    margin: 8px;
    background-color: ${props => props.color}
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export default class Idea extends Component {
    render() {
        return (
            <Wrapper>
                <Header>{this.props.idea.name}</Header>
                <Description>
                    {this.props.idea.desc}
                </Description>
                <InfoWrapper>
                    <Slider value={this.props.idea.myScore || 0}
                            onChange={this.onSliderChange.bind( this )}/>
                    <ColorCode color={this.props.idea.color}/>
                </InfoWrapper>
            </Wrapper>
        );
    }

    onSliderChange( value ) {
        this.props.onChange(this.props.dataKey, value);
    }
};