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
      height: 667px;
      background-color:  ${(props) => props.theme.colors.blue};

      .section_data {
        display: flex;
        justify-content: center;

        width: 100%;
        align-items: center;
        position: relative;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .section_data_left {
          padding-left: 46px;
          display: flex;
          width: 70%;
          height: 100%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;

            font-size: 55px;
             color: ${(props) => props.theme.colors.darkblue};
            width: 70%;
            position: relative;
             color: ${(props) => props.theme.colors.darkblue};
            text-transform: uppercase;
          }

          h3 {
            width: 100%;
            line-height: 1.1;
          }
          p {
             color: ${(props) => props.theme.colors.darkblue};
            width: 90%;
            font-size: 20px;
            line-height: 30px;
                font-weight: 800;
            line-height: 1.4;
          }
        }

        .section_data_right {
          display: flex;
          width: 30%;
          height: 100%;
          justify-content: flex-start;
          position: relative;
          background-color: #2f3032;
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;

          ul {
            position: absolute;

            bottom: 4%;
            width: 100%;
            height: 17%;

            display: flex;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;

            li {
               color: white;
              font-size: 22.3px;
              padding-left: 5%;
              font-weight: 600;
            }
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
      height: 80rem;
      background-color:  ${(props) => props.theme.colors.blue};

      .section_data {
        display: flex;
        justify-content: center;

        width: 100%;
        align-items: center;
        position: relative;
        flex-direction: column;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .section_data_left {
          margin-top: 2rem;
          display: flex;
          width: 100%;
          height: 90%;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          h2 {
            position: relative;

            font-size: 2rem;
             color: ${(props) => props.theme.colors.darkblue};
            width: 90%;
            position: relative;
             color: ${(props) => props.theme.colors.darkblue};
            text-transform: uppercase;
          }

          h3 {
            width: 100%;
            line-height: 1.1;
          }
          p {
             color: ${(props) => props.theme.colors.darkblue};
            width: 90%;
            font-size: 16px;
            line-height: 30px;
                font-weight: 800;
            line-height: 1.4;
          }
        }

        .section_data_right {
          display: flex;
          width: 100%;
          height: 60%;
          justify-content: flex-start;
          position: relative;
          background-color: #2f3032;
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;

          ul {
            position: absolute;

            bottom: 4%;
            width: 100%;
            height: 17%;

            display: flex;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;

            li {
               color: white;
              font-size: 22.3px;
              padding-left: 5%;
            }
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
      height: 60rem;
      background-color:  ${(props) => props.theme.colors.blue};

      .section_data {
        display: flex;
        justify-content: center;

        width: 100%;
        align-items: center;
        position: relative;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .section_data_left {
          padding-left: 46px;
          display: flex;
          width: 60%;
          height: 100%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;

            font-size: 55px;
             color: ${(props) => props.theme.colors.darkblue};
            width: 70%;
            position: relative;
             color: ${(props) => props.theme.colors.darkblue};
            text-transform: uppercase;
          }

          h3 {
            width: 100%;
            line-height: 1.1;
          }
          p {
             color: ${(props) => props.theme.colors.darkblue};
            width: 90%;
            font-size: 20px;
            line-height: 30px;
                font-weight: 800;
            line-height: 1.4;
          }
        }

        .section_data_right {
          display: flex;
          width: 40%;
          height: 100%;
          justify-content: flex-start;
          position: relative;
          background-color: #2f3032;
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;

          ul {
            position: absolute;

            bottom: 4%;
            width: 100%;
            height: 17%;

            display: flex;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;

            li {
               color: white;
              font-size: 22.3px;
              padding-left: 5%;
              font-weight: 600;
            }
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
      height: 80rem;
      background-color:  ${(props) => props.theme.colors.blue};

      .section_data {
        display: flex;
        justify-content: center;

        width: 100%;
        align-items: center;
        position: relative;
        flex-direction: column;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .section_data_left {
          display: flex;
          width: 100%;
          height: 40%;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          h2 {
            position: relative;

            font-size: 2rem;
             color: ${(props) => props.theme.colors.darkblue};
            width: 95%;
            position: relative;
             color: ${(props) => props.theme.colors.darkblue};
            text-transform: uppercase;
          }

          h3 {
            width: 100%;
            line-height: 1.1;
          }
          p {
             color: ${(props) => props.theme.colors.darkblue};
            width: 95%;
            font-size: 16px;
            line-height: 30px;
                font-weight: 800;
            line-height: 1.4;
          }
        }

        .section_data_right {
          display: flex;
          width: 100%;
          height: 60%;
          justify-content: flex-start;
          position: relative;
          background-color: #2f3032;
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;

          ul {
            position: absolute;

            bottom: 4%;
            width: 100%;
            height: 17%;

            display: flex;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;

            li {
               color: white;
              font-size: 22.3px;
              padding-left: 5%;
            }
          }
        }
      }
    }
  }


 

`;
