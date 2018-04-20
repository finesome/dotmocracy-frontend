import React, { Component } from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    text-align: left;
`;

const StyledInput = styled.textarea`
    border: none;
    width: 100%;
    height: 100px;
    background:none;
    font-size: ${props => props.fontSize};
    ::placeholder {
        font-size: ${props => props.fontSize};
        color: ${props => props.color}
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
                <StyledInput type={this.props.type} maxLength={this.props.maxLength} placeholder = {this.props.placeholder} color={this.props.color || "#333333"} fontSize = {this.props.fontSize}
                             onChange={this.onChangeHandler.bind( this )}/>
            </StyledDiv>
        );
    }
}