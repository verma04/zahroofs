import React from "react";
import { Section } from "./Style";
import Image from "next/image";

import { useRouter } from 'next/router'
interface SectionNine {
  data: {
    valveasherofiveTopContent: string;
   
    valveasherofiveLeftTitle: string;
    valveasherofiveLeftIcon: string;
    valveasherofiveLeftContent: string;
    valveasherofiveRightTitle: string;
    valveasherofiveRightIcon: string;
    valveasherofiveRightContent: string;

  }; // Change the required prop to an optional prop.
}


const SectionNine: React.FC<SectionNine> = (data) => {
  
  const router = useRouter()
  const set:any = "           SEE WHAT WE'VE </br> DONE FOR OTHERS."
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <p dangerouslySetInnerHTML={{
            __html: data.data.valveasherofiveTopContent
          }} />
          <div className="tringle"></div>
        </div>

        <div className="section_bottom">
          <div className="section2_data">
            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">

                  <li dangerouslySetInnerHTML={{
                    __html: data.data.valveasherofiveLeftTitle
                  }} />
                  <li>
                    <Image
                     onClick={()=>router.push('/c-suitebenefits')}
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.valveasherofiveLeftIcon}
                  />
                  </li>

                  <li  onClick={()=>router.push('/fieldbenefits')}>
                    <h3 dangerouslySetInnerHTML={{
                      __html: data.data.valveasherofiveLeftContent
                    }} />
                  </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1628065652/r7mef73ydybb2kqrytoy.png"
                    />
                  </li>
                </div>
              </div>
            </div>

            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">

                  <li
                  
                 
                  dangerouslySetInnerHTML={{
                    
                    __html: data.data.valveasherofiveRightTitle
                  }} />
                  <li>
                    <Image
                     onClick={()=>router.push('/contactus')}
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.valveasherofiveRightIcon}
                    />
                  </li>

                  <li>
                    <h3
                     onClick={()=>router.push('/contactus')}
                    dangerouslySetInnerHTML={{
                      __html: data.data.valveasherofiveRightContent
                    }} />
                  </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1628065652/r7mef73ydybb2kqrytoy.png"
                    />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </Section>
  );
};

export default SectionNine;
