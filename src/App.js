import React, {Component, Fragment} from 'react';
import './App.css';


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
        if(this.state.term === ""){
            return;
        }

        //a GET fetch request that pulls info from urban dictionary
        fetch(`https://api.urbandictionary.com/v0/define?term=${this.state.term}`)
            .then(results => results.json())
            .then(data => this.setState({results: data.list}))
    }

    render() {
        //variable results that is set to the current state
        const {results} = this.state;
        return (
            <Fragment>
                {/*form for the text field and submit button*/}
                <form onSubmit={this.handleSubmit}>
                    {/*input for the text field*/}
                    <input type='text' placeholder="Enter Term"
                           onChange={event => this.setState({term: event.target.value})}/>
                    {/*input for the submit*/}
                    <input type='submit'/>
                </form>
                {/*ordered list for the definition results*/}
                <ol>
                    {/*maps out the results to display only the definitions*/}
                    {results.map(
                        result =>
                            <li key={result.defid}>
                                {/*{result.definition}*/}
                                <a href={result.permalink}>{result.definition}</a>
                            </li>
                    )}
                </ol>
            </Fragment>
        )
    }
}




export default App;
