import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../../layout/navbar/navbar";
import { useRouter } from 'next/router';

// interface casestudycategory {
//   casestudycategory: {
//     node:{
//       id: any
//       termTaxonomyId: any
//       name: string
//       description: string
//     }
//   };
// }

const Casestudycategory = ({casecategory}) => {
  console.log(casecategory);
  const router = useRouter();
  // const set: string = "SEE WHAT WE'VE DONE FOR OTHERS.";
  return (
    <Section>
      <div className="section">
    
      <div className="section-top">

        {casecategory.nodes.map((set, catkey) => 
          <div onClick={() => router.push('/caseStudies/upstream-case-studies')} className="category" key={catkey}>
            <h2>{set.name}</h2>
            <h3>case studies</h3>
          </div>
        )}    
       
      </div>
      <div className="img-wrapper">
        <Image                 
          alt="Picture of the author"
          objectFit="cover"
          layout="fill"
          src={'https://app.zahroofvalves.com/wp-content/uploads/2021/11/ZAH-627_05_New_Website_CaseStudies_Main_Page_C2_P-1.png'}
        />

          </div>
        
      </div>
    </Section>
  );
};

export default Casestudycategory;
