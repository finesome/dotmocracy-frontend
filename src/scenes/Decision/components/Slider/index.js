import React, { Component } from 'react';
import styled from 'styled-components';

import colors from 'res/colors.json';


const RangeWrapper = styled.div`
    padding: 0 8px;
    flex-grow: 1;
`;

const Range = styled.input`
    
    margin: auto;
    -webkit-appearance: none;
    position: relative;
    height: 4px;
    width: 100%;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    
    background-color: rgba(0, 0, 0, 0.25);
    background-image: linear-gradient(to right,
        ${colors.accent} 0,
        ${colors.accent} ${props => props.value}%,
        transparent ${props => props.value}% );
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        margin-top: 0px;
        border-radius: 12px;
        background: ${colors.accent};
    }
    
    &::-webkit-slider-thumb:hover,
    &::-webkit-slider-thumb:active {
        width: 16px;
        height: 16px;
        content: "0";
    }
    
    &::-webkit-slider-thumb:focus {
        background: radial-gradient(circle at 50%,
            ${colors.accent} 0,
            ${colors.accent} 6px,
            rgba(0, 0, 0, 0.25) 6px );
    }
    
    &::-moz-range-thumb {
        width: 12px;
        height: 12px;
        border-radius: 12px;
        background: ${colors.accent};
        box-sizing: border-box;
    }
    
    &::-moz-range-thumb:hover,
    &::-moz-range-thumb:active {
        width: 16px;
        height: 16px;
    }
    
    &::-moz-range-thumb:focus {
        background: radial-gradient(circle at 50%,
            ${colors.accent} 0,
            ${colors.accent} 6px,
            rgba(0, 0, 0, 0.25) 6px );
    }
    
    &::-ms-thumb {
        width: 12px;
        height: 12px;
        border-radius: 12px;
        background: ${colors.accent};
        box-sizing: border-box;
    }
    
    &::-ms-thumb:hover,
    &::-ms-thumb:active {
        width: 16px;
        height: 16px;
    }
    
    &::-ms-thumb:focus {
        background: radial-gradient(circle at 50%,
            ${colors.accent} 0,
            ${colors.accent} 6px,
            rgba(0, 0, 0, 0.25) 6px );
    }
    
    &::-ms-ticks-after { 
        display: none;
    }
    
    &::-ms-ticks-before { 
        display: none; 
    }
    
    &::-ms-tooltip { 
        display: none;
    }
`;

const TextWrapper = styled.div`
    padding-top: 4px;
    margin: 0 -8px;
    
    display: flex;
    justify-content: space-between;
    
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${colors.darkText};
`;

const Text = styled.span`
    display: inline-block;
    width: 28px;
`;

export default class Slider extends Component {

    constructor( props ) {
        super();

        this.state = {
            value: props.value || 0
        }
    }

    onChangeHandler( event ) {
        this.setState( {
            value: event.target.value
        } );
        this.props.onChange(+event.target.value);
    }

    render() {
        return (
            <RangeWrapper>
                <Range type="range" min={0} max={this.props.max || 100} value={this.state.value}
                       onChange={this.onChangeHandler.bind( this )}/>
                <TextWrapper>
                    <Text>0</Text>
                    <Text>{this.state.value}</Text>
                    <Text>{this.props.max || 100}</Text>
                </TextWrapper>
            </RangeWrapper>
        );
    }
}