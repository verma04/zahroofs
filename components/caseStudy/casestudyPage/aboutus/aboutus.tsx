import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Navbar from "../../../layout/navbar/navbar";

const HeroSection: React.FC<{}> = () => {
  return (
    <Section>
      <div className="aboutus">
        <div className="aboutus_section">
          <h2>About us</h2>

          <p>
            Established in 2010, Zahroof is a groundbreaking innovator in the
            global compressor valve market, developing, manufacturing, and
            selling reciprocating. compressor valves, unloaders and associated
            products.
          </p>

          <p>
            The company has developed its disruptive and unique StraightFlo
            compressor valve using its patented Modular Reed Valve (MRV)
            technology. The StraightFlo compressor provides superior performance
            and reliability, exceptional cost savings, and lower emissions
            compared to conventional reciprocating gas compressor valves.
          </p>
          <p>
            Zahroof Engineering products are applied in a number of applications
            including Oil & Gas (Upstream, Midstream and Downstream), Chemical
            plants, Industrial gases, Air, Refrigeration, and more.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
