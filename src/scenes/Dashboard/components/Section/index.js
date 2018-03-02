import React, { Component } from 'react';
import styled from 'styled-components';
import colors from 'res/colors.json';
import Decision from '../Decision';


const SectionWrapper = styled.div`
    padding-top: 24px;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
`;

const SectionName = styled.span`
    display: block;
    font-size: 36px;
    line-height: 42px;
    margin: 0 20px;
    color: ${colors.darkText};
    
    &::after {
        content: "";
        display: block;
        height: 1px;
        clear: both;
        background-color: ${colors.dividerGray};
    }
`;

const DecisionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export default class Section extends Component {

    render() {
        return (
            <SectionWrapper>
                <SectionName>{this.props.section.name}</SectionName>
                <DecisionWrapper>
                    {this.props.section.decisions.map( ( decision ) => <Decision decision={decision}/> )}
                </DecisionWrapper>
            </SectionWrapper>
        );
    }
}