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
           <h4>  case study 3 </h4> 
            </div>
          </div>

          <div className="section_top_right">
          <h3>Hydrogen Make Up/Recycle Feed   Application
</h3>
        </div>
          
        </div>


        <div className="section_mid">
        <div className="section_mid_left">

          <h2>

          <span>   ZAHROOF  </span>VALVES <br/>
          eliminate unplanned <br/>
           <span> shutdowns</span>

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
            <p>   Intermittent valve failures at a large US refinery are causing unplanned shutdowns every three to six months. OEM valve life does not allow the  compressors to run the full time between scheduled turnarounds every 2 years. </p>
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
        <p> StraightFlo™ Valves solve the reliability problems, eliminating unplanned shutdowns and enabling 
maximum refinery production
</p>

         </p>
         </div>

         <div className="section_mid_right">

         <div className="img-wrapper">
        <Image
                 
                      alt="Picture of the author"
                      objectFit="cover"
                      layout="fill"
                      src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/casestudy3.1-1.png'}
                    />

          </div>


         <div className="text">
        <ul>
          <li><span> Segment:  </span>   Large Refinery   </li>
          <li><span> Location: </span>    Upper Midwest         </li>
        </ul>
        <ul>
          <li><span>Compressor:  </span>       Multiple </li>
          <li><span> Date Installed: </span>Oct 2018</li>
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

Straightflo<sup>Tm</sup> Valves <br/>
solve the reliability<br/>
problems.<br/>


</h2>



</div>

<div className="section_bottom_right">



<Image
                 
                 alt="Picture of the author"
                 objectFit="contain"
                 layout="fill"
                 src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/Layer-791.png'}
               />



</div>


         
        </div>

        
      </div>
    </Section>
  );
};

export default HeroSection;
