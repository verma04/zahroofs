import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Home from "../components/fieldbenefits/fieldbenefits";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
interface Engineering {
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
    engineeringbannerleftcontent:string
    engineeringbannerrightcontent:string
    engineeringfirstleftcontent:string
    engineeringfirstrightcontent:string
    engineeringtwoleftcontent:string
    engineeringtworightcontent:string
    engineeringthreeleftimage:string
    engineeringthreerightcontent:string
    engineeringfourleftimage:string
    engineeringfourrightcontent:string
    engineeringfourbottomcontent:string
    engineeringfiveLeftTitle:string
    engineeringfiveLeftIcon:string
    engineeringfiveLeftContent:string
    engineeringfiveRightTitle:string
    engineeringfiveRightIcon:string
    engineeringfiveRightContent:string
 


  
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


const index: React.FC<Engineering> = ({data}) => {
  return (
    <div>
      <Home data={data} />
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
        page(id: "cG9zdDozNw==") {
          id
          pageId
          title
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          engineeringbannerleftcontent
          engineeringbannerrightcontent
          engineeringfirstleftcontent
          engineeringfirstrightcontent
          engineeringtwoleftcontent
          engineeringtworightcontent
          engineeringthreeleftimage
          engineeringthreerightcontent
          engineeringfourleftimage
          engineeringfourrightcontent
          engineeringfourbottomcontent
          engineeringfiveLeftTitle
          engineeringfiveLeftIcon
          engineeringfiveLeftContent
          engineeringfiveRightTitle
          engineeringfiveRightIcon
          engineeringfiveRightContent
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

export default index ;
