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
        background-color: #3b546a;
        height: 395px;
        p {
          width: 90%;
          text-align: center;
          color: white;
          text-transform: uppercase;
          font-size: 50px;
          line-height: 50px;
        }
        position: relative;
        .tringle {
          position: absolute;
          left: 40%;
          width: 0;
          bottom: -18%;
          height: 0;
          border-left: 10rem solid transparent;
          border-right: 10rem solid transparent;
          border-top: 8rem solid #3b546a;
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 370px;
        position: relative;

        background-color:  ${(props) => props.theme.colors.blue};
        .section2_data {
          width: 100%;

          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .section2_data {
            display: flex;
            width: 50%;
            height: 100%;

            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;

            .section_bottom_data {
              width: 100%;
              height: 370px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
                
              h3 {
                color: ${(props) => props.theme.colors.darkblue};
                text-transform: uppercase;

              }
              li {
                position: relative;
                text-transform: uppercase;
                font-size: 29.99px;
                line-height: 33.32px;
                width: 70%;
                text-align: center;
             
    height: 50%;

             
                color: ${(props) => props.theme.colors.darkblue};
                font-family: Proxima-Bold;
                display: flex;
                justify-content:center;
                align-items: center
                 

              }
            
            }
          }
        }
      }

      .section_bottom-1 {
        margin-top: 40px;
        margin-bottom: 40px;
        span {
          font-size: 46px;
          line-height: 40px;
          font-family: Proxima-Thin;
          text-transform: uppercase;
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
        background-color: #3b546a;
        height: 10rem;
        p {
          width: 90%;
          text-align: center;
          color: white;
          text-transform: uppercase;
          font-size: 1.5rem;
        }
        position: relative;
        .tringle {
          display: none;
          position: absolute;
          left: 34%;
          width: 0;
          bottom: -30%;
          height: 0;
          border-left: 15rem solid transparent;
          border-right: 15rem solid transparent;
          border-top: 20rem solid #3b546a;
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 700px;
        position: relative;

        background-color:  ${(props) => props.theme.colors.blue};
        .section2_data {
          width: 100%;

          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;

          .section2_data {
            display: flex;
            width: 50%;
            height: 33%;

            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;

            .section_bottom_set {
              width: 100%;
              height: 100%;
            .section_bottom_data {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;

              h3 {
                color: ${(props) => props.theme.colors.darkblue};
                text-transform: uppercase;
                font-size: 1rem;
              }
              li {
                position: relative;
                text-transform: uppercase;
                font-size: 29.99px;
                line-height: 33.32px;
                width: 70%;
                text-align: center;
             
    height: 50%;

             
                color: ${(props) => props.theme.colors.darkblue};
                font-family: Proxima-Bold;
                display: flex;
                justify-content:center;
                align-items: center
                 

              }
            }

          }
          }
        }
      }

      .section_bottom-1 {
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 1.4rem;
          width: 90%;
          text-align: center;
          font-family: Proxima-Thin;
          text-transform: uppercase;
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
        background-color: #3b546a;

        height: 328px;

        p {
          width: 90%;
          text-align: center;
          color: white;
          text-transform: uppercase;
          font-size: 50px;
          line-height: 50px;
        }
        position: relative;
        .tringle {
          position: absolute;
          left: 34%;
          width: 0;
          bottom: -30%;
          height: 0;
          border-left: 9rem solid transparent;
          border-right: 9rem solid transparent;
          border-top: 10rem solid #3b546a;
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
        position: relative;

        background-color:  ${(props) => props.theme.colors.blue};
        .section2_data {
          width: 100%;

          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .section2_data {
            display: flex;
            width: 50%;
            height: 100%;

            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;

            .section_bottom_data {
              width: 100%;
              height: 400px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
                
              h3 {
                color: ${(props) => props.theme.colors.darkblue};
                text-transform: uppercase;

              }
              li {
                position: relative;
                text-transform: uppercase;
                font-size: 29.99px;
                line-height: 33.32px;
                width: 70%;
                text-align: center;
             
    height: 50%;

             
                color: ${(props) => props.theme.colors.darkblue};
                font-family: Proxima-Bold;
                display: flex;
                justify-content:center;
                align-items: center
                 

              }
            
            }
          }
        }
      }

      .section_bottom-1 {
        margin-top: 40px;
        margin-bottom: 40px;
        text-align: center;

        span {
          font-size: 46px;
          line-height: 40px;
          text-align: center;
          font-family: Proxima-Thin;
          text-transform: uppercase;
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
        background-color: #3b546a;
        height: 10rem;
        p {
          width: 90%;
          text-align: center;
          color: white;
          text-transform: uppercase;
          font-size: 1.5rem;
        }
        position: relative;
        .tringle {
          display: none;
          position: absolute;
          left: 34%;
          width: 0;
          bottom: -30%;
          height: 0;
          border-left: 15rem solid transparent;
          border-right: 15rem solid transparent;
          border-top: 20rem solid #3b546a;
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 370px;
        position: relative;

        background-color:  ${(props) => props.theme.colors.blue};
        .section2_data {
          width: 100%;

          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .section2_data {
            display: flex;
            width: 50%;
            height: 100%;

            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            position: relative;

            .section_bottom_data {
              width: 100%;
              height: 370px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
                
              h3 {
                color: ${(props) => props.theme.colors.darkblue};
                text-transform: uppercase;

              }
              li {
                position: relative;
                text-transform: uppercase;
                font-size: 29.99px;
                line-height: 33.32px;
                width: 70%;
                text-align: center;
             
    height: 50%;

             
                color: ${(props) => props.theme.colors.darkblue};
                font-family: Proxima-Bold;
                display: flex;
                justify-content:center;
                align-items: center
                 

              }
            
            }
          }
        }
      }

      .section_bottom-1 {
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 1.5rem;
          width: 90%;
          text-align: center;
          font-family: Proxima-Thin;
          text-transform: uppercase;
        }
      }
    }
  }


  @media (max-width: 991px) and (orientation : landscape) {
    .section {
      .section_bottom{
         .section2_data {
           .section2_data {
             .section_bottom_data {
               li {
                  width: 100%;
              }
             }
           }
         }
      }
      .section_bottom-1{
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 414px) {
    .section {
      .section_bottom {
        .section2_data {
          .section2_data{
            width: 70%;
          }
        }
      }
    }
  }

`;
