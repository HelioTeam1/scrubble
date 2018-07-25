import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

    constructor() {
        super();
        this.state = {
            term: '',
            results: []
        }
    }
    //
    // componentWillMount() {
    //     fetch(`api.urbandictionary.com/v0/define?term=gnar`)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             this.setState({definitions: data.definitions})
    //             console.log("fetch:", this.state)
    //         })
    // }

    componentWillMount() {

        fetch('https://randomuser.me/api/?results=50')
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({results: data.results})
                console.log(this.state)
            })
    }

    // state = {
    //     term: '',
    //     definition: ''
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify({...this.state})

        this.getDefinition
    }

    render() {


        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           className="form-control"
                           id="InputTerm"
                           placeholder="Input Term"
                           onChange={e => this.setState({term: e.target.value})}/>
                    <input type="submit" value="submit"/>
                </form>
                {/*<section >*/}
                    {/*{result.map((def) =>*/}

                            {/*<Fragment >*/}
                                {/*<h3>{def.list.definition}</h3>*/}
                            {/*</Fragment>*/}
                    {/*)*/}
                    {/*}*/}
                {/*</section>*/}
            </Fragment>
        );
    }
}

export default App;
