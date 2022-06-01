import styled from "styled-components";

export const Section = styled.section`
  z-index: 1000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: absolute;

  top: 0%;

  @media (min-width: 1281px) {
    width: 100%;
    height: 60rem;
    background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625569986/xs96s177mszgi8633qmj.jpg"); /* The image used */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */

    .flex {
      width: 100%;
      height: 100%;

      .section4_bottom {
        position: relative;
        height: 100%;

        width: 100%;
        
        /* margin-bottom: 3rem; */

        .section4_bottom_data {
          width: 100%;
          height: 100%;
          
        
          .section4_mid_left {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 50%;
            height: 100%;
            
           
            .top {
              width: 100%;
            
              height: 70%;
              
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
                width: 70%;
                position: relative;
                color: #3c3f72;
                font-size: 3rem;
                margin-top: 20vh;
                span {
                  color: #3c3f72;
                  font-size: 2.5rem;
                }
                .inner {
                  margin-top: 2rem;
                  color: #3c3f72;
                  font-size: 3rem;
                }
                color: white;
              }
              h2:after {
                position: absolute;
                width: 0.35rem;
                display: block;
                height: 100%;
                left: -7%;
                top: 0%;
                background: #dcb01a;
                border-left: 1px white;
                content: "";
              }

              p {
                margin-top: 2rem;
                color: white;
                
                width: 70%;
                text-align: left;
                color: black;
                font-size: 24px;
                line-height: 1.4;
              }
            }
            .btn {
              margin-top: 4rem;
              color: white;
              
              text-align: left;
              width: 70%;

              button {
                font-size: 24px;
                padding: 1rem;
                height: 3.5rem;
                color: #474c78;
                border-radius: 0px;
                text-transform: uppercase;
                background-color: #dbb33e;
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
            height: 90%;
            

            .section4_logo {
              width: 40%;
              height: 100%;
              display: flex;
              justify-content: start;
              flex-direction: column;
              align-items: center;
              margin-top: 23rem;
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
                
                margin-top: 45px;
              }
            }
          }
        }
        .img_absol {
          position: absolute;
          width: 20rem;
          height: 15rem;
          
          right: 24%;
          top: -201px;
        }
      }
    }
  }
 
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 100%;
    height: 100vh;
    background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625569986/xs96s177mszgi8633qmj.jpg"); /* The image used */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */

    .flex {
      width: 100%;
      height: 100%;

      .section4_bottom {
        position: relative;
        height: 100%;

        width: 100%;
        
        /* margin-bottom: 3rem; */

        .section4_bottom_data {
          width: 100%;
          height: 100%;
          
        
          .section4_mid_left {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 50%;
            height: 100%;
            
           
            .top {
              width:90%;
            
              height: 70%;
              
              display: flex;
              justify-content: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: flex-start;
              margin-bottom: 15px;
              margin-top: 5em;

              h2 {
                text-transform: uppercase;
                text-align: left;
                width: 70%;
                position: relative;
                color: #3c3f72;
                font-size: 2rem;
       
                span {
                  color: #3c3f72;
                  font-size: 2rem;
                }
                .inner {
                  margin-top: 1.5rem;
                  color: #3c3f72;
                  font-size: 2rem;
                  line-height: 2rem;
                  br {
                    display: none;
                  }
                }
                color: white;
              }
              h2:after {
                position: absolute;
                width: 0.35rem;
                display: block;
                height: 100%;
                left: -4%;
                top: 0%;
                background: #dcb01a;
                border-left: 1px white;
                content: "";
              }

              p {
                margin-top: 2rem;
                color: white;
                
                width: 80%;
                text-align: left;
                color: black;
                font-size: 18px;
                line-height: 1.4;
              }
            }
            .btn {
         
              color: white;
              
              text-align: left;
              width: 70%;

              button {
                font-size: 1rem;
                padding: 1rem;
                height: 3rem;
                color: #474c78;
                border-radius: 0px;
                text-transform: uppercase;
                background-color: #dbb33e;
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
            height: 90%;
            

            .section4_logo {
              width: 40%;
              height: 100%;
              display: flex;
              justify-content: start;
              flex-direction: column;
              align-items: center;
              margin-top: 23rem;
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
                
                margin-top: 45px;
              }
            }
          }
        }
        .img_absol {
          position: absolute;
          width: 20rem;
          height: 15rem;
          
          right: 24%;
          top: -201px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height:100vh;
    background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625569986/xs96s177mszgi8633qmj.jpg"); /* The image used */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */

    .flex {
      width: 100%;
      height: 100%;

      .section4_bottom {
        position: relative;
        height: 100%;

        width: 100%;
        
        /* margin-bottom: 3rem; */

        .section4_bottom_data {
          width: 100%;
          height: 100%;
          
        
          .section4_mid_left {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            
           
            .top {
              width: 90%;
            
              height: 44%;
              
              display: flex;
              justify-content: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items:flex-start;
              margin-bottom: 15px;

              h2 {
                text-transform: uppercase;
                text-align: left;
                width: 90%;

                position: relative;
                color: #3c3f72;
                font-size: 2rem;
                
                span {
                  color: #3c3f72;
                  font-size: 2rem;
                }
                .inner {
                  margin-top: 2rem;
                  color: #3c3f72;
                  font-size: 2rem;
                }
                color: white;
              }
              h2:after {
                position: absolute;
                width: 0.35rem;
                display: block;
                height: 100%;
                left: -3%;
                top: 0%;
                background: #dcb01a;
                border-left: 1px white;
                content: "";
              }

              p {
                margin-top: 2rem;
                color: white;
                
                width: 60%;
                text-align: left;
                color: black;
                font-size: 18px;
                line-height: 1.4;
              }
            }
            .btn {
              margin-top: 4rem;
              color: white;
              
              text-align: left;
              width: 70%;

              button {
                font-size: 1rem;
                padding: 1rem;
                height: 3rem;
                color: #474c78;
                border-radius: 0px;
                text-transform: uppercase;
                background-color: #dbb33e;
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
            height: 90%;
            

            .section4_logo {
              width: 40%;
              height: 100%;
              display: flex;
              justify-content: start;
              flex-direction: column;
              align-items: center;
              margin-top: 23rem;
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
                
                margin-top: 45px;
              }
            }
          }
        }
        .img_absol {
          position: absolute;
          width: 20rem;
          height: 15rem;
          
          right: 24%;
          top: -201px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    height:50rem;
    background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625569986/xs96s177mszgi8633qmj.jpg"); /* The image used */

    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */

    .flex {
      margin-top: 2rem;;
      width: 100%;
      height: 100%;

      .section4_bottom {
        position: relative;
        height: 100%;

        width: 100%;
        
        /* margin-bottom: 3rem; */

        .section4_bottom_data {
          width: 100%;
          height: 100%;
          
        
          .section4_mid_left {
            display: flex;
            justify-content: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            
           
            .top {
              width: 100%;
            
              height: 100%;
              
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
                width: 90%;

                position: relative;
                color: #3c3f72;
                font-size: 2rem;
              
                span {
                  color: #3c3f72;
                  font-size: 2rem;
                }
                .inner {
                  margin-top: 2rem;
                  color: #3c3f72;
                  font-size: 2rem;
                }
                color: white;
              }
              h2:after {
                position: absolute;
                width: 0.35rem;
                display: block;
                height: 100%;
                left: -7%;
                top: 0%;
                background: #dcb01a;
                border-left: 1px white;
                content: "";
              }

              p {
                margin-top: 2rem;
                color: white;
                
                width: 90%;
                text-align: left;
                color: black;
                font-size: 18px;
                line-height: 1.4;
              }
            }
            .btn {
              margin-bottom: 4rem;
              color: white;
              
              text-align: left;
              width: 70%;

              button {
                font-size: 1rem;
                padding: 1rem;
                height: 3rem;
                color: #474c78;
                border-radius: 0px;
                text-transform: uppercase;
                background-color: #dbb33e;
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
            height: 90%;
            

            .section4_logo {
              width: 40%;
              height: 100%;
              display: flex;
              justify-content: start;
              flex-direction: column;
              align-items: center;
              margin-top: 23rem;
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
                
                margin-top: 45px;
              }
            }
          }
        }
        .img_absol {
          position: absolute;
          width: 20rem;
          height: 15rem;
          
          right: 24%;
          top: -201px;
        }
      }
    }
  }
`;
