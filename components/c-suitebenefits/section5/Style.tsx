import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 290px;
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
            width: 90%;
            height: 100%;
            justify-content: space-evenly;
            align-items: left;
            align-items: center;
            h2 {
              margin-left: 5%;

              width: 50%;
              position: relative;
              padding-left: 2rem;
              font-size: 46px;
              line-height: 40px;
              text-transform: uppercase;
              position: relative;
              color: #3b546a;
            }

            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 100%;
              width: 0.4rem;
              top: 0;
              left: -0.3rem;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            p {
              width: 50%;
              /* font-weight: 600; */
              padding-left: 0.5rem;
              line-height: 38px;
              position: relative;
              font-size: 22px;
              color: #3b546a;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 15rem;
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
            width: 100%;
            height: 100%;
            justify-content: space-evenly;
            align-items: left;
            align-items: center;
            flex-direction: column;

            h2 {
              width: 90%;
              position: relative;
              font-size: 1.5rem;
              text-transform: uppercase;
              position: relative;
              color: #3b546a;
            }

            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 100%;
              width: 0.4rem;
              top: 0;
              left: -4%;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            p {
              width: 90%;
              font-weight: 600;
              font-family: Proxima-Light;
              position: relative;
              font-size: 18px;
              line-height: 1.3;
              color: #3b546a;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 290px;
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
            width: 100%;
            height: 100%;
            justify-content: space-evenly;
            align-items: left;
            align-items: center;
            h2 {
              margin-left: 5%;

              width: 50%;
              position: relative;
              padding-left: 2rem;
              font-size: 46px;
              line-height: 40px;
              text-transform: uppercase;
              position: relative;
              color: #3b546a;
            }

            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 100%;
              width: 0.4rem;
              top: 0;
              left: -0.3rem;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            p {
              width: 50%;
              /* font-weight: 600; */
              padding-left: 0.5rem;
              line-height: 38px;
              position: relative;
              font-size: 22px;
              color: #3b546a;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 290px;
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
            width: 100%;
            height: 100%;
            justify-content: space-evenly;
            align-items: left;
            align-items: center;
            h2 {
              margin-left: 5%;

              width: 50%;
              position: relative;
              padding-left: 2rem;
              font-size: 35px;
              line-height: 40px;
              text-transform: uppercase;
              position: relative;
              color: #3b546a;
            }

            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 100%;
              width: 0.4rem;
              top: 0;
              left: -0.3rem;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            p {
              width: 50%;
              /* font-weight: 600; */
              padding-left: 0.5rem;

              position: relative;
              font-size: 22px;
              color: #3b546a;
            }
          }
        }
      }
    }
  }

  @media (max-width: 991px) and (orientation : landscape) {
     .section{
        .section_top {
          .section2_data {
            .section2_data_left {
              p {
                padding-right: 1rem;
              }
            }
          }
        }
     }
   }

  @media (max-width: 414px) {
    .section {
      .section_top {
        .section2_data {
          .section2_data_left{
             h2 {
               margin-left: 1rem;
             }
          }
        }
      }
    }
  }

`;
