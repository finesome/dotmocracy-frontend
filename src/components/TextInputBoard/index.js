import React, { Component } from 'react';
import styled from 'styled-components';
import colors from 'res/colors.json';


const StyledDiv = styled.div`
    text-align: left;
`;

const StyledInput = styled.input`
    border: none;
    width: 100%;
    background:none;
    font-size: ${props => props.fontSize};
    &:focus {
        outline: none;
        border-bottom: 1px solid ${colors.accent};
    }
    ::placeholder {
        font-size: ${props => props.fontSize};
        color: ${props => props.color}
        text-align:${props => props.textAlign}
    }
`;
// border-bottom: 1px solid ${colors.primaryGray};





export default class TextInputBoard extends Component {

    constructor( props ) {
        super( props );
    }

    onChangeHandler( event ) {
        if ( this.props.maxLength ) {
            this.setState( {
                counter: event.target.value.length
            } );
        }

        if ( this.props.onChange ) {
            this.props.onChange( event );
        }
    }

    render() {
        return (
            <StyledDiv>
                <StyledInput type={this.props.type} maxLength={this.props.maxLength} placeholder = {this.props.placeholder}
                 color={this.props.color || "#333333"} fontSize = {this.props.fontSize} text-align={this.props.textAlign || "left"}
                             onChange={this.onChangeHandler.bind( this )}/>
            </StyledDiv>
        );
    }
}