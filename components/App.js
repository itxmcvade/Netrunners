import React from "react";
import ReactDOM from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {onError} from "@apollo/client/link/error"; 
import GetUsers from "./GetUsers";

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path})=> {
      alert('Graphql ERROR ${message}');
    });
  }
});

// eslint-disable-next-line no-undef
const link = from([
  errorLink,
  // eslint-disable-next-line no-undef
  new HttpLink({uri: "http://localhost:3001/"
  })
]);

const client = new ApolloClient({
  cache: new InMemoryCache()
  ,link: link,
});


function App() {
  return <ApolloProvider client={client}> 
  {""}
  {/*<GetUsers /> */}
  <GetUsers />
  </ApolloProvider>;
}

export default App;
