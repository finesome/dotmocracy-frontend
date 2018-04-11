import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const DecisionsWrapper = styled.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-column-count: ${props => props.colCount};
    -moz-column-count: ${props => props.colCount};
    column-count: ${props => props.colCount};
    -webkit-column-gap: 0;
    -moz-column-gap: 0;
    column-gap: 0;
    position: relative;
`;

const DecisionWrapper = styled.div`
    padding: 20px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
`;


export default class Section extends Component {

    render() {
        return (
            <SectionWrapper>
                <SectionName>{this.props.section.name}</SectionName>
                <DecisionsWrapper colCount={Math.round( (this.state.width - 240) / 320 )}>
                    {this.props.section.decisions.map( ( decision, i ) =>
                        <Link to="/decision"
                            style={{textDecoration: 'none'}}>
                            <DecisionWrapper key={"decision-item-wrapper" + i}>
                                <Decision decision={decision} key={"decision-item-" + i}/>
                            </DecisionWrapper>
                        </Link>
                    )}
                </DecisionsWrapper>
            </SectionWrapper>
        );
    }

    updateDimensions() {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName( 'body' )[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        this.setState( { width, height } );
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener( "resize", this.updateDimensions.bind( this ) );
    }

    componentWillUnmount() {
        window.removeEventListener( "resize", this.updateDimensions.bind( this ) );
    }
}