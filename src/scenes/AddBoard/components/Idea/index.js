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
`;

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

    render() {
        return (
            <Wrapper>

                <Header>
                    <TextInputBoard type="optionName" name="optionName"
                                    placeholder="Add option name" fontSize="24px"
                                    value={this.props.idea.name}
                                    onChange={(event) => this.props.updateName(this.props.index, event.target.value)}/>
                    <Link>
                        <DeleteBoard src={deleteImage} alt="delete"
                                      onClick={() => this.props.deleteIdea(this.props.index)}/>
                    </Link>
                </Header>
                <Description>
                        <TextArea type="optionDesc" name="optionDesc" fontSize="18px"
                                  placeholder="Option description."
                                  value={this.props.idea.desc}
                                  onChange={(event) => this.props.updateDesc(this.props.index, event.target.value)}/>
                </Description>
            </Wrapper>
        );
    }
};