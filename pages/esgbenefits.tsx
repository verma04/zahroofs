import React from "react";
import Esg from "../components/esg/Esg";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
interface Esg {
  data: {
    id:any
    pageId:any
    title:any
    featuredImage: {
      node: {
        title:any
        sourceUrl:any
      }
    }
    esgbenifitsbannerimage:string
    esgbenifitsbannerrightcontent:string
    esgbenifitsfirstleftcontent:string
    esgbenifitsfirstrightoneicon:string
    esgbenifitsfirstRightOneContent:string
    esgbenifitsfirstrighttwoicon:string
    esgbenifitsfirstRightTwoContent:string
    esgbenifitsfirstrightthreeicon:string
    esgbenifitsfirstRightThreeContent:string
    esgbenifitstwoleftcontent:string
    esgbenifitstworightoneicon:string
    esgbenifitstwoRightOneContent:string
    esgbenifitstworighttwoicon:string
    esgbenifitstwoRightTwoContent:string
    esgbenifitstworightthreeicon:string
    esgbenifitstwoRightThreeContent:string
    esgbenifitsthreerightcontent:string

  
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


const index: React.FC<Esg> = ({data}) => {
  return (
    <div>
      <Esg data={data} />
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
        page(id: "cG9zdDozOQ==") {
          id
          pageId
          title
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          esgbenifitsbannerimage
          esgbenifitsbannerrightcontent
          esgbenifitsfirstleftcontent
          esgbenifitsfirstrightoneicon
          esgbenifitsfirstRightOneContent
          esgbenifitsfirstrighttwoicon
          esgbenifitsfirstRightTwoContent
          esgbenifitsfirstrightthreeicon
          esgbenifitsfirstRightThreeContent
          esgbenifitstwoleftcontent
          esgbenifitstworightoneicon
          esgbenifitstwoRightOneContent
          esgbenifitstworighttwoicon
          esgbenifitstwoRightTwoContent
          esgbenifitstworightthreeicon
          esgbenifitstwoRightThreeContent
          esgbenifitsthreerightcontent
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
