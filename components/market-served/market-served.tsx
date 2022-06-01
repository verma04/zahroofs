import React from 'react'

 import { Section } from '../products/Section'

 import Image from "next/image";
function products() {
    return (
      <Section>
       	<div className="flex" >
  
  <h1>Markets Served</h1>



<div className="img"  style={{width:"100%", height:"40rem", position:"relative"}} >
<Image
            objectFit="contain"
            layout="fill"
            src={
              "https://app.zahroofvalves.com/wp-content/uploads/2021/09/1473802468.png"
            }
            alt="Picture of the author"
          />
			</div>

	<p>		The StraightFlo valve is a drop in replacement for existing valves in industrial reciprocating compressors that provide a step improvement in operating power, reliability, ease and cost of service, and inventory. The current valves can be applied at speeds from 350 rpm to greater than 3600 rpm, service temperature from -40 F (-40 C) to 550F (288 C) and a differential pressure across a valve up to 3000 psi (207 bar). It is suitable for non-corrosive gases (including natural gas, air, CO2, H2, N2, etc)  as well as corrosive gases (natural gas with high H2S, Acid gas, NH3, Cl2, etc.) and is much more tolerant to liquids and solids in the gas stream than conventional poppet, plate or ring valves. 
</p>
<p>The StraightFlo valve can be applied to all industries that use industrial reciprocating compressors to compress gases that are within the above design limits of the
valves. </p>


<p>	In the Natural Gas industry where reciprocating compressors are used in gas production, gas gathering, gas transmission, gas storage and gas distribution.
</p>
<ul>
<li>Its enhanced reliability under adverse operating conditions such as liquids and solids in the gas stream, and its ease of service in the field, make it ideally suited to gas production and gas gathering.
 </li><li> Its lowering of power consumption / increase of throughput make it attractive to gas transmission applications. 
 </li><li>Its wider range of application, for a given valve design, make it ideal for gas storage and distribution. 
 </li><li>All the above applications benefit from lowered inventory and the ease with which it can be serviced in the field, eliminating machining and skilled labor.
		</li>
		</ul>

<p>
		In the CNG industry, it finds application in refueling stations. In the LNG industry it finds application in compression in LNG carriers and terminals.
</p><p>
In the Oil & Gas industry it also finds application in the enhanced oil recovery using CO2 and Air drilling. The StraightFlo valves are especially effective in CO2 applications as well as in the compression of heavier mole weight applications as reliability and efficiency are greatly enhanced over conventional valves. In CO2 applications, higher speed compressors can be used with the same valve efficiency and reliability that is obtained with conventional valves.
</p><p>
Other industries where StraightFlo valves find application include Refineries, Chemical plants, Air Separation plants, Hydrogen, Technical Gases, Plant Air, Pulp and Paper, Mining, etc.
</p><p>
For Contract Compression companies, the reduction in inventory and inventory management, the ease of service in the field, increased reliability, the ease of re-rating a compressor for a new application and the enhanced performance are all attractive to the business.
</p><p>
For offshore applications, including rigs and FPSOs, the reduction in inventory, improvement in service interval and reliability and the ease of on site servicing without the need for machining are benefits these valves provide.
</p><p>
For reciprocating compressor manufacturing companies, the innovative StraightFlo valves enables the compressor manufacturer to design new products that are higher in speed, have a smaller foot print, are less expensive, have better performance and are more reliable. This enables the compressor manufacturer to offer differentiated products for existing markets or to enter new markets with products that were not possible with conventional valves.
</p>
			</div>
		
          </Section>
   )
}

export default products
