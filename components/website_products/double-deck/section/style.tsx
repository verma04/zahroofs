import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section6 {
        margin-top: 10rem;
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 40rem;
    
    

      .section2_data {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          
          width: 50%;
          height: 100%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
          
            position: relative;

            font-size: 55px;
            line-height: 46px;
            margin-top: 78px;
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.5rem;
            top: 0;
            left: -20px;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            width: 80%;
             color: ${(props) => props.theme.colors.darkblue};
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            line-height: 1.1;
             color: ${(props) => props.theme.colors.darkblue};
          }
        }

        .section2_data_right {
          display: flex;
          width: 50%;
          height: 90%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
     
          .top {
              width: 70%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 70%;
              
              position: relative;

          }

          .bottom {
            width: 100%;
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              
              height: 30%;

              .bottom-img {
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  height: 90%;
                  width: 30%;
                  .img-wrapper {
                   width: 90%;
                   height: 80%;
                    position: relative;
                  }
              }

              #active {
                box-shadow: 4px 4px 6px -6px #222;
              }

          }
   
   
       
      
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .section6 {
        margin-top: 10rem;
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 40rem;
    
    

      .section2_data {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          
          width: 50%;
          height: 100%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
          
            position: relative;

            font-size: 55px;
            line-height: 46px;
            margin-top: 78px;
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.5rem;
            top: 0;
            left: -20px;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            width: 80%;
             color: ${(props) => props.theme.colors.darkblue};
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            line-height: 1.1;
             color: ${(props) => props.theme.colors.darkblue};
          }
        }

        .section2_data_right {
          display: flex;
          width: 50%;
          height: 90%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
     
          .top {
              width: 70%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 70%;
              
              position: relative;

          }

          .bottom {
            width: 100%;
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              
              height: 30%;

              .bottom-img {
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  height: 90%;
                  width: 30%;
                  .img-wrapper {
                   width: 90%;
                   height: 80%;
                    position: relative;
                  }
              }

              #active {
                box-shadow: 4px 4px 6px -6px #222;
              }

          }
   
   
       
      
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section6 {
        margin-top: 10rem;
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 40rem;
    
    

      .section2_data {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          
          width: 50%;
          height: 100%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
          
            position: relative;

            font-size: 55px;
            line-height: 46px;
            margin-top: 78px;
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.5rem;
            top: 0;
            left: -20px;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            width: 80%;
             color: ${(props) => props.theme.colors.darkblue};
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            line-height: 1.1;
             color: ${(props) => props.theme.colors.darkblue};
          }
        }

        .section2_data_right {
          display: flex;
          width: 50%;
          height: 90%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
     
          .top {
              width: 70%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 70%;
              
              position: relative;

          }

          .bottom {
            width: 100%;
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              
              height: 30%;

              .bottom-img {
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  height: 90%;
                  width: 30%;
                  .img-wrapper {
                   width: 90%;
                   height: 80%;
                    position: relative;
                  }
              }

              #active {
                box-shadow: 4px 4px 6px -6px #222;
              }

          }
   
   
       
      
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section6 {
        margin-top: 5rem;
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 50rem;
    
    

      .section2_data {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        
        align-items: center;
        position: absolute;
        flex-direction: column-reverse;
        .section2_data_left {
          display: flex;
          
          width: 100%;
          height: 60%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
          
            position: relative;

            font-size: 40px;
            line-height: 40px;
            margin-top: 78px;
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.5rem;
            top: 0;
            left: -20px;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          p {
            width: 90%;
             color: ${(props) => props.theme.colors.darkblue};
            font-size: 20px;
            line-height: 27px;
            color: #2e3031;
          }
          h3 {
            line-height: 1.1;
             color: ${(props) => props.theme.colors.darkblue};
          }
        }

        .section2_data_right {
          display: flex;
          width: 100%;
          height: 40%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
     
          .top {
              width: 90%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 70%;
              
              position: relative;

          }

          .bottom {
            width: 100%;
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              
              height: 30%;

              .bottom-img {
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  height: 90%;
                  width: 30%;
                  .img-wrapper {
                   width: 90%;
                   height: 80%;
                    position: relative;
                  }
              }

              #active {
                box-shadow: 4px 4px 6px -6px #222;
              }

          }
   
   
       
      
        }
      }
    }
  }


  @media (max-width: 991px) and (orientation : landscape) {
    .section6 {
      height: 30rem;
      .section2_data {
        .section2_data_left {
          h2{
            margin-bottom: 10px;
            br{
              display: none;
            }
          }
          p {
            line-height: 1.3;
          }
        }
        .section2_data_right{
            height: 35%;
            .top {
              h2 {
              font-size: 80px;
            }
            h3 {
              font-size: 40px;
            }
            span{
              margin-top: 10px;
              font-weight: 600;
            }
            }
        }
        
      }
    }
  }

  @media (max-width: 414px) {
    .section6 {
      .section2_data {
        .section2_data_left {
          h2 {
            margin-left: 1rem;
          }
        }
      }
    }
  }


`;
