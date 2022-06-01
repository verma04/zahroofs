import React from "react";
import HeroSection from "./heroSection/heroSection";
import Section3 from "./section3/Section3";
import Section2 from "./section2/Section";
import Section from "./section/Section";
import Footer from "../../layout/footer/Footer";
import CaseSudies from '../../../caseStudeis/casestudeis.json'

import Head from "next/head";

interface Case {
  data : {

id: any ,
cat : any ,



  }
}


const Index: React.FC<Case> = ({data}) => {

    
  const [state, setstate] = React.useState('')

  const fetch = async () => {
   
    if(!data.id && data.cat )
    {
      console.log("sdds")
    }  

    else {
 
    // const res = await axios.get(`https://admin.airjaldi.com/client/getProjects/${encodeURI(id)}`);
    // const data = await res.data;
    const data2 = await CaseSudies.find(element => element.slug === data.id)

    console.group(data2)

    const data1 = await data2.category.find((element:any) => element.slug === data.cat)
  

 
    const set:any = {
        heroImage:  data2.heroImage,
        heroTitle: data2.heroTitle,
        set :data1

    }

  setstate(set)

  }

  }
   

  React.useEffect(  () => {
  
  if(!data.id && data.cat )
   {
     console.log("sdds")
   }
   else {
      
    fetch()
  


   }
   

  }, [])

if(state === "") {
  
   return (
     <div>
       
     </div>
   )

}
 
  return (
    <div>


       <HeroSection  data={state} />
      <Section3 data={state}/>

      <Footer /> 
    </div>
  );
};

export default Index;
