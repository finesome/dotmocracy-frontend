import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../res/colors.json';

const StyledDiv = styled.div`
    text-align: left;
`;

const StyledInput = styled.input`
    font-size: 24px;
    line-height: 28px;
    border: none;
    border-bottom: 2px solid ${colors.primaryGray};
    width: 100%;
    
    &:focus {
        outline: none;
        border-bottom: 2px solid ${colors.accent};
    }
`;

const Hint = styled.span`
    display: inline-block;
    margin-top: 16px;
    margin-bottom: 4px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
`;

export default class TextInput extends Component {
    render() {
        return (
            <StyledDiv>
                <Hint>{this.props.hint}</Hint>
                <StyledInput type={this.props.type} maxLength={this.props.maxLength} onChange={this.props.onChange}/>
            </StyledDiv>
        );
    }
}