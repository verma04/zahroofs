import React, { useEffect , useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import { useRouter } from "next/router";

import VisibilitySensor from "react-visibility-sensor";

interface SectionOne {
  data: {
    title: any
    pageId: any
    uri: any
    status: any
    featuredImage: {
      node: {
        title: any
        sourceUrl: any
      }
    }
    careerfirstLeftHeading: string
    careerfirstRightHeading: string
  }; // Change the required prop to an optional prop.
}



const SectionOne: React.FC<SectionOne> = (data) => {

  const [width, setwidth] = useState(0);
  const [width2, setwidth2] = useState(0);
  const [right, setright] = useState(21);
  const [left, setleft] = useState(21);


  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    // returned function will be called on component unmount

    console.log(window.pageYOffset);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 1800) {
      console.log(window.pageYOffset, "0");
    } else if ( 1600 && window.pageYOffset < 2703) {
 
    } 
  };

  

  const router = useRouter();

 
  

  return (
    <Section>
      <div className="section4">

  

          <div className="section4_mid">
            <div className="section4_mid_left">
            <div  className="img_wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"                  
                src={data.data.careerfirstLeftHeading}
                  alt="Picture of the author"
                />
            </div>         
          
            </div>
            <div 
              dangerouslySetInnerHTML={{
              __html: data.data.careerfirstRightHeading,
              }}
            className="section4_mid_right"
            />
      
   
          </div>

      
      </div>
    </Section>
  );
};

export default SectionOne;
