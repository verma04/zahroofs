import React from 'react'
import { useEffect } from 'react'
import HeroSectio from './heroSection/heroSection'
import Section from './section/Section'
import Jobs from '../../../caseStudeis/Job.json'
import MakeCall from './makecall/makecall'
import Footer from '../../layout/footer/Footer'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Carrer  =({id}) => {



  const [first, setfirst] = React.useState(null)

      
  useEffect(() => {
   func()
  }, [])
  
   

  const func = async () => {
    const client = new ApolloClient({
      uri: "https://app.zahroofvalves.com/graphql",
      cache: new InMemoryCache(),
    });
  
      const { data , loading } = await client.query({
        query: gql`
      query MyQuery ( $name:String!   )   {
      careers(where: {name:$name}) {
      nodes {
        id
        date
        slug
        title
        content
        featuredImage {
          node {
            title
            sourceUrl
          }
        }
        terms {
          nodes {
            name
            slug
          }
        }
        primaryResponsibilities
        qualifications
        education
        location
        compensation
      }
    }
  }
        
      `, 
      
        variables: { name:id },
      
      });
    
   
  if(data) {
    setfirst(data.careers.nodes[0])
  }

  
  }
console.log(first)

if(first ===  null) {
  return null
}

    return (
        <div>
        <HeroSectio data={first} />
        <Section data={first} />
           <MakeCall  data={first}/>
           <Footer data={first}/>
          
        </div>
    )
   
}

export default Carrer
