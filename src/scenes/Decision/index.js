import React, { Component } from 'react';
import { PieChart } from 'react-d3-components';
import { scaleOrdinal, domain, range } from 'd3';
import styled from 'styled-components';
import colors from 'res/colors.json';
import { connect } from 'react-redux';

import { DefaultButton as Button } from 'components/Buttons';
import { Side as SideMenu, Sticky as HeaderMenu } from 'components/Menus';
import Idea from './components/Idea';

import { fetchIdeas } from 'model';


const DecisionWrapper = styled.div`
    margin-top: 64px;
    margin-left: 240px;
    
    color: ${colors.darkText};
    height: 100%;
`;

const DecisionNameWrapper = styled.div`
    padding: 20px 40px;
    padding-bottom: 0;
`;

const DecisionName = styled.h1`
    display: inline;
    
    font-size: 48px;
    line-height: 56px;
    font-stretch: condensed;
`;

const DecisionDescWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    padding-top: 24px;
    padding-bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
`;

const IdeasWrapper = styled.div`
    flex-grow: 1;
    
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-column-count: ${props => props.colCount};
    -moz-column-count: ${props => props.colCount};
    column-count: ${props => props.colCount};
    -webkit-column-gap: 0;
    -moz-column-gap: 0;
    column-gap: 0;
    position: relative;
`;

const IdeaWrapper = styled.div`
    padding: 20px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
`;

const ConfirmVotesButton = styled( Button )`
    position: fixed;
    bottom: 24px;
    right: 24px;
    padding: 16px;
    font-size: 20px;
`;


export default connect(
    store => ({
        ideas: store.boards.ideas,
        fetch_ideas: store.dashboard.fetch_ideas
    }),
    {
        fetchIdeas
    }
) (class Decision extends Component {
    constructor(props) {
        super(props);

        const path = this.props.location.pathname;
        const parsed = path.split('/');
        const id = parsed[parsed.length - 1];

        console.log("Decision id:", id);

        console.log("Fetching ideas of board 1");
        this.props.fetchIdeas(id);

        this.state = {
            decision: {
                name: "Important decision 11",
                ideas: [
                    {
                        name: "Idea 111",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nibh leo, sagittis non est et, auctor accumsan ligula. Suspendisse imperdiet dapibus urna, sed tincidunt erat semper eu.",
                        score: 100,
                        myScore: 20
                    },
                    {
                        name: "Idea 112",
                        desc: "Maecenas vel risus ultricies, molestie lacus eget, porttitor elit. Phasellus varius, arcu ac accumsan condimentum, justo magna imperdiet dui, at euismod est ante at tortor. Ut elit dui, sagittis faucibus massa et, imperdiet venenatis lacus. Duis ut laoreet turpis. Praesent non sem libero.",
                        score: 100,
                        myScore: 40
                    },
                    {
                        name: "Idea 113",
                        desc: "Quisque ornare dui quis fringilla vulputate. Pellentesque hendrerit, magna a posuere cursus, ante dolor facilisis augue, quis venenatis purus ipsum a nisl.",
                        score: 100,
                        myScore: 30
                    },
                    {
                        name: "Idea 114",
                        desc: "Pellentesque aliquet ultricies gravida. Maecenas facilisis quis enim eu pharetra. Donec risus odio, viverra eu viverra nec, tristique eu nulla.",
                        score: 100,
                        myScore: 30
                    }
                ]
            }
        };
        this.state.decision.ideas.forEach( ( idea, i ) => {
            idea.color = colors.ideaColors[i % colors.ideaColors.length];
        } );

        this.state.pieChart = {};
        this.state.pieChart.size = 320;
        this.state.pieChart.data = {
            label: '',
            values: this.state.decision.ideas
                .map( ( idea ) => ({ x: idea.name, y: idea.score + idea.myScore }) )
        };
        this.state.pieChart.colorScale = scaleOrdinal()
            .domain( this.state.decision.ideas.map( ( idea ) => idea.name ) )
            .range( this.state.decision.ideas.map( ( idea ) => idea.color ) );
    }


    render() {
        let ideas = null;
        if (this.props.ideas) {
            ideas = <p>{JSON.stringify(this.props.ideas)}</p>;   
        }
        return (
            <div id="decision">
                <div>
                    <SideMenu/>
                    <DecisionWrapper>
                        <DecisionNameWrapper>
                            <DecisionName>{this.state.decision.name}</DecisionName>
                        </DecisionNameWrapper>
                        {ideas}
                        <DecisionDescWrapper>
                            <IdeasWrapper
                                colCount={Math.round( (this.state.width - (240 + this.state.pieChart.size)) / 320 )}>
                                {this.state.decision.ideas.map( ( idea, i ) =>
                                    <IdeaWrapper key={"idea-item-wrapper" + i}>
                                        <Idea idea={idea} dataKey={i}
                                              onChange={this.onSliderChangeHandler.bind( this )}/>
                                    </IdeaWrapper>
                                )}
                            </IdeasWrapper>
                            <PieChart width={this.state.pieChart.size} height={this.state.pieChart.size}
                                      margin={{ top: 20, bottom: 0, left: 0, right: 0 }}
                                      sort={null}
                                      data={this.state.pieChart.data} hideLabels={true}
                                      colorScale={this.state.pieChart.colorScale}/>
                        </DecisionDescWrapper>
                    </DecisionWrapper>
                    <ConfirmVotesButton name="confirm"
                                        onClick={this.submitForm.bind( this )}>Submit</ConfirmVotesButton>
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

    submitForm() {}

    onSliderChangeHandler( key, value ) {
        let newStateDecisionIdeas = this.state.decision.ideas;
        newStateDecisionIdeas[key].myScore = value;

        let newStatePieChartDataValues = this.state.pieChart.data.values;
        newStatePieChartDataValues[key].y = + this.state.decision.ideas[key].score + value;

        this.setState({
            decision: {
                ...this.state.decision,
                ideas: newStateDecisionIdeas
            },
            pieChart: {
                ...this.state.pieChart,
                data: {
                    ...this.state.pieChart.data,
                    values: newStatePieChartDataValues
                }
            }
        });
        // console.log(this.state, this.state.decision.ideas, this.state.decision.ideas.map);
    }
})