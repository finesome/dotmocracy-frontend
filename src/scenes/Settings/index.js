import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from 'res/colors.json';

import { Side as SideMenu, Sticky as HeaderMenu } from 'components/Menus';

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
        
    }),
    {
        
    }
) (class Settings extends Component {

    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        let content = null;

        return (
            <div id="Settings">
                <div>
                    <SideMenu/>
                    <SectionWrapper>                        
                        <ViewModeWrapper>
                            <SwitcherActive>Settings</SwitcherActive>
                            <SwitcherDivider> / </SwitcherDivider>
                        </ViewModeWrapper>
                        {content}                        
                    </SectionWrapper>
                </div>
                <HeaderMenu/>
            </div>
        );
    }
})