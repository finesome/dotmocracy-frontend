import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: left;
`;

const StyledInput = styled.input`
    width: 100%;
`;

const Hint = styled.span`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
`;

export default class TextInput extends Component {    
    render() {
        return (
            <StyledDiv>
                <Hint>{this.props.hint}</Hint>                
                <StyledInput type={this.props.type} maxLength={this.props.maxLength} onChange={this.props.onChange} />                
            </StyledDiv>
        );
    }
}