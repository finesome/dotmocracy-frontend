import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import colors from 'res/colors.json';
import { Side as SideMenu, Sticky as HeaderMenu } from 'components/Menus';
import Idea from './components/Idea';
import AddIdea from './components/AddIdea';

import { addBoard } from 'model';
import { DefaultButton as Button } from 'components/Buttons';
import TextInputBoard from 'components/TextInputBoard';

const DecisionWrapper = styled.div`
    margin-top: 64px;
    margin-left: 240px;
    
    color: ${colors.darkText};
    background-color: ${colors.background};
    height: 100%;
`;

const IdeasWrapper = styled.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-column-count: ${props => props.colCount};
    -moz-column-count: ${props => props.colCount};
    column-count: ${props => props.colCount};
    -webkit-column-gap: 0;
    -moz-column-gap: 0;
    column-gap: 0;
    position: relative;
    
    padding-top: 24px;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
`;

const DecisionNameWrapper = styled.div`
    padding: 20px 40px;
    padding-bottom: 0;
    display: flex;
    // justify-content: space-between;
`;

const DecisionName = styled.div`
    line-height: 36px;
    font-stretch: condensed;
    margin-right: 24px;
`;

const DecisionCategory = styled.div`
    line-height: 36px;
    font-stretch: condensed;
`;

const IdeaWrapper = styled.div`
    padding: 20px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
`;

const StyledButton = styled( Button )`
    float: right;
    width: 200px;
    height: 40px;
    font-size: 14px;
    margin:40px;
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

export default connect( null, {
    addBoard
} )( class AddBoard extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            ideas: [
                { name: "", desc: "", id: 0 },
                { name: "", desc: "", id: 1 },
                { name: "", desc: "", id: 2 }
            ]
        }
    }

    submitForm( event ) {
        event.preventDefault();
        let ideas = this.state.ideas.map((idea) => ({name: idea.name, desc: idea.desc}));
        this.props.addBoard( this.state.name, this.state.category, ideas );
    }

    nameChangeHandler( event ) {
        let newState = { ...this.state };
        newState.name = event.target.value;
        this.setState( newState );
    }

    categoryChangeHandler( event ) {
        let newState = { ...this.state };
        newState.category = event.target.value;
        this.setState( newState );
    }

    deleteHandler( index ) {
        let newState = { ...this.state };
        newState.ideas = [...this.state.ideas];
        newState.ideas.splice( +index, 1 );
        this.setState( newState );
    }

    updateNameHandler( index, value ) {
        let newState = { ...this.state };
        newState.ideas = [...this.state.ideas];
        newState.ideas[index].name = value;
        this.setState( newState );
    }

    updateDescHandler( index, value ) {
        let newState = {};
        newState.ideas = [...this.state.ideas];
        newState.ideas[index].desc = value;
        this.setState( newState );
    }

    addIdeaHandler() {
        let newState = {};
        newState.ideas = [...this.state.ideas];
        let maxId = 0;
        if (this.state.ideas.length != 0) {
            maxId = this.state.ideas[this.state.ideas.length - 1].id + 1;
        }
        newState.ideas.push( { name: "", desc: "", id: maxId } );
        this.setState( newState );
    }

    render() {
        return (
            <div id="decision">
                <div>
                    <SideMenu/>
                    <DecisionWrapper>
                        <ViewModeWrapper>
                            <SwitcherActive>New Board</SwitcherActive>
                        </ViewModeWrapper>
                        <DecisionNameWrapper>
                            <DecisionName>
                                <TextInputBoard placeholder="Add board name"
                                                maxLength="200" fontSize="28px" color="#009688"
                                                onChange={this.nameChangeHandler.bind( this )}/>
                            </DecisionName>
                            <DecisionCategory>
                                <TextInputBoard placeholder="Choose category"
                                                maxLength="100" fontSize="28px" color="#009688"
                                                onChange={this.categoryChangeHandler.bind( this )}/>
                            </DecisionCategory>
                        </DecisionNameWrapper>
                        <IdeasWrapper colCount={Math.round( (this.state.width - 240) / 320 )}>
                            {this.state.ideas.map( ( idea, i ) =>
                                <IdeaWrapper key={"idea-item-" + idea.id}>
                                    <Idea idea={idea} index={i}
                                          deleteIdea={this.deleteHandler.bind( this )}
                                          updateName={this.updateNameHandler.bind( this )}
                                          updateDesc={this.updateDescHandler.bind( this )}
                                    />
                                </IdeaWrapper>
                            )}
                            <IdeaWrapper>
                                <AddIdea addIdea={this.addIdeaHandler.bind( this )}/>
                            </IdeaWrapper>
                        </IdeasWrapper>
                    </DecisionWrapper>
                    <StyledButton name="createBoardButton"
                                  onClick={this.submitForm.bind( this )}>Create board</StyledButton>
                </div>
                <HeaderMenu/>
            </div>
        )
    }

    updateDimensions() {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName( 'body' )[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        this.setState( { width, height } );
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener( "resize", this.updateDimensions.bind( this ) );
    }

    componentWillUnmount() {
        window.removeEventListener( "resize", this.updateDimensions.bind( this ) );
    }
} )