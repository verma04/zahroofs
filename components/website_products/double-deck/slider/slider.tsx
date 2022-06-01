import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Slider } from './SliderStyle';
import Image from "next/image";
import { Section } from './Style'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function slider() {
    return (
<>
        <div style={{width:"100%" , display:"flex", justifyContent:"center"}} className='head' >
        <h1  style={{width:"90%", paddingLeft:"1rem" ,  borderLeft:"4px solid #DBB42F;" , marginTop:"4rem", fontSize:"3rem", textTransform:"uppercase"}}  >Related Products</h1>
    </div>
        <Section>

       
        <Carousel responsive={responsive}>
         
        <div   className='slider'>
            <div className="img-wrapper" >

<Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/DoubleDecker_iso_RGB-copy-2-1.png"}
        alt="Picture of the herosection"
      />   
</div>
        </div>
     
   
        <div className='slider'>
            <div className="img-wrapper" >

<Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-5.png"}
        alt="Picture of the herosection"
      />   
</div>
        </div>
     
   
        <div className='slider'>
            <div className="img-wrapper" >

<Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-4.png"}
        alt="Picture of the herosection"
      />   
</div>
        </div>
     
 
      
      </Carousel>
      </Section>
      </>
    )
}
