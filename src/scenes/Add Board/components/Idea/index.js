import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from 'components/Cards';
import deleteImage from 'res/images/delete-button.svg';
import colors from 'res/colors.json';
import TextInputBoard from 'components/TextInputBoard';
import TextArea from 'components/TextArea';
import Link from 'components/Link'


const Header = styled.h1`
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 12px;
    display:flex;
    flex-direction:row;
`

const Description = styled.p`
    font-size: 16px;
    line-height: 18px;
    color: ${colors.mediumText};
    height:100px;
`;

const DeleteBoard = styled.img`
    height: 16px;
    max-width: 32px;
    margin:8px;
`;

export default class Idea extends Component {

    inputChangeHandler( event ) {
        this.setState( {
            ...this.state,
            [event.target.type]: event.target.value,
        } );
    }

    render() {
        return (
            <form>
                <Wrapper>
                    <Header>
                        <TextInputBoard type="optionName" name="optionName" placeholder="Add option name" fontSize="24px"
                        onChange={this.inputChangeHandler.bind( this )}/>
                        <Link>
                            <DeleteBoard src={deleteImage} alt="delete"/>
                        </Link>
                    </Header>
                    <Description>
                        <TextArea type="optionDesc" name="optionDesc" placeholder="Add option description. You can weite advantages and disadvantages of this option." fontSize="18px"
                        onChange={this.inputChangeHandler.bind( this )}/>
                    </Description>
                </Wrapper>
            </form>
        );
    }
};