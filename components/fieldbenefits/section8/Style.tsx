import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
#ab {
  font-family: "Caveat";

}
  @media (min-width: 1281px) {
    .section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color:  ${(props) => props.theme.colors.blue};
        height: 400px;
        #top {
          font-size: 51px;
          line-height: 60px;
          width: 70%;
          color: #24334d;
          font-family: "Caveat";
          font-weight: 500;
        }
        #ab {
          position: absolute;
          font-size: 1.5rem;
          bottom: 3%;
          left: 60%;
          margin-top: 3rem;
          z-index: 3;
          line-height: 2;
          color: #24334d;
          text-align: right;
        }

        .triangle-down {
          position: absolute;

          right: 30%;
          bottom: -69px;
          right: 22%;
          z-index: 1;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-top: 100px solid  ${(props) => props.theme.colors.blue};
        }

        .tringle {
          position: absolute;
          left: 20%;
          width: 0;
          top: -15%;
          height: 0;
          border-left: 7rem solid transparent;
          border-right: 7rem solid transparent;
          border-top: 5rem solid  ${(props) => props.theme.colors.blue};
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 658px;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          position: absolute;
          .section2_data_left {
            display: flex;
            width: 50%;
            height: 100%;
            justify-content: flex-start;
            align-items: left;
            flex-direction: column;
            h2 {
              margin-top: 78px;
              text-transform: uppercase;
              position: relative;
              line-height: 46px;
              font-size: 55px;
              color: white;
              position: relative;
            }
            p:nth-child(2) {
              margin-top: 52px;
            }
            p:nth-child(1) {
              margin-top: 75px;
            }

            p {
              width: 90%;
              color: white;

              line-height: 35px;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 2rem;
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 30%;
            height: 80%;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            position: relative;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color:  ${(props) => props.theme.colors.blue};
        height: 375px;
        #top {
          font-size: 51px;
          line-height: 60px;
          width: 80%;
          color: #24334d;
          font-family: "Caveat";
          font-weight: 500;
        }
        #ab {
          position: absolute;
          font-size: 1.5rem;
          bottom: 10%;
          left: 60%;
          margin-top: 3rem;
          line-height: 2;
          color: #24334d;
          text-align: right;
        }

        .triangle-down {
          position: absolute;

          right: 30%;
          bottom: -69px;
          right: 22%;
          z-index: 1;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-top: 100px solid  ${(props) => props.theme.colors.blue};
        }

        .tringle {
          position: absolute;
          left: 20%;
          width: 0;
          top: -15%;
          height: 0;
          border-left: 7rem solid transparent;
          border-right: 7rem solid transparent;
          border-top: 5rem solid  ${(props) => props.theme.colors.blue};
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 658px;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          position: absolute;
          .section2_data_left {
            display: flex;
            width: 50%;
            height: 100%;
            justify-content: flex-start;
            align-items: left;
            flex-direction: column;
            h2 {
              margin-top: 35px;
              text-transform: uppercase;
              position: relative;
              line-height: 46px;
              font-size: 39px;
              color: white;
              position: relative;
            }
            p:nth-child(2) {
            }
            p:nth-child(1) {
              margin-top: 75px;
            }

            p {
              width: 90%;
              color: white;

              line-height: 35px;
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 2rem;
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 30%;
            height: 80%;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            position: relative;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color:  ${(props) => props.theme.colors.blue};
        height: 300px;
        #top {
          font-size: 2rem;

          width: 90%;
          color: #24334d;
          font-family: "Caveat";
        }
        #ab {
          position: absolute;
          font-size: 1.5rem;
          bottom: 5%;
          left: 60%;

          margin-top: 3rem;

          color: #24334d;
          text-align: right;
        }

        .tringle {
          position: absolute;
          left: 20%;
          width: 0;
          top: -15%;
          height: 0;
          border-left: 7rem solid transparent;
          border-right: 7rem solid transparent;
          border-top: 5rem solid  ${(props) => props.theme.colors.blue};
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50rem;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          position: absolute;
          flex-direction: column-reverse;
          .section2_data_left {
            display: flex;
            width: 100%;
            height: 60%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            h2 {
              text-transform: uppercase;
              position: relative;
              width: 95%;
              font-size: 1.5rem;
              color: white;
              position: relative;
            }

            p {
              width: 95%;
              color: white;

              line-height: 1.1;
              font-size: 20px;
              font-weight: 600;
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 95%;
            height: 30%;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            position: relative;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color:  ${(props) => props.theme.colors.blue};
        height: 423px;
        #top {
          font-size: 2rem;

          width: 90%;
          color: #24334d;
          font-family: "Caveat";
        }
        #ab {
          position: absolute;
          font-size: 1.5rem;
          bottom: 5%;
        

          margin-top: 3rem;

          color: #24334d;
          text-align: right;
        }

        .tringle {
          position: absolute;
          left: 20%;
          width: 0;
          top: -15%;
          height: 0;
          border-left: 7rem solid transparent;
          border-right: 7rem solid transparent;
          border-top: 5rem solid  ${(props) => props.theme.colors.blue};
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50rem;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          position: absolute;
          flex-direction: column-reverse;
          .section2_data_left {
            display: flex;
            width: 90%;
            height: 60%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            h2 {
              text-transform: uppercase;
              position: relative;
              width: 100%;
              font-size: 1.5rem;
              color: white;
              position: relative;
            }

            p {
              width: 100%;
              color: white;
              line-height: 1.3;
              font-size: 18px;
              font-weight: 600;
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 90%;
            height: 30%;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            position: relative;
          }
        }
      }
    }
  }


   @media (max-width: 991px) and (orientation : landscape) {
     .section{
        .section_bottom {
          height: 30rem;
          .section2_data {
            flex-direction: row;
            .section2_data_left {
              height: 40%;
              padding-left: 2rem;
               p {
                line-height: 1.2;
                font-size: 17px;
                margin-top: 10px;
              }
            }
            .section2_data_right{
              height: 80%;
              width: 100%;
            }
          }
        }
     }
   }


`;
