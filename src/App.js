import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

        state = {
            term: '',
            results: []
        };


    componentDidMount() {

        fetch('https://api.urbandictionary.com/v0/define?term=war')
            .then(results => results.json())
            .then(data => this.setState({results: data.list}))
        // console.log(this.state)
    }


    render() {

        const {results} = this.state;
        return (
            <Fragment>
                <ul>
                {results.map(
                    result =>
                        <li key={result.defid}>
                            {result.definition}
                            {/*<a href={result.permalink}>{result.definition}</a>*/}
                        </li>
                )}
                </ul>
            </Fragment>

        )
    }
}


export default App;
