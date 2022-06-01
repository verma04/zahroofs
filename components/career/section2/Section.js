import React, { useEffect , useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import { Router, useRouter } from "next/router";

import VisibilitySensor from "react-visibility-sensor";

import Job from '../../../caseStudeis/Job.json'

// interface SectionFour {
//   data: {
//     title: any
//     pageId: any
//     uri: any
//     status: any
//     featuredImage: {
//       node: {
//         title: any
//         sourceUrl: any
//       }
//     }
//     careerfirstLeftHeading: string
//     careerfirstRightHeading: string
//   }; // Change the required prop to an optional prop.
// }

const SectionFour = ({data , careers}) => {


  // console.log(careers , data)

  const [width, setwidth] = useState(0);

  const [width2, setwidth2] = useState(0);
  const [right, setright] = useState(21);
  const [left, setleft] = useState(21);


  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    // returned function will be called on component unmount

    // console.log(window.pageYOffset);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 1800) {
      console.log(window.pageYOffset, "0");
    } else if ( 1600 && window.pageYOffset < 2703) {
 
    } 
  };

  

  const router = useRouter();

  const senroute = async (slug) => {
  await  router.push(`/careers/${slug}`)
   
  }

  console.log(careers);
  

  return (
    <Section>
      <div className="section4">
          <div className="section4_mid">    
            <div className="section4_mid_right" >
            <p
              dangerouslySetInnerHTML={{
                __html: data.careerPageSecondLeftTitle,
              }}
            /> 
            <div
              dangerouslySetInnerHTML={{
                __html: data.careerPageSecondLeftContent,
              }}
            /> 
          </div>

            <div className="section4_mid_right">       

            {careers.nodes.map((set, key ) => 
                <div key={key}  onClick={()=> senroute(set.slug) }  className="box" >
                  <h3>{set.title}</h3>
                  <p>
                  <i className="fas fa-map-marker-alt"></i>
                    {set.terms.nodes[1].name}
                  </p>
                </div>
                
              )}
            </div>
          </div>

      
      </div>
    </Section>
  );
};

export default SectionFour;
