import React from 'react'
import CaseStudty from '../../../components/caseStudy/caseStudiesCategory/caseStudy'

import CaseSudies from '../../../caseStudeis/casestudeis.json'



  const Index = ({query}) => {

    const data = {
      id :query.id
      }
    
    return (
        <div>
            <CaseStudty data={data}/>
        </div>
    )
}
// export const getStaticPaths = async () => {


 
//     const data = await CaseSudies
  
//     // map data to an array of path objects with params (id)
//     const paths = data.map(news => {
//       return {
//         params: { id: news.slug }
//       }
//     })
    
//     return {
//       paths,
//       fallback: true
//     }
    
//   }

// export const getStaticProps = async (context) => {
   
//     const id = context.params.id;

  

 
//     // const res = await axios.get(`https://admin.airjaldi.com/client/getProjects/${encodeURI(id)}`);
//     // const data = await res.data;
//     const data = CaseSudies.find(element => element.slug === id)

//     if (data === null) {
//       return {
//         redirect: {
//           destination: '/caseStudies',
//           permanent: false,
//         },
//       }
//     }
  
   
//     return {
//       props: { data},
//       revalidate: 1, 
//     }
//   }

Index.getInitialProps= async ({query}) => {
  return {query};
}
export default Index