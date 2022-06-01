import React from "react";
import About from "../components/aboutus/about";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
interface About {
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
    aboutfirstleftContent:string
    aboutfirstrightContent:string
    aboutsecondleftContent:string
    aboutsecondrightImage:string
    aboutsecondrightContent:string
 


  
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


const index: React.FC<About> = ({data}) => {
  return (
    <div>
      <About data={data} />
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
        page(id: "cG9zdDo1MQ==") {
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
          aboutfirstleftContent
          aboutfirstrightContent
          aboutsecondleftContent
          aboutsecondrightImage
          aboutsecondrightContent
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
