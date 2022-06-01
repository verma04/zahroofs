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
           <h4>  case study 5 </h4> 
            </div>
          </div>

          <div className="section_top_right">
          <h3>Gas Gathering: Dirty Service Application
</h3>
        </div>
          
        </div>


        <div className="section_mid">
        <div className="section_mid_left">

          <h2>

          <span>   ZAHROOF  </span>VALVES <br/>
          Increase efficiency<br/>
5%, save compressor<br/>
from major damage<br/>
          

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
            <p> major Oil & Gas company sought to increase 
efficiency and reliability in dirty service. StraightFlo™ Valves were installed on one first stage and one second stage cylinder to directly compare </p>
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
        <p> StraightFlo™ valves increase efficiency by 5% and more than double previous valve life, performing flawlessly for years, while OEM plate valves fail in seven months. 
</p>

         </p>

         <p>
         <div className="img-wrapper">
         <Image
                 
                 alt="Picture of the author"
                 objectFit="contain"
                 layout="fill"
                 src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/Vector-Smart-Object-1.png'}
               />
               </div>
        <p> In March 2017, the compressor experiences a slug of liquid that deforms the piston rod on a cylinder with OEM plate valves. The cylinders with StraightFlo™ valves handle the liquid with no issue and prevent damage.

</p>

         </p>
         </div>

         <div className="section_mid_right">

         <div className="img-wrapper">
        <Image
                 
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/casestudy5-1.png'}
                    />

          </div>


         <div className="text">
        <ul>
          <li><span> Segment:  </span>    Major O&G Co.        </li>
          <li><span> Location: </span>   San Juan Basin            </li>
        </ul>
        <ul>
          <li><span>Compressor:  </span>     Two Stage Ariel JGK </li>
          <li><span> Date Installed: </span>   July 2016</li>
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
Straightflo<sup>tm</sup> Valves <br/>
last years, OEM plate<br/>
valves only lasted months.<br/>


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
