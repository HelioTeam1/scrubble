import React, {Component, Fragment} from 'react';
import '../Modals/App.css';
import {gql} from "apollo-boost";
import {ApolloConsumer} from "react-apollo";
import Game from './Game';


const GET_TERM = gql`
    query getTerm($term: String!){
        getTerm(term: $term){
            list{
                definition
            }
        }
    }
`


class App extends Component {

    constructor() {
        super();
        this.state = {
            term: '',
            results: [],
            def: ''
        };
    }


    onTermFetched = term => this.setState(() => ({term}));
    onDefFetched = def => this.setState(() => ({def}))

    render() {

        //variable results that is set to the current state
        const {results} = this.state.results
        return (
            <Fragment>
                <ApolloConsumer>
                    {client => {
                        return (
                            <div>
                                <form onSubmit={async e => {
                                    e.preventDefault();
                                    
                                    const {data} = await client.query({
                                        query: GET_TERM,
                                        variables: {term: this.state.term}
                                    });
                                    const thisDef = data.getTerm.list[0].definition
                                    this.onTermFetched(data.term);
                                    this.onDefFetched(thisDef)
                                    console.log(data)
                                    const thisTerm = this.state.term

                                }}
                                >
                                    <input type="text"
                                           placeholder="Lookup a word"
                                           onChange={e => this.setState({term: e.target.value})}
                                    />
                                    <input type="submit"/>
                                </form>
                                <h1>{this.state.term}</h1>
                                <h2>{this.state.def}</h2>

                                <div>
                                    <Game />
                                </div>

                            </div>
                        );
                    }
                    }
                </ApolloConsumer>
            </Fragment>

        )
    }
}

export default App;