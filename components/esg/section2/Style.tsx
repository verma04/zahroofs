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
      height: 60rem;

      .section_data {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        .head {
          width: 70%;
          height: 30%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          h2 {
            font-size: 55px;
            color: white;
          }
          p {
            margin-top: 30px;
            width: 80%;
            font-size: 25px;
            line-height: 30px;
            color: white;
          }
        }
        .section_logo {
          width: 70%;
          height: 60%;
 
          display: flex;
          justify-content: space-between;

          .section_logo_top {
            width: 25%;
            height: 80%;
    
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
          
            .logo {
              width: 100%;

              height: 50%;
              background-color:  ${(props) => props.theme.colors.blue};

              display: flex;
              justify-content: center;
              align-items: center;
              .wrapper {
                position: relative;
                width: 60%;
                height: 60%;
              }
            }

            .logo-1 {
              margin-top: 1rem;
              width: 100%;

              padding-bottom: 1.5em;
              padding-top: 1.5em;
              display: flex;
              justify-content: center;
              background-color: rgb(214 143 62 / 46%);

              p {
                padding-top: 0.5rem;

                color: white;
                font-size: 30.88px;
                width: 80%;
                line-height: 30px;
                font-family: Proxima-Bold;
                text-align: left;
              }
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

      height: 110rem;

      .section_data {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        .head {
          width: 90%;
          height: 30%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          h2 {
            font-size: 36px;
            color: white;
            color: white;
          }
          p {
            margin-top: 30px;
            width: 100%;
            font-size: 19px;
            line-height: 1.3;
            color: white;
            font-weight: 600;
          }
        }
        .section_logo {
          width: 100%;
          height: 60%;

          display: flex;
          justify-content: flex-start;

          flex-direction: column;

          .section_logo_top {
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;

            .logo {
              width: 70%;
              height: 50%;
              background-color:  ${(props) => props.theme.colors.blue};

              display: flex;
              justify-content: center;
              align-items: center;
              .wrapper {
                position: relative;
                width: 80%;
                height: 80%;
              }
            }

            .logo-1 {
              margin-top: 1rem;
              width: 70%;

              padding-bottom: 1.5em;
              padding-top: 1.5em;
              display: flex;
              justify-content: center;
              background-color: rgb(214 143 62 / 46%);

              p {
                padding-top: 0.5rem;
                color: white;
                font-size: 22.88px;
                width: 80%;
                line-height: 30px;
                font-family: Proxima-Bold;
                text-align: left;
              }
            }
          }

          .section_logo_bottom {
            width: 100%;
            height: 40%;

            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            flex-direction: column;
            .logo-1 {
              width: 25%;

              display: flex;
              justify-content: center;
              background-color: rgb(123 69 7 / 70%);

              p {
                padding-top: 0.5rem;

                color: white;
                font-size: 30.88px;
                width: 80%;
                line-height: 30px;
                font-family: Proxima-Bold;
                text-align: left;
              }
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
      height: 60rem;

      .section_data {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        .head {
          width: 90%;
          height: 30%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          h2 {
            font-size: 55px;
            color: white;
          }
          p {
            margin-top: 30px;
            width: 80%;
            font-size: 25px;
            line-height: 30px;
            color: white;
          }
        }
        .section_logo {
          width: 100%;
          height: 60%;

          display: flex;
          justify-content: flex-start;

          .section_logo_top {
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            .logo {
              width: 70%;
              height: 50%;
              background-color:  ${(props) => props.theme.colors.blue};

              display: flex;
              justify-content: center;
              align-items: center;
              .wrapper {
                position: relative;
                width: 80%;
                height: 80%;
              }
            }

            .logo-1 {
              margin-top: 1rem;
              width: 70%;

              padding-bottom: 1.5em;
              padding-top: 1.5em;
              display: flex;
              justify-content: center;
              background-color: rgb(214 143 62 / 46%);

              p {
                padding-top: 0.5rem;

                color: white;
                font-size: 30.88px;
                width: 80%;
                line-height: 30px;
                font-family: Proxima-Bold;
                text-align: left;
              }
            }
          }

          .section_logo_bottom {
            width: 100%;
            height: 40%;

            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            .logo-1 {
              width: 25%;

              display: flex;
              justify-content: center;
              background-color: rgb(123 69 7 / 70%);

              p {
                padding-top: 0.5rem;

                color: white;
                font-size: 30.88px;
                width: 80%;
                line-height: 30px;
                font-family: Proxima-Bold;
                text-align: left;
              }
            }
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

      .section_data {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        .head {
          width: 90%;
          height: 30%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          h2 {
            font-size: 36px;
            color: white;
            color: white;
          }
          p {
            margin-top: 30px;
            width: 80%;
            font-size: 25px;
            line-height: 30px;
            color: white;
          }
        }
        .section_logo {
          width: 100%;
          height: 60%;

          display: flex;
          justify-content: flex-start;

          .section_logo_top {
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            .logo {
              width: 70%;
              height: 50%;
              background-color:  ${(props) => props.theme.colors.blue};

              display: flex;
              justify-content: center;
              align-items: center;
              .wrapper {
                position: relative;
                width: 80%;
                height: 80%;
              }
            }

            .logo-1 {
              margin-top: 1rem;
              width: 70%;

              padding-bottom: 1.5em;
              padding-top: 1.5em;
              display: flex;
              justify-content: center;
              background-color: rgb(214 143 62 / 46%);

              p {
                padding-top: 0.5rem;

                color: white;
                font-size: 22.88px;
                width: 80%;
                line-height: 30px;
                font-family: Proxima-Bold;
                text-align: left;
              }
            }
          }

          .section_logo_bottom {
            width: 100%;
            height: 40%;

            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            .logo-1 {
              width: 25%;

              display: flex;
              justify-content: center;
              background-color: rgb(123 69 7 / 70%);

              p {
                padding-top: 0.5rem;

                color: white;
                font-size: 30.88px;
                width: 80%;
                line-height: 30px;
                font-family: Proxima-Bold;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }


  @media (max-width: 991px) and (orientation : landscape) {
    
  }



  @media (max-width: 414px) {
    .section2{
      height: 90rem;
      .section_data {
        .head {
          height: 25%;
        }
      }
  }
}


`;
