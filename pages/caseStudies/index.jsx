import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import CaseStudty from "../../components/caseStudy/casestudyPage/caseStudy";



const index= ({ data , casecategory }) => {
    return (
        <div>
            <CaseStudty data={data} casecategory={casecategory}/>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const client = new ApolloClient({
        uri: "https://app.zahroofvalves.com/graphql",
        cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
            query MyQuery {
                page(id: "cG9zdDo0NDk=") {
                    id
                    title
                    slug
                    content
                    featuredImage {
                        node {
                            title
                            sourceUrl
                        }
                    }
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

    const { data:casestudycategory } = await client.query({
        query: gql`
            query MyQuery {
                casestudyTypes {
                    nodes {
                        id
                        termTaxonomyId
                        name
                        description
                    }
                }
            }`
        });
    // console.log(casestudycategory , "jhjhjh");
    return {
        props: {
            data: data.page,
            casecategory: casestudycategory.casestudyTypes

        },
        revalidate: 1,
    };
}

export default index
