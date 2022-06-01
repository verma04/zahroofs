import React from "react";
import HeroSection from "./heroSection/heroSection";
import Section from "../section/Section";
import Section2 from "../section2/Section2";
import Section3 from "../section3/Section3";
 import Section4 from "../section4/Section4";
import Section5 from "../section5/Section5";
import Section6 from "../section6/Section6";
import Footer from "../../layout/footer/Footer";
import Category from "./category/category";

import Head from "next/head";


interface CaseStudies {
  data: {
    id: any
    title: string
    slug: string
    content: string
    featuredImage: {
      node: {
        title: string
        sourceUrl: string
      }
    }
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


const index: React.FC<CaseStudies> = ({ data, casecategory }:any) => {
  return (
    <div>
      <Head>
        <title>Case Studies - Zahroof Valves Inc.</title>
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="" />
        <meta name="og:description" property="og:description" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:url" content="" />  
        <meta name="twitter:card" content="summary" /> 
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
      </Head>

      <HeroSection data={data} /> 
      <Section data={data}/>
     {/* <Section2/>
     <Section3/>
     <Section4/>

     <Section5/>
     <Section6/>*/}
      <Category casecategory={casecategory}/>
      <Footer /> 
    </div>
  );
};

export default index;
