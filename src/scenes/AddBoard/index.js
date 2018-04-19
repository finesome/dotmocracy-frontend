import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import colors from 'res/colors.json';
import { Side as SideMenu, Sticky as HeaderMenu } from 'components/Menus';
import Idea from './components/Idea';
import AddIdea from './components/AddIdea';

import {addBoard} from 'model';
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
    padding: 50px 40px;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
`;

const DecisionName = styled.div`
    line-height: 36px;
    font-stretch: condensed;
    font-color: #009688;
    font-size:36px !important;
    
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



export default connect(null, {
    addBoard
})(class AddBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            ideas: [
                { name:"", desc:""},
                { name:"", desc:""},
                { name:"", desc:""}
            ]
        }
    }

    submitForm( event ) {
        event.preventDefault();
        this.props.addBoard( this.state.decisionName, this.state.categoryName );
    }

    inputChangeHandler( event ) {
        this.setState( {
            ...this.state,
            [event.target.type]: event.target.value,
        } );
    }

    render() {
        return (
            <div id="decision">
                <div>
                    <SideMenu/>
                    <DecisionWrapper>
                        <DecisionNameWrapper>
                            <DecisionName>
                                <TextInputBoard type="decisionName" name="decisionName" placeholder="Add board name" maxLength="200" fontSize="28px" color="#009688" 
                                    onChange={this.inputChangeHandler.bind( this )}/>
                            </DecisionName>
                            <DecisionCategory>
                                <TextInputBoard type="categoryName" name="categoryName" placeholder="Choose category" maxLength="100" fontSize="28px" text-align="right"
                                onChange={this.inputChangeHandler.bind( this )}/>
                            </DecisionCategory>
                        </DecisionNameWrapper>
                        <IdeasWrapper colCount={Math.round( (this.state.width - 240) / 320 )}>
                            {this.state.ideas.map( ( idea, i ) =>
                                <IdeaWrapper>
                                    <Idea idea={idea} key={"idea-item-" + i}/>
                                </IdeaWrapper>
                            )}
                            <IdeaWrapper>
                                <AddIdea/>
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
})