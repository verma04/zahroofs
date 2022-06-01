import React from "react";
import Under from "../components/UnderContruction/Under";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";



const index: React.FC = () => {
  return (
    <div>
      <Under />
    </div>
  );
};


export default index;
