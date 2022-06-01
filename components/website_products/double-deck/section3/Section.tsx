import React , {useState} from "react";
import { Section } from "./Style";
import Image from "next/image";




const HeroSection: React.FC = () => {
  
  const [ active , setactive] = useState('features')

  return (
    <Section>

<div className="header" >
<li  onClick={()=> setactive("features")} id={active === "features" ? "active" : ""} ><h3>features</h3></li>
<li onClick={()=> setactive("specs")} id={active === "specs" ? "active" : ""}><h3>specs  </h3></li>
<li  onClick={()=> setactive("resources")} id={active === "resources" ? "active" : ""}><h3>resources</h3></li>
</div>
      <div className="section6">
    
      {active === "features" ? 
      <div className="section2_data">
           
           <div className="section2_data">

             <div className="img-wrapper" >
             <Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-20.png"}
        alt="Picture of the herosection"
      /> 
               </div>

               <div className="img-wrapper" >
               <Image
        objectFit="contain"
        layout="fill"
        src={"https://app.zahroofvalves.com/wp-content/uploads/2021/10/Layer-16.png"}
        alt="Picture of the herosection"
      /> 
</div>
<div className="img-wrapper" >
<Image
        objectFit="contain"
        layout="fill"
        src={'https://app.zahroofvalves.com/wp-content/uploads/2021/10/Vector-Smart-Object.png'}
        alt="Picture of the herosection"
      /> 
</div>
             </div>



        
        </div>
      
      
      
      : null


  }


        
{active === "specs" ? 
      <div className="section2_data">

<div className="section2_data_left">


<h2>APPLICABLE WITH industry specific gases:</h2>

<ul>

  <li>CO2</li>
  <li> AMMONIA</li>
  <li>H2S</li>
  <li> TEAL</li>
  <li>ETHYLENE</li>

  <li>CARBOLIC ACID</li>
  <li>HYDROGEN</li>
  <li> BUTANE</li>
  <li> PROPANE</li>
  <li> and others</li>

</ul>
</div>        
<div className="section2_data_right">
<li> StraightfloTM  Valve Module Technology</li>
<li>Lorem ipsum mouyo elboar lorem opers</li>
<li> Lorem ipsum mouyo elboar lorem opers</li>
</div>        

        
         
        </div>
      
      
      
      : null


  }

{active === "resources" ? 
      <div className="section2_data">
     <div className="section2_data_left">


<span>UPstream INFORMATION </span>
<span>MIDSTREAM INFORMATION</span>
<span>DOWNSTREAM INFORMATION :</span>


</div>        
<div className="section2_data_right">
<span>CASE STUDIES</span>

</div>        

        </div>
      
      
      
      : null


  }

  
     
      </div>
    </Section>
  );
};

export default HeroSection;
