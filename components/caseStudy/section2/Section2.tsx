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
           <h4>  case study 1 </h4> 
            </div>
          </div>

          <div className="section_top_right">
          <h3>Gas Gathering Application
</h3>
        </div>
          
        </div>


        <div className="section_mid">
        <div className="section_mid_left">

          <h2>

          <span>   ZAHROOF  </span>VALVES <br/>
INCREASE RUN TIME <br/>
FROM WEEKS <span> TO YEARS </span>

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
          High liquid and particulate contaminants are fouling <br/>
the legacy plate valves of a large contract compression<br/>
operator. Valves must be serviced monthly, resulting in lost<br/>
production and increased maintenance costs.
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
         Upon installation, StraightFlo™ first and second stage valves <br/>
run for 3 years. Third stage valve repair frequency goes <br/>
from once a month to once in three years. And service takes <br/>
place on site, with no machining, saving time and money.   

         </p>
         </div>

         <div className="section_mid_right">

         <div className="img-wrapper">
        <Image
                 
                      alt="Picture of the author"
                      objectFit="cover"
                      layout="fill"
                      src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1628845179/vcgldqygcrrz78k98zti.png'}
                    />

          </div>


         <div className="text">
        <ul>
          <li><span> Segment:  </span> Contract Compression</li>
          <li><span> Location: </span>   East Texas</li>
        </ul>
        <ul>
          <li><span>Compressor:  </span>      GE Gemini DS504</li>
          <li><span> Date Installed: </span> July 2013</li>
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

Valve repair frequency <br/>
goes from once a month <br/>
to once in three years.<br/>


</h2>



</div>

<div className="section_bottom_right">



<div className="text">
<ul>
<div className="top" > 
<h3>{"Operator’s Legacy Valves"}</h3> </div>

<div className="bottom" > 
<div className="img-wrapper" > 
<Image
                 
                 alt="Picture of the author"
                 objectFit="cover"
                 layout="fill"
                 src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1628847540/cgglrylhaossfdcizq4m.png'}
               />

 </div>

 <div className="img-wrapper" > 
 <Image
                 
                 alt="Picture of the author"
                 objectFit="cover"
                 layout="fill"
                 src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1628847540/vphsjzixc6klbujsdl3y.png'}
               />

 </div>

 </div>
</ul>
<ul>
<div className="top" > 
<h3>{"Zahroof Replacement Valves"}</h3> </div>

<div className="bottom" > 
<div className="img-wrapper" > 
<Image
                 
                 alt="Picture of the author"
                 objectFit="cover"
                 layout="fill"
                 src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1628847540/xgefzwv6kdl3br3lmywy.png'}
               />

 </div>

 <div className="img-wrapper" > 
 <Image
                 
                 alt="Picture of the author"
                 objectFit="cover"
                 layout="fill"
                 src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1628847540/cnzrdnx1ozkbpgutot2p.png'}
               />

 </div>

 </div>
</ul>


</div>




</div>


         
        </div>

        
      </div>
    </Section>
  );
};

export default HeroSection;
