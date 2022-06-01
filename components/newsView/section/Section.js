import React, { useEffect , useState } from "react";
import { Section } from "./Style";
import Image from "next/image";
import { useRouter } from "next/router";

import VisibilitySensor from "react-visibility-sensor";





const Section4 = () => {

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
            <div onClick={()=> router.push('/news/new-leadership/#jim-ilaria')}   className="section4_mid_left">
            <div  className="img_wrapper">
       
                <Image
                  objectFit="contain"
                  layout="fill"
                  
                  src={"https://app.zahroofvalves.com/wp-content/uploads/2022/02/Jim-Ilaria.jpg"}
                  alt="Picture of the author"
                />



           




           
            
           
            </div>

            <ul>
              <li> <h3> Jim Ilaria </h3>
</li>
              <li>Chief Executive Officer</li>
            </ul>
          
            


          
          
            </div>
            <div onClick={()=> router.push('/news/new-leadership/#javvad-qasimi')}  className="section4_mid_left">
            <div  className="img_wrapper">
       
                <Image
                  objectFit="contain"
                  layout="fill"
                  
                  src={"https://app.zahroofvalves.com/wp-content/uploads/2022/02/Javvad-Qasimi.jpg"}
                  alt="Picture of the author"
                />

           



 



           
            
           
            </div>
            <ul>
              <li> <h3>Javvad Qasimi</h3>
</li>
              <li>Senior Vice President</li>
            </ul>
          
            


            </div>
            <div onClick={()=> router.push('/aboutus#ZEE')} className="section4_mid_left">
            <div  className="img_wrapper">
       
                <Image
                  objectFit="contain"
                  layout="fill"
                  
                  src={"https://app.zahroofvalves.com/wp-content/uploads/2022/02/Zahroof-Mohamed.jpg"}
                  alt="Picture of the author"
                />

           


 




           
            
           
            </div>

          <ul>

            <li> <h3>Zahroof “ZEE” Mohamed</h3> </li>
            <li>President & Founder</li>
          </ul>
          



          
            </div>
      
        
        
          </div>

      
      </div>
    </Section>
  );
};

export default Section4;
