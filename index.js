import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: 'https://api-us-west-2.hygraph.com/v2/cl6vmf9su3dyx01umfw07fnfg/master',
  cache: new InMemoryCache(),
});

// const client = ...

client
  .query({
    query: gql`
    query{
      posts{
        id,
        title,
        datePublished,
        slug,
        content{
          html
        }
        author{
          name,
          avatar{
            url
          }
        }
        coverPhoto{
          publishedAt{
            createdBy{
              id
            }
          }
          url
        }
      }
    }
    `,
  })
  .then((result) => console.log(result));


  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

