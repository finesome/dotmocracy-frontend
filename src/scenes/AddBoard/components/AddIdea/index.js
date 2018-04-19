import React, { Component } from 'react';
import styled from 'styled-components';
import colors from 'res/colors.json';

import { Wrapper } from 'components/Cards';
import addImage from 'res/images/plus-button.svg';
import Link from 'components/Link'


const Header = styled.h1`
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 12px;
    display:flex;
    justify-content: space-between;
`;

const NewIdea = styled.img`
    height: 16px;
    max-width: 32px;
    margin:8px;
`;

export default class AddIdea extends Component {

    render() {
        return (
            <Wrapper>
                <Header>
                    Add new idea
                    <Link>
                        <NewIdea src={addImage} alt="add"/>
                    </Link>
                </Header>
            </Wrapper>
        );
    }
};