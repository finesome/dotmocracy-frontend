import React, { Component } from 'react';
import styled from 'styled-components';

import TextInput from '../TextInput';

const StyledCounter = styled.span`
    display: block;
    float: right;
    color: rgba(0, 0, 0, 0.54);
    font-size: 12px;
`;

export default class CountableTextInput extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        }
    }

    inputChangedHandler(event) {        
        this.setState({
            counter: event.target.value.length
        });
    }
    
    render() {
        return (
            <div>
                <TextInput {...this.props} onChange={this.inputChangedHandler.bind(this)} />
                <StyledCounter>{this.state.counter}/{this.props.maxLength}</StyledCounter>
            </div>                            
        );
    }
}