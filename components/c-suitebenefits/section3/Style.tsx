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
      height: 480px;
      background-color:  ${(props) => props.theme.colors.blue};

      .section2_data {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .section2_top {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-around;
          align-items: center;

          .logo {
            height: 60%;

            width: 17%;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            .wrapper {
              width: 100%;
              height: 60%;
              position: relative;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
              transition: transform 0.5s;
            }
            .wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            p {
              margin-left: 10%;
              margin-top: 1rem;
              width: 85%;

              line-height: 16.87px;
              font-family: Proxima-Bold;
              text-transform: uppercase;
                  color: #24334d;;
              font-size: 14.05px;
            }
          }
        }

        .section2_bottom {
          display: flex;
          width: 100%;
          height: 20%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          h4 {
            font-size: 1.3rem;
            text-align: center;
            color: #24334d;
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
      height: 50rem;
      background-color:  ${(props) => props.theme.colors.blue};

      .section2_data {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .section2_top {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;

          .logo {
            height: 30%;
            width: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            .wrapper {
              width: 100%;
              height: 60%;
              position: relative;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
              transition: transform 0.5s;
            }
            .wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            p {
              margin-left: 10%;
              margin-top: 1rem;
              width: 90%;
              line-height: 16.87px;
              font-family: Proxima-Bold;
              text-transform: uppercase;
                  color: #24334d;;
              font-size: 13px;
            }
          }
        }

        .section2_bottom {
          display: flex;
          width: 100%;
          height: 20%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          h4 {
            font-size: 1.3rem;
            text-align: center;
            color: #24334d;
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
      height: 480px;
      background-color:  ${(props) => props.theme.colors.blue};

      .section2_data {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .section2_top {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-around;
          align-items: center;

          .logo {
            height: 60%;

            width: 14%;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            .wrapper {
              width: 100%;
              height: 60%;
              position: relative;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
              transition: transform 0.5s;
            }
            .wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            p {
              margin-left: 10%;
              margin-top: 1rem;
              width: 85%;

              line-height: 16.87px;
              font-family: Proxima-Bold;
              text-transform: uppercase;
                  color: #24334d;;
              font-size: 14.05px;
            }
          }
        }

        .section2_bottom {
          display: flex;
          width: 100%;
          height: 20%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          h4 {
            font-size: 1.3rem;
            text-align: center;
            color: #24334d;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 50rem;
      background-color:  ${(props) => props.theme.colors.blue};

      .section2_data {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .section2_top {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;

          .logo {
            height: 30%;

            width: 45%;

            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            .wrapper {
              width: 100%;
              height: 60%;
              position: relative;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
              transition: transform 0.5s;
            }
            .wrapper:hover {
              -ms-transform: scale(1.5); /* IE 9 */
              -webkit-transform: scale(1.5); /* Safari 3-8 */
              transform: scale(1.1);
            }
            p {
              margin-left: 10%;
              margin-top: 1rem;
              width: 85%;

              line-height: 16.87px;
              font-family: Proxima-Bold;
              text-transform: uppercase;
                  color: #24334d;;
              font-size: 14.05px;
            }
          }
        }

        .section2_bottom {
          display: flex;
          width: 100%;
          height: 20%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          h4 {
            font-size: 1.3rem;
            text-align: center;
            color: #24334d;
          }
        }
      }
    }
  }

  @media (max-width: 414px) {

    .section2 {
      height: 40rem;
      .section2_data {

        .section2_top  {
          height: auto;
          
          .logo {
            height: 100px;
            width: 100%;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            .wrapper {
                width: 35%;
                height: 75%;
            }
            p {
              margin-left: 0;
              margin-top: 0;
            }
          }
        }
      }
    }
  }

`;
