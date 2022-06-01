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
      height: 70vh;
      .homePage-layer {
        position: absolute;
        width: 100%;
        height: 100%;

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
        .homePage-data {
          margin-top: 5%;
          width: 70%;
          height: 60%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;

          .text-left {
            width: 35%;

            li {
              margin-top: 2rem;

              font-size: 3.3rem;
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
              height: 100%;
              width: 0.4rem;
              top: 0;
              right: -0.5rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              width: 50%;
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
              padding-right: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 100%;
              width: 0.4rem;
              top: 0;
              left: -0.5rem;
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
      .homePage-layer {
        position: absolute;
        width: 100%;
        height: 100%;

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
        .homePage-data {
          margin-top: 5%;
          width: 70%;
          height: 60%;

          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;

          .text-left {
            width: 35%;

            li {
              margin-top: 2rem;

              font-size: 3.3rem;
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
              height: 100%;
              width: 0.3rem;
              top: 0;
              right: -0.5rem;
            }
          }
          .text-right {
            width: 100%;
            display: flex;
            justify-content: flex-end;

            li {
              width: 50%;
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
              padding-right: 0.5rem;
            }
            li:nth-child(1)::after {
              content: "";
              position: absolute;
              display: block;
              background-color:  ${(props) => props.theme.colors.blue};
              height: 100%;
              width: 0.3rem;
              top: 0;
              left: -0.5rem;
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
              color:  ${(props) => props.theme.colors.blue};
              margin-bottom: 0.2rem;
              position: relative;
              display: flex;
              justify-content: flex-end;
              li {
                margin-top: 0.7rem;
                margin-bottom: 0.7rem;
                font-family: Proxima-Bold;
                border-bottom: 0.2rem solid  ${(props) => props.theme.colors.blue};
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
      width: 100%;
    }
    .react-parallax-bgimage {
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 20rem;
      /* background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000541/cphgw5dj87cn4bt8me67.png"); */

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
          width: 1000%;
          height: 60%;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          ul {
            width: 100%;
            display: flex;
            justify-content: center;
            li {
              font-size: 1.5rem;
              font-family: Proxima-Bold;
              text-align: center;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
            }
          }
          .text-right {
            width: 60%;
            margin-left: 32%;

            li {
              text-align: left;
            }
          }
        }
      }
    }
  }
`;
