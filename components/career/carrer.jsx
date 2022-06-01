import React from 'react'
import MakeCall from './carrerLsiting/makecall/makecall'
import Footer from '../layout/footer/Footer'
import HeroSectio from './heroSection/heroSection'
import Section from './section/Section'
import Section2 from './section2/Section'
import Section4 from './section4/Section4'
import Section3 from './section3/Section'





const index  = ({data, careers}) => {
    return (
        <div>
           
            <HeroSectio data={data}/> 
            <Section data={data}/>
            <Section2 data={data} careers={careers}/>
            <Section3 data={data}/>
            <Section4 data={data}/>
           <MakeCall/>
           <Footer/>
           
        </div>
    )
}

export default index;
