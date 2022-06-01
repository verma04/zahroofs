import React from "react";
import Contact from "../components/contactus/contact";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
interface Contact {
  data: {
    title:any
    pageId:any
    uri:any
    status:any
    featuredImage: {
      node: {
        title: any
        sourceUrl:any
      }
    }
    content:string
    contactaddress:string
 


  
    seo : {
      title:string 
      metaDesc:string
      metaKeywords:string
      focuskw:string
      canonical:string
      cornerstone:string
      fullHead:string
      metaRobotsNofollow:string
      metaRobotsNoindex:string
      opengraphAuthor:string
      opengraphDescription:string
      opengraphModifiedTime:string
      opengraphPublishedTime:string
      opengraphPublisher:string
      opengraphSiteName:string
      opengraphTitle:string
      opengraphType:string
      opengraphUrl:string
      readingTime:string
      twitterDescription:string
      twitterTitle:string
    }

  };
}

const index: React.FC<Contact> = ({data}) => {
  return (
    <div>
      <Contact data={data} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: "https://app.zahroofvalves.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
    query MyQuery {
        page(id: "cG9zdDo0OQ==") {
          id
          pageId
          title
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          content
          contactaddress
          seo {
            title
            metaDesc
            metaKeywords
            focuskw
            canonical
            cornerstone
            fullHead
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphSiteName
            opengraphTitle
            opengraphType
            opengraphUrl
            readingTime
            twitterDescription
            twitterTitle
          }
        }
      }
    `,
  });
 
  return {
    props: {
      data: data.page,
    },
    revalidate: 1,
  };
}

export default index;
