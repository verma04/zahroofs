import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 518px;

      position: relative;

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
            margin-left: 20px;
            margin-top: 86px;
            color: #27364e;
            position: relative;

            font-size: 55px;
            line-height: 46px;
            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 130%;
            width: 0.4rem;
            bottom: -12%;
            left: -20px;

            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            width: 80%;
            color: white;
            margin-top: 81px;
            padding-left: 20px;
            line-height: 35px;
            text-align: left;
            color: black;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          background-color: #24334d;

          display: flex;
          width: 45%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          .img-wrapper {
            position: relative;
            width: 80%;
            height: 70%;
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 518px;

      position: relative;

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            margin-left: 20px;

            color: #27364e;
            position: relative;

            font-size: 42px;
            line-height: 46px;
            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 130%;
            width: 0.4rem;
            bottom: -12%;
            left: -20px;

            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            margin-top: 1rem;
            width: 80%;
            color: white;

            padding-left: 20px;
            line-height: 35px;
            text-align: left;
            color: black;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          background-color: #24334d;

          display: flex;
          width: 45%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          .img-wrapper {
            position: relative;
            width: 80%;
            height: 70%;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 518px;

      position: relative;

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 50%;
          height: 100%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            margin-left: 20px;

            color: #27364e;
            position: relative;

            font-size: 42px;
            line-height: 46px;
            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 130%;
            width: 0.4rem;
            bottom: -12%;
            left: -20px;

            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            margin-top: 1rem;
            width: 80%;
            color: white;

            padding-left: 20px;
            line-height: 35px;
            text-align: left;
            color: black;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          background-color: #24334d;

          display: flex;
          width: 45%;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          .img-wrapper {
            position: relative;
            width: 80%;
            height: 70%;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 50rem;

      position: relative;

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 100%;
          height: 50%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h2 {
            width: 90%;
            color: #27364e;
            position: relative;
            text-transform: uppercase;
            position: relative;
            br {
              display: none;
            }
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 130%;
            width: 0.4rem;
            bottom: -12%;
            left: -3%;

            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            width: 90%;
            line-height: 1.3;
            text-align: left;
            color: #2f3435;
            font-size: 18px;
            font-weight: 600;
            margin-top: 15px;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          background-color: #24334d;

          display: flex;
          width: 100%;
          height: 50%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          .img-wrapper {
            position: relative;
            width: 80%;
            height: 70%;
          }
        }
      }
    }
  }

  @media (max-width: 414px) {
    .section4 {
      height: 40rem;
      .section2_data{
         .section2_data_left {
           h2 {
              margin-left: 1rem;
           }
         }
      }
    }
  }
`;
