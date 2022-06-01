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
      /* background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000543/nszogjpikgvufgyx7tar.png"); */

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
          margin-top: 5%;
          width: 70%;
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
              margin-top: 0.9rem;
              font-size: 3rem;
              text-align: center;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              font-family: Proxima-Bold;
              p {
                color: white;
                font-family: Proxima-Bold;
              }
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
      width: 100% !important;
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 20rem;
      /* background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000543/nszogjpikgvufgyx7tar.png"); */

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
          margin-top: 5%;
          width: 100%;
          height: 80%;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          ul {
            width: 100%;
            display: flex;
            justify-content: center;
            li {
              margin-top: 2.5rem;
              width: 100%;
              font-size: 1.5rem;
              text-align: center;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              font-family: Proxima-Bold;
               p{
                color: white;
               }
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
      width: 100% !important;
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 80vh;
      /* background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000543/nszogjpikgvufgyx7tar.png"); */

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
          margin-top: 5%;
          width: 70%;
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
              margin-top: 0.9rem;
              font-size: 2rem;
              text-align: center;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              font-family: Proxima-Bold;
              p {
                color: white;
                font-family: Proxima-Bold;
              }
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
      width: 100% !important;
      height: 100% !important;
    }

    .homePage-hero {
      width: 100%;
      position: relative;
      height: 80vh;
      /* background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624000543/nszogjpikgvufgyx7tar.png"); */

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
          margin-top: 5%;
          width: 70%;
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
              margin-top: 0.9rem;
              font-size: 2rem;
              text-align: center;
              color: white;
              font-weight: 1000;
              text-transform: uppercase;
              font-family: Proxima-Bold;
              p {
                color: white;
                font-family: Proxima-Bold;
              }
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

  @media (max-width: 414px) {
    .react-parallax  .react-parallax-bgimage {
      object-fit: cover;
    } 
  }




`;
