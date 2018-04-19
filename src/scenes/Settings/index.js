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

const SettingsWrapper = styled.div`
    margin-left: 40px;
    margin-top: 24px;
`;

const SettingWrapper = styled.div`
    display: block;
    margin-top: 16px;
`;

const Caption = styled.span`
    font-size: 24px;
`;

const SettingsInput = styled.input`
    padding: 8px;
`;

const ShowPasswordWrapper = styled.div`
    display: block;
    margin: 8px 0px;
`;

const ShowPasswordCheckbox = styled.input`
    margin-right: 8px;
`;

const ShowPasswordLabel = styled.label`
    font-size: 20px;
`;

const EditButton = styled.button`
    margin-top: 16px;
    font-size: 20px;
    padding: 8px 16px;
    border: 2px solid black;
    border-radius: 3px;
`;

export default connect(
    store => ({
        username: store.user.user.user.username
    }),
    {
        
    }
) (class Settings extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            showPassword: false
        }
    }

    showPasswordHandler(event) {
        this.setState({
            ...this.state,
            showPassword: event.target.checked
        });
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
                        <SettingsWrapper>
                            {content}
                            <SettingWrapper>
                                <Caption>Username: </Caption>
                                <SettingsInput placeholder={this.props.username} />
                            </SettingWrapper>
                            <SettingWrapper>
                                <Caption>Password: </Caption>
                                <SettingsInput type={this.state.showPassword ? "text" : "password"} />
                                <ShowPasswordWrapper>
                                    <ShowPasswordCheckbox type="checkbox" name="showPasswordCheckbox" onChange={this.showPasswordHandler.bind(this)}/>
                                    <ShowPasswordLabel for="showPasswordCheckbox">Show password</ShowPasswordLabel>
                                </ShowPasswordWrapper>
                            </SettingWrapper>
                            <EditButton>Save changes</EditButton>
                        </SettingsWrapper>
                    </SectionWrapper>
                </div>
                <HeaderMenu/>
                
            </div>
        );
    }
})