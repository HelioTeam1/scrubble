import React, {Component, Fragment} from 'react';
import './App.css';
import gql from "graphql-tag";
import { Query } from "react-apollo";


const PRACTICE_QUERY = gql`
    query{
        feed{
            id
            title
            text
        }
    }

`

const getTerm = gql`
    query{
        getTerm

    }
    
`


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

    handleSubmit = (e) => {
        //prevents the info being sent to it's default destination
        e.preventDefault();

        //turns the state into JSON
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
    }






    render() {
        //variable results that is set to the current state
        const {results} = this.state;
        return (
            <Fragment>

            <Query query={getTerm}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;

                    return (
                    <h1>{JSON.stringify(data.getTerm)}</h1>

                    );
                }}
            </Query>
            </Fragment>

        )
    }
}




export default App;
