import React from "react";
import HeroSection from "./heroSection/heroSection";
import Section from "./section/Section";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import AboutUs from "./aboutus/aboutus";
import Footer from "../layout/footer/Footer";
import MakeCall from "./makecall/makecall";
import Head from "next/head";

// import withApollo from '@/hoc/withApollo'

interface Section {
  data: {
    esgbenifitsthreerightcontent: string;
    title: string;
    pageId: string;
    uri: string;
    status: string;
    homebannercontent: string;
    honebannerimageurl: string;
    firstLeftBgimage: string;
    firstLeftHeading: string;
    firstLeftIcon: string;
    firstLeftTitle: string;
    firstRightBgimage: string;
    firstRightHeading: string;
    firstRightIcon: string;
    firstRightTitle: string;
    homeSecondLeftContent: string;
    homeSecondRightImageOne: string;
    homeSecondRightTitleOne: string;
    homeSecondRightImageTwo: string;
    homeSecondRightTitleTwo: string;
    homeSecondRightImageThree: string;
    homeSecondRightTitleThree: string;
    homeSecondRightImageFour: string;
    homeSecondRightTitleFour: string;
    homeThreeLeftHeading: string;
    homeThreeRightHeading: string;
    homeThreeRightLink: string;
    homeFourHeading: string;
    homeFourImageurl: string;
    homeFiveImageurl: string;
    homeFiveRightContent: string;
    homeSixCaseStudyContent: string;
    homeSixCaseStudyButtonUrl: string;
    homeSixRightOneImage: string;
    homeSixRightOneName: string;
    homeSixRightTwoImage: string;
    homeSixRightTwoName: string;
    content: string;
    seo: {
      title: string;
      metaDesc: string;
      metaKeywords: string;
      focuskw: string;
      canonical: string;
      cornerstone: string;
      fullHead: string;
      metaRobotsNofollow: string;
      metaRobotsNoindex: string;
      opengraphAuthor: string;
      opengraphDescription: string;
      opengraphModifiedTime: string;
      opengraphPublishedTime: string;
      opengraphPublisher: string;
      opengraphSiteName: string;
      opengraphTitle: string;
      opengraphType: string;
      opengraphUrl: string;
      readingTime: string;
      twitterDescription: string;
      twitterTitle: string;
    };
  };
}

const Home: React.FC<Section> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>{data.seo.title} - Zahroof</title>
        <meta name="og:title" content={data.seo.title} />

        <meta name="og:url" content={data.seo.opengraphDescription} />
        <meta name="og:image" content="" />
        <meta name="og:site_name" content={data.seo.opengraphSiteName} />
        <meta name="og:description" content={data.seo.opengraphDescription} />
      </Head>

      <HeroSection data={data} />

      <Section data={data} />
      <Section2 data={data} />
      <Section3 data={data} />
      <Section4 data={data} />
      <AboutUs data={data} />
      <MakeCall />
      <Footer />
    </div>
  );
};

export default Home;
