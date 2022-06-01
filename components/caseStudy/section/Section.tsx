import React from "react";
import { Section } from "./Style";
import Image from "next/image";


interface CaseStudiesSectionOne {
  data: {
    content: string
  }; // Change the required prop to an optional prop.
}

const CaseStudiesSectionOne: React.FC<CaseStudiesSectionOne> = ({data}) => {
  return (
    <Section>
      <div className="section">
        <div
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
          className="section_top"
        />

      </div>
    </Section>
  );
};

export default CaseStudiesSectionOne;
