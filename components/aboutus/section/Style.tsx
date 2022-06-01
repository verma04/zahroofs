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

      height: 640px;

      .section2_data {
        width: 80%;
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
            margin-top: 115px;
            margin-bottom: 66px;
            color: white;

            position: relative;
            padding-left: 0.5rem;
            font-size: 55px;
            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 90%;
            width: 0.4rem;
            top: 0;
            left: -0.5rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            width: 90%;
            color: white;
            font-size: 20px;
            line-height: 35px;
          }
          h3 {
            line-height: 1.1;
            color: white;
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
          .img-wrapper {
            position: relative;
            width: 80%;
            height: 80%;
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

      height: 640px;

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        flex-direction: column;
        .section2_data_left {
          margin-top: 1.5rem;
          display: flex;
          width: 95%;
          height: 50%;

          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          align-items: center;
          h2 {
            margin-top: 1rem;

            color: white;
            width: 95%;
            align-items: left;
            position: relative;
            padding-left: 0.5rem;
            font-size: 2rem;
            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 90%;
            width: 0.4rem;
            top: 0;
            left: -0.5rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            padding-left: 0.5rem;
            width: 95%;
            color: white;
            font-size: 18px;
            line-height: 1.3;
            font-weight: 600;
            padding-top: 15px;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
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
            height: 80%;
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

      height: 640px;

      .section2_data {
        width: 80%;
        height: 78%;
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
            margin-top: -8px;
            margin-bottom: 10px;
            color: white;

            position: relative;
            padding-left: 0.5rem;
            font-size: 55px;
            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 90%;
            width: 0.4rem;
            top: 0;
            left: -0.5rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            width: 90%;
            color: white;
            font-size: 20px;
            line-height: 35px;
          }
          h3 {
            line-height: 1.1;
            color: white;
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
          .img-wrapper {
            position: relative;
            width: 80%;
            height: 80%;
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

      height: 497px;

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        flex-direction: column;
        .section2_data_left {
          margin-top: 1.5rem;

          display: flex;
          width: 95%;
          height: 50%;

          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          align-items: center;
          h2 {
            margin-top: 1rem;

            color: white;
            width: 95%;
            align-items: left;
            position: relative;
            padding-left: 0.5rem;
            font-size: 2rem;
            text-transform: uppercase;
            position: relative;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 90%;
            width: 0.4rem;
            top: 0;
            left: -0.5rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            padding-left: 0.5rem;
            width: 95%;
            color: white;
            font-size: 16px;
            line-height: 1.6;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
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
            height: 80%;
          }
        }
      }
    }
  }

  
 


`;
