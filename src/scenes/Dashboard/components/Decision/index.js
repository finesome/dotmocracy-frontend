import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from 'components/Cards';
import Header from 'components/Header';

import colors from 'res/colors.json';
import Link from "components/Link";


const DecisionWrapper = styled( Wrapper )`
    margin: 0;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }
`;

const IdeaList = styled.div`
    width: 100%;
    height: auto;
    
    font-size: 16px;
    line-height: 18px;
    color: ${colors.mediumText};
`;

const Idea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    height: 40px;
    
    padding: 0 16px;
    margin: 0 -16px;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const Info = styled( Link )`
    display: block;
    margin-top: 8px;
    
    font-size: 16px;
    line-height: 20px;
`;


export default class Decision extends Component {

    render() {
        return (
            <DecisionWrapper>
                <Header>{this.props.decision.name}</Header>
                <IdeaList>
                    {this.props.decision.ideas.map( ( idea, i ) => <Idea key={"idea-item-" + i}>
                        <span>{idea.name}</span>
                        <span>{idea.score}</span>
                    </Idea> )}
                </IdeaList>
                <Info>{
                    this.props.decision.isTeam
                        ? (this.props.decision.subName) ? "Team " + this.props.decision.subName : "No team"
                        : (this.props.decision.subName) ? "Category " + this.props.decision.subName : "Unsorted"
                }</Info>
            </DecisionWrapper>
        );
    }
}