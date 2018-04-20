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
    }

    render() {        
        let boards = null;
        if (this.props.boards) {
            console.log('--- Fetched boards ---');
            console.log(this.props.boards);
            
            boards = this.props.boards.boards.map( ( section, i ) =>
                <Section section={section} key={"section-item-" + i}/>
            );
        }

        return (
            <div id="Dashboard">
                <div>
                    <SideMenu/>
                    <SectionWrapper>                        
                        <ViewModeWrapper>
                            <SwitcherActive>Boards</SwitcherActive>                            
                        </ViewModeWrapper>                        
                        {boards}
                    </SectionWrapper>
                </div>
                <HeaderMenu/>
            </div>
        );
    }
})