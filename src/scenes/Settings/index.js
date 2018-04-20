import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from 'res/colors.json';

import { Side as SideMenu, Sticky as HeaderMenu } from 'components/Menus';
import { changeSettings } from 'model';

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
        username: store.user.user,
        change_settings: store.auth.change_settings
    }),
    {
        changeSettings
    }
) (class Settings extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: this.props.username,
            password: '',
            showPassword: false
        }
    }

    showPasswordHandler(event) {
        const updatedState = {...this.state,
            showPassword: event.target.checked
        };
        this.setState(updatedState);
    }

    inputChangedHandler(event) {
        console.log('--- Input changed ---');
        console.log(event.target.value);
        const updatedState = {...this.state,
            [event.target.name]: event.target.value
        };
        this.setState(updatedState);

        console.log('--- Updated state ---');
        console.log(this.state);
    }

    saveChangesHandler(event) {
        this.props.changeSettings(this.state.username, this.state.password);
    }

    render() {
        let statusMsg = null;
        if (this.props.change_settings.load) {
            statusMsg = <p>Changing settings</p>;
        } else if (this.props.change_settings.done) {
            statusMsg = <p>Successfully changed settings</p>;
        } else if (this.props.change_settings.fail) {
            statusMsg = <p>Failed changing settings</p>;
        }

        console.log('--- Change settings status ---');
        console.log(this.props.change_settings);

        return (
            <div id="Settings">
                <div>
                    <SideMenu/>
                    <SectionWrapper>                        
                        <ViewModeWrapper>
                            <SwitcherActive>Settings</SwitcherActive>
                        </ViewModeWrapper>
                        <SettingsWrapper>
                            {statusMsg}
                            <SettingWrapper>
                                <Caption>Username: </Caption>
                                <SettingsInput 
                                    name="username" 
                                    value={this.state.username} 
                                    onChange={this.inputChangedHandler.bind(this)} />
                            </SettingWrapper>
                            <SettingWrapper>
                                <Caption>Password: </Caption>
                                <SettingsInput 
                                    name="password" 
                                    value={this.state.password} 
                                    type={this.state.showPassword ? "text" : "password"} 
                                    onChange={this.inputChangedHandler.bind(this)} />
                                <ShowPasswordWrapper>
                                    <ShowPasswordCheckbox 
                                        type="checkbox" 
                                        name="showPasswordCheckbox" 
                                        onChange={this.showPasswordHandler.bind(this)}/>
                                    <ShowPasswordLabel for="showPasswordCheckbox">Show password</ShowPasswordLabel>
                                </ShowPasswordWrapper>
                            </SettingWrapper>
                            <EditButton onClick={this.saveChangesHandler.bind(this)}>Save changes</EditButton>
                        </SettingsWrapper>
                    </SectionWrapper>
                </div>
                <HeaderMenu/>
                
            </div>
        );
    }
})