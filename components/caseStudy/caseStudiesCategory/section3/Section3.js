import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import { useRouter } from 'next/router'

const HeroSection =  ({data}) => {
  const router = useRouter()


  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <div className="section2_data">
            <div
            
              className="section2_data_left"
            >
              <h2>{data.section3Title}    </h2>
<p   dangerouslySetInnerHTML={{
                      __html: data.section3Para
                    }} >



</p>
            </div>
            <div
            
            className="section2_data_left"
          >
            <h2>{data.section4Title} </h2>
<p

dangerouslySetInnerHTML={ {__html: data.section4Para} }
>



</p>
          </div>

          <div
            
            className="section2_data_left"
          >
            <h2>{ data.section5Title} </h2>
            <p

dangerouslySetInnerHTML={ {__html: data.section5Para} }
>



</p>
          </div>
          </div>
        </div>

       
      </div>
    </Section>
  );
};

export default HeroSection;
