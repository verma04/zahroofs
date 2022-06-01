import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import { useRouter } from 'next/router'
interface SectionFiveProps {
  data: {
    engineeringfourbottomcontent: string;
    engineeringfiveLeftTitle: string;
    engineeringfiveLeftIcon: string;
    engineeringfiveLeftContent: string;
    engineeringfiveRightTitle: string;
    engineeringfiveRightIcon: string;
    engineeringfiveRightContent: string;
  }; // Change the required prop to an optional prop.
}

const HeroSection: React.FC<SectionFiveProps> = (data) => {
  const router = useRouter()
  return (
    <Section>
      <div className="section">
        <div className="section_top">
          <p
            dangerouslySetInnerHTML={{
              __html: data.data.engineeringfourbottomcontent,
            }}
          />
          <div className="tringle"></div>
        </div>

        <div className="section_bottom">
          <div className="section2_data">
            <div className="section2_data">
              <div className="section_bottom_set">
                <div className="section_bottom_data">
                  <li
                    dangerouslySetInnerHTML={{
                      __html: data.data.engineeringfiveLeftTitle,
                    }}
                  />
                  <li>
                    <Image
                                      onClick={()=>router.push('/c-suitebenefits')}
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.engineeringfiveLeftIcon}
                    />
                  </li>
                  <li
                  onClick={()=>router.push('/c-suitebenefits')}
                    dangerouslySetInnerHTML={{
                      __html: data.data.engineeringfiveLeftContent,
                    }}
                  />
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
                      __html: data.data.engineeringfiveRightTitle,
                    }}
                  />
                  <li>
                    <Image
                     onClick={()=>router.push('/caseStudies')}
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.data.engineeringfiveRightIcon}
                    />
                  </li>
                  <li
                   onClick={()=>router.push('/caseStudies')}
                    dangerouslySetInnerHTML={{
                      __html: data.data.engineeringfiveRightContent,
                    }}
                  />
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

        <div className="section_bottom-1">
          <span>Redefining valve life in years instead of months</span>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
