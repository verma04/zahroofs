import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 32rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 10%;
        width: 0;

        bottom: -17%;

        height: 0;
        border-left: 7rem solid transparent;
        border-right: 7rem solid transparent;
        border-top: 6rem solid #3c4e62;
        z-index: 1;
      }

      .section2_data {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .section2_data_left {
          display: flex;
          width: 40%;
          height: 100%;
          justify-content: start;
          align-items: left;
          flex-direction: column;
          h2 {
            width: 92%;
            font-size: 46px;
            color:  ${(props) => props.theme.colors.blue};
            line-height: 46px;
            /* margin-left: 20px; */
            margin-top: 45px;

            /* overflow: hidden; */
            /* position: relative;
        ::after {
              content: '';
              width: 7px;
              height: 33px;
              background: #38506d;
              position: absolute;
              top: 70%;
              left: -20px;
        } */
          }

          p {
            color: white;
            /* font-weight: 600; */
            font-size: 20px;
            width: 75%;
            line-height: 28px;
            margin-top: 35px;
          }
        }

        .section2_data_right {
          display: flex;
          width: 40%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          .logo {
            width: 50%;
            height: 50%;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img-wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            .img-wrapper {
              transition: transform 0.5s;
              width: 50%;
              height: 50%;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 100%;

              font-size: 20px;
              line-height: 20px;
              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
              p {
                height: 100%;
                width: 100%;
              }
            }
            img {
              height: 65px !important;
              width: auto !important;
            }
          }

          .logo-1 {
            width: 50%;
            height: 50%;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img-wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            .img-wrapper {
              transition: transform 0.5s;
              width: 50%;
              height: 50%;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 100%;
              font-weight: 600;
              font-size: 1.25rem;
              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
              display: flex;
              justify-content: flex-start;
              flex-direction: column;
              align-items: center;

              align-items: center;
              p {
                width: 100%;
              }
            }
            img {
              height: 65%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 32rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 10%;
        width: 0;

        bottom: -17%;

        height: 0;
        border-left: 7rem solid transparent;
        border-right: 7rem solid transparent;
        border-top: 6rem solid #3c4e62;
        z-index: 1;
      }

      .section2_data {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .section2_data_left {
          display: flex;
          width: 40%;
          height: 100%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            width: 92%;
            font-size: 37px;
            color:  ${(props) => props.theme.colors.blue};
            line-height: 46px;
            /* margin-left: 20px; */

            /* overflow: hidden; */
            /* position: relative;
      ::after {
            content: '';
            width: 7px;
            height: 33px;
            background: #38506d;
            position: absolute;
            top: 70%;
            left: -20px;
      } */
          }

          p {
            color: white;
            /* font-weight: 600; */
            font-size: 20px;
            width: 75%;
            line-height: 28px;
          }
        }

        .section2_data_right {
          display: flex;
          width: 40%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          .logo {
            width: 50%;
            height: 50%;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img-wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            .img-wrapper {
              transition: transform 0.5s;
              width: 50%;
              height: 50%;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 100%;

              font-size: 20px;
              line-height: 20px;
              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
              p {
                height: 100%;
                width: 100%;
              }
            }
            img {
              height: 65px !important;
              width: auto !important;
            }
          }

          .logo-1 {
            width: 50%;
            height: 50%;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img-wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            .img-wrapper {
              transition: transform 0.5s;
              width: 50%;
              height: 50%;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 100%;
              font-weight: 600;
              font-size: 1.25rem;
              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
              display: flex;
              justify-content: flex-start;
              flex-direction: column;
              align-items: center;

              align-items: center;
              p {
                width: 100%;
              }
            }
            img {
              height: 65%;
            }
          }
        }
      }
    }
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 32rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 10%;
        width: 0;

        bottom: -17%;

        height: 0;
        border-left: 7rem solid transparent;
        border-right: 7rem solid transparent;
        border-top: 6rem solid #3c4e62;
        z-index: 1;
      }

      .section2_data {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .section2_data_left {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            width: 92%;
            font-size: 2rem;
            color:  ${(props) => props.theme.colors.blue};
            line-height: 2rem;
            /* margin-left: 20px; */

            /* overflow: hidden; */
            /* position: relative;
      ::after {
            content: '';
            width: 7px;
            height: 33px;
            background: #38506d;
            position: absolute;
            top: 70%;
            left: -20px;
      } */
          }

          p {
            color: white;
            /* font-weight: 600; */
            font-size: 20px;
            width: 90%;
            line-height: 28px;
            margin-top: 35px;
          }
        }

        .section2_data_right {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          .logo {
            width: 50%;
            height: 50%;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img-wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            .img-wrapper {
              transition: transform 0.5s;
              width: 50%;
              height: 50%;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 100%;

              font-size: 20px;
              line-height: 20px;
              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
              p {
                height: 100%;
                width: 100%;
              }
            }
            img {
              height: 65px !important;
              width: auto !important;
            }
          }

          .logo-1 {
            width: 50%;
            height: 50%;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img-wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            .img-wrapper {
              transition: transform 0.5s;
              width: 50%;
              height: 50%;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 100%;
              font-weight: 600;
              font-size: 1.25rem;
              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
              display: flex;
              justify-content: flex-start;
              flex-direction: column;
              align-items: center;

              align-items: center;
              p {
                width: 100%;
              }
            }
            img {
              height: 65%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 35rem;
      flex-direction: column;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 10%;
        width: 0;
        bottom: -5%;
        height: 0;
        border-left: 3rem solid transparent;
        border-right: 3rem solid transparent;
        border-top: 2rem solid #3c4e62;
        z-index: 1;
      }

      .section2_data {
        width: 90%;
        height: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .section2_data_left {
          display: flex;
          width: 100%;
          height: 48%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            width: 100%;
            font-size: 1.5rem;
            color:  ${(props) => props.theme.colors.blue};
            line-height: 1.1;
            /* margin-left: 20px; */

            /* overflow: hidden; */
            /* position: relative;
    ::after {
          content: '';
          width: 7px;
          height: 33px;
          background: #38506d;
          position: absolute;
          top: 70%;
          left: -20px;
    } */
          }
          p {
            color: white;
            /* font-weight: 600; */
            font-size: 16px;
            width: 100%;
            line-height: 1.3;
          }
        }

        .section2_data_right {
          display: flex;
          width: 100%;
          height: 48%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          .logo {
            width: 50%;
            height: 50%;
            display: flex;
            position: relative;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;

            .img-wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            .img-wrapper {
              transition: transform 0.5s;
              width: 40%;
              height: 40%;
              position: relative;
              position: relative;
            }
            p {
              height: 40%;
              font-size: 1rem;
              font-size: 14px;
              line-height: 1;
              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
            }
            img {
              height: 50%;
            }
          }
        }
      }
    }
  }


  
  
   


`;
