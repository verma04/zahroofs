import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    position: relative;
    .react-parallax {
      width: 100%;
    }
    .react-parallax-bgimage {
      width: 100% !important;

      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;

      height: 100vh;
      min-height: 45rem;
      position: relative;
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

        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          width: 80%;

          height: 60%;

          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;
          ul {
            margin-left: 0.5rem;
            width: 100%;
            li {
              width: 23%;
              font-size: 57px;
              line-height: 0.9;
              font-family: Proxima-Bold;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
            }
            li:nth-child(1) {
              position: relative;
            }
            li:nth-child(1)::after {
              content: "";
              display: block;
              height: 80%;
              margin-top: 0.2rem;
              width: 0.35rem;
              position: absolute;
              background-color:  ${(props) => props.theme.colors.blue};
              top: 0%;
              left: -1rem;
            }
          }

          p {
            width: 38%;
            line-height: 30px;
            margin-left: 1rem;
            font-size: 19px;
            font-family: Proxima-Bold;

            color: white;
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

      .absol {
        position: absolute;
        width: 100%;
        height: 10rem;

        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625647930/b77aizoerfwavnpd4lcz.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        top: 86vh;
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

        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          width: 100%;
          height: 60%;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;
          ul {
            margin-left: 0.5rem;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: left;

            li {
              width: 80%;
              padding-left: 1rem;
              font-size: 1.8rem;
              line-height: 0.9;
              font-family: Proxima-Bold;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
            }
            li:nth-child(1) {
              position: relative;
            }
            li:nth-child(1)::after {
              content: "";
              display: block;
              height: 80%;
              margin-top: 0.2rem;
              width: 0.35rem;
              position: absolute;
              background-color:  ${(props) => props.theme.colors.blue};
              top: 0%;
              left: -0.1rem;
            }
          }

          p {
            padding-left: 1rem;
            width: 96%;
            line-height: 1.3;
            margin-left: 1rem;
            font-size: 19px;
            font-family: Proxima-Light;
            font-weight: 600;
            color: white;
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

      .absol {
        position: absolute;
        width: 100%;
        height: 8rem;
        background-image: url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1625647930/b77aizoerfwavnpd4lcz.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

       
    top: 34rem;

      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    position: relative;
    .react-parallax {
      width: 100%;
    }
    .react-parallax-bgimage {
      height: 100% !important;
    }
    .homePage-hero {
      width: 100%;

      height: 50rem;

      position: relative;
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

        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          width: 80%;
          height: 60%;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;
          ul {
            margin-left: 0.5rem;
            width: 100%;
            li {
              width: 22%;
              font-size: 42px;
              line-height: 0.9;
              font-family: Proxima-Bold;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
            }
            li:nth-child(1) {
              position: relative;
            }
            li:nth-child(1)::after {
              content: "";
              display: block;
              height: 80%;
              margin-top: 0.2rem;
              width: 0.35rem;
              position: absolute;
              background-color:  ${(props) => props.theme.colors.blue};
              top: 0%;
              left: -1rem;
            }
          }

          p {
            width: 49%;

            line-height: 30px;
            margin-left: 1rem;
            font-size: 19px;
            font-family: Proxima-Bold;

            color: white;
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

      .absol {
        position: absolute;
        width: 100%;
        height: 7rem;
        background-image: url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1625647930/b77aizoerfwavnpd4lcz.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        top: 43rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: relative;
    .react-parallax {
      width: 100%;
    }
    .react-parallax-bgimage {
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;

      height: 50rem;

      position: relative;
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

        display: flex;
        justify-content: center;
        align-items: center;
        .homePage-data {
          width: 80%;

          height: 60%;

          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;
          ul {
            margin-left: 0.5rem;
            width: 100%;
            li {
              font-size: 42px;
              line-height: 0.9;
              font-family: Proxima-Bold;
              text-align: left;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
            }
            li:nth-child(1) {
              position: relative;
            }
            li:nth-child(1)::after {
              content: "";
              display: block;
              height: 80%;
              margin-top: 0.2rem;
              width: 0.35rem;
              position: absolute;
              background-color:  ${(props) => props.theme.colors.blue};
              top: 0%;
              left: -1rem;
            }
          }

          p {
            width: 49%;

            line-height: 30px;
            margin-left: 1rem;
            font-size: 19px;
            font-family: Proxima-Bold;

            color: white;
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

      .absol {
        position: absolute;
        width: 100%;
        height: 8rem;
        background-image: url(https://res.cloudinary.com/dzcmadjl1/image/upload/v1625647930/b77aizoerfwavnpd4lcz.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        top: 43rem;
      }
    }
  }


  @media (max-width: 414px) {
    .homePage-hero {
      .homePage-layer{
        background-color: rgb(0 0 0 / 35%);
        .homePage-data {
          ul {
            li {
              font-size: 2.1rem;
              margin-left: 1rem;
              line-height: 1;
            }
          }
        }
      }
    }
  }



`;
