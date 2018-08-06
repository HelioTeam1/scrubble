import React, {Component, Fragment} from 'react';
import '../Modals/App.css';
import {gql} from "apollo-boost";
import {ApolloConsumer} from "react-apollo";




const GET_TERM = gql`
    query getTerm($term: String!){
        getTerm(term: $term){
            list{
                definition
            }
        }
    }
`

// const GET_TERM = gql`
//     query {
//         getTerm(term: "hello"){
//             list{
//                 definition
//             }
//         }
//     }
// `;


class App extends Component {

    constructor() {
        super();
        this.state = {
            term: '',
            results: []
        };
    }


    /*
     It submits a get request to the Urban Dictionary API with the term we want to query.
     */

    // handleSubmit = (e) => {
    //     //    //prevents the info being sent to it's default destination
    //     e.preventDefault();
    // turns the state into JSON
    // const data = JSON.stringify({...this.state})

    //checks if the term is an empty string and doesn't do the GET request if it is


    // if(this.state.term === ""){
    //     return;
    // }
    //
    // //a GET fetch request that pulls info from urban dictionary
    // fetch(`https://api.urbandictionary.com/v0/define?term=${this.state.term}`)
    //     .then(results => results.json())
    //     .then(data => this.setState({results: data.list}))
    //
    //
    //
    // };

    onTermFetched = term => this.setState(() => ({term}));

    render() {
        //variable results that is set to the current state
        const {results} = this.state
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
                                    this.onTermFetched(data.term);
                                        // .then(results => results.json())
                                        // .then(data => this.setState({results: data.list}))
                                    console.log(data)

                                }}
                                >
                                    <input type="text"
                                           placeholder="Lookup a word"
                                        // value={this.state.term}
                                           onChange={e => this.setState({term: e.target.value})}
                                    />
                                    <input type="submit"
                                        // value="Fetch"
                                        // disabled={this.state.term === ""}
                                    />
                                </form>
                                {/*<h1>{JSON.stringify(data.getTerm.list[4])}</h1>*/}
                                {/*<h1>{JSON.stringify(data.getTerm)}</h1>*/}
                                {/*{console.log(data)}*/}
                            </div>
                        );
                    }}
                </ApolloConsumer>
            </Fragment>

        )
    }
}


export default App;
