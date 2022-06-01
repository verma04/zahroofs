import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .homePage-hero {
      width: 100%;
      position: relative;
      height: 40em;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085963/ks5kmugbnmzubbsxoiyc.png");

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .homePage-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625813528/dzoefyedywxy5qeorb9o.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 80%;
          height: 70%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          .text-left {
            width: 60%;

            li {
              margin-top: 2rem;
              font-family: Proxima-Bold;
              font-size: 55px;
              line-height: 50px;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-left: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 130%;
              width: 0.4rem;
              top: -10%;
              left: -0.5rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              font-family: Proxima-Bold;
              width: 60%;
              font-size: 55px;
              line-height: 50px;
              text-align: left;
            }
            li {
              margin-top: 2rem;

              font-size: 3.3rem;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-left: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 130%;
              width: 0.4rem;
              top: -10%;
              left: -0.5rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .homePage-hero {
      width: 100%;
      position: relative;
      height: 40em;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085963/ks5kmugbnmzubbsxoiyc.png");

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .homePage-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085966/yoy5pmbutgpdmghuktg6.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 75%;
          height: 70%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          .text-left {
            width: 60%;

            li {
              margin-top: 2rem;
              font-family: Proxima-Bold;
              font-size: 55px;
              line-height: 50px;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-left: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 130%;
              width: 0.4rem;
              top: -10%;
              left: -0.5rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              font-family: Proxima-Bold;
              width: 60%;
              font-size: 55px;
              line-height: 50px;
              text-align: left;
            }
            li {
              margin-top: 2rem;

              font-size: 3.3rem;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-left: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 130%;
              width: 0.4rem;
              top: -10%;
              left: -0.5rem;
            }
          }
        }
      }
    }



  
 

    
     
       
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .homePage-hero {
      width: 100%;
      position: relative;
      height: 30em;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085963/ks5kmugbnmzubbsxoiyc.png");

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .homePage-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085966/yoy5pmbutgpdmghuktg6.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 75%;
          height: 70%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          .text-left {
            width: 60%;

            li {
              margin-top: 2rem;
              font-family: Proxima-Bold;
              font-size: 34px;
              line-height: 34px;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-left: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 130%;
              width: 0.4rem;
              top: -10%;
              left: -0.5rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              font-family: Proxima-Bold;
              width: 60%;
              font-size: 34px;
              line-height: 34px;
              text-align: left;
            }
            li {
              margin-top: 2rem;

            
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-left: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 130%;
              width: 0.4rem;
              top: -10%;
              left: -0.5rem;
            }
          }
        }
      }
    }
    


  }

  @media (max-width: 767px) {
    .homePage-hero {
      width: 100%;
      position: relative;
      height: 25em;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085963/ks5kmugbnmzubbsxoiyc.png");

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .homePage-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624085966/yoy5pmbutgpdmghuktg6.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 92%;
          height: 70%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          .text-left {
            width: 70%;

            li {
              margin-top: 2rem;
              font-family: Proxima-Bold;
              font-size: 1.5rem;
              line-height: 1.5rem;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-left: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 130%;
              width: 0.4rem;
              top: -10%;
              left: -0.5rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              font-family: Proxima-Bold;
              width: 50%;
              font-size: 1.5rem;
              line-height: 1.5rem;
              text-align: left;
            }
            li {
              margin-top: 2rem;

            
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-left: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 130%;
              width: 0.4rem;
              top: -10%;
              left: -0.5rem;
            }
          }
        }
      }
    }
    

 
  }
`;
