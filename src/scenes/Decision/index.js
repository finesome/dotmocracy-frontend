import React, { Component } from 'react';
import styled from 'styled-components';
import colors from 'res/colors.json';

import { Side as SideMenu, Sticky as HeaderMenu } from 'components/Menus';
import Idea from './components/Idea';

const DecisionWrapper = styled.div`
    margin-top: 64px;
    margin-left: 240px;
    
    color: ${colors.darkText};
    background-color: ${colors.background};
    height: 100%;
`;

const IdeasWrapper = styled.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-column-count: ${props => props.colCount};
    -moz-column-count: ${props => props.colCount};
    column-count: ${props => props.colCount};
    -webkit-column-gap: 0;
    -moz-column-gap: 0;
    column-gap: 0;
    position: relative;
    
    padding-top: 24px;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
`;

const DecisionNameWrapper = styled.div`
    padding: 20px 40px;
    padding-bottom: 0;
`;

const DecisionName = styled.h1`
    display: inline;
    
    font-size: 48px;
    line-height: 56px;
    font-stretch: condensed;
`;

const IdeaWrapper = styled.div`
    padding: 20px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
`;

export default class Decision extends Component {

    constructor() {
        super();
        this.state = {
            decision: {
                name: "Important decision 11",
                ideas: [
                    { name: "Idea 111", desc: "Idea 111", score: 284 },
                    { name: "Idea 112", desc: "Idea 112 Idea 112 Idea 112 Idea 112 Idea 112 Idea 112", score: 23 },
                    { name: "Idea 113", desc: "Idea 113", score: 354 },
                    { name: "Idea 114", desc: "Idea 114 Idea 114 Idea 114 Idea 114 Idea 114", score: 61 }
                ]
            }
        }
    }

    render() {
        return (
            <div id="decision">
                <div>
                    <SideMenu/>
                    <DecisionWrapper>
                        <DecisionNameWrapper>
                            <DecisionName>{this.state.decision.name}</DecisionName>
                        </DecisionNameWrapper>
                        <IdeasWrapper colCount={Math.round( (this.state.width - 240) / 320 )}>
                            {this.state.decision.ideas.map( ( idea, i ) =>
                                <IdeaWrapper>
                                    <Idea idea={idea} key={"idea-item-" + i}/>
                                </IdeaWrapper>
                            )}
                        </IdeasWrapper>
                    </DecisionWrapper>
                </div>
                <HeaderMenu/>
            </div>
        )

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