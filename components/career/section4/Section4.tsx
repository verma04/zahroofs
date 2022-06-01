import React from 'react'
import { Section } from './Style'
import Image from "next/image";



const SectionFour  = (data:any) =>  {
    return (
        <Section>
            <div className='flex' >
                <div className='head' >
                    <div className="img-wrapp">
                    <Image
                      objectFit="contain"
                      layout="fill"
                      src={
                        "https://app.zahroofvalves.com/wp-content/uploads/2021/09/e97kcjeyp4r5dh1g4omc.png"
                      }
                      alt="zahroof"
                    />
                    </div>
                    <div className="text">
                      <h3>Pictures -  Zahroof Valves Inc.</h3></div>
                </div>

                <div className="img">
                    {data.data.careerPageGallery.map((imageurl, imagekey) =>
                      <div className="img-wrapper" key={imagekey}>
                        <Image
                          objectFit="cover"
                          layout="fill"
                          src={imageurl}
                          alt="Zahroof Gallery Image"
                        />
                      </div>
                    )}                     
                </div>
            </div>
        </Section>
    )
}

export default SectionFour
