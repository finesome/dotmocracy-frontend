import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from 'res/colors.json';
import { Wrapper } from 'components/Cards';
import TRow from "./TRow";

const TableWrapper = styled( Wrapper )`
    width: 1000px;
    margin: 40px auto;
`;
const Table = styled.table`
    width: 100%;
    border: none;
    border-collapse: collapse;
`;
const THead = styled.thead`
    background-color: ${colors.primary}
`;
const TD = styled.td`
    padding: 4px;
    color: ${colors.background};
`;
const TDText = styled.span`
    margin: 4px;
`;
const SortingButton = styled.button`
    padding: 4px;
    color: ${colors.background};
    background-color: ${colors.primary};
    border: none;
`;
const Search = styled.input`
    margin: 4px;
`;
const TBody = styled.tbody`
`;


export default connect(
    store => ({}),
    {}
)( class AdminPanel extends Component {

    constructor( props ) {
        super( props );
        // this.state.logs = [...this.props.logs];
        this.logs = [
            { time: 1, user: "Gaukhar", action: "CRACK", agent: "Mozilla" },
            { time: 2, user: "Makar", action: "ADD", agent: "Yandex" },
            { time: 3, user: "Aslan", action: "LOGIN", agent: "Chrome" }
        ];
        this.state = {
            logs: this.logs,
            asc: true
        };
        this.filters = ["", "", "", ""];
    }

    sorting( event ) {
        let mode = +event.target.value;
        // let sortedLogs = [...this.props.logs];
        let sortedLogs = [...this.state.logs];
        switch ( this.state.asc ) {
            case true:
                switch ( mode ) {
                    case 1:
                        sortedLogs.sort( ( l1, l2 ) => l2.user.localeCompare( l1.user ) );
                        break;
                    case 2:
                        sortedLogs.sort( ( l1, l2 ) => l2.action.localeCompare( l1.action ) );
                        break;
                    case 3:
                        sortedLogs.sort( ( l1, l2 ) => l2.agent.localeCompare( l1.agent ) );
                        break;
                    default:
                        sortedLogs.sort( ( l1, l2 ) => l2.time - l1.time );
                        break;
                }
                break;
            default:
                switch ( mode ) {
                    case 1:
                        sortedLogs.sort( ( l1, l2 ) => l1.user.localeCompare( l2.user ) );
                        break;
                    case 2:
                        sortedLogs.sort( ( l1, l2 ) => l1.action.localeCompare( l2.action ) );
                        break;
                    case 3:
                        sortedLogs.sort( ( l1, l2 ) => l1.agent.localeCompare( l2.agent ) );
                        break;
                    default:
                        sortedLogs.sort( ( l1, l2 ) => l1.time - l2.time );
                        break;
                }
                break;
        }
        this.setState( {
            asc: !this.state.asc,
            logs: sortedLogs
        } );
    }

    search( event ) {
        this.filters[+event.target.dataset.val] = event.target.value;

        let filteredLogs = this.logs.filter( ( logItem ) =>
            (this.filters[0] === "" ||
                (this.filters[0] !== "" && logItem.time.toString( 10 ).match( new RegExp( this.filters[0], "i" ) ))) &&
            (this.filters[1] === "" ||
                (this.filters[1] !== "" && logItem.user.match( new RegExp( this.filters[1], "i" ) ))) &&
            (this.filters[2] === "" ||
                (this.filters[2] !== "" && logItem.action.match( new RegExp( this.filters[2], "i" ) ))) &&
            (this.filters[3] === "" ||
                (this.filters[3] !== "" && logItem.agent.match( new RegExp( this.filters[3], "i" ) )))
        );

        this.setState( {
            asc: this.state.asc,
            logs: filteredLogs
        } );
    }

    render() {
        return (
            <div id="AdminPanel">
                <TableWrapper>
                    <Table>
                        <THead>
                        <TD>
                            <TDText>Time</TDText>
                            <SortingButton value={0} onClick={this.sorting.bind( this )}>
                                {this.state.asc ? "▲" : "▼"}
                            </SortingButton>
                            <Search type="text" data-val={0} onChange={this.search.bind( this )}/>
                        </TD>
                        <TD>
                            <TDText>User</TDText>
                            <SortingButton value={1} onClick={this.sorting.bind( this )}>
                                {this.state.asc ? "▲" : "▼"}
                            </SortingButton>
                            <Search type="text" data-val={1} onChange={this.search.bind( this )}/>
                        </TD>
                        <TD>
                            <TDText>Action</TDText>
                            <SortingButton value={2} onClick={this.sorting.bind( this )}>
                                {this.state.asc ? "▲" : "▼"}
                            </SortingButton>
                            <Search type="text" data-val={2} onChange={this.search.bind( this )}/>
                        </TD>
                        <TD>
                            <TDText>Agent</TDText>
                            <SortingButton value={3} onClick={this.sorting.bind( this )}>
                                {this.state.asc ? "▲" : "▼"}
                            </SortingButton>
                            <Search type="text" data-val={3} onChange={this.search.bind( this )}/>
                        </TD>
                        </THead>
                        <TBody>
                        {this.state.logs.map( ( log, i ) => <TRow key={"log-item-" + i} logItem={log}/> )}
                        </TBody>
                    </Table>
                </TableWrapper>
            </div>
        );
    }
} )