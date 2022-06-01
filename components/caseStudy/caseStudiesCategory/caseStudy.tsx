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




  }
}



const Index: React.FC<Case> = ({data}) => {

  const [state, setstate] = React.useState('')

  const fetch = async () => {
   
 

   
 
    // const res = await axios.get(`https://admin.airjaldi.com/client/getProjects/${encodeURI(id)}`);
    // const data = await res.data;
    const data2:any = await CaseSudies.find(element => element.slug === data.id)

   
   console.log(data2)

 
 
  await setstate(data2)

  

  }
   

  React.useEffect(  () => {
  
  

  
      
    fetch()
  


   
   

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
      <Section data={state} />
 <Section2 data={state}/>
 <Section3 data={state}/>

      <Footer /> 
    </div>
  );
};

export default Index;
