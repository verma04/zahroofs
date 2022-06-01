import React from "react";
import Home from "../components/c-suitebenefits/c-suitebenefits";


import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
interface Enterprise {
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
    enterprisebannercontent:string

    enterprisefirstcontent:string

    enterprisefirstbottomcontent:string
    enterprisetwoitemOneImage:string
    enterprisetwoitemOneTitle:string
    enterprisetwoitemTwoImage:string
    enterprisetwoitemTwoTitle:string
    enterprisetwoitemThreeImage:string
    enterprisetwoitemThreeTitle:string
    enterprisetwoitemFourImage:string
    enterprisetwoitemFourTitle:string
    enterprisetwoitemFiveImage:string
    enterprisetwoitemFiveTitle:string
    enterprisetwoitemSixImage:string
    enterprisetwoitemSixTitle:string
    enterpriseTwoContent:string
    enterprisethreeTopContent:string
    enterprisethreebottomleftContent:string
    enterprisethreebottomrightContent:string
    enterprisethreeitemOneImage:string
    enterprisethreeitemOneTitle:string
    enterprisethreeitemTwoImage:string
    enterprisethreeitemTwoTitle:string
    enterprisethreeitemThreeImage:string
    enterprisethreeitemThreeTitle:string
    enterprisethreeitemFourImage:string
    enterprisethreeitemFourTitle:string
    enterprisefourLeftImage:string
    enterprisefourRightContent:string
    enterprisefiveLeftTitle:string
    enterprisefourBottomContent:string
    enterprisefiveLeftIcon:string
    enterprisefiveRightTitle:string
    enterprisefiveLeftContent:string
    enterprisefiveRightIcon:string
    enterprisefiveRightContent:string

  
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


const index: React.FC<Enterprise> = ({data}) => {
  return (
    <div>
      <Home data={data} />
    </div>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://app.zahroofvalves.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        page(id: "cG9zdDoyNA==") {
          title
          pageId
          uri
          status
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          enterprisebannercontent

          enterprisefirstcontent

          enterprisefirstbottomcontent
          enterprisetwoitemOneImage
          enterprisetwoitemOneTitle
          enterprisetwoitemTwoImage
          enterprisetwoitemTwoTitle
          enterprisetwoitemThreeImage
          enterprisetwoitemThreeTitle
          enterprisetwoitemFourImage
          enterprisetwoitemFourTitle
          enterprisetwoitemFiveImage
          enterprisetwoitemFiveTitle
          enterprisetwoitemSixImage
          enterprisetwoitemSixTitle
          enterpriseTwoContent
          enterprisethreeTopContent
          enterprisethreebottomleftContent
          enterprisethreebottomrightContent
          enterprisethreeitemOneImage
          enterprisethreeitemOneTitle
          enterprisethreeitemTwoImage
          enterprisethreeitemTwoTitle
          enterprisethreeitemThreeImage
          enterprisethreeitemThreeTitle
          enterprisethreeitemFourImage
          enterprisethreeitemFourTitle
          enterprisefourLeftImage
          enterprisefourRightContent
          enterprisefiveLeftTitle
          enterprisefourBottomContent
          enterprisefiveLeftIcon
          enterprisefiveRightTitle
          enterprisefiveLeftContent
          enterprisefiveRightIcon
          enterprisefiveRightContent
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

export default  index;
