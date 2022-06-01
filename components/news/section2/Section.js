import React, { useEffect , useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import { Router, useRouter } from "next/router";

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

  const senroute = async (slug) => {
  await  router.push(`/news/${slug}`)
   
  }

 
  

  return (
    <Section>
      <div className="section4">

      <div className="section4_mid">
      <div className="section4_mid_right">   
{data.map(set => 
 
<div key={set.title} onPress={()=> router.push(set.slug)}  onClick={()=> senroute(set.slug) }  className="box" >


{set.featuredImage === null ?
(
  <div className="img-wrapper" >
                  
                <Image objectFit="cover" layout="fill" src={'https://app.zahroofvalves.com/wp-content/uploads/2022/03/Banner-1.jpg'} alt="sd" /> 
                   </div>
)
:
(
  <div className="img-wrapper" >
                  
                <Image objectFit="cover" layout="fill" src={set.featuredImage.node.sourceUrl} alt="sd" /> 
                   </div>
)

}
      
              

                  <h4>{set.title}</h4>


                  <p>
                 Read More ...
                   
                  </p>
            
                </div>


)

}
</div>
</div>



      
      </div>
    </Section>
  );
};

export default Section4;
