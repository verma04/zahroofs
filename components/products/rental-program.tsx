import React from 'react'
import { Section } from './Section'
import Image from "next/image";
function rentalprogram() {
	return (
		<Section>
			<div className="flex" >
<div className="img"  style={{width:"100%", height:"20rem", position:"relative"}} >
<Image
            objectFit="contain"
            layout="fill"
            src={
              "https://app.zahroofvalves.com/wp-content/uploads/2021/09/standard-wo-cage-iso_1.jpg"
            }
            alt="Picture of the author"
          />
			</div>

			<h2>
			Rugged Valves, Easy Rentals
			</h2>

		<p>	Now you can access the award-winning Zahroof StraightFlo valves at a cost that fits any budget through our Rental Program.
 </p><p>
It’s simple. We send you drop-in replacement valves engineered for your specific application, and you rent them on a month-to-month basis at a low fixed rate.
</p><p>
Our Rental Program provides an easy way to see the benefits of increased reliability and improved compressor efficiency for yourself.  There are no long-term obligations and you can return the valves at any time. It’s a great low cost, low commitment way to explore if StraightFlo valves are right for your application.
</p><p>
You can also rent the valves for as long as you like. The longer you rent, the more credit you earn towards the purchase of the valves. 
</p><p>
The Rental Program is an effective way to get the use and benefits of the StraightFlo valves today while bridging the funding gap until budget funds are availabl
</p>


<div className="img"  style={{width:"100%", marginTop:"10rem" , marginBottom:"3rem", height:"20rem", position:"relative"}} >
<Image
            objectFit="contain"
            layout="fill"
            src={
              "https://app.zahroofvalves.com/wp-content/uploads/2021/09/rental_orig-1.jpg"
            }
            alt="Picture of the author"
          />
			</div>

<p>
​StraigthtFlo valves have been installed in some of the most difficult applications around the world, bringing operators benefits such as:
</p><p>
-Increased reliability with a guarantee to double valve-related MTBF and a 10 year warranty on valve housings
-Increased performance with a reduction in power consumption of 3-15% that can be converted to increased flow
-On-site serviceability with no machining and a reduction in inventory of greater than 80%
-Reduction in vibrations, noise and emissions.
</p><p>
*In addition to our Rental Program, ZVI offers a broad range of procurement options including long-term leases, consignment inventory, facility contracts and profit/cost savings sharing arrangements. Contact us for details.
</p>


			</div>
		</Section>
	)
}

export default rentalprogram
