import React from "react";
import { Section } from "./Style";
import Image from "next/image";

import { useRouter } from 'next/router'
import CaseSudies from '../../../../caseStudeis/casestudeis.json'

const HeroSection= ({data}) => {

  
  
  const filter = CaseSudies.find(t => t.heroTitle === data.heroTitle)

 
  const set = filter.category.find(t => t.id === data.set.id )
  let index = filter.category.indexOf(data.set);
console.log(index)

const sett = filter.category[index+1]


console.log(sett)
const router = useRouter()


const send = async () => {

  if(sett === filter.category[filter.category - 1] ){

    const set = filter.category[0]

    await router.push(`/caseStudies/${filter.slug}/${set.slug}`)
    window.location.reload(false);

  }
  else {
 await router.push(`/caseStudies/${filter.slug}/${sett.slug}`)
  window.location.reload(false);
  }
}

  
  return (
    <Section>
      <div className="section">

     
        <div className="section_top">
        <i  onClick={()=> send()} className="fas fa-arrow-right"><span>Next Case Study</span></i>
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
           <h4>  {data.set.catHead} </h4> 
            </div>
          </div>

          <div className="section_top_right">

          <div className="img-wrapper">
        <Image
                 
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={'https://app.zahroofvalves.com/wp-content/uploads/2021/11/Z_inside_logo-CS1.png'}
                    />

          </div>
          <h3>{data.set.topLeft}
</h3>
        </div>
          
        </div>


        <div className="section_mid">
        <div className="section_mid_left">

          <h2 dangerouslySetInnerHTML={{__html: data.set.Para}}>



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
         <p>{data.set.para1}</p>  
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
        <p  dangerouslySetInnerHTML={{__html: data.set.para2}} > 

</p>

         </p>
         </div>

         <div className="section_mid_right">

         <div className="img-wrapper">
        <Image
                 
                      alt="Picture of the author"
                      objectFit="contain"
                      layout="fill"
                      src={data.set.img1}
                    />

          </div>


         <div className="text">
        <ul dangerouslySetInnerHTML={{__html: data.set.textLeft}}>
         
        </ul>
        <ul  dangerouslySetInnerHTML={{__html: data.set.textRight}}>
        
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
<h2  dangerouslySetInnerHTML={{__html: data.set.paraBottom}}>




</h2>



</div>

<div className="section_bottom_right">
<div className="img-wrapper">
  {data.set.img2 ?
  (
    <Image
                 
    alt="Picture of the author"
    objectFit="contain"
    layout="fill"
    src={data.set.img2}
  />
  )
  :
  (
    null
  )

  }
     
               </div>






</div>


         
        </div>

        
      </div>
    </Section>
  );
};

export default HeroSection;
