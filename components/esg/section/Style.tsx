import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 44.5rem;
      background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/09/zahroof-1.png");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .section-1 {
        position: absolute;
        width: 100%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .section-data {
            width: 80%;
            
            height: 90%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 1;
            .left {
              width: 100%;
              height: 50%;

              align-items: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              ul {
                margin-left: 0.5rem;
                width: 100%;

                li {
                  width: 100%;
                  font-size: 41px;

                  text-align: left;
                  line-height: 46px;
                  color: white;
                  font-family: Proxima-Bold;
                  font-weight: 1000;
                  text-transform: uppercase;
                }
                li:nth-child(1) {
                  position: relative;
                }
              }

              p {
                font-family: Proxima-Bold;
                margin-top: 3rem;
                width: 100%;
                line-height: 30px;
                font-size: 16px;
                color: white;
                position: relative;
                padding-left: 1rem;
                
              }
              p:after {
                content: "";
                display: block;
                height: 100%;
                width: 0.3rem;
                position: absolute;
                background-color:  ${(props) => props.theme.colors.blue};
                top: 0%;
                left: -0.5rem;
              }
            }
            .right {
              width: 100%;
              height: 90%;
   
              align-items: center;
              display: flex;
              justify-content: space-between;
              align-items: center;
              
              .right_logo {
                width: 30%;
                background-color: #4d9f21;
                height: 70%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;

                .logo-wrapper {
                  width: 30%;
                  height: 30%;
                  position: relative;
                  
                }
                .side {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 90%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                  h3 {
                     width: 100%;
                     color: white;
                
                   }
                  p {
                     display: none;
                  }
                }
               
                .side1 {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 90%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                 
                  h3 {
                    display: none;
                  }

                   p {
                    color: white;
                    width: 100%;
                    line-height: 30px;
                  font-size: 16px;
                  position: relative;
                  font-family: Proxima-Bold;
                  }
                 
                }
               
              }
            }
          }
        }
      }


      .absol {
        position: absolute;
        width: 100%;
        height: 10rem;

        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625647930/b77aizoerfwavnpd4lcz.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
   
        top: -20%;
      }
    }
  }

  @media (max-width: 767px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      height: 75rem;

      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625648083/say2tbvtmz54opz2f2xh.png");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .section-1 {
        position: absolute;
        width: 100%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .section-data {
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
           
            flex-direction: column;
            .left {
              width: 100%;
              height: 50%;

              align-items: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              ul {
                margin-left: 0.5rem;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                li {
                  width: 90%;
                  font-size: 41px;

                  text-align: left;
                  line-height: 46px;
                  color: white;
                  font-family: Proxima-Bold;
                  font-weight: 1000;
                  text-transform: uppercase;
                }
                li:nth-child(1) {
                  position: relative;
                }
              }

              p {
                font-family: Proxima-Light;
                margin-top: 3rem;
                width: 90%;
                line-height: 1.3;
                font-size: 18px;
                color: white;
                position: relative;
                padding-left: 1rem;
                font-weight: 600;
                
                h3 {
                     width: 100%;
                     color: white;
                   }
                  p {
                    width: 100%;
                  }
              }
              p:after {
                content: "";
                display: block;
                height: 100%;
                width: 0.3rem;
                position: absolute;
                background-color:  ${(props) => props.theme.colors.blue};
                top: 0%;
                left: -0.5rem;
              }
            }
            .right {
              width: 100%;
              height: 70%;

              align-items: center;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              flex-direction: column;

              
              .right_logo {
                width: 80%;
                background-color: #4d9f21;
                height: 30%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;

                .logo-wrapper {
                  width: 30%;
                  height:5rem;
                  position: relative;
                  
                }
                .side {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 90%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                  h3 {
                     width: 100%;
                     color: white;
                
                   }
                  p {
                     display: none;
                  }
                }
               
                .side1 {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 90%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                 
                  h3 {
                    display: none;
                  }

                   p {
                    color: white;
                    width: 100%;
                    line-height: 20px;
                  font-size: 16px;
                  position: relative;
                  font-family: Proxima-Bold;
                  }
                 
                }
               
              }
            }
          }
        }
      }

      .absol {
        position: absolute;
        width: 100%;
        height: 10rem;

        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625647930/b77aizoerfwavnpd4lcz.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
   
        top: -10%;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 44.5rem;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625648083/say2tbvtmz54opz2f2xh.png");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .section-1 {
        position: absolute;
        width: 100%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .section-data {
            width: 80%;
            
            height: 90%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 1;
            .left {
              width: 100%;
              height: 50%;

              align-items: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              ul {
                margin-left: 0.5rem;
                width: 100%;

                li {
                  width: 100%;
                  font-size: 41px;

                  text-align: left;
                  line-height: 46px;
                  color: white;
                  font-family: Proxima-Bold;
                  font-weight: 1000;
                  text-transform: uppercase;
                }
                li:nth-child(1) {
                  position: relative;
                }
              }

              p {
                font-family: Proxima-Bold;
                margin-top: 3rem;
                width: 100%;
                line-height: 30px;
                font-size: 16px;
                color: white;
                position: relative;
                padding-left: 1rem;
                
              }
              p:after {
                content: "";
                display: block;
                height: 100%;
                width: 0.3rem;
                position: absolute;
                background-color:  ${(props) => props.theme.colors.blue};
                top: 0%;
                left: -0.5rem;
              }
            }
            .right {
              width: 100%;
              height: 90%;
   
              align-items: center;
              display: flex;
              justify-content: space-between;
              align-items: center;
              
              .right_logo {
                width: 30%;
                background-color: #4d9f21;
                height: 70%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;

                .logo-wrapper {
                  width: 30%;
                  height: 30%;
                  position: relative;
                  
                }
                .side {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 90%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                  h3 {
                     width: 100%;
                     color: white;
                
                   }
                  p {
                     display: none;
                  }
                }
               
                .side1 {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 90%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                 
                  h3 {
                    display: none;
                  }

                   p {
                    color: white;
                    width: 100%;
                    line-height: 30px;
                  font-size: 16px;
                  position: relative;
                  font-family: Proxima-Bold;
                  }
                 
                }
               
              }
            }
          }
        }
      }

      .absol {
        position: absolute;
        width: 100%;
        height: 10rem;

        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625647930/b77aizoerfwavnpd4lcz.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
   
        top: -20%;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      height: 50rem;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625648083/say2tbvtmz54opz2f2xh.png");

      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .section-1 {
        position: absolute;
        width: 100%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .section-data {
            width: 80%;
            
            height: 90%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 1;
            .left {
              width: 100%;
              height: 50%;

              align-items: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              ul {
                margin-left: 0.5rem;
                width: 100%;

                li {
                  width: 100%;
                  font-size: 41px;

                  text-align: left;
                  line-height: 46px;
                  color: white;
                  font-family: Proxima-Bold;
                  font-weight: 1000;
                  text-transform: uppercase;
                }
                li:nth-child(1) {
                  position: relative;
                }
              }

              p {
                font-family: Proxima-Bold;
                margin-top: 3rem;
                width: 100%;
                line-height: 30px;
                font-size: 16px;
                color: white;
                position: relative;
                padding-left: 1rem;
                
              }
              p:after {
                content: "";
                display: block;
                height: 100%;
                width: 0.3rem;
                position: absolute;
                background-color:  ${(props) => props.theme.colors.blue};
                top: 0%;
                left: -0.5rem;
              }
            }
            .right {
              width: 100%;
              height: 90%;
   
              align-items: center;
              display: flex;
              justify-content: space-between;
              align-items: center;
              
              .right_logo {
                width: 30%;
                background-color: #4d9f21;
                height: 70%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: column;

                .logo-wrapper {
                  width: 30%;
                  height: 30%;
                  position: relative;
                  
                }
                .side {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 90%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                  h3 {
                     width: 100%;
                     color: white;
                
                   }
                  p {
                     display: none;
                  }
                }
               
                .side1 {
                  font-family: Proxima-Bold;
                  color: white;
                  width: 90%;
                  line-height: 30px;
                  font-size: 16px;
                  position: relative;
                 
                  h3 {
                    display: none;
                  }

                   p {
                    color: white;
                    width: 100%;
                    line-height: 30px;
                  font-size: 16px;
                  position: relative;
                  font-family: Proxima-Bold;
                  }
                 
                }
               
              }
            }
          }
        }
      }

      .absol {
        position: absolute;
        width: 100%;
        height: 10rem;

        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625647930/b77aizoerfwavnpd4lcz.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
   
        top: -20%;
      }
    }
  }


  @media (max-width: 991px) and (orientation : landscape) {
    .section{
       .section-1 {
         .wrapper {
           .section-data {
             .right {
                height: 40%;
                .right_logo {
                  .logo-wrapper{
                      height: 85%;
                  }
                }
             }
           }
         }
       }
    }

  }







`;
