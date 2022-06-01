import React from "react";
import Home from "../components/howitworks/howitworks";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
interface Valueashero {
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
    valveasherobannercontent: string
    valveasherofirstbottomcontent: string
    valveasherofirstcontent: string
    valveasheroTwoContent: string
    valveasherofiveLeftIcon: string
    valveasherofiveLeftContent: string
    valveasherofiveLeftTitle: string
    valveasherofiveRightContent: string
    valveasherofiveRightIcon: string
    valveasherofiveRightTitle: string
    valveasherofiveTopContent: string
    valveasherofourLeftContent: string
    valveasherofourRightContent: string
    valveasherosevenLeftContent: string
    valveasherosevenRightContent: string
    valveasherofourRightImage: string
    valveasherothreeLeftContent: string
    valveasherothreeLeftImage: string
    valveasherothreeRightContent: string
    valveasherotwoitemFiveImage: string
    valveasherotwoitemFiveTitle: string
    valveasherotwoitemFourImage: string
    valveasherotwoitemFourTitle: string
    valveasherotwoitemOneImage: string
    valveasherotwoitemOneTitle: string
    valveasherotwoitemSixImage: string
    valveasherotwoitemSixTitle: string
    valveasherotwoitemThreeImage: string
    valveasherotwoitemThreeTitle: string
    valveasherotwoitemTwoImage: string
    valveasherotwoitemTwoTitle: string
    valveasherosixLeftContent: string
    valveasherosixRightImageOne: string
    valveasherosixRightImageTwo: string
    valveasheronineleftcontent: string
    valveasheroninerightimage: string
    valveasheroeighthleftcontent: string
    valveasheroeighthrightimage: string


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


const ValueasHero: React.FC<Valueashero> = ({ data }) => {
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
        page(id: "cG9zdDoxNDk==") {
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
          valveasherobannercontent
          valveasherofirstbottomcontent
          valveasherofirstcontent
          valveasheroTwoContent
          valveasherofiveLeftIcon
          valveasherofiveLeftContent
          valveasherofiveLeftTitle
          valveasherofiveRightContent
          valveasherofiveRightIcon
          valveasherofiveRightTitle
          valveasherofiveTopContent
          valveasherofourLeftContent
          valveasherofourRightContent
          valveasherosevenLeftContent
          valveasherosevenRightContent
          valveasherofourRightImage
          valveasherothreeLeftContent
          valveasherothreeLeftImage
          valveasherothreeRightContent
          valveasherotwoitemFiveImage
          valveasherotwoitemFiveTitle
          valveasherotwoitemFourImage
          valveasherotwoitemFourTitle
          valveasherotwoitemOneImage
          valveasherotwoitemOneTitle
          valveasherotwoitemSixImage
          valveasherotwoitemSixTitle
          valveasherotwoitemThreeImage
          valveasherotwoitemThreeTitle
          valveasherotwoitemTwoImage
          valveasherotwoitemTwoTitle
          valveasherosixLeftContent
          valveasherosixRightImageOne
          valveasherosixRightImageTwo
          valveasheronineleftcontent
          valveasheroninerightimage
          valveasheroeighthleftcontent
          valveasheroeighthrightimage
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

export default ValueasHero;
