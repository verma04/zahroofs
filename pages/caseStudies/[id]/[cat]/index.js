import React from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import CaseSudies from '../../../../caseStudeis/casestudeis.json'
import CaseStudiesSubCategory from '../../../../components/caseStudy/caseStudiesSubCategory/caseStudy'

  import { useRouter } from 'next/router'
const Index= ({query}) => {

  const { id , cat } = query
    
  const data = {
  id , cat
  }


  console.log(id , cat)
    return (
      
    <CaseStudiesSubCategory data={data} />
 
    )
}



Index.getInitialProps= async ({query}) => {
  return {query};
}
// export const getStaticPaths = async () => {


 
//     const data = await CaseSudies


    
//     // map data to an array of path objects with params (id)
//     const slugs =  await data.map(set => {
//       return {
//         params: { id: set.slug   }
//       }
      
//     })
 
//     const arr = []
  
//     await  data.forEach((element:any) => {
        
//       arr.push(element.category)
     
//    });
 
//     const data1 =  await data.map( async (news:any) => {
//       const arr = []
//      await  arr.push(news.category)
   
//      console.log(arr)
//       const set =  await arr.map(set => {
//         return {
//           params: { cat: set.slug   }
//         }
        
//       })
//      console.log(set)
      
//     })
//     console.log( data1)
//      const paths = {
//        slugs , data1
//      }
//     return {
//       paths,
//       fallback: true
//     }
    
//   }


//   export const getStaticProps = async (context) => {
   
//     const id = await context.params.id;

//     const cat = await context.params.cat;

 
//     // const res = await axios.get(`https://admin.airjaldi.com/client/getProjects/${encodeURI(id)}`);
//     // const data = await res.data;
//     const data = await CaseSudies.find(element => element.slug === id)


//     const data1 = await data.category.find((element:any) => element.slug === cat)
      
//     if(data1 === undefined) {
//       console.log('unfined')
//     }

//     if (data1 === null) {
//         return {
//           redirect: {
//             destination: '/caseStudies'+ data.slug,
//             permanent: false,
//           },
//         }
//       }
//     const set = {
//         heroImage:  data.heroImage,
//         heroTitle: data.heroTitle,
//         set :data1

//     }


    
//     return {
//       props: {data:set},
//       revalidate: 1, 
//     }
//   }
export default Index
