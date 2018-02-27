import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../res/colors.json';
import icon_home from '../../res/icons/ic_dashboard.svg';
import icon_group from '../../res/icons/ic_people.svg';
import icon_add from '../../res/icons/ic_add_board.svg';
import icon_settings from '../../res/icons/ic_settings.svg';
import icon_logout from '../../res/icons/ic_logout.svg';

const SideDiv = styled.div`
    width: 240px;
    height: 100%;
    
    position: fixed;
    left: 0;
    top: 64px;
    
    background-color: ${colors.primary};
`;

const MenuItem = styled.div`
    width: 100%;
    height: 80px;
    
    display: flex;
    align-items: center;
`;

const MenuItemIcon = styled.img`
    height: 16px;
    width: 16px;
    margin: 16px;
`;

const MenuItemLabel = styled.span`
    line-height: 24px;
    font-size: 20px;
    text-transform: capitalize;
    color: white
`;

export default class SideMenu extends Component {

    constructor() {
        super();
        this.menuItemsOrder = [
            { icon: icon_home, text: "boards" },
            { icon: icon_group, text: "teams" },
            { icon: icon_add, text: "create new board" },
            { icon: icon_settings, text: "settings" },
            { icon: icon_logout, text: "log out" }
        ];
    }

    render() {
        let menuItems = [];
        for ( let i = 0; i < this.menuItemsOrder.length; i++ ) {
            menuItems.push(
                <MenuItem key={"menu-item-" + i}>
                    <MenuItemIcon src={this.menuItemsOrder[i].icon}/>
                    <MenuItemLabel>{this.menuItemsOrder[i].text}</MenuItemLabel>
                </MenuItem>
            );
        }
        return (
            <SideDiv>
                {menuItems}
            </SideDiv>
        );
    }
}