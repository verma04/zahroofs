import React from "react";
import Home from "../components/HomePage/Home";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
 

interface Home {
  data: {
    esgbenifitsthreerightcontent: string;

    title:string
    pageId:string
    uri:string
    status:string
    homebannercontent:string
    honebannerimageurl:string
    firstLeftBgimage:string
    firstLeftHeading:string
    firstLeftIcon:string
    firstLeftTitle:string
    firstRightBgimage:string
    firstRightHeading:string
    firstRightIcon:string
    firstRightTitle:string
    homeSecondLeftContent:string
    homeSecondRightImageOne:string
    homeSecondRightTitleOne:string
    homeSecondRightImageTwo:string
    homeSecondRightTitleTwo:string
    homeSecondRightImageThree:string
    homeSecondRightTitleThree:string
    homeSecondRightImageFour:string
    homeSecondRightTitleFour:string
    homeThreeLeftHeading:string
    homeThreeRightHeading:string
    homeThreeRightLink:string
    homeFourHeading:string
    homeFourImageurl:string
    homeFiveImageurl:string
    homeFiveRightContent:string
    homeSixCaseStudyContent:string
    homeSixCaseStudyButtonUrl:string
    homeSixRightOneImage:string
    homeSixRightOneName:string
    homeSixRightTwoImage:string
    homeSixRightTwoName:string
    content:string,
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

const index: React.FC<Home> = ({data}) => {
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
        page(id: "cG9zdDo2") {
          title
          pageId
          uri
          status
          homebannercontent
          honebannerimageurl
          firstLeftBgimage
          firstLeftHeading
          firstLeftIcon
          firstLeftTitle
          firstRightBgimage
          firstRightHeading
          firstRightIcon
          firstRightTitle
          homeSecondLeftContent
          homeSecondRightImageOne
          homeSecondRightTitleOne
          homeSecondRightImageTwo
          homeSecondRightTitleTwo
          homeSecondRightImageThree
          homeSecondRightTitleThree
          homeSecondRightImageFour
          homeSecondRightTitleFour
          homeThreeLeftHeading
          homeThreeRightHeading
          homeThreeRightLink
          homeFourHeading
          homeFourImageurl
          homeFiveImageurl
          homeFiveRightContent
          homeSixCaseStudyContent
          homeSixCaseStudyButtonUrl
          homeSixRightOneImage
          homeSixRightOneName
          homeSixRightTwoImage
          homeSixRightTwoName
          content
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
