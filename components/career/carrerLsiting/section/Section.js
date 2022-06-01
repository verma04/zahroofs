import React, { useEffect , useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import { useRouter } from "next/router";
import {Link} from 'react-scroll'
import VisibilitySensor from "react-visibility-sensor";





const Section4 = ({data}) => {

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

  

          <div className="section4_mid">
            <div className="section4_mid_left">
           
            <div  className="img_wrapper">
       
       <Image
         objectFit="contain"
         layout="fill"
         
         src="https://app.zahroofvalves.com/wp-content/uploads/2022/01/banner-2.jpg"
         alt="Picture of the author"
       />






  
   
  
   </div>
   <li><h3>Job Description </h3>
{}
</li>
<li>
<h3>Location</h3>

{data.location}
</li>
<li>
<h3>Employment Type</h3>

Full Time
</li>
<li>
<button><Link  to="about" spy={true} smooth={true}>Apply Now</Link></button>

</li>     
            </div>
            <div
            
              className="section4_mid_right"
            >
      

    

        
       

    <div
          
          className="data"

          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        >


        </div>

      

    

<div   className="data"


>

<h3>Qualifications:</h3>

<p

dangerouslySetInnerHTML={{
__html: data.qualifications,
}}
>


</p>


</div>

<div   className="data"


>

<h3>Education/Training::</h3>

<p

dangerouslySetInnerHTML={{
__html: data.education,
}}
>


</p>


</div>
       

<div   className="data"


>

<h3>Location:</h3>

<p


>
{data.location}

</p>


</div>
       

<div   className="data"


>

<h3>Compensation:</h3>

<p


>
{data.compensation}

</p>


</div>

      


<div   className="data"


>

<h3>ZVI is an Equal Opportunity Employer.</h3>



</div>
      


      
        

        

 
            </div>
          </div>

      
      </div>
    </Section>
  );
};

export default Section4;
