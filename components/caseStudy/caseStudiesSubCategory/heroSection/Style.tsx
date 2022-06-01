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
      height: 100% !important;
      width: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 60vh;
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
          width: 50%;
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
              font-size: 60px;
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

  @media (max-width: 767px) {
    .react-parallax {
      width: 100%;
    }
    .react-parallax-bgimage {
      height: 100% !important;
      width: 100% !important;
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
          width: 50%;
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
              font-size: 30px;
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

  @media (min-width: 1024px) and (max-width: 1280px) {
    .react-parallax {
      width: 100%;
    }
    .react-parallax-bgimage {
      height: 100% !important;
      width: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 80vh;
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
          width: 50%;
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
              font-size: 60px;
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
      height: 30rem;
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
