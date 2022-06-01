import React from "react";
import About from "../../components/aboutus/about";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Carrer from "../../components/career/carrer";

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


  return (
    <div>
      <Carrer data={data} careers={careers} />
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
        page(id: "cG9zdDo0MTY=") {
          id
          pageId
          title
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          careerPageHeading
          careerfirstLeftHeading
          careerfirstRightHeading
          careerPageSecondLeftTitle
          careerPageSecondLeftContent
          careerPageThreeLeftHeading
          careerPageThreeImageurl
          careerBenefitsWidget1
          careerBenefitsWidget2
          careerBenefitsWidget3
          careerBenefitsWidget4
          careerBenefitsWidget5
          careerBenefitsWidget6
          careerPageGallery
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

  


  const { data:data1 } = await client.query({
    query: gql`
    query MyQuery {
      careers {
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
    }`
  });

console.log(data1.careers.nodes)


  return {
    props: {
      data: data.page,
      careers:data1.careers
    
    },
    revalidate: 1,
  };
  } catch (error) {
    

    console.log(error)
  }


}


export default index;
