import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .react-parallax {
      width: 100%;
    }
    .react-parallax-bgimage {
      width: 100% !important;
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 50rem;

      /* Set a specific height */

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
      .homePage-layer {
        position: relative;
         
        width: 50%;
        height:80%;
        /* background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1623838132/g0uu4qlatbvnmzr405zi.png");  */

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
       
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .react-parallax {
      width: 100%;
    }
    .react-parallax-bgimage {
      height: 100% !important;
    }

    .react-parallax-bgimage {
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 40rem;

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
        /* background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1623838132/g0uu4qlatbvnmzr405zi.png");  */

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 55rem;
          height: 65%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          ul {
            width: 60%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            span {
              font-family: Proxima-Bold;
              font-size: 60px;
              text-align: right;
              color: white;
              font-weight: 1000;
              line-height: 52px;
              text-transform: uppercase;
            }
            span:nth-child(3) {
              margin-top: 0.1rem;
              color:    ${(props) => props.theme.colors.blue};
              margin-bottom: 0.2rem;
              position: relative;
              display: flex;
              justify-content: flex-end;
              li {
                margin-top: 0.7rem;
                margin-bottom: 0.7rem;
                font-family: Proxima-Bold;
                border-bottom: 0.2rem solid    ${(props) => props.theme.colors.blue};
              }
            }
          }
          #text-right {
            width: 60%;
            margin-left: 41%;

            span {
              text-align: left;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .react-parallax {
      width: 100%;
    }
    .react-parallax-bgimage {
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 40rem;

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
        /* background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1623838132/g0uu4qlatbvnmzr405zi.png");  */

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 55rem;
          height: 65%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          ul {
            width: 60%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            span {
              font-family: Proxima-Bold;
              font-size: 50px;
              text-align: right;
              color: white;
              font-weight: 1000;
              line-height: 52px;
              text-transform: uppercase;
            }
            span:nth-child(3) {
              margin-top: 0.1rem;
              color:    ${(props) => props.theme.colors.blue};
              margin-bottom: 0.2rem;
              position: relative;
              display: flex;
              justify-content: flex-end;
              li {
                margin-top: 0.7rem;
                margin-bottom: 0.7rem;
                font-family: Proxima-Bold;
                border-bottom: 0.2rem solid    ${(props) => props.theme.colors.blue};
              }
            }
          }
          #text-right {
            width: 60%;
            margin-left: 41%;

            span {
              text-align: left;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .react-parallax {
      width: 100% !important;
      height: 100% !important;
    }

    .react-parallax-bgimage {
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 30em;

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

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 100%;

          height: 70%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          ul {
            width: 60%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            span {
              font-family: Proxima-Bold;
              font-size: 1.5rem;
              text-align: right;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
            }
            span:nth-child(3) {
              margin-top: 0.3rem;
              color:    ${(props) => props.theme.colors.blue};
              margin-bottom: 0.3rem;
              position: relative;
              display: flex;
              justify-content: flex-end;
              li {
                font-family: Proxima-Bold;
                border-bottom: 0.2rem solid    ${(props) => props.theme.colors.blue};
              }
            }
          }
          #text-right {
            width: 60%;
            margin-left: 43%;

            span {
              text-align: left;
            }
          }
        }
      }
    }
  }

  @media (max-width: 991px) and (orientation : landscape) {
    .homePage-hero {
      .homePage-layer{
         .homePage-data {
            #text-right {
              margin-left: 44%;
            }
         }
      }
    }
  }


  

  @media (max-width: 375px) {
    .homePage-hero {
      .homePage-layer{
         .homePage-data {
            #text-right {
              margin-left: 42%;
            }
         }
      }
    }
  }

  @media (max-width: 360px) {
    .homePage-hero {
      .homePage-layer{
         .homePage-data {
            #text-right {
              margin-left: 41%;
            }
         }
      }
    }
  }

  

`;
