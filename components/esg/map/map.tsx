import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../layout/navbar/navbar";

const HeroSection: React.FC<{}> = () => {
  return (
    <Section>
      <div className="section">
        <div className="section_bottom">
          <div className="section2_data">
            <li>

            <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1625564206/gr81uhaffzt11ra3xq4w.png"
              />
           
            </li>

            <li>
              <h3>
                {" "}
                Field measurements on an Ariel JGD/2, 1100 rpm <br />
                <span>
                  {" "}
                  Original plate valves: Pronounced opening and <br/> closing impacts
                  + noise from flow.{" "}
                </span>
              </h3>
            </li>
          </div>

          <div className="section2_data">
            <li>   <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1625564206/rkjkub9gd82rmigu3kge.png"
              />
             
            </li>

            <li>
              <h3>
               
             

              SFV valves: Same resolution  <br />
              <span>Valve opening and closing is negligible.  <br/>
10 psi lower peak cylinder pressures. </span>

</h3>
            </li>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
