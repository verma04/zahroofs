import React, { useEffect , useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import { useRouter } from "next/router";

import VisibilitySensor from "react-visibility-sensor";



interface Section4 {
  data: {
    homeFourHeading: string;
    homeFourImageurl: string;
    homeFiveImageurl: string;
    homeFiveRightContent: string;
    homeSixCaseStudyButtonUrl: string;
    homeSixCaseStudyContent: string;
    homeSixRightOneImage: string;
    homeSixRightOneName: string;
    homeSixRightTwoImage: string;
    homeSixRightTwoName: string;
    homeThreeRightLink: string;
  }; // Change the required prop to an optional prop.
}

const Section4: React.FC<Section4> = (data) => {

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

         <div className="section4_top_new">

<div  className="icon" >
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/Gas.png"
                  }
                  alt=""
                />
              </div>
              <span>Industrial gases</span>
            </div>
            <div  className="icon" id="ch">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/Natural-Gas-Industry.png"
                  }
                  alt=""
                />
              </div>
              <span>Natural gas Industry</span>
            </div>


            <div  className="icon" id="center">
            <div className="head" >

<h2>performance 
across
industries</h2>
</div>
            </div>


            <div  className="icon" id="ch">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/Vector-Smart-Object-2.png"
                  }
                  alt=""
                />
              </div>
              <span>Refineries</span>
            </div>

            <div  className="icon" id="Cng">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/CNG.png"
                  }
                  alt=""
                />
              </div>
              <span>Cng Industry</span>
            </div>
            <div  className="icon" id="ch">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/Oil-Gas.png"
                  }
                  alt=""
                />
              </div>
              <span>Oil And Gas </span>
            </div>
            <div  className="icon" id="hydrogen">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/Hydrogen-Production.png"
                  }
                  alt=""
                />
              </div>
              <span>Hydrogen production</span>
            </div>
            <div  className="icon" id="ch">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/LNG.png"
                  }
                  alt=""
                />
              </div>
              <span>Lng</span>
            </div>
            <div  className="icon" id="chemical">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/Chemicals.png"
                  }
                  alt=""
                />
              </div>
              <span>chemicals</span>
            </div>
            <div   className="icon" id="ch">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/09/Offshore-Applications.png"
                  }
                  alt=""
                />
              </div>
              <span>Offshore Applications</span>
            </div>



</div>
        {/* <div className="section4_top">
          <div className="tringle"></div>

          <div data-aos="zoom-in" className="section4_top_data">
            <h2>{data.data.homeFourHeading}</h2>
            <div  className="section4_top_data_logos">
              <Image
                objectFit="contain"
                layout="fill"
                src={data.data.homeFourImageurl}
                alt="Picture of the author"
              />
            </div>
            <div  className="icon" id="gasses">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/08/oqahwcfpdj4symxaaaki.png"
                  }
                  alt=""
                />
              </div>
              <span>Industrial gases</span>
            </div>
            <div  className="icon" id="industry">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/08/istcdd90jzd7w26thtwl.png"
                  }
                  alt=""
                />
              </div>
              <span>Natural gas Industry</span>
            </div>

            <div  className="icon" id="Refineries">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/08/zojkglvg09aa3yl1nbhi.png"
                  }
                  alt=""
                />
              </div>
              <span>Refineries</span>
            </div>

            <div  className="icon" id="Cng">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://res.cloudinary.com/dzcmadjl1/image/upload/v1623907055/usmugehexosnqgjxkpsy.png"
                  }
                  alt=""
                />
              </div>
              <span>Cng Industry</span>
            </div>
            <div  className="icon" id="Oil">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/08/ztqc0qrptre0bxp3vxfz.png"
                  }
                  alt=""
                />
              </div>
              <span>Oil And Gas </span>
            </div>
            <div  className="icon" id="hydrogen">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/08/bzmo2rxdmbgeibrwzdq4.png"
                  }
                  alt=""
                />
              </div>
              <span>Hydrogen production</span>
            </div>
            <div  className="icon" id="Lng">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/08/z1pr48ideklcy30kcodh.png"
                  }
                  alt=""
                />
              </div>
              <span>Lng</span>
            </div>
            <div  className="icon" id="chemical">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/07/Chemical.png"
                  }
                  alt=""
                />
              </div>
              <span>chemicals</span>
            </div>
            <div   className="icon" id="offshore">
              <div className="img-wrapper">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={
                    "https://app.zahroofvalves.com/wp-content/uploads/2021/08/kzwiywblnokhn0vxvdmd.png"
                  }
                  alt=""
                />
              </div>
              <span>Offshore Applications</span>
            </div>
          </div>
        </div>
      
    */}
          <div className="section4_mid">
            <div className="section4_mid_left">
            <div  className="img_wrapper">
       
                <Image
                  objectFit="contain"
                  layout="fill"
                  data-aos="example-anim3" 
                  src={"https://app.zahroofvalves.com/wp-content/uploads/2021/08/ztssxgdudjwgkieybi7f-1.png"}
                  alt="Picture of the author"
                />



<div className="text-1">
              
         
                <Image
                  objectFit="contain"
                  layout="fill"
                  data-aos="zoom-in"
                  src={"https://app.zahroofvalves.com/wp-content/uploads/2021/08/ezbr949axrtwmzseyrxr.png"}
                  alt="Picture of the author"
                />
             
</div>

              <div className="text-2">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={"https://app.zahroofvalves.com/wp-content/uploads/2021/08/smmukplhbhdcnwbu54ok.png"}
                  data-aos="zoom-in"
                  alt="Picture of the author"
                />
              </div>
           
            
           
            </div>
          
          
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: data.data.homeFiveRightContent,
              }}
              className="section4_mid_right"
            >
              {/* <h2>HOW MUCH DIFFERENCE
CAN A VALVE ACTUALLY
MAKE?</h2>

              <p>The difference between profit and loss. Between a smooth operation and a frantic one. Between a safer workplace and unacceptable
risk. The difference is in the details, but effect is enormous.</p>
         
<p>Discover how the Straight Flo™ compressor valve with patented MRV technology has changed the game and far surpassed the
performance of all others in the industry.</p> */}
            </div>
          </div>

        <div className="section4_bottom">
          {/* <div className="img_absol" >
       <div className="img_wrapper" >
    <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624447543/bdegy1j9jkvghjbzxvxl.png'} alt="Picture of the author" />
          </div>
          </div> */}

          {/* <Image     objectFit="cover" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624446661/zugr9ahadrsbvxmfoi2v.jpg'} alt="Picture of the author" /> */}

          <div className="section4_bottom_data">

          <div  data-aos="fade-up" className="section4_mid_right">
              <div className="section4_logo">
                <div className="img_wrapper">
                  <Image
                    objectFit="contain"
                    layout="fill"
                    src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/mz8scwuleyzs5tmkmobd.png'}
                    alt="Picture of the author"
                  />
                </div>

              
              </div>
           
            </div>
         
         
            <div  data-aos="fade-up" className="section4_mid_left">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.data.homeSixCaseStudyContent,
                }}
                className="top"
              ></div>

              <div className="btn">
                <button
                  onClick={() =>
                    router.push(`/caseStudies`)
                  }
                >
                  See for YourSelf
                </button>
              </div>
            </div>

        
         
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section4;
