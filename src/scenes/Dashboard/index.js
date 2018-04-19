import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from 'res/colors.json';

import { Side as SideMenu, Sticky as HeaderMenu } from 'components/Menus';
import Section from './components/Section';

import { fetchBoards } from 'model';


const SectionWrapper = styled.div`
    margin-top: 64px;
    margin-left: 240px;
    
    color: ${colors.darkText};
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

export default connect(
    store => ({
        boards: store.boards.boards,
        fetch_boards: store.dashboard.fetch_boards
    }),
    {
        fetchBoards
    }
) (class Dashboard extends Component {

    constructor(props) {
        super(props);

        console.log("Dashboard: fetch boards", this.props.fetchBoards);
        this.props.fetchBoards();
        
        this.state = {
            sections: [
                {
                    name: "No category",
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
                    name: "Category 1",
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
                    name: "Category 2",
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
                <div>
                    <SideMenu/>
                    <SectionWrapper>                        
                        <ViewModeWrapper>
                            <SwitcherActive>Categories</SwitcherActive>
                            <SwitcherDivider> / </SwitcherDivider>
                            <SwitcherPassive>Teams</SwitcherPassive>
                        </ViewModeWrapper>
                        {/*{this.props.boards.map( ( section, i ) =>*/}
                            {/*<Section section={section} key={"section-item-" + i}/>*/}
                        {/*)}*/}
                        {this.state.sections.map( ( section, i ) =>
                            <Section section={section} key={"section-item-" + i}/>
                        )}
                    </SectionWrapper>
                </div>
                <HeaderMenu/>
            </div>
        );
    }
})