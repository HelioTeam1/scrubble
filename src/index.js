import React from 'react';
import ReactDOM from 'react-dom';
import './components/Modals/index.css';
import App from './components/Containers/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";




const client = new ApolloClient({
    uri: "http://localhost:4000"
});

ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
        , document.getElementById('root'));
registerServiceWorker();
