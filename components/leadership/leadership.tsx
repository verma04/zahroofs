import React from 'react'

import Footer from '../layout/footer/Footer'
import HeroSectio from './heroSection/heroSection'
import Section from './section/Section'
import Section2 from './section2/Section'
import Section3 from './section3/Section'
import MakeCall from '../HomePage/makecall/makecall'

function Carrer() {
    return (
        <div>
           <HeroSectio/> 
           <Section2/>
           <Section/>
          <Section3/>
         
           <MakeCall/>
           <Footer/>
           
        </div>
    )
}

export default Carrer
