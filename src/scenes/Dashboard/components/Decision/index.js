import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from 'components/Cards';
import Header from 'components/Header';

import colors from 'res/colors.json';

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
`;

export default class Decision extends Component {

    constructor() {
        super();
        this.items = [
            { idea: "Idea 1", score: "10" },
            { idea: "Idea 2", score: "142" },
            { idea: "Idea 3", score: "348" },
            { idea: "Idea 4", score: "56" }
        ];
    }

    render() {
        let ideas = [];
        for ( let i = 0; i < this.items.length; i++ ) {
            ideas.push(
                <Idea key={"list-item-" + i}>
                    <span>{this.items[i].idea}</span>
                    <span>{this.items[i].score}</span>
                </Idea>
            );
        }

        return(
            <Wrapper>
                <Header>Kinda very long question for testing purposes</Header>
                <IdeaList>
                    {ideas}
                </IdeaList>
            </Wrapper>
        );
    }
}