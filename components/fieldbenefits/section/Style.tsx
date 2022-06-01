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

      .section_bottom {
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625301760/e92mprbfemr6lekh6lyp.jpg"); /* The image used */

        /* You must set a specified height */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 475px;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;

          justify-content: space-between;
          align-items: center;
          position: absolute;
          .section2_data_left {
            margin-left: 5%;
            display: flex;
            width: 60%;
            height: 60%;
            justify-content: space-between;
            align-items: left;
            flex-direction: column;
            h2 {
              color: white;
              position: relative;

              font-size: 55px;
              line-height: 46px;
              text-transform: uppercase;
              position: relative;
              margin-left: 2rem;
              padding: 5px 0px;
            }
            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 95%;
              width: 0.4rem;
              top: 5%;
              left: -35px;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            p {
              margin-top: 25px;
              width: 90%;
              color: white;
              font-weight: 500;
              line-height: 35px;
              font-size: 20px;
              margin-left: 2rem;
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }

          .section2_data_right {
            margin-right: 10%;
            display: flex;
            width: 25%;
 
            height: 80%;
            justify-content: space-around;
            align-items: flex-start;
            flex-direction: column;
            flex-wrap: wrap;

            .top {
            
            width: 100%;
              height: 30%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;
              h2 {
                width: 100%;
                text-align: center;
                color: white;
                font-size: 70.95px;
              }
              span {
                width: 100%;
                font-family: Proxima-Bold;
                text-align: center;
                font-size: 19px;

                text-transform: uppercase;
                color: white;
              }
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

      .section_bottom {
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625301760/e92mprbfemr6lekh6lyp.jpg"); /* The image used */

        /* You must set a specified height */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30rem;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;

          justify-content: center;
          align-items: center;
          position: absolute;
          flex-direction: column-reverse;
          .section2_data_left {
            margin-left: 5%;
            display: flex;
            width: 90%;
            height: 50%;
            justify-content: center;
            align-items: left;
            flex-direction: column;
            h2 {
              color: white;
              position: relative;

              font-style: 1.5rem;
              text-transform: uppercase;
              position: relative;
            }
            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 95%;
              width: 0.4rem;
              top: 5%;
              left: -5%;
              background-color:  ${(props) => props.theme.colors.blue};
            }

            p {
              width: 100%;
              color: white;

              font-size: 20px;
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
            align-items: flex-start;
            align-items: center;

            .top {
              width: 50%;

              height: 30%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;
              h2 {
                width: 100%;
                text-align: center;
                color: white;
                font-size: 88.95px;
              }
              span {
                width: 100%;
                font-family: Proxima-Bold;
                text-align: center;
                font-size: 19px;

                text-transform: uppercase;
                color: white;
              }
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

      .section_bottom {
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625301760/e92mprbfemr6lekh6lyp.jpg"); /* The image used */

        /* You must set a specified height */
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30rem;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;

          justify-content: center;
          align-items: center;
          position: absolute;
          flex-direction: column-reverse;
          .section2_data_left {
            margin-left: 5%;
            display: flex;
            width: 90%;
            height: 50%;
            justify-content: center;
            align-items: left;
            flex-direction: column;
            h2 {
              color: white;
              position: relative;

              font-style: 1.5rem;
              text-transform: uppercase;
              position: relative;
            }
            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 95%;
              width: 0.4rem;
              top: 5%;
              left: -5%;
              background-color:  ${(props) => props.theme.colors.blue};
            }

            p {
              width: 100%;
              color: white;
              font-size: 18px;
              font-family: Proxima-Light;
              font-weight: 600;
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
            align-items: flex-start;
            align-items: center;

            .top {
              width: 50%;

              height: 30%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;
              h2 {
                width: 100%;
                text-align: center;
                color: white;
                font-size: 88.95px;
              }
              span {
                width: 100%;
                font-family: Proxima-Bold;
                text-align: center;
                font-size: 19px;

                text-transform: uppercase;
                color: white;
              }
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

      .section_bottom {
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625301760/e92mprbfemr6lekh6lyp.jpg"); /* The image used */

        /* You must set a specified height */
         /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 45rem;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;

          justify-content: center;
          align-items: center;
          position: absolute;
          flex-direction: column;
          .section2_data_left {
         
            display: flex;
            width: 90%;
            height: 50%;
            justify-content: center;
            align-items: left;
            flex-direction: column;
            h2 {
              color: white;
              position: relative;

              font-style: 1.5rem;
              text-transform: uppercase;
              position: relative;
            }
            h2:after {
              position: absolute;
              content: "";
              display: block;
              height: 95%;
              width: 0.4rem;
              top: 5%;
              left: -5%;
              background-color:  ${(props) => props.theme.colors.blue};
            }

            p {
              width: 100%;
              color: white;
              font-size: 18px;
              font-weight: 600;
              margin-top: 10px;
              line-height: 26px;
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }

          .section2_data_right {
            display: flex;
            width: 100%;
            height: 35%;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            flex-wrap: wrap;
            margin-bottom: 10%;
            .top {
              width: 90%;

              height: 30%;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;
              h2 {
                width: 100%;
                text-align: center;
                color: white;
                font-size: 40.95px;
              }
              span {
                width: 100%;
                font-family: Proxima-Bold;
                text-align: center;
                font-size: 19px;

                text-transform: uppercase;
                color: white;
              }
            }
          }
        }
      }
    }
  }


  @media (max-width: 991px) and (orientation : landscape) {
    .section {
      .section_bottom {
        .section2_data {
          .section2_data_right {
            height: 45%;
            .top{
               h2 {
                  font-size: 4rem;
              }
            }
          }
          .section2_data_left {
            justify-content: flex-start;
            h2 {
              margin-bottom: 10px;
              font-size: 1.8rem;
              br{
                /* display: none; */
              }
          }
          }
        }
      }
    }
  }

  @media (max-width: 414px) {
    .section {
      .section_bottom {
        height: 38rem;
        .section2_data {
          .section2_data_left {
            h2{
              margin-left: 1rem;
            }
          }
          .section2_data_right{
            height: 30%;
            margin-bottom: 0;
          }
        }
      }
    }
  }

`;
