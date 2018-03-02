import React, { Component } from 'react';
import styled from 'styled-components';
import colors from 'res/colors.json';

import { Side as SideMenu, Header as HeaderMenu } from 'components/Menu';
import Section from 'components/Section';


const SectionWrapper = styled.div`
    padding-top: 64px;
    padding-left: 240px;
    color: ${colors.darkText};
    background-color: ${colors.background};
`;

const ViewModeWrapper = styled.div`
    padding: 20px 40px;
    padding-bottom: 0;
`;

const Switcher = styled.h1`
    display: inline;
    
    font-size: 48px;
    line-height: 56px;
    font-stretch: condensed;
`;

const SwitcherActive = styled( Switcher )``;

const SwitcherPassive = styled( Switcher )`
    color: ${colors.linkBlue};
    cursor: pointer;
    
    &:hover {
        border-bottom: 2px solid ${colors.linkBlue};
    }
`;

const SwitcherDivider = styled( Switcher )`
    color: ${colors.dividerGray};
`;


export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            sections: [
                {
                    name: "Unsorted",
                    decisions: [
                        {
                            name: "Important decision 11",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 111", score: 284 },
                                { name: "Idea 112", score: 23 },
                                { name: "Idea 113", score: 354 },
                                { name: "Idea 114", score: 61 }
                            ]
                        },
                        {
                            name: "Important decision 12",
                            subName: "Kakashi",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 121", score: 284 },
                                { name: "Idea 122", score: 23 },
                                { name: "Idea 123", score: 354 }
                            ]
                        },
                        {
                            name: "Important decision 13",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 131", score: 284 },
                                { name: "Idea 132", score: 23 },
                                { name: "Idea 133", score: 354 },
                                { name: "Idea 134", score: 61 }
                            ]
                        },
                    ]
                },
                {
                    name: "Sorted",
                    decisions: [
                        {
                            name: "Important decision 21",
                            subName: "Sakashi",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 211", score: 284 },
                                { name: "Idea 212", score: 23 },
                                { name: "Idea 213", score: 354 },
                                { name: "Idea 214", score: 61 }
                            ]
                        },
                        {
                            name: "Important decision 22",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 221", score: 284 },
                                { name: "Idea 222", score: 23 }
                            ]
                        },
                        {
                            name: "Important decision 23",
                            subName: "Sakashi",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 231", score: 284 },
                                { name: "Idea 232", score: 23 },
                                { name: "Idea 233", score: 354 },
                                { name: "Idea 214", score: 61 }
                            ]
                        },
                        {
                            name: "Important decision 24",
                            subName: "Sakashi",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 231", score: 284 },
                                { name: "Idea 232", score: 23 },
                                { name: "Idea 233", score: 354 },
                                { name: "Idea 214", score: 61 },
                                { name: "Idea 214", score: 105 }
                            ]
                        },
                        {
                            name: "Important decision 25",
                            subName: "Sakashi",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 231", score: 284 },
                                { name: "Idea 232", score: 23 },
                                { name: "Idea 233", score: 354 }
                            ]
                        },
                        {
                            name: "Important decision 26",
                            subName: "Sakashi",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 231", score: 284 },
                                { name: "Idea 232", score: 23 },
                                { name: "Idea 233", score: 354 }
                            ]
                        }
                    ]
                },
                {
                    name: "Very sorted",
                    decisions: [
                        {
                            name: "Important decision 31",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 311", score: 284 },
                                { name: "Idea 312", score: 23 },
                                { name: "Idea 313", score: 354 },
                                { name: "Idea 314", score: 61 }
                            ]
                        },
                        {
                            name: "Important decision 32",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 321", score: 284 },
                                { name: "Idea 322", score: 23 },
                                { name: "Idea 323", score: 354 },
                                { name: "Idea 324", score: 61 }
                            ]
                        },
                        {
                            name: "Important decision 33",
                            isTeam: true,
                            ideas: [
                                { name: "Idea 331", score: 284 },
                                { name: "Idea 332", score: 23 },
                                { name: "Idea 333", score: 354 },
                                { name: "Idea 334", score: 61 }
                            ]
                        },
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div id="Dashboard">
                <HeaderMenu/>
                <div>
                    <SideMenu/>
                    <SectionWrapper>
                        <ViewModeWrapper>
                            <SwitcherActive>Categories</SwitcherActive>
                            <SwitcherDivider> / </SwitcherDivider>
                            <SwitcherPassive>Teams</SwitcherPassive>
                        </ViewModeWrapper>
                        {this.state.sections.map( ( section ) => <Section section={section}/> )}
                    </SectionWrapper>
                </div>
            </div>
        );
    }
}