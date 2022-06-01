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
           <h4>  case study 4 </h4> 
            </div>
          </div>

          <div className="section_top_right">
          <h3>Amine Plant / Sour Gas  Application
</h3>
        </div>
          
        </div>


        <div className="section_mid">
        <div className="section_mid_left">

          <h2>

          <span>   ZAHROOF  </span>VALVES <br/>
          increase mtbf  by  <span> 7x</span>
          

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
            <p> OEM valves are failing monthly at an amine plant of a large pipeline and midstream company. In addition to the issues of downtime, lost production, and increased labor and parts expenses—servicing the compressor was a major safety concern due to the presence of 30% sour gas.</p>
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
        <p> Since Jan of 2019, StraightFlo™ Valves have operated without a single safety or maintenance incident—a  7X increase in mean time between failure (MTBF).
</p>

         </p>
         </div>

         <div className="section_mid_right">

         <div className="img-wrapper">
        <Image
                 
                      alt="Picture of the author"
                      objectFit="cover"
                      layout="fill"
                      src={'https://app.zahroofvalves.com/wp-content/uploads/2021/08/casestudy4.png'}
                    />

          </div>


         <div className="text">
        <ul>
          <li><span> Segment:  </span>   Pipeline/Midstream     </li>
          <li><span> Location: </span>   East Ford Shale         </li>
        </ul>
        <ul>
          <li><span>Compressor:  </span>      Ariel JG/4 </li>
          <li><span> Date Installed: </span> June 2018</li>
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

since 2019 straightflo<sup>tm</sup><br/>
valves have operated<br/>
without a single safety<br/>
or maintenance incident<br/>


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
