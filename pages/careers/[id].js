import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Carrer from "../../components/career/carrerLsiting/List";
import { useRouter } from 'next/router'

const Index = () => {

    const router = useRouter()
  const { id } = router.query



if(!id)  {
  return (
    null
  )
}



  return (
    <div>
     <Carrer  id={id}  />
    </div>
  );
};





export default Index;
