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

      height: 737px;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg"); /* The image used */
      background-color: #cccccc; /* Used if the image is unavailable */
      /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
  position: relative;
      .triangle {
        position: absolute;
    left: 30%;
    width: 0;
    bottom: 63%;
    height: 0;
    border-top: 4rem solid transparent;
    border-bottom: 4rem solid transparent;
    border-left: 4rem solid  ${(props) => props.theme.colors.blue};
    z-index: 1;
      }

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .section2_data_left {
          background-color:  ${(props) => props.theme.colors.blue};
          display: flex;
          width: 30%;
          height: 100%;
          justify-content: center;
          position: relative;
          align-items: center;
          flex-direction: column;
          align-items: center;
          h2 {
            width: 80%;
            font-size: 45.98px;
            line-height: 50.29px;
            color: ${(props) => props.theme.colors.darkblue};
            text-transform: uppercase;
            margin-top: 2rem;
            font-style: italic;
          }
          h3 {
            width: 80%;
            color: ${(props) => props.theme.colors.darkblue};
            font-size: 31px;
            line-height: 30px;             
            line-height: 1;
            text-transform: uppercase;
          }
          .triangle-right {
            position: absolute;
            z-index: 1;
            width: 0;
            height: 0;
            right: -10%;
            top: 10%;
            border-top: 49px solid transparent;
            border-left: 60px solid  ${(props) => props.theme.colors.blue};
            border-bottom: 52px solid transparent;
          }
        }

        .section2_data_right {
          display: flex;
          width: 70%;
          height: 90%;
          justify-content: space-around;
          align-items: center;
          align-items: center;
          flex-wrap: wrap;
          .data {
            display: flex;
            justify-content: center;

            align-items: center;
            width: 100%;
            height: 10%;
            align-items: center;
            span {
             
    width: 74%;

              text-align: left;
              font-size: 37px;
              line-height: 40px;
              font-weight: 600;
              color: white;
            }
          }
          .logo {
            width: 50%;
            height: 30%;
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
              width: 120px;
              height: 120px;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
           
    width: 62%;

              font-size: 17px;
              
    line-height: 19px;

              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
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

      height: 60rem;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg"); /* The image used */
      background-color: #cccccc; /* Used if the image is unavailable */
      /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;

      .tringle {
        position: absolute;
        left: 13%;
        width: 0;
        bottom: -5%;
        height: 0;
        border-left: 4rem solid transparent;
        border-right: 4rem solid transparent;
        border-top: 3rem solid #3c4e62;
        z-index: 1;
      }

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .section2_data_left {
          background-color:  ${(props) => props.theme.colors.blue};
          display: flex;
          width: 100%;
          height: 20%;
          justify-content: center;
          position: relative;
          align-items: center;
          flex-direction: column;
          align-items: center;
          flex-direction: column;
          h2 {
            width: 90%;
            font-size: 1.8rem;
            font-style: italic;
            color: ${(props) => props.theme.colors.darkblue};
            text-transform: uppercase;
            sup {
              font-size: 1rem;
            }
          }
          h3 {
            width: 90%;
            font-size: 20px;
            color: ${(props) => props.theme.colors.darkblue};
            line-height: 1.3;
            text-transform: uppercase;
          }
          .triangle-right {
            position: absolute;
            z-index: 1;
            width: 0;
            height: 0;
            right: -10%;
            top: 10%;
            border-top: 49px solid transparent;
            border-left: 60px solid  ${(props) => props.theme.colors.blue};
            border-bottom: 52px solid transparent;
          }
        }

        .section2_data_right {
          display: flex;
          width: 100%;
          height: 80%;
          justify-content: space-around;
          align-items: center;
          align-items: center;
          flex-wrap: wrap;
          .data {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 10%;
            align-items: center;
            span {
              width: 90%;
              text-align: left;
              font-size: 1.5rem;
              height: 15%;
              font-weight: 600;
              color: white;
            }
          }
          .logo {
            width: 48%;
            height: 25%;
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
              width: 120px;
              height: 120px;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 100%;
              font-size: 16px;              
              line-height: 19px;
              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
              /* font-weight: 600; */
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

      height: 737px;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg"); /* The image used */
      background-color: #cccccc; /* Used if the image is unavailable */
      /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;

      .tringle {
        position: absolute;
        left: 13%;
        width: 0;
        bottom: -5%;
        height: 0;
        border-left: 4rem solid transparent;
        border-right: 4rem solid transparent;
        border-top: 3rem solid #3c4e62;
        z-index: 1;
      }

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .section2_data_left {
          background-color:  ${(props) => props.theme.colors.blue};
          display: flex;
          width: 30%;
          height: 100%;
          justify-content: center;
          position: relative;
          align-items: center;
          flex-direction: column;
          align-items: center;
          h2 {
            width: 84%;
            font-size: 31.98px;
            line-height: 50.29px;
            color: ${(props) => props.theme.colors.darkblue};
            text-transform: uppercase;
            margin-top: 2rem;
            font-style: italic;
           sup {
              font-size: 1rem;
            }
          }
          h3 {
            width: 84%;
            color: ${(props) => props.theme.colors.darkblue};
            font-size: 23px;
            line-height: 30px;
            line-height: 1;
            text-transform: uppercase;
          }
          .triangle-right {
            position: absolute;
            z-index: 1;
            width: 0;
            height: 0;
            right: -10%;
            top: 10%;
            border-top: 49px solid transparent;
            border-left: 60px solid  ${(props) => props.theme.colors.blue};
            border-bottom: 52px solid transparent;
          }
        }

        .section2_data_right {
          display: flex;
          width: 70%;
          height: 90%;
          justify-content: space-around;
          align-items: center;
          align-items: center;
          flex-wrap: wrap;
          .data {
            display: flex;
            justify-content: center;

            align-items: center;
            width: 100%;
            height: 10%;
            align-items: center;
            span {
              width: 85%;

              text-align: left;
              font-size: 37px;
              line-height: 40px;
              font-weight: 600;
              color: white;
            }
          }
          .logo {
            width: 50%;
            height: 30%;
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
              width: 120px;
              height: 120px;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 60%;
              font-size: 17px;
              
    line-height: 19px;

              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
            }
            img {
              height: 65%;
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

      height: 46rem;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg"); /* The image used */
      background-color: #cccccc; /* Used if the image is unavailable */
      /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;

      .tringle {
        position: absolute;
        left: 13%;
        width: 0;
        bottom: -5%;
        height: 0;
        border-left: 4rem solid transparent;
        border-right: 4rem solid transparent;
        border-top: 3rem solid #3c4e62;
        z-index: 1;
      }

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .section2_data_left {
          background-color:  ${(props) => props.theme.colors.blue};
          display: flex;
          width: 100%;
          height: 20%;
          justify-content: center;
          position: relative;
          align-items: center;
          flex-direction: column;
          align-items: center;
          flex-direction: column;
          h2 {
            width: 90%;
            font-size: 1.5rem;
            color: ${(props) => props.theme.colors.darkblue};
            text-transform: uppercase;
            font-style: italic;
          }
          h3 {
            width: 90%;
            font-size: 2rem;
            color: ${(props) => props.theme.colors.darkblue};
            font-size: 31px;
            line-height: 30px;
            line-height: 1;
            text-transform: uppercase;
          }
          .triangle-right {
            position: absolute;
            z-index: 1;
            width: 0;
            height: 0;
            right: -10%;
            top: 10%;
            border-top: 49px solid transparent;
            border-left: 60px solid  ${(props) => props.theme.colors.blue};
            border-bottom: 52px solid transparent;
          }
        }

        .section2_data_right {
          display: flex;
          width: 100%;
          height: 80%;
          justify-content: space-around;
          align-items: center;
          align-items: center;
          flex-wrap: wrap;
          .data {
            display: flex;
            justify-content: center;

            align-items: center;
            width: 100%;
            height: 10%;
            align-items: center;
            span {
              width: 90%;
              text-align: left;
              font-size: 1.5rem;
              height: 15%;
              font-weight: 600;
              color: white;
            }
          }
          .logo {
            width: 48%;
            height: 25%;
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
              width: 120px;
              height: 120px;
              position: relative;
              position: relative;
            }
            p {
              height: 20%;
              width: 100%;
              font-size: 17px;
              
    line-height: 19px;

              margin-top: 0.5rem;
              text-transform: uppercase;
              color: white;
              text-align: center;
            }
            img {
              height: 65%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 991px) and (orientation : landscape) {
     .section2 {
       .section2_data {
         .section2_data_left{
            h3 {
              font-size: 25px;
              margin-bottom: 10px;
          }
          h2 {
            font-size: 2rem;
          }
         }
       }
     }
   }


   @media (max-width: 414px) {
      .section2 {
       .section2_data {
         .section2_data_left{
            h3 {
              margin-bottom: 10px;
            }
         }
       }
     }
  }

`;
