import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import { useRouter } from 'next/router'


const HeroSection = ({data}) => {
  const router = useRouter()

  console.log(data , "dsds")


  return (
    <Section>
      <div className="section">
        {data.category.map(number => 
  

 <div  onClick={()=> router.push(`/caseStudies/${data.slug}/${number.slug}`)} key={number.id} className="section_top">
 <div className="section_top_up">
  <div className="img-wrapper" >
  <Image
   objectFit="contain"
   layout="fill"
   src={
     "https://app.zahroofvalves.com/wp-content/uploads/2021/07/w2u44k0jrx10hakvnri2.png"
   }
   alt="Picture of the author"
 />
  </div>

  <h3>{number.name}</h3>
  </div>

  <div className="section_top_down">
  <h3  dangerouslySetInnerHTML={{__html: number.Para}} ></h3>
  </div>
 </div>
  
        )

        }
       
     
       
      </div>
    </Section>
  );
};

export default HeroSection;
