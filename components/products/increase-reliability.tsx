import React from 'react'
import { Section } from './Section'
import Image from "next/image";
function rentalprogram() {
	return (
		<Section>
			<div className="flex" >
  
  <h1>Improved Reliability</h1>


<h2>
Modular Reed Valve Technology
	</h2>



		<ul>	
  <li>	The modules are stationary with all wear and tear contained within the modules. No impact or wear on valve seat and carrier. Simply replace worn modules, by hand, to fully service a valve. Easiest valve to service, on-site, with no special tools. Eliminates machining of valve seat and carrier.
 </li> <li> No impact on valve seat or carrier. No wear on seat or carrier. 10 year limited warranty on valve seat and carrier - never replace valve seat or carrier under normal conditions.
 </li> <li>No impact on seat and carrier results in reduced fatigue loading on valve seat and minimizes valve noise and compressor vibrations. Low compressor vibrations means better reliability for all auxiliary systems including pumps, piping and tubing, etc.
 </li> <li>Eliminating machining of valve seat means that the valve seat pressure rating never drops below that of the new valve. It also means eliminating of any errors during machining resulting in tolerance stack up errors preventing the valves from being installed during service.
 </li> <li>Plastic components do not move and are not subject to bending tensile stresses.
 </li> <li>Petal/reed modules. Eliminates helical coil springs, the number one cause of failure in valves.
 </li> <li>Lowest moving mass results in highest natural frequency, greater than 250 Hz. High separation from pulsation and vibration excitation forces practically eliminates failure due to resonances.
 </li> <li>Straight through flow path makes valve self cleaning. High tolerance to solids and liquids in gas path.
 </li> <li>All bolts are captured by valve chair/cage/retainer. API 618. Valve design requires no central bolt or nut that is subject to high fatigue loading and can cause a lot of damage if it breaks, typical of plate and ring valves.
 </li> <li>All StraightFlo valves have a secure guard (no hanging guard) eliminating the possibility of a failure where the guard can fall into the cylinder causing extensive damage.​
 </li> <li>Multiple modules. In the event of failure, it is gradual and valves with several modules can continue to operate with failed some failed modules unlike a plate valve where failure requires an immediate change of valves.

</li>
</ul>


<div className="img"  style={{width:"100%", marginTop:"10rem" , marginBottom:"3rem", height:"20rem", position:"relative"}} >
<Image
            objectFit="contain"
            layout="fill"
            src={
              "https://app.zahroofvalves.com/wp-content/uploads/2021/09/standardvalve_orig.jpg"
            }
            alt="Picture of the author"
          />
			</div>





			</div>
		</Section>
	)
}

export default rentalprogram
