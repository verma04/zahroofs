import React from "react";
import HeroSection from "./heroSection/heroSection";
import Section from "./section/Section";
import Section2 from "./section2/Section2";
import Footer from "../layout/footer/Footer";


import Head from "next/head";
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
      <Head>
        <title>{data.seo.title} - Zahroof</title>
        <meta name="og:title" content={data.seo.title} />

        <meta name="og:url" content={data.seo.opengraphDescription} />
        <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
        <meta name="og:site_name" content={data.seo.opengraphSiteName} />
        <meta name="og:description" content={data.seo.opengraphDescription} />
        {/* 
          <meta name="fb:page_id" content="43929265776" />

          <meta name="og:email" content="me@example.com"/>
          <meta name="og:phone_number" content="650-123-4567"/>
          <meta name="og:fax_number" content="+1-415-123-4567"/>

          <meta name="og:latitude" content="37.416343"/>
          <meta name="og:longitude" content="-122.153013"/>
          <meta name="og:street-address" content="1601 S California Ave"/>
          <meta name="og:locality" content="Palo Alto"/>
          <meta name="og:region" content="CA"/>
          <meta name="og:postal-code" content="94304"/>
          <meta name="og:country-name" content="USA"/>

          <meta property="og:type" content="game.achievement"/>
          <meta property="og:points" content="POINTS_FOR_ACHIEVEMENT"/>

          <meta property="og:video" content="http://example.com/awesome.swf" />
          <meta property="og:video:height" content="640" />
          <meta property="og:video:width" content="385" />
          <meta property="og:video:type" content="application/x-shockwave-flash" />
          <meta property="og:video" content="http://example.com/html5.mp4" />
          <meta property="og:video:type" content="video/mp4" />
          <meta property="og:video" content="http://example.com/fallback.vid" />
          <meta property="og:video:type" content="text/html" />

          <meta property="og:audio" content="http://example.com/amazing.mp3" />
          <meta property="og:audio:title" content="Amazing Song" />
          <meta property="og:audio:artist" content="Amazing Band" />
          <meta property="og:audio:album" content="Amazing Album" />
      */}
      </Head>

      <HeroSection data={data} />
      <Section data={data} />
      <Section2 data={data} />
      <Footer />
    </div>
  );
};

export default index;
