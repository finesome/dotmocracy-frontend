import React, { Component } from 'react';
import styled from 'styled-components';
import colors from 'res/colors.json';


const TR = styled.tr`
    &:nth-child(2n) {
        background-color: ${colors.dividerGray};
    }
`;

const TD = styled.td`
    padding: 4px;
`;


export default class TRow extends Component {
    render() {
        return (
            <TR>
                <TD>{this.props.logItem.time}</TD>
                <TD>{this.props.logItem.user}</TD>
                <TD>{this.props.logItem.action}</TD>
                <TD>{this.props.logItem.agent}</TD>
            </TR>
        );
    }
};