import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor(){
        super();
        this.state = {
            term: '',
            results: []
        };
    }

        // state = {
        //     term: '',
        //     results: []
        // };

/*
 It submits a get request to the Urban Dictionary API with the term we want to query.
 */

    handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify({...this.state})

        fetch(`https://api.urbandictionary.com/v0/define?term=${this.state.term}`)
            .then(results => results.json())
            .then(data => this.setState({results: data.list}))

    }



    render() {

        const {results} = this.state;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder="Enter Term"
                           onChange={event => this.setState({term: event.target.value})}/>
                    <input type='submit'/>



                </form>

                <ul>
                {results.map(
                    result =>
                        <li key={result.defid}>
                            {/*{result.definition}*/}
                            <a href={result.permalink}>{result.definition}</a>
                        </li>
                )}
                </ul>
            </Fragment>

        )
    }
}


export default App;
