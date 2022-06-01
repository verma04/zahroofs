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
      {!nav ? (
        <Nav>
          <div className="navbar">
            <div onClick={() => router.push("/")} className="navbar_left">
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://res.cloudinary.com/dzcmadjl1/image/upload/v1628059024/e97kcjeyp4r5dh1g4omc.png"
                }
                alt="Zaharoof Logo"
              />
            </div>

            <ul className="navbar_right">
              <li>
                <Link href="/">
                  <a   className={router.pathname == "/" ? "active" : ""}  >Home</a>
                </Link>
              </li>
              <li>
                <Link href="/c-suitebenefits">
                  <a   className={router.pathname == "/c-suitebenefits" ? "active" : ""} >C-Suite Benefits</a>
                </Link>

               
              </li>
              <li>
                <Link href="/fieldbenefits">
                  <a  className={router.pathname == "/fieldbenefits" ? "active" : ""} id={router.pathname == "/howitworks" ? "active" : ""} >Field Benefits</a>
                </Link>
                <div className="valve" >
                <Link href="/howitworks">
                  <a id='act'  >How It Works</a>
                </Link>
                </div>
              </li>
              <li>
                <Link href="/esgbenefits">
                  <a  className={router.pathname == "/esgbenefits" ? "active" : ""}  >ESG BENeFITS</a>
                </Link>
              </li>
              <li>
                <Link href="/caseStudies">
                  <a className={router.pathname == "/caseStudies" ? "active" : ""}>Case Studies </a>
                </Link>
                <div className="valve" >
                <Link href="/caseStudies/upstream-case-studies">
                  <a id='act'  >UPSTREAM </a>
                </Link>
                <Link href="/caseStudies/midstream-case-studies">
                  <a id='act'  >MIDSTREAM</a>
                </Link>
                <Link href="/caseStudies/downstream-case-studies">
                  <a id='act'  >DOWNSTREAM</a>
                </Link>
                
                </div>
              </li>
              <li>
                <Link href="/aboutus">
                  <a className={router.pathname == "/aboutus" ? "active" : ""}>About Us</a>
                </Link>

                <div className="valve" >
                <Link href="/news">
                  <a id='act'  >Newsroom </a>
                </Link>
              
                
                </div>
              </li>


              <li>
                <Link href="/careers">
                  <a className={router.pathname == "/careers" ? "active" : ""}>Careers</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/career">
                  <a className={router.pathname == "/  career" ? "active" : ""}>Career</a>
                </Link>
              </li> */}
            
             
              <li>
                <Link href="/contactus">
                  <a className={router.pathname == "/contactus" ? "active" : ""}>Contact</a>
                </Link>
              </li>
            </ul>
         
         
          </div>

          <div className="nav-sm">
            <div className="nav-item">
              <div onClick={() => router.push("/")} className="nav-center">
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="Zahroof Logo"
                  src="https://app.zahroofvalves.com/wp-content/uploads/2021/09/e97kcjeyp4r5dh1g4omc.png"
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
                            "https://app.zahroofvalves.com/wp-content/uploads/2021/09/e97kcjeyp4r5dh1g4omc.png"
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
                        <h3 id={router.pathname == "/" ? "active" : ""}>
                      
                          <Link href="/">Home</Link>
                        </h3>
                        <h3 id={router.pathname == "/c-suitebenefits" ? "active" : ""}>
                      
                          <Link href="/c-suitebenefits">
                        
                            C-Suite Benefits
                          </Link>
                        </h3>
                        <h3 id={router.pathname == "/fieldbenefits" ? "active" : ""}>
                      
                          <Link href="/fieldbenefits">
                            Field Benefits
                          </Link>
                        </h3>
                        <h3 id={router.pathname == "/howitworks" ? "active" : ""}>
                      
                      <Link href="/howitworks">
                      How It Works
                      </Link>
                    </h3>
                    <h3 id={router.pathname == "/caseStudies" ? "active" : ""}>
                    <Link href="/caseStudies">
                  <a className={router.pathname == "/caseStudies" ? "active" : ""}>Case Studies </a>
                </Link>
                </h3>
                        <h3 id={router.pathname == "/esgbenefits" ? "active" : ""}>
                          {" "}
                          <Link href="/esgbenefits">Esg Benefits</Link>
                        </h3>

                        
                       
                     
                        <h3
                          id={
                            router.pathname == "/contactus" ? "active" : ""
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
      ) : (
        <Nav>
          <div className="navbar1">
            <div onClick={() => router.push("/")} className="navbar_left">
              <Image
                objectFit="contain"
                layout="fill"
                src={
                  "https://app.zahroofvalves.com/wp-content/uploads/2021/09/e97kcjeyp4r5dh1g4omc.png"
                }
                alt="Zaharoof Logo"
              />
            </div>

            <ul className="navbar_right">
              <li>
                <Link href="/">
                  <a   className={router.pathname == "/" ? "active" : ""}  >Home</a>
                </Link>
              </li>
              <li>
                <Link href="/c-suitebenefits">
                  <a   className={router.pathname == "/c-suitebenefits" ? "active" : ""} >C-Suite Benefits</a>
                </Link>

               
              </li>
              <li>
                <Link href="/fieldbenefits">
                  <a  className={router.pathname == "/fieldbenefits" ? "active" : ""} id={router.pathname == "/howitworks" ? "active" : ""} >Field Benefits</a>
                </Link>
                <div className="valve" >
                <Link href="/howitworks">
                  <a  id='act'  >How It Works</a>
                </Link>
                </div>
              </li>
              <li>
                <Link href="/esgbenefits">
                  <a  className={router.pathname == "/esgbenefits" ? "active" : ""}  >ESG BENeFITS</a>
                </Link>
              </li>

          

             
              <li>
              <Link href="/caseStudies">
                  <a className={router.pathname == "/caseStudies" ? "active" : ""}>Case Studies </a>
                </Link>
              
              
                <div className="valve" >
                <Link href="/caseStudies/upstream-case-studies">
                  <a id='act'  >UPSTREAM </a>
                </Link>
                <Link href="/caseStudies/midstream-case-studies">
                  <a id='act'  >MIDSTREAM</a>
                </Link>
                <Link href="/caseStudies/downstream-case-studies">
                  <a id='act'  >DOWNSTREAM</a>
                </Link>
                
                </div>
          
                </li>
                {/* <li>
                <Link href="/career">
                  <a className={router.pathname == "/aboutus" ? "active" : ""}>Career</a>
                </Link>
              </li> */}
                <li>
                <Link href="/aboutus">
                  <a className={router.pathname == "/aboutus" ? "active" : ""}>About Us</a>
                 
                
                </Link>
                <div className="valve" >
                  <Link href="/news">
                  <a id='act'  >Newsroom </a>
                </Link>
                </div>
                
              </li>
              <li>
                <Link href="/careers">
                  <a className={router.pathname == "/careers" ? "active" : ""}>Careers</a>
                </Link>
              </li>
              <li>

                
                <Link href="/contactus">
                  <a className={router.pathname == "/contactus" ? "active" : ""}>Contact</a>
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
                  src="https://app.zahroofvalves.com/wp-content/uploads/2021/09/e97kcjeyp4r5dh1g4omc.png"
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
                            "https://app.zahroofvalves.com/wp-content/uploads/2021/09/e97kcjeyp4r5dh1g4omc.png"
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
                      
                          <Link href="/c-suitebenefits">
                        
                            C-Suite Benefits
                          </Link>
                        </h3>
                        <h3 id={router.pathname == "/people" ? "active" : ""}>
                      
                          <Link href="/fieldbenefits">
                            Field Benefits
                          </Link>
                        </h3>

                        <h3 id={router.pathname == "/people" ? "active" : ""}>
                      
                      <Link href="/howitworks">
                        How It Works
                      </Link>
                    </h3>
                        <h3 id={router.pathname == "/careers" ? "active" : ""}>
                          {" "}
                          <Link href="/esgbenefits">Esg Benefits</Link>
                        </h3>
                        <h3>
                <Link href="/caseStudies">
                  <a className={router.pathname == "/caseStudies" ? "active" : ""}>Case Studies </a>
                </Link>
              </h3>
                        <h3 id={router.pathname == "/news" ? "active" : ""}>
                          {" "}
                          <Link href="/aboutus">About Us</Link>
                        </h3>

                        <h3 id={router.pathname == "/careers" ? "active" : ""}>

                <Link href="/careers">
                Careers
                </Link>
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
      )}
    </>
  );
};

export default Navbar;
