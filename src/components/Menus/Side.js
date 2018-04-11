import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from 'model';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'res/colors.json';
import icon_home from 'res/icons/ic_dashboard.svg';
import icon_group from 'res/icons/ic_people.svg';
import icon_add from 'res/icons/ic_add_board.svg';
import icon_settings from 'res/icons/ic_settings.svg';
import icon_logout from 'res/icons/ic_logout.svg';


const SideDiv = styled.div`
    width: 240px;
    height: 100%;
    
    position: fixed;
    top: 64px;
    left: 0;
    
    background-color: ${colors.primary};
    
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`;

const MenuItem = styled.div`
    width: 100%;
    height: 64px;
    
    display: flex;
    align-items: center;
    
    cursor: pointer;
    
    &:hover {
        background-color: ${colors.accent};
    }
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
    color: white;
`;


export default connect(null,
    {
        logoutUser
    }
) (class Side extends Component {

    constructor() {
        super();
        this.menuItemsOrder = [
            { icon: icon_home, text: "boards", link: '/dashboard' },
            // { icon: icon_group, text: "teams", link: '/' },
            { icon: icon_add, text: "create new board", link: '/addboard' },
            // { icon: icon_settings, text: "settings", link: '/' },
            { icon: icon_logout, text: "log out", link: '/' }
        ];
    }

    logoutHandler() {
        this.props.logoutUser();
    }

    render() {
        return (
            <SideDiv>
                <Link to={this.menuItemsOrder[0].link}
                    key="menu-item-0"
                    style={{textDecoration: 'none'}}>
                    <MenuItem>
                        <MenuItemIcon src={this.menuItemsOrder[0].icon}/>
                        <MenuItemLabel>{this.menuItemsOrder[0].text}</MenuItemLabel>
                    </MenuItem>
                </Link>
                <Link to={this.menuItemsOrder[1].link}
                    key="menu-item-1"
                    style={{textDecoration: 'none'}}>
                    <MenuItem>
                        <MenuItemIcon src={this.menuItemsOrder[1].icon}/>
                        <MenuItemLabel>{this.menuItemsOrder[1].text}</MenuItemLabel>
                    </MenuItem>
                </Link>
                <MenuItem key="menu-item-2"
                    onClick={this.logoutHandler.bind(this)}>
                    <MenuItemIcon src={this.menuItemsOrder[2].icon}/>
                    <MenuItemLabel>{this.menuItemsOrder[2].text}</MenuItemLabel>
                </MenuItem>

                {/* {this.menuItemsOrder.map( ( item, i ) => (
                    <Link to={{ pathname: item.link }} key={"menu-item-" + i}
                          style={{ textDecoration: 'none' }}>
                        
                    </Link>
                ) )} */}
            </SideDiv>
        );
    }
});