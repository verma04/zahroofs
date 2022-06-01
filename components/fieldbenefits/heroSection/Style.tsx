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
      height: 80vh;

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
          width: 78%;
          height: 50%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;

          .text-left {
            width: 38%;

            li {
              margin-top: 2rem;
              font-family: Proxima-Bold;
              font-size: 55px;
              line-height: 46px;
              text-align: right;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 0.5rem;
              margin-right: 1rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 110%;
              width: 0.4rem;
              top: 0;
              right: -2rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              font-family: Proxima-Bold;
              width: 48%;
              text-align: left;
            }
            li {
              font-size: 55px;
              line-height: 46px;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 110%;
              width: 0.4rem;
              top: 0;
              left: -2rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
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

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 70%;
          height: 50%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;

          .text-left {
            width: 38%;

            li {
              margin-top: 2rem;
              font-family: Proxima-Bold;
              font-size: 36px;
              line-height: 46px;
              text-align: right;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 0.5rem;
              margin-right: 1rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 110%;
              width: 0.4rem;
              top: 0;
              right: -2rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              font-family: Proxima-Bold;
              width: 48%;
              text-align: left;
            }
            li {
              font-size: 35px;

              line-height: 46px;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 110%;
              width: 0.4rem;
              top: 0;
              left: -2rem;
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
      width: 100% !important;
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

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          margin-top: 5%;
          width: 97%;
          height: 50%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;

          .text-left {
            width: 38%;

            li {
              margin-top: 2rem;
              font-family: Proxima-Bold;
              font-size: 36px;
              line-height: 46px;
              text-align: right;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 0.5rem;
              margin-right: 1rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 110%;
              width: 0.4rem;
              top: 0;
              right: -2rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              font-family: Proxima-Bold;
              width: 48%;
              text-align: left;
            }
            li {
              font-size: 35px;

              line-height: 46px;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 110%;
              width: 0.4rem;
              top: 0;
              left: -2rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .react-parallax {
      width: 100%;
    }

    .react-parallax-bgimage {
     
      height: 100% !important;
    }
    .homePage-hero {
      width: 100%;
      position: relative;
      height: 20em;

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

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;

          .text-left {
            width: 50%;

            li {
              margin-top: 2rem;
              font-family: Proxima-Bold;
              font-size: 1.5rem;

              text-align: right;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 0.5rem;
              margin-right: 1rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 110%;
              width: 0.3rem;
              top: 0;
              right: -0.5rem;
            }
          }
          .text-right {
            margin-top: 1rem;
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              font-family: Proxima-Bold;
              width: 48%;
              text-align: left;

              font-family: Proxima-Bold;
              font-size: 1.5rem;

            
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 1rem;
             
            }
            li {
              font-size: 1.5rem;

              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              position: relative;
              padding-right: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 110%;
              width: 0.3rem;
              top: 0;
              left: -0.8rem;

            }
          }
        }
      }
    }
  }


  @media (max-width: 991px) and (orientation : landscape) {
    .homePage-hero {
      .homePage-layer {
        .homePage-data {
          .text-left {
            li {
                line-height: 1;
            }
          }
          .text-right{
            li {
                line-height: 1;
            }
          }
        }
      }
    }
  }

  @media (max-width: 414px) {
    .homePage-hero {
      .homePage-layer {
        .homePage-data{
           .text-right {
              margin-top: 2rem;
           }
        }
      }
    }
  }

`;
