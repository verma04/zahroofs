
import React from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import axios from 'axios'
import NewsView from '../../components/newsView/news'
import { useRouter } from 'next/router'
function Index({news}) {
  const router = useRouter()
  const { id } = router.query
    return (
        <div>
        
        <NewsView  id={id}  />
           
        </div>
    )
}







export default Index;