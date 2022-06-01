import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 300px;
      background-color:  ${(props) => props.theme.colors.darkblue};
    

      .section2_data {
        width: 86%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 30%;
          height: 100%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
            color:  white;
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
            left: -27px;
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
          width: 60%;
          height: 80%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;

       
          h2 {
            color:  white;
            position: relative;

            font-size: 55px;
            line-height: 46px;
          
          
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height:  0.5rem;
            width: 100%;
            bottom: -2rem;
            left: -27px;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          h3 {
            color:  white;
            position: relative;

            font-size: 30px;
            line-height: 46px;
    
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 300px;
      background-color:  ${(props) => props.theme.colors.darkblue};
    

      .section2_data {
        width: 86%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 30%;
          height: 100%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            color:  white;
            position: relative;

            font-size: 55px;
            line-height: 46px;
        
      
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
            left: -27px;
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
          width: 60%;
          height: 80%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;

       
          h2 {
            color:  white;
            position: relative;

            font-size: 55px;
            line-height: 46px;
          
          
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height:  0.5rem;
            width: 100%;
            bottom: -0.3rem;
            left: -27px;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          h3 {
            color:  white;
            position: relative;

            font-size: 30px;
            line-height: 46px;
    
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 30rem;
      background-color:  ${(props) => props.theme.colors.darkblue};
    

      .section2_data {
        width: 86%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        flex-direction: column;
        .section2_data_left {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
            color:  white;
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
            left: -27px;
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
          width: 100%;
          height: 80%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;

       
          h2 {
            color:  white;
            position: relative;

            font-size: 55px;
            line-height: 46px;
          
          
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height:  0.5rem;
            width: 100%;
            bottom: -1rem;
            left: -10px;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          h3 {
            color:  white;
            position: relative;

            font-size: 30px;
            line-height: 46px;
    
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 20rem;
      background-color:  ${(props) => props.theme.colors.darkblue};
    

      .section2_data {
        width: 86%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        flex-direction: column;
        .section2_data_left {
          display: flex;
          width: 100%;
          height: 30%;
          justify-content: flex-start;
          align-items: left;
          flex-direction: column;
          h2 {
            color:  white;
            position: relative;
        
            font-size: 30px;
            line-height: 30px;
        
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
            left: -27px;
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
          width: 100%;
          height: 70%;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;

       
          h2 {
            color:  white;
            position: relative;

            font-size: 30px;
            line-height: 30px;
          
          
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height:  0.2rem;
            width: 100%;
            bottom: 0rem;
            left: -10px;
            background-color:  ${(props) => props.theme.colors.blue};
          }

          h3 {
            color:  white;
            position: relative;

            font-size: 20px;
            line-height: 20px;
    
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
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



`;
