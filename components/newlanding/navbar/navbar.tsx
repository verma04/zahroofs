import React, { useEffect, useState } from "react";
import { Nav } from "./Style";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar: React.FC<{}> = () => {
  const [nav, setnav] = useState(false);
  const [pop, setPop] = useState(true);

  const smtoggle = () => {
    setPop(!pop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // returned function will be called on component unmount

    console.log(window.pageYOffset);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 140) {
      if (!nav) {
        setnav(true);
      }
    } else {
      setnav(false);
    }
  };
  const router = useRouter();
  return (
    <>
      <Nav>
        <div className="navbar1">
          <div onClick={() => router.push("/")} className="navbar_left">
            <Image
              objectFit="contain"
              layout="fill"
              src={
                "https://res.cloudinary.com/dzcmadjl1/image/upload/v1623821289/z5k5c8xjr9o0dunv7gce.png"
              }
              alt="Zaharoof Logo"
            />
          </div>

          <ul className="navbar_right">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/enterpriseSolutions">
                <a>Enterprise Solutions</a>
              </Link>
            </li>
            <li>
              <Link href="/engineeringSolutions">
                <a>Engineering Solutions</a>
              </Link>
            </li>
            <li>
              <Link href="/esgbenefits">
                <a>ESG BENeFITS</a>
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <a>About Us</a>
              </Link>
            </li>
            
            <li>
              <Link href="/contactus">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div id="fixed-sm" className="nav-sm">
          <div className="nav-item">
              <div onClick={() => router.push("/")} className="nav-center">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="Zahroof Logo"
                  src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1623821289/z5k5c8xjr9o0dunv7gce.png"
                ></Image>
              </div>
              <div className="nav-right">
                {(() => {
                  if (pop) {
                    return (
                      <i onClick={() => smtoggle()} className="fas fa-bars"></i>
                    );
                  } else {
                    return (
                      <i
                        onClick={() => smtoggle()}
                        className="fas fa-times"
                      ></i>
                    );
                  }
                })()}

                {!pop && (
                  <div className="sm">
                    <div className="logo">
                      <div className="img">
                        <Image
                          objectFit="contain"
                          layout="fill"
                          src={
                            "https://res.cloudinary.com/dzcmadjl1/image/upload/v1623821289/z5k5c8xjr9o0dunv7gce.png"
                          }
                          alt="Zaharoof Logo"
                        />
                      </div>

                      <i
                        onClick={() => smtoggle()}
                        className="fas fa-times"
                      ></i>
                    </div>
                    <div id="first" className="link">
                      <div className="list">
                        <h3 id={router.pathname == "/profile" ? "active" : ""}>
                      
                          <Link href="/">Home</Link>
                        </h3>
                        <h3 id={router.pathname == "/profile" ? "active" : ""}>
                      
                          <Link href="/enterpriseSolutions">
                        
                            Enterprise Solutions
                          </Link>
                        </h3>
                        <h3 id={router.pathname == "/people" ? "active" : ""}>
                      
                          <Link href="/engineeringSolutions">
                            Engineering Solutions
                          </Link>
                        </h3>

                        <h3 id={router.pathname == "/people" ? "active" : ""}>
                      
                      <Link href="/valveashero">
                        Valve as hero
                      </Link>
                    </h3>
                        <h3 id={router.pathname == "/careers" ? "active" : ""}>
                          {" "}
                          <Link href="/esgbenefits">Esg Benefits</Link>
                        </h3>
                       
                        <h3 id={router.pathname == "/news" ? "active" : ""}>
                          {" "}
                          <Link href="/aboutus">About Us</Link>
                        </h3>
                        <h3
                          id={
                            router.pathname == "/partnerships" ? "active" : ""
                          }
                        >
                          {" "}
                          <Link href="/contactus">Contact Us</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
       
       
          </div>
       
       
       
       
      </Nav>
    </>
  );
};

export default Navbar;
