import React, { Component } from 'react';
import styled from 'styled-components';

import colors from 'res/colors.json';

const Range = styled.input`
    
    margin: auto;
    -webkit-appearance: none;
    position: relative;
    height: 4px;
    width: 100%;
    outline: none;
    cursor: pointer;
    border-radius: 0;
    
    background: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(to right,
        ${colors.accent} 0,
        ${colors.accent} ${props => props.value}%,
        transparent ${props => props.value}% );
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        margin-top: 0px;
        border-radius: 8px;
        background: ${colors.accent};
    }
    
    &::-webkit-slider-thumb:active,
    &::-webkit-slider-thumb:hover {
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }
    
    &::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        box-sizing: border-box;
    }
    
    &::-moz-range-thumb:active,
    &::-moz-range-thumb:hover {
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }
    
    &::-ms-thumb {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        box-sizing: border-box;
    }
    
    &::-ms-thumb:active,
    &::-ms-thumb:hover {
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
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

export default class Slider extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            value: Math.round(props.max/2)
        }
    }

    onChangeHandler( event ) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <Range type="range" min={1} max={this.props.max} value={this.state.value}
                   onChange={this.onChangeHandler.bind(this)}/>
        );
    }
}