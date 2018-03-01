import React, { Component } from 'react';
import styled from 'styled-components';
import colors from 'res/colors.json';

import Header from "components/Header";
import SideMenu from "components/SideMenu";

import Section from "./components/Section";

const SectionWrapper = styled.div`
    background-color: ${colors.background};
    padding-top: 64px;
    padding-left: 240px;
    color: ${colors.darkText};
`;

const ViewModeWrapper = styled.div`
    padding: 20px 40px;
    padding-bottom: 0;
`;

const Switcher = styled.h1`
    font-size: 48px;
    line-height: 56px;
    font-stretch: condensed;
    display: inline;
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
    render() {
        return (
            <div id="Dashboard">
                <Header/>
                <div>
                    <SideMenu/>
                    <SectionWrapper>
                        <ViewModeWrapper>
                            <SwitcherActive>Categories</SwitcherActive>
                            <SwitcherDivider> / </SwitcherDivider>
                            <SwitcherPassive>Teams</SwitcherPassive>
                        </ViewModeWrapper>
                        <Section/>
                        <Section/>
                        <Section/>
                        <Section/>
                    </SectionWrapper>
                </div>
            </div>
        );
    }
}