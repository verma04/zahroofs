import React from "react";
import About from "../../components/aboutus/about";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import News from "../../components/news/news";

interface Carrer {
  data: {
    title: any
    pageId: any
    uri: any
    status: any
    featuredImage: {
      node: {
        title: any
        sourceUrl: any
      }
    }
    careerPageHeading: string
    careerfirstLeftHeading: string
    careerfirstRightHeading: string
    careerPageSecondLeftTitle: string
    careerPageSecondLeftContent: string
    careerPageThreeLeftHeading: string
    careerPageThreeImageurl: string
    careerBenefitsWidget1: string
    careerBenefitsWidget2: string
    careerBenefitsWidget3: string
    careerBenefitsWidget4: string
    careerBenefitsWidget5: string
    careerBenefitsWidget6: string
    careerPageGallery: string



    seo: {
      title: string
      metaDesc: string
      metaKeywords: string
      focuskw: string
      canonical: string
      cornerstone: string
      fullHead: string
      metaRobotsNofollow: string
      metaRobotsNoindex: string
      opengraphAuthor: string
      opengraphDescription: string
      opengraphModifiedTime: string
      opengraphPublishedTime: string
      opengraphPublisher: string
      opengraphSiteName: string
      opengraphTitle: string
      opengraphType: string
      opengraphUrl: string
      readingTime: string
      twitterDescription: string
      twitterTitle: string
    }

  };
}



const index: React.FC = ({ data , careers }:any) => {


    console.log(data)
  return (
    <div>
       <News  data={data} />
    </div>
  );
};



export const getStaticProps: GetStaticProps = async (context) => {
 
  try {
    

  const client = new ApolloClient({
    uri: "https://app.zahroofvalves.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
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
        
    
    `,
  });

  






  return {
    props: {
      data: data.posts,
    
    
    },
    revalidate: 1,
  };
  } catch (error) {
    

    console.log(error)
  }


}


export default News;
