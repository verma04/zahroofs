import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import { useRouter } from 'next/router'
interface HeroSectionProps {
  data: {
    enterprisefiveLeftTitle: string;
    enterprisefourBottomContent: string;
    enterprisefiveLeftIcon: string;
    enterprisefiveLeftContent: string;
    enterprisefiveRightTitle: string;
    enterprisefiveRightIcon: string;
    enterprisefiveRightContent: string;
  };
}
const HeroSection: React.FC<HeroSectionProps> = (data) => {
  const set: string = "SEE WHAT WE'VE DONE FOR OTHERS.";
  const router = useRouter()
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <div
            style={{display:"flex", justifyContent:"center"}}
          dangerouslySetInnerHTML={{
            __html: data.data.enterprisefourBottomContent,
          }}
          ></div>
          <div className="tringle"></div>
        </div>

        <div className="section_bottom">
          <div className="section2_data">
            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">
                  <li dangerouslySetInnerHTML={{ __html: data.data.enterprisefiveLeftTitle, }} />
                

                  
                  
                </div>
              </div>
            </div>

            <div className="section2_data">
  
                <div className="section_bottom_data">
                 
                  <li>
                    <Image
                    onClick={()=>router.push('/contactus')}
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.enterprisefiveRightIcon}
                    />
                  </li>

                
              
                </div>
              
            </div>
        
            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">
                  <li dangerouslySetInnerHTML={{ __html: data.data.enterprisefiveRightTitle, }} />
                
                </div>
              </div>
            </div>
        
        
        
        
        
        
          </div>
        </div>

        
      </div>
    </Section>
  );
};

export default HeroSection;
