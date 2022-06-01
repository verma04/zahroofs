import React from 'react'

import Footer from '../layout/footer/Footer'
import HeroSectio from './heroSection/heroSection'
import Section from './section/Section'
import Section2 from './section2/Section'
import Section3 from './section3/Section'
import MakeCall from '../HomePage/makecall/makecall'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
import Navbar from '../layout/navbar/navbar'
function News({id}) {

    const EXCHANGE_RATES = gql`

        query MyQuery {
      posts(where: {categoryName: "news", orderby: {field: DATE, order: DESC}}) {
        nodes {
          id
          slug
          title
          excerpt
          content
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
        }
      }
    }
            
    `
  
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <>
      
      <Navbar/>
 
      
      <Footer/> 
      </>;
  if (error) return <p>Error :(</p>;

  if(data) {

    const data1 = data.posts.nodes.find(t => t.slug ===id)
    console.log(data1 , id)
    return (
        <div>
            <HeroSectio data={data1}/> 
           <Section2  data={data1} />
        
         
         
           <MakeCall/>
           <Footer/> 
           
        </div>
    )
  }

  
}

export default News
