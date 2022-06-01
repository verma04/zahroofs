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
                  <li>
                    <Image
                    onClick={()=>router.push('/fieldbenefits')}
                      alt="Picture of the author"
                    
                      objectFit="contain"
                      layout="fill"
                      src={data.data.enterprisefiveLeftIcon}
                    />
                  </li>

                  <li   onClick={()=>router.push('/fieldbenefits')} >
                    <h3>Field Benefits</h3>
                  </li>
                  <li>
                    <Image
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="https://app.zahroofvalves.com/wp-content/uploads/2021/09/r7mef73ydybb2kqrytoy.png"
                    />
                  </li>
                </div>
              </div>
            </div>

            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">
                  <li dangerouslySetInnerHTML={{ __html: data.data.enterprisefiveRightTitle, }} />
                  <li>
                    <Image
                    onClick={()=>router.push('/caseStudies')}
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.enterprisefiveRightIcon}
                    />
                  </li>

                  <li>
                    <h3  onClick={()=>router.push('/caseStudies')} >{data.data.enterprisefiveRightContent}</h3>
                  </li>
                  <li>
                    <Image
                    
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src="https://app.zahroofvalves.com/wp-content/uploads/2021/09/r7mef73ydybb2kqrytoy.png"
                    />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_bottom-1">
          <span>Redefining valve life in years instead of months.</span>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;