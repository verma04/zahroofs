import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .image-wapper{
    display: none;
  }

  @media (min-width: 1281px) {
    .section {


      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 70%;
      align-items: center;
    margin-top: 3em;
    flex-wrap: wrap;
    margin-bottom:4rem;

      .section_top {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 26%;
       margin-top: 3rem;
        height: 15rem;
      
      
   

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color:  ${(props) => props.theme.colors.blue};
            background-image: url('https://app.zahroofvalves.com/wp-content/uploads/2021/11/Rectangle-2.png');
            background-size: cover;
            flex-direction: column;
            .section_top_up {
width: 80%;
height: 30%;
display: flex;
justify-content: space-evenly;
align-items: center;
.img-wrapper {
  position: relative;
height: 100%;
width: 30%;
}
h3 {
  text-transform: uppercase;
  width: 70%;
  color:white;
}

            }

            .section_top_down {
width: 80%;
height: 50%;
display: flex;
justify-content: space-evenly;
align-items: center;

h3 {
  text-transform: uppercase;

  color:white;
}

            }
      }

      .section_top:after {
              position: absolute;
              content: "";
              display: block;
              height: 100%;
              width: 6px;
              bottom: 0px;

              left: -2rem;
              background-color:  ${(props) => props.theme.colors.blue};
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
        height: 20rem;
        position: relative;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .section2_data {
          width: 90%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          /* .image-wapper{
              display: block;
            div{
              top: 80px !important;
              img{
                width: 100% !important;
              }
            }
          } */
          .section2_data_left {
            margin-bottom: 6%;
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: left;
            flex-direction: column;
            h2 {
              color: white;
              position: relative;
              font-size: 1.5rem;
              text-transform: uppercase;
              position: relative;
            }

            p {
              margin-top: 42px;
              font-size: 18px;
              width: 100%;
              font-weight: 600;
              color: white;
              font-family: Proxima-Light;
              line-height: 1.3;
              position: relative;
            }
            p:after {
              position: absolute;
              content: "";
              display: block;
              height: 100%;
              width: 6px;
              bottom: 0px;
              left: -4%;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 500px;
        position: relative;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          position: absolute;
        
          .section2_data_left {
            display: flex;
            width: 90%;
            height: 100%;
            justify-content: flex-start;
            align-items: left;
            margin-top: 10%;
            flex-direction: column;
            h2 {
              position: relative;
              font-style: 1.5rem;
              text-transform: uppercase;
              position: relative;
              width: 90%;
            }

            p {
              width: 95%;
              margin-top: 2rem;
              font-size: 16px;
              font-family: Proxima-Light;
              font-weight: 600;
              line-height: 1.3;
              color: #777777;
              position: relative;
              font-weight: 600;
            }

            p:after {
              position: absolute;
              content: "";
              display: block;
              height: 100%;
              width: 6px;
              bottom: 0px;

              left: -4%;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }
        }

        .absol-bottom {
          width: 100%;
          height: 150px;
          background-color: #3b546a;
          bottom: 0%;
          left: 0%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;

          h2 {
            width: 90%;
            padding-left: 0.5rem;

            position: relative;
            text-transform: uppercase;
            font-size: 1.4rem;
            text-align: left;

            color: white;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 6px;
            bottom: 0px;

            left: -4%;
            background-color:  ${(props) => props.theme.colors.blue};
          }
        }

        .triangle-down {
          position: absolute;
          bottom: -5%;
          right: 42%;
          width: 0;
          height: 0;
          border-left: 4rem solid transparent;
          border-right: 4rem solid transparent;
          border-top: 3rem solid #3b546a;
          z-index: 1;
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {


display: flex;
justify-content: space-between;
flex-direction: row;
width: 70%;
align-items: center;
margin-top: 3em;
flex-wrap: wrap;
margin-bottom:4rem;

.section_top {
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26%;
 margin-top: 3rem;
  height: 15rem;




  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color:  ${(props) => props.theme.colors.blue};
      background-image: url('https://app.zahroofvalves.com/wp-content/uploads/2021/11/Rectangle-2.png');
      background-size: cover;
      flex-direction: column;
      .section_top_up {
width: 80%;
height: 30%;
display: flex;
justify-content: space-evenly;
align-items: center;
.img-wrapper {
position: relative;
height: 100%;
width: 30%;
}
h3 {
text-transform: uppercase;
width: 70%;
color:white;
}

      }

      .section_top_down {
width: 80%;
height: 50%;
display: flex;
justify-content: space-evenly;
align-items: center;

h3 {
text-transform: uppercase;

color:white;
}

      }
}

.section_top:after {
        position: absolute;
        content: "";
        display: block;
        height: 100%;
        width: 6px;
        bottom: 0px;

        left: -2rem;
        background-color:  ${(props) => props.theme.colors.blue};
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
        height: 25rem;
        position: relative;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625479794/wlt5l3wylkudtjprdhba.png");

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .section2_data {
          width: 80%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          .section2_data_left {
            margin-bottom: 6%;
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: left;
            flex-direction: column;
            h2 {
              color: white;
              position: relative;
              line-height: 54px;
              font-size: 50px;
              text-transform: uppercase;
              position: relative;
            }

            p {
              margin-top: 42px;
              font-size: 21px;
              width: 80%;
              font-weight: 600;
              line-height: 28px;
              color: white;
              font-family: Proxima-Bold;
              line-height: 1.2;
              position: relative;
            }
            p:after {
              position: absolute;
              content: "";
              display: block;
              height: 120%;
              width: 6px;
              bottom: 0px;

              left: -2rem;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 47rem;

        position: relative;
        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625043594/hqwarrxjqh0g5tixezvi.png");
        background-position-y: 31%;
        background-repeat: no-repeat;

        .section2_data {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          position: absolute;
          background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625043594/mxydeuw45cap9go1nesh.png");
          background-position: right center;
          background-repeat: no-repeat;

          .section2_data_left {
            display: flex;
            width: 70%;
            height: 100%;
            justify-content: center;
            align-items: left;
            margin-bottom: 10%;
            flex-direction: column;
            h2 {
              position: relative;
              line-height: 50.31px;
              font-size: 50.31px;
              text-transform: uppercase;
              position: relative;
            }

            p {
              width: 50%;
              margin-top: 2rem;
              font-size: 16px;
              font-family: Proxima-Bold;
              line-height: 28px;
              color: #777777;
              position: relative;
            }
            p:after {
              position: absolute;
              content: "";
              display: block;
              height: 100%;
              width: 0.4rem;
              top: 0;
              left: -2rem;
              background-color:  ${(props) => props.theme.colors.blue};
            }
            h3 {
              line-height: 1.1;
              color: white;
            }
          }
        }

        .absol-bottom {
          width: 80%;
          height: 150px;
          background-color: #3b546a;
          bottom: 0%;
          left: 0%;
          display: flex;
          justify-content: center;
          align-items: center;

          position: absolute;

          h2 {
            width: 90%;
            padding-left: 0.5rem;
            line-height: 1.6;
            position: relative;
            text-transform: uppercase;
            font-size: 31px;
            line-height: 40px;
            color: white;
            margin-left: 5rem;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 80%;
            width: 0.4rem;

            top: 7%;
            left: -1.5rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }
        }

        .triangle-down {
          position: absolute;
          bottom: -5%;
          right: 42%;
          width: 0;
          height: 0;
          border-left: 4rem solid transparent;
          border-right: 4rem solid transparent;
          border-top: 3rem solid #3b546a;
          z-index: 1;
        }
      }
    }
  }

   @media (max-width: 414px) {
    .section {
      .section_top {
        .section2_data_left{
          p{
            margin-left: 1rem;
          }
        }
      }
      .section_bottom{
        height: 35rem;
        .section2_data{          
          .section2_data_left{
            h2{
              br{
                display: none;
              }
            }
            p{
              margin-left: 1rem;
            }
          }
          .image-wapper{
            display: block;
            div{
              top: 80px !important;
              img{
                width: 100% !important;
              }
            }
          }
        }
        .absol-bottom{
          h2{
            margin-left: 1rem;
          }
        }
      }
    }
  }

`;
