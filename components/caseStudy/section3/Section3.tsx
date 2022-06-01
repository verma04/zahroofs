import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";
import { useRouter } from 'next/router'

const HeroSection: React.FC = () => {
  const set: string = "SEE WHAT WE'VE DONE FOR OTHERS.";
  const router = useRouter()
  return (
    <Section>
      <div className="section">
        <div className="section_top">

        <div className="section_top_left">

        <div className="img-wrapper">
        <Image
                 
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624356709/w2u44k0jrx10hakvnri2.png'}
                    />

          </div>
          <div className="text">
           <h4>  case study 2 </h4> 
            </div>
          </div>

          <div className="section_top_right">
          <h3>Wellhead Application
</h3>
        </div>
          
        </div>


        <div className="section_mid">
        <div className="section_mid_left">

          <h2>

          <span>   ZAHROOF  </span>VALVES <br/>
          REDUCE POWER <br/>
          CONSUMPTION BY <span> 4.5% </span>

          </h2>

          <p>
          <div className="img-wrapper">
          <Image
                 
                 alt="Picture of the author"
                 objectFit="contain"
                 layout="fill"
                 src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/Vector-Smart-Object.png'}
               />
               </div>
               With multiple StraightFlo™ Valves already in <br/>
               use, a major E&P company asks Zahroof to <br/>
               once again help improve flow and valve life in<br/>
               additional wellhead 
compressors.
          </p>

          <h3>
          Straightflo<sup>tm</sup>   result
          </h3>
         <p>
         <div className="img-wrapper">
         <Image
                 
                 alt="Picture of the author"
                 objectFit="contain"
                 layout="fill"
                 src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/Vector-Smart-Object-1.png'}
               />
               </div>
        <p>  The StraightFlo™ valves average 22HP per MMscfd versus the plate valves they were using average of 23.1. The lower specific power results in a 4.5 % 
decrease in power consumption.    

</p>
<p  className="set" >  StraightFlo™ valves have long since surpassed the 
previous plate valve’s average life of five months and continue to operate successfully without incident 6-years later and counting.  </p>
         </p>
         </div>

         <div className="section_mid_right">

         <div className="img-wrapper">
        <Image
                 
                      alt="Picture of the author"
                      objectFit="cover"
                      layout="fill"
                      src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/casestudy2.png'}
                    />

          </div>


         <div className="text">
        <ul>
          <li><span> Segment:  </span>  Majjor E&P Company   </li>
          <li><span> Location: </span>    Marcellus Shale        </li>
        </ul>
        <ul>
          <li><span>Compressor:  </span>       Ariel JGC/4</li>
          <li><span> Date Installed: </span>  Dec 2015</li>
        </ul>

          </div>


          
         
         </div>

         
         </div>
        <div className="section_bottom">

        <div className="section_bottom_left">
        <div className="img-wrapper">
        <Image
                 
                 alt="Picture of the author"
                 objectFit="contain"
                 layout="fill"
                 src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/CLIPBOARD-SMART-OBJECT.png'}
               />
               </div>
<h2>

6 years Later and counting <br/>
zahroof valves operate <br/>
without incident.<br/>


</h2>



</div>

<div className="section_bottom_right">







</div>


         
        </div>

        
      </div>
    </Section>
  );
};

export default HeroSection;
