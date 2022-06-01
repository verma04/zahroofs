import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Foot } from "./Style";
import { useRouter } from "next/router";
const Footer: React.FC<{}> = () => {

  const router = useRouter();
  return (
    <Foot>
      {/* <div className="footer_newsLetter">
        <h3>
          Stay informed. Receive our <br /> monthly zmail industry report
        </h3>

        <form>
          <input placeholder="Enter Your Email"></input>
          <div className="message">
            <Image
              objectFit="contain"
              layout="fill"
              src={
                "https://app.zahroofvalves.com/wp-content/uploads/2021/08/nt4lgdaec6ngnwwo8bro.png"
              }
              alt="Picture of the author"
            />
          </div>
        </form>
      </div> */}

      <div className="footer">
        <div className="footer-top">
          <ul className="footer-left">
            <li>
              <Link href="/privacypolicy">
                <a>Privacy policy</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <a>About Us</a>
              </Link>
            </li>
          
         
         
            
          </ul>

          <ul className="footer-right">
            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/n6f7lujxbhvkz6za2frl.png"
                }
                alt="facebook"
                onClick={()=> window.open('https://www.facebook.com/ZahroofValvesInc')}
              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/jw3muruu6zwsdmnv9xc3.png"
                }
                alt="youtube"
                onClick={()=> window.open('https://www.linkedin.com/company/zahroof-valves-inc-/')}

              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/pf9m8jb8z90g8qznl1bw.png"
                }
                alt="twitter"
                onClick={()=> window.open('https://www.youtube.com/channel/UC69j1qqdRlxG5yoXoHXqVfA')}
              />
            </li>

            <li>
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/08/z2atpdve4bhqjlnnmtbf.png"
                }
                alt="Picture of the author"
                onClick={() => window.open('https://twitter.com/compressorvalve?lang=en') }
               
              />
            </li>
          </ul>
        </div>

        <span>
          ©{new Date().getFullYear()} Zahroof Valves Inc. All Rights Reserved. EOE{" "}
        </span>
      </div>
    </Foot>
  );
};

export default Footer;
