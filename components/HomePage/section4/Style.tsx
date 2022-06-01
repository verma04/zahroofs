import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media  (min-width: 1600px) {


.section4 {
  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: relative;
  .section4_top_new {
    position: relative;
    height: 40rem;
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    .icon {
      width: 20%;
      height: 50%;
     
      background-color: #22334c;
      display: flex;
      justify-content: flex-end;
       align-items: center;
      flex-direction: column;
      .head {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
          text-transform: uppercase;
          width: 70%;
          text-align: center;
          font-size: 2rem;
        }
      }
      .img-wrapper {
        position: relative;
        width: 40%;
        height: 40%;
      }

      span {
        margin-top: 0.5rem;
     margin-bottom: 4rem;
    margin-top:2rem;
        color: white;
        text-transform: uppercase;
      }
    }
    #ch {
      background-color: #213d63;


    }
#center {
  background:     ${(props) => props.theme.colors.blue};
}
  }
  .section4_top {
    position: relative;
    height: 73rem;
    width: 100%;
    background:     ${(props) => props.theme.colors.blue};
    /* background-image: linear-gradient(#d8b642 , #DBB42F); */

    margin-bottom: 3rem;

    .tringle {
      position: absolute;
    right: 10%;
    width: 180px;
    bottom: -9.4%;
    height: 65px;
    border-left: 10rem solid transparent;
    border-right: 10rem solid transparent;
    border-top: 7rem solid    ${(props) => props.theme.colors.blue};
   
    }
    .section4_top_data {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      flex-direction: column;
      h2 {
        padding-top: 5rem;
        padding-bottom: 3rem;
        font-size: 2.813rem;
        text-transform: uppercase;
        color: white;
      }
      .section4_top_data_logos {
        width: 50%;
        margin-top: 9.5%;
    margin-left: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40%;
        position: relative;
      }

      .icon {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

        .img-wrapper {
          transition: transform 0.5s;
          position: relative;
          height: 8rem;
          width: 8rem;
        }
        span {
          text-transform: uppercase;
          font-weight: 900;
          font-size: 16px;
          width: 100%;
          color: white;
          text-align: center;
          line-height: 40px;
        }
      }
      .icon {
        transition: transform 0.5s;
      }
      .icon:hover {
        -ms-transform: scale(1.5); /* IE 9 */
        -webkit-transform: scale(1.5); /* Safari 3-8 */
        transform: scale(1.1);
      }


      #gasses {
            position: absolute;
            top: 13%;
            left: 43%;
            width: 17%;
            height: 10%;
          }
          #Lng {
            position: absolute;
            position: absolute;
            top: 64%;
            left: 28.5%;
            height: 10%;
            height: 10%;
          }
          #industry {
            position: absolute;
            top: 27%;
            left: 24.5%;
            width: 15%;
            height: 10%;
          }
          #Refineries {
            position: absolute;
            top: 46%;
            left: 21%;
            width: 15%;
            height: 10%;
          }
          #Cng {
            position: absolute;
            top: 26.5%;
            left: 63%;
            width: 15%;
            height: 10%;
          }
          #Oil {
            position: absolute;
            top: 46%;
            left: 66%;

            width: 15%;
            height: 10%;
          }
          #hydrogen {
            position: absolute;
            top: 64%;
            left: 63%;
            width: 15%;
            height: 10%;
          }
          #chemical {
            position: absolute;
            top: 79%;
            left: 51%;
            width: 15%;
            height: 10%;
          }
          #offshore {
            position: absolute;
            top: 79%;
            left: 35%;
            width: 15%;
            height: 10%;
          }
    
    }
  }
  .section4_mid {
    position: relative;
    height: 40rem;
    width: 100%;
    z-index: 1;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -65px;

    .section4_mid_left {
      display: flex;
      justify-content: center;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 60%;
      height: 80%;
    
      .img_wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        .text-1 {
          position: absolute;
top: 0%;
right: 12%;
width: 29%;
height: 10rem;

        }
        [data-aos="example-anim3"] {
      transform: rotate(
-81deg
);

min-width: 10% !important;

transition-property: transform, opacity;
&.aos-animate {
transform: rotate(0);
opacity: 1;
min-width: 100% !important;;
}
      }
        .text-2 {
          position: absolute;
          bottom:0%;
         
left: 10%;

           width: 29%;
height: 10rem;
           
        }
      }
    }

    .section4_mid_right {
      display: flex;
      justify-content: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      width: 50%;
      height: 100%;
      margin-left: 10%;

      h2 {
        text-align: left;
        width: 100%;
        position: relative;
        font-size: 46px;
        color: #2b4056;
        line-height: 40px;
        margin-bottom: 5rem;
      }
      h2:after {
        position: absolute;
        width: 0.4rem;
        display: block;
        height: 110%;
        left: -5%;
        top: 0%;
        background:     ${(props) => props.theme.colors.blue};
        border-left: 1px white;
        content: "";
      }
      p {
        margin-bottom: 30px;
        text-align: left;
        width: 90%;
        font-size: 16px;
        line-height: 28px;
        font-family: Proxima-Bold;
      }
    }
  }

  .section4_bottom {
    position: relative;
    height: 100vh;
    width: 100%;
    z-index: 1;
    /* margin-bottom: 3rem; */

    .section4_bottom_data {
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625225330/chqd0bw4jqdfbpkd7dsb.png");

      background-repeat: no-repeat;
      background-size: cover;
      margin-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 1;
      .section4_mid_left {
        display: flex;
        justify-content: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 50%;
        height: 50%;
        z-index: 1;

        .top {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-bottom: 15px;
          margin-top: 7rem;

          h2 {
            text-transform: uppercase;
            text-align: left;
            width: 50%;
            position: relative;
            font-size: 3rem;
            color: white;
          }
          h2:after {
            position: absolute;
            width: 0.35rem;
            display: block;
            height: 60%;
            left: -7%;
            top: 17%;
            background:     ${(props) => props.theme.colors.blue};
            border-left: 1px white;
            content: "";
          }

          p {
            margin-top: 1rem;
            color: white;
            z-index: 1;
            text-align: left;
            width: 47%;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            margin-left: -20px;
          }
        }
        .btn {
          margin-top: 8%;
          color: white;
          z-index: 1;
          text-align: left;
          width: 50%;

          button {
            color: ${(props) => props.theme.colors.darkblue};
            font-size: 1rem;
            padding: 1rem 2rem;
            height: 4rem;
            border-radius: 0px;
            text-transform: uppercase;
            background-color:  ${(props) => props.theme.colors.blue};;

          }


        }
      }

      .section4_mid_right {
        display: flex;
        justify-content: center;
        display: flex;
        justify-content: center;

        align-items: center;
        width: 50%;
        height: 100%;
        z-index: 1;
        
        .section4_logo {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          margin-top: 10%;
          flex-direction: column;
          align-items: center;
         
          .img_wrapper {

            transition: transform 0.5s;
            width: 100%;
            height: 50%;
            position: relative;
          }
          .img_wrapper:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          h3 {
            /* color:white; */
            color: #f2e7c9;
            z-index: 1;
            margin-top: 45px;
          }
        }
      }
    }
    .img_absol {
      position: absolute;
      width: 20rem;
      height: 15rem;
      z-index: 1;
      right: 24%;
      top: -201px;
    }
  }
}
}

@media (min-width: 1281px) and (max-width: 1600px) {


    .section4 {
      position: relative;
  
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;
      .section4_top_new {
    position: relative;
    height: 40rem;
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    .icon {
      width: 20%;
      height: 50%;
     
      background-color: #22334c;
      display: flex;
      justify-content: flex-end;
       align-items: center;
      flex-direction: column;
      .head {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
          text-transform: uppercase;
          width: 70%;
          text-align: center;
          font-size: 2rem;
        }
      }
      .img-wrapper {
        position: relative;
        width: 40%;
        height: 40%;
      }

      span {
        margin-top: 0.5rem;
     margin-bottom: 4rem;
    margin-top:2rem;
        color: white;
        text-transform: uppercase;
      }
    }
    #ch {
      background-color: #213d63;


    }
#center {
  background:     ${(props) => props.theme.colors.blue};
}
  }
      .section4_top {
        position: relative;
        height: 55rem;
        width: 100%;
        background:     ${(props) => props.theme.colors.blue};
        /* background-image: linear-gradient(#d8b642 , #DBB42F); */

        margin-bottom: 3rem;

        .tringle {
          position: absolute;
          right: 10%;
          width: 180px;
          bottom: -7.4%;
          height: 65px;
          border-left: 6rem solid transparent; 
          border-right: 6rem solid transparent;
         border-top: 4rem solid    ${(props) => props.theme.colors.blue}; 
       
        }
        .section4_top_data {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          flex-direction: column;
          h2 {
            padding-top: 3rem;
            padding-bottom: 3rem;
            font-size: 2.813rem;
            text-transform: uppercase;
            color: white;
          }
          .section4_top_data_logos {
            width: 50%;
            margin-top: 7%;
    margin-left: 2%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 42%;
            position: relative;
          }

          .icon {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;

            .img-wrapper {
              transition: transform 0.5s;
              position: relative;
              height: 4rem;
              width: 5rem;
            }
            span {
              text-transform: uppercase;
              font-weight: 900;
              font-size: 16px;
              width: 100%;
              color: white;
              text-align: center;
              line-height: 40px;
            }
          }
          .icon {
            transition: transform 0.5s;
          }
          .icon:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          #gasses {
            position: absolute;
            top: 13%;
            left: 43%;
            width: 17%;
            height: 10%;
          }
          #Lng {
            position: absolute;
            position: absolute;
            top: 64%;
            left: 28.5%;
            height: 10%;
            height: 10%;
          }
          #industry {
            position: absolute;
            top: 27%;
            left: 25%;
            width: 15%;
            height: 10%;
          }
          #Refineries {
            position: absolute;
            top: 46%;
            left: 21%;
            width: 15%;
            height: 10%;
          }
          #Cng {
            position: absolute;
            top: 26.5%;
            left: 62%;
            width: 15%;
            height: 10%;
          }
          #Oil {
            position: absolute;
            top: 46%;
            left: 66%;

            width: 15%;
            height: 10%;
          }
          #hydrogen {
            position: absolute;
            top: 64%;
            left: 63%;
            width: 15%;
            height: 10%;
          }
          #chemical {
            position: absolute;
            top: 79%;
            left: 51%;
            width: 15%;
            height: 10%;
          }
          #offshore {
            position: absolute;
            top: 79%;
            left: 35%;
            width: 15%;
            height: 10%;
          }
        }
      }
      .section4_mid {
        position: relative;
        height: 40rem;
        width: 100%;
        z-index: 1;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: -65px;

        .section4_mid_left {
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 60%;
          height: 80%;
        
          .img_wrapper {
            width: 100%;
            height: 100%;
            position: relative;
            .text-1 {
              position: absolute;
    top: 0%;
    right: 12%;
    width: 29%;
    height: 10rem;
    
            }
            [data-aos="example-anim3"] {
          transform: rotate(
-81deg
);

min-width: 10% !important;
 
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotate(0);
    opacity: 1;
    min-width: 100% !important;;
  }
          }
            .text-2 {
              position: absolute;
              bottom:0%;
             
    left: 10%;

               width: 29%;
    height: 10rem;
               
            }
          }
        }

        .section4_mid_right {
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          width: 50%;
          height: 100%;
          margin-left: 10%;

          h2 {
            text-align: left;
            width: 100%;
            position: relative;
            font-size: 46px;
            color: #2b4056;
            line-height: 40px;
            margin-bottom: 5rem;
          }
          h2:after {
            position: absolute;
            width: 0.4rem;
            display: block;
            height: 110%;
            left: -5%;
            top: 0%;
            background:     ${(props) => props.theme.colors.blue};
            border-left: 1px white;
            content: "";
          }
          p {
            margin-bottom: 30px;
            text-align: left;
            width: 90%;
            font-size: 16px;
            line-height: 28px;
            font-family: Proxima-Bold;
          }
        }
      }

      .section4_bottom {
        position: relative;
        height: 100vh;
        width: 100%;
        z-index: 1;
        /* margin-bottom: 3rem; */

        .section4_bottom_data {
          background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625225330/chqd0bw4jqdfbpkd7dsb.png");

          background-repeat: no-repeat;
          background-size: cover;
          margin-top: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          z-index: 1;
          .section4_mid_left {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 50%;
            height: 50%;
            z-index: 1;

            .top {
              width: 100%;
              height: auto;
              display: flex;
              justify-content: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              margin-bottom: 15px;
              margin-top: 7rem;

              h2 {
                text-transform: uppercase;
                text-align: left;
                width: 50%;
                position: relative;
                font-size: 3rem;
                color: white;
              }
              h2:after {
                position: absolute;
                width: 0.35rem;
                display: block;
                height: 60%;
                left: -7%;
                top: 17%;
                background:     ${(props) => props.theme.colors.blue};
                border-left: 1px white;
                content: "";
              }

              p {
                margin-top: 1rem;
                color: white;
                z-index: 1;
                text-align: left;
                width: 47%;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
                margin-left: -20px;
              }
            }
            .btn {
              margin-top: 8%;
              color: white;
              z-index: 1;
              text-align: left;
              width: 50%;

              button {
                color: ${(props) => props.theme.colors.darkblue};
                font-size: 1rem;
                padding: 1rem 2rem;
                height: 4rem;
                border-radius: 0px;
                text-transform: uppercase;
                background-color:  ${(props) => props.theme.colors.blue};;
  
              }

   
            }
          }

          .section4_mid_right {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: center;

            align-items: center;
   
      margin-top:8%;
              width: 50%;
            height: 100%;
            z-index: 1;

            .section4_logo {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: start;
              flex-direction: column;
              align-items: center;
              
              .img_wrapper {
                transition: transform 0.5s;
                width: 100%;
                height: 100%;
                position: relative;
              }
              .img_wrapper:hover {
                -ms-transform: scale(1.5); /* IE 9 */
                -webkit-transform: scale(1.5); /* Safari 3-8 */
                transform: scale(1.1);
              }
              h3 {
                /* color:white; */
                color: #f2e7c9;
                z-index: 1;
                margin-top: 45px;
              }
            }
          }
        }
        .img_absol {
          position: absolute;
          width: 20rem;
          height: 15rem;
          z-index: 1;
          right: 24%;
          top: -201px;
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;

      .section4_top_new {
    position: relative;
    height: 25rem;
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    .icon {
      width: 20%;
      height: 50%;
     
      background-color: #22334c;
      display: flex;
      justify-content: flex-end;
       align-items: center;
      flex-direction: column;
      .head {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
          text-transform: uppercase;
          width: 90%;
          text-align: center;
          font-size: 1.5rem;
        }
      }
      .img-wrapper {
        position: relative;
        width: 40%;
        height: 40%;
      }

      span {
        margin-top: 0.5rem;
     margin-bottom: 4rem;
    margin-top:2rem;
        color: white;
        text-transform: uppercase;
      }
    }
    #ch {
      background-color: #213d63;


    }
#center {
  background:     ${(props) => props.theme.colors.blue};
}
  }

      .section4_top {
        position: relative;
        height: 47rem;
        width: 100%;
        background:     ${(props) => props.theme.colors.blue};
        /* background-image: linear-gradient(#d8b642 , #DBB42F); */

        margin-bottom: 3rem;

       
        .section4_top_data {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          flex-direction: column;
          h2 {
            padding-top: 3rem;
            padding-bottom: 3rem;
            font-size: 2.813rem;
            text-transform: uppercase;
            color: white;
          }
          .section4_top_data_logos {
            width: 30%;
            margin-top: 10%;
            margin-left: 4%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30%;
            position: relative;
          }

          .icon {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;

            .img-wrapper {
              transition: transform 0.5s;
              position: relative;
              height: 5rem;
              width: 5rem;
            }
            span {
              text-transform: uppercase;
              font-weight: 900;
              font-size: 16px;
              width: 100%;
              color: white;
              text-align: center;
              line-height: 40px;
            }
          }
          .icon {
            transition: transform 0.5s;
          }
          .icon:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          #gasses {
            position: absolute;
            top: 14%;
            left: 43%;
            width: 17%;
            height: 10%;
          }
          #Lng {
            position: absolute;
            position: absolute;
            top: 64%;
            left: 31%;
            height: 10%;
            height: 10%;
          }
          #industry {
            position: absolute;
            top: 27%;
            left: 29%;

            height: 10%;
          }
          #Refineries {
            position: absolute;
            top: 46%;
            left: 25%;
            width: 15%;
            height: 10%;
          }
          #Cng {
            position: absolute;
            top: 27%;
            left: 59%;
            width: 15%;
            height: 10%;
          }
          #Oil {
            position: absolute;
            top: 46%;
            left: 63%;
            width: 15%;
            height: 10%;
          }
          #hydrogen {
            position: absolute;
            top: 64%;
            left: 61%;
            width: 15%;
            height: 10%;
          }
          #chemical {
            position: absolute;
            top: 79%;
            left: 51%;
            width: 15%;
            height: 10%;
          }
          #offshore {
            position: absolute;
            top: 79%;
            left: 38%;
            width: 15%;
            height: 10%;
          }
        }
      }
      .section4_mid {
        position: relative;
        height: 50rem;
        width: 100%;
        z-index: 1;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: -65px;

        .section4_mid_left {
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 50%;
         
          height: 70%;
          .img_wrapper {
            width: 100%;
            height: 100%;
            position: relative;
            .text-1 {
              position: absolute;
    top: 0%;
    right: 10%;
    width: 29%;
    height: 10rem;
    
            }
            [data-aos="example-anim3"] {
          transform: rotate(
-81deg
);

min-width: 10% !important;
 
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotate(0);
    opacity: 1;
    min-width: 100% !important;;
  }
          }
            .text-2 {
              position: absolute;
              bottom:0%;
               left:4%;
               width: 29%;
    height: 10rem;
               
            }
          }
        }

        .section4_mid_right {
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          width: 50%;
         
          height: 100%;
          margin-left: 10%;

          h2 {
            br {
              display: none;
            }
            text-align: left;
            width: 100%;
            position: relative;
            font-size: 46px;
            color: #2b4056;
            line-height: 40px;
            margin-bottom: 5rem;
          }
          h2:after {
            position: absolute;
            width: 0.4rem;
            display: block;
            height: 110%;
            left: -5%;
            top: 0%;
            background:     ${(props) => props.theme.colors.blue};
            border-left: 1px white;
            content: "";
          }
          p {
            margin-bottom: 30px;
            text-align: left;
            width: 90%;
            font-size: 16px;
            line-height: 28px;
            font-family: Proxima-Bold;
          }
        }
      }

      .section4_bottom {
        position: relative;
        height: 50rem;
        width: 100%;
        z-index: 1;
        /* margin-bottom: 3rem; */

        .section4_bottom_data {
          background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625301760/e92mprbfemr6lekh6lyp.jpg");

          background-repeat: no-repeat;
          background-size: cover;
          margin-top: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          z-index: 1;
          .section4_mid_left {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 50%;
            height: 50%;
            z-index: 1;

            .top {
              width: 100%;
              height: auto;
              display: flex;
              justify-content: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              margin-bottom: 15px;

              h2 {
                text-transform: uppercase;
                text-align: left;
                width: 67%;

                position: relative;
                font-size: 3rem;
                color: white;
              }
              h2:after {
                position: absolute;
                width: 0.35rem;
                display: block;
                height: 60%;
                left: -7%;
                top: 17%;
                background:     ${(props) => props.theme.colors.blue};
                border-left: 1px white;
                content: "";
              }

              p {
                margin-top: 1rem;
                color: white;
                z-index: 1;
                text-align: left;
                width: 67%;

                font-size: 16px;
                font-family: Proxima-Bold;
                line-height: 24px;
                margin-left: -20px;
              }
            }
            .btn {
              color: white;
              z-index: 1;
              text-align: left;
              width: 67%;

              button {
                color: ${(props) => props.theme.colors.darkblue};
                font-size: 1rem;
                padding: 1rem;
                height: 4.5rem;
                border-radius: 0px;
                text-transform: uppercase;
                background-color:  ${(props) => props.theme.colors.blue};;
              }
            }
          }

          .section4_mid_right {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: space-evenly;

            align-items: center;
            width: 50%;
            height: 60%;
            z-index: 1;
            align-items: center;

            .section4_logo {
              width: 100%;

              height: 100%;

              display: flex;
              justify-content: space-between;
              flex-direction: column;
              align-items: center;

              .img_wrapper {
                transition: transform 0.5s;
                width: 100%;
                height: 100%;
                position: relative;
              }
              .img_wrapper:hover {
                -ms-transform: scale(1.5); /* IE 9 */
                -webkit-transform: scale(1.5); /* Safari 3-8 */
                transform: scale(1.1);
              }
              h3 {
                /* color:white; */
                color: #f2e7c9;
                z-index: 1;
              }
            }
          }
        }
        .img_absol {
          position: absolute;
          width: 20rem;
          height: 15rem;
          z-index: 1;
          right: 24%;
          top: -201px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;

      .section4_top_new {
    position: relative;
    height: 20rem;
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    .icon {
      width: 20%;
      height: 50%;
     
      background-color: #22334c;
      display: flex;
      justify-content: flex-end;
       align-items: center;
      flex-direction: column;
      .head {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
          text-transform: uppercase;
          width: 90%;
          text-align: center;
          font-size: 1.2rem;
        }
      }
      .img-wrapper {
        position: relative;
        width: 40%;
        height: 40%;
      }

      span {
        margin-top: 0.5rem;
     margin-bottom: 2rem;
    margin-top:2rem;
    font-size: 0.9rem;
    align-items: center;
        color: white;
        text-transform: uppercase;
      }
    }
    #ch {
      background-color: #213d63;


    }
#center {
  background:     ${(props) => props.theme.colors.blue};
}
  }

      .section4_top {
        position: relative;
        height: 39rem;
        width: 100%;
        background:     ${(props) => props.theme.colors.blue};
        /* background-image: linear-gradient(#d8b642 , #DBB42F); */

        margin-bottom: 3rem;
        .section4_top_data {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          flex-direction: column;

          h2 {
            padding-top: 1rem;
            padding-bottom: 1rem;
            font-size: 1.5rem;
            text-transform: uppercase;
            color: white;
            width: 95%;

            text-align: center;
          }
          .section4_top_data_logos {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30%;

            margin-top: 22%;
            position: relative;
          }

          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img-wrapper {
              transition: transform 0.5s;
              position: relative;
              height: 2.5rem;
              width: 2.5rem;
            }
            span {
              margin-top: 0.5rem;
              text-transform: uppercase;
              font-weight: 900;
              font-size: 1rem;
              text-align: center;
              color: white;
            }
          }
          #gasses {
            position: absolute;
            top: 15%;
            width: 27%;
            height: 10%;
          }
          #Lng {
            position: absolute;
            top: 68%;
            width: 27%;
            left: 14%;
            height: 10%;
          }
          #industry {
            position: absolute;
            top: 28%;
            left: 12%;
            width: 27%;
            height: 10%;
          }
          #Refineries {
            position: absolute;
            top: 50%;
            left: 8%;
            width: 27%;
            height: 10%;
          }
          #Cng {
            position: absolute;
            top: 29%;
            left: 60%;
            width: 27%;
            height: 10%;
          }
          #Oil {
            position: absolute;
            top: 50%;
            left: 67%;
            width: 27%;
            height: 10%;
          }
          #hydrogen {
            position: absolute;
            top: 67%;
            left: 60%;
            width: 27%;
            height: 10%;
          }
          #chemical {
            position: absolute;
            top: 77%;
            left: 47%;
            width: 27%;
            height: 10%;
          }
          #offshore {
            position: absolute;
            top: 76%;
            left: 25%;
            width: 27%;
            height: 10%;
          }
        }
      }
      .section4_mid {
        position: relative;
        height: 40rem;
        width: 100%;
        z-index: 1;
        margin-bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .section4_mid_left {
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          height: 48%;

          .img_wrapper {
            width: 100%;
            height: 100%;
            position: relative;
            .text-1 {
              position: absolute;
    top: 0%;
    right: 10%;
    width: 29%;
    height: 10rem;
    
            }
            [data-aos="example-anim3"] {
          transform: rotate(
-81deg
);

min-width: 10% !important;
 
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotate(0);
    opacity: 1;
    min-width: 100% !important;;
  }
          }
            .text-2 {
              position: absolute;
              bottom:0%;
               left:4%;
               width: 29%;
    height: 10rem;
               
            }
          }
        }

        .section4_mid_right {
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;
          width: 95%;
          height: 48%;

          h2 {
            width: 100%;
            text-align: left;
            padding-left: 0.5rem;
            position: relative;
            font-size: 1.5rem;
            line-height: 1.1;
          }
          h2:after {
            position: absolute;
            width: 0.37rem;
            display: block;
            height: 100%;
            left: -1%;
            top: 0%;
            background:     ${(props) => props.theme.colors.blue};
            border-left: 1px white;
            content: "";
          }
          p {
            text-align: left;
            width: 95%;
            font-size: 16px;
            line-height: 1.1;
            font-family: Proxima-Bold;
          }
        }
      }

      .section4_bottom {
        position: relative;

        width: 100%;
        z-index: 1;

        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg");

        display: flex;
        justify-content: center;
        height: 40rem;
        background-repeat: no-repeat;
        background-size: cover;
        /* margin-bottom: 3rem; */

        .section4_bottom_data {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 40rem;
          flex-direction: column;

          .section4_mid_left {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
            width: 95%;

            height: 60%;

            .top {
              width: 100%;
              height: auto;
              display: flex;
              justify-content: center;
              display: flex;
              justify-content: space-space-evenly;
              flex-direction: column;
              align-items: center;
              height: 80%;

              h2 {
                text-transform: uppercase;
                text-align: left;
                width: 100%;
                position: relative;
                font-size: 1.5rem;
                color: white;
                padding-left: 0.5rem;
              }
              h2:after {
                position: absolute;
                width: 0.25rem;
                display: block;
                height: 100%;
                left: 0%;
                top: 0%;
                background:     ${(props) => props.theme.colors.blue};
                border-left: 1px white;
                content: "";
              }
              p {
                color: white;
                z-index: 1;
                text-align: left;
                width: 100%;
                font-size: 1rem;
                font-family: Proxima-Bold;
                line-height: 1.4;
                margin-left: 1rem;
              }
            }
            .btn {
              color: white;
              z-index: 1;
              text-align: left;

              button {
                color: ${(props) => props.theme.colors.darkblue};
                font-size: 1rem;
                padding: 1rem;
                margin-top: 2rem;
                text-transform: uppercase;
                background-color:  ${(props) => props.theme.colors.blue};;
              }
            }
          }

          .section4_mid_right {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: space-evenly;
            height: 50%;
            align-items: center;
            width: 95%;

            .section4_logo {
              width: 40%;
              height: 100%;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;

              .img_wrapper {
                transition: transform 0.5s;
                width: 100%;
                height: 50%;
                position: relative;
              }
              .img_wrapper:hover {
                -ms-transform: scale(1.5); /* IE 9 */
                -webkit-transform: scale(1.5); /* Safari 3-8 */
                transform: scale(1.1);
              }
              h3 {
                /* color:white; */
                z-index: 1;
                width: 100%;
                text-align: center;
                color: #f2e7c9;
              }
            }
          }
        }
        .img_absol {
          position: absolute;

          width: 10rem;
          height: 9rem;
          z-index: 1;
          right: 24%;
          top: -100px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;

      .section4_top_new {
    position: relative;
  
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    .icon {
      width: 50%;
      height: 10rem;
     
      background-color: #22334c;
      display: flex;
      justify-content: flex-end;
       align-items: center;
      flex-direction: column;
      .head {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
          text-transform: uppercase;
          width: 90%;
          text-align: center;
          font-size: 1.2rem;
        }
      }
      .img-wrapper {
        position: relative;
        width: 40%;
        height: 40%;
      }

      span {
        margin-top: 0.5rem;
     margin-bottom: 2rem;
    margin-top:2rem;
    font-size: 0.9rem;
    align-items: center;
        color: white;
        text-transform: uppercase;
      }
    }
    #ch {
      background-color: #213d63;


    }
#center {
  background:     ${(props) => props.theme.colors.blue};
}
  }

      .section4_top {
        position: relative;
        height: 25rem;
        width: 100%;
        background:     ${(props) => props.theme.colors.blue};
        /* background-image: linear-gradient(#d8b642 , #DBB42F); */

        margin-bottom: 3rem;
        .section4_top_data {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          width: 100%;
          height: 100%;
          flex-direction: column;

          h2 {
            padding-top: 1rem;
            padding-bottom: 1rem;
            font-size: 1.5rem;
            text-transform: uppercase;
            color: white;
            width: 95%;

            text-align: center;
          }
          .section4_top_data_logos {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30%;

            margin-top: 17%;
            position: relative;
          }

          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img-wrapper {
              transition: transform 0.5s;
              position: relative;
              height: 2rem;
              width: 2rem;
            }
            span {
              margin-top: 0.3rem;
              text-transform: uppercase;
              font-weight: 900;
              font-size: 0.7rem;
              text-align: center;
              color: white;
            }
          }
          #gasses {
            position: absolute;

            top: 19%;

            width: 27%;
            height: 10%;
          }
          #Lng {
            position: absolute;
            position: absolute;
            top: 68%;
            width: 27%;
            left: 10%;
            height: 10%;
            height: 10%;
          }
          #industry {
            position: absolute;
            top: 31%;
            left: 14%;
            width: 27%;
            height: 10%;
          }
          #Refineries {
            position: absolute;
            top: 50%;
            left: 8%;
            width: 27%;
            height: 10%;
          }
          #Cng {
            position: absolute;
            top: 31%;
            left: 60%;
            width: 27%;
            height: 10%;
          }
          #Oil {
            position: absolute;
            top: 50%;
            left: 67%;
            width: 27%;
            height: 10%;
          }
          #hydrogen {
            position: absolute;
            top: 67%;
            left: 64%;
            width: 27%;
            height: 10%;
          }
          #chemical {
            position: absolute;
            top: 76%;
            left: 51%;
            width: 27%;
            height: 10%;
          }
          #offshore {
            position: absolute;
            top: 76%;
            left: 25%;
            width: 27%;
            height: 10%;
          }
        }
      }
      .section4_mid {
        position: relative;
        height: 40rem;
        width: 100%;
        
        margin-bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .section4_mid_left {
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          height: 48%;

          .img_wrapper {
            width: 100%;
            height: 100%;
            position: relative;
            .text-1 {
                position: absolute;
                top: 0%;
                right: 2%;
                width: 38%;
                height: 7rem;
                
            }
            [data-aos="example-anim3"] {
          transform: rotate(
-81deg
);

min-width: 10% !important;
 
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotate(0);
    opacity: 1;
    min-width: 100% !important;;
  }
          }
            .text-2 {
              position: absolute;
    bottom: 0%;
    left: 2%;
    width: 29%;
    height: 10rem
               
            }
          }
        }

        .section4_mid_right {
          display: flex;
          justify-content: center;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;
          width: 95%;
          height: 48%;

          h2 {
            width: 100%;
            text-align: left;
            padding-left: 0.5rem;
            position: relative;
            font-size: 1.5rem;
            line-height: 1.1;
          }
          h2:after {
            position: absolute;
            width: 0.37rem;
            display: block;
            height: 100%;
            left: -1%;
            top: 0%;
            background:     ${(props) => props.theme.colors.blue};
            border-left: 1px white;
            content: "";
          }
          p {
            text-align: left;
            width: 95%;
            font-size: 16px;
            line-height: 1.3;
            font-family: Proxima-Light;
            font-weight: 600;
          }
        }
      }

      .section4_bottom {
        position: relative;

        width: 100%;
      

        background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg");

        display: flex;
        justify-content: center;
        height: 40rem;
        background-repeat: no-repeat;
        background-size: cover;
        /* margin-bottom: 3rem; */

        .section4_bottom_data {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 40rem;
          flex-direction: column;

          .section4_mid_left {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            align-items: center;
            width: 95%;

            height: 60%;

            .top {
              width: 100%;
              height: auto;
              display: flex;
              justify-content: center;
              display: flex;
              justify-content: space-space-evenly;
              flex-direction: column;
              align-items: center;
              height: 80%;

              h2 {
                text-transform: uppercase;
                text-align: left;
                width: 100%;
                position: relative;
                font-size: 1.5rem;
                color: white;
                padding-left: 0.5rem;
              }
              h2:after {
                position: absolute;
                width: 0.25rem;
                display: block;
                height: 100%;
                left: 0%;
                top: 0%;
                background:     ${(props) => props.theme.colors.blue};
                border-left: 1px white;
                content: "";
              }
              p {
                color: white;                
                text-align: left;
                width: 100%;
                font-size: 1rem;
                font-family: Proxima-Light;
                font-weight: 600;
                line-height: 1.3;
                margin-left: 1rem;
              }
            }
            .btn {
              color: white;
              
              text-align: left;

              button {
                color: ${(props) => props.theme.colors.darkblue};
                
                margin-bottom:20%;
                font-size: 1rem;
                padding: 1rem;
                /* margin-top: 2rem; */
                text-transform: uppercase;
                background-color:  ${(props) => props.theme.colors.blue};;
              }
            }
          }

          .section4_mid_right {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: space-evenly;
            height: 40%;
            align-items: center;
            width: 95%;

            .section4_logo {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;

              .img_wrapper {
                transition: transform 0.5s;
                width: 100%;
                height: 90%;
                position: relative;
              }
              .img_wrapper:hover {
                -ms-transform: scale(1.5); /* IE 9 */
                -webkit-transform: scale(1.5); /* Safari 3-8 */
                transform: scale(1.1);
              }
              h3 {
                /* color:white; */
               
                width: 100%;
                text-align: center;
                color: #f2e7c9;
              }
            }
          }
        }
        .img_absol {
          position: absolute;

          width: 10rem;
          height: 9rem;
         
          right: 24%;
          top: -100px;
        }
      }
    }
  }

  @media (max-width: 991px) and (orientation : landscape) {
    .section4 {
      .section4_mid {
        .section4_mid_left {
          
          .img_wrapper {
            .text-2 {
              left: 15%;
          }
          .text-1 {
              right: 15%;
          }
          }
        }
        .section4_mid_right {
          h2{
            margin-left: 2rem;
          }
        }
      }
      .section4_bottom{
        .section4_bottom_data {
          .section4_mid_left {
            height: 40%;
            
          }
        }
      }
    }
  }


  

  @media (max-width: 414px) {
    .section4 {
       .section4_mid {
         .section4_mid_left {
           .top{
              h2 {
                margin-left: 1rem;
              }
           }
         }
         .section4_mid_right {
           h2{
              margin-left: 2rem;
           }
         }
       }
       .section4_bottom_data{
         .section4_mid_left {
           .top{
              h2 {
                margin-left: 1rem;
                margin-bottom: 10px;
              }
           }
         }
       }
     }
  }

  @media (max-width: 375px) {
    .section4 {
      .section4_top {
         .section4_top_data {
           h2 {
             font-size: 1.3rem;
           }
         }
       }
       .section4_mid {
         .section4_mid_left {
         }
         .section4_mid_right {
           h2{
              font-size: 1.3rem;
              margin-left: 2rem;
           }
           p{
             font-size: 16px;
           }
         }
       }
     }
  }

  @media (max-width: 360px) {
    .section4 {
      .section4_top {
         .section4_top_data {
           h2 {
             font-size: 1.3rem;
           }
         }
       }
       .section4_mid {
         .section4_mid_left {
         }
         .section4_mid_right {
           h2{
              font-size: 1.2rem;
               margin-left: 2rem;
           }
           p{
             font-size: 15px;
           }
         }
       }
     }
  }



`;
