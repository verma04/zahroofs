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
      height: 35rem;
      background-color:  ${(props) => props.theme.colors.blue};
      .tringle {
        position: absolute;
        right: 40%;
        width: 0;
        top: -11%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid  ${(props) => props.theme.colors.blue};
        z-index: 1;
      }

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
          padding-left: 6.5%;
          display: flex;
          width: 70%;
          height: 100%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            width: 100%;
            position: relative;
            padding-left: 0.5rem;
            font-size: 55px;
            line-height: 46px;
            color: white;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
            margin-bottom: 2rem;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.4rem;
            top: 0;
            left: -0.3rem;
            background-color: #0b3b51;
          }
          .img_wrapper {
            position: relative;
            height: 40%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            width: 100%;
            line-height: 1.1;
          }
          p {
            width: 80%;
            color: #24334d;
            line-height: 2;
            font-weight: 600;
          }
        }

        .section_data_right {
          display: flex;
          width: 30%;
          height: 100%;
          justify-content: flex-start;

          background-color: #2f3032;
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;

          h3 {
            color: white;
            width: 60%;
            font-size: 2.438rem;
            margin-bottom: 1rem;
          }

          p {
            margin-top: 1rem;
            width: 60%;
            color: white;
            line-height: 2;
            font-size: 1.1rem;
          }
          .wrapper {
            position: relative;
            width: 48%;
            height: 100%;
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
      height: 40rem;
      background-color:  ${(props) => props.theme.colors.blue};
      .tringle {
        position: absolute;
        right: 40%;
        width: 0;
        top: -9%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid  ${(props) => props.theme.colors.blue};
        z-index: 1;
      }

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
          padding-left: 8%;
          display: flex;
          width: 80%;
          height: 100%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 3rem;
            color: white;
            width: 70%;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.4rem;
            top: 0;
            left: -0.3rem;
            background-color: #0b3b51;
          }
          .img_wrapper {
            position: relative;
            height: 40%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            width: 100%;
            line-height: 1.1;
          }
          p {
            width: 80%;
            color: #24334d;
            line-height: 2;
          }
        }

        .section_data_right {
          display: flex;
          width: 30%;
          height: 100%;
          justify-content: flex-start;

          background-color: #2f3032;
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;

          h3 {
            color: white;
            width: 60%;
            font-size: 2.438rem;
            margin-bottom: 1rem;
          }

          p {
            width: 60%;
            color: white;
            line-height: 2;
            font-size: 1.1rem;
          }
          .wrapper {
            position: relative;
            width: 48%;
            height: 100%;
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
      height: 40rem;
      background-color:  ${(props) => props.theme.colors.blue};
      .tringle {
        position: absolute;
        right: 40%;
        width: 0;
        top: -9%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid  ${(props) => props.theme.colors.blue};
        z-index: 1;
      }

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
          padding-left: 3%;
          display: flex;
          width: 60%;
          height: 100%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 2rem;
            color: white;
            width: 95%;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.4rem;
            top: 0;
            left: -0.3rem;
            background-color: #0b3b51;
          }
          .img_wrapper {
            position: relative;
            height: 40%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            width: 100%;
            line-height: 1.1;
          }
          p {
            width: 95%;
            color: #24334d;
            line-height: 2;
          }
        }

        .section_data_right {
          display: flex;
          width: 40%;
          height: 100%;
          justify-content: flex-start;

          background-color: #2f3032;
          flex-direction: column;
          display: flex;
          justify-content: center;
          align-items: center;

          h3 {
            color: white;
            width: 60%;
            font-size: 2.438rem;
            margin-bottom: 1rem;
          }

          p {
            width: 60%;
            color: white;
            line-height: 2;
            font-size: 1.1rem;
          }
          .wrapper {
            position: relative;
            width: 48%;
            height: 100%;
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
      height: 56rem;
      background-color:  ${(props) => props.theme.colors.blue};
      /* .tringle {
        position: absolute;
        right: 40%;
        width: 0;
        top: -9%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid  ${(props) => props.theme.colors.blue};
        z-index: 1;
      } */

      .section_data {
        display: flex;
        justify-content: center;
   flex-direction: column;
        width: 100%;
        align-items: center;
        position: relative;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .section_data_left {
         
          display: flex;
          width: 90%;
          height: 65%;
          justify-content: space-evenly;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 1.5rem;
            color: white;
            width: 100%;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
            br {
              display: none;
            }
            
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.4rem;
            top: 0;
            left: -0.3rem;
            background-color: #0b3b51;
          }
          .img_wrapper {
            position: relative;
            height: 40%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            width: 100%;
            line-height: 1.1;
          }
          p {
            width: 100%;
            color: #24334d;
            line-height: 1.3;
            font-weight: 600;
          }
        }

        .section_data_right {
          display: flex;
          width: 100%;
          height: 40%;
          justify-content: flex-start;
          background-color: #2f3032;
          flex-direction: column;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          h3 {
            margin-top:2rem;
            color: white;
            width: 90%;
            font-size: 2.438rem;
            margin-bottom: 1rem;
          }

          p {
            width: 90%;
            color: white;
            line-height: 1.3;
            font-size: 18px;
            margin-top: 1rem;
            font-weight: 600
          }
          .wrapper {
            position: relative;
            width: 48%;
            height: 100%;
          }
        }
      }
    }
 
  }


  @media (max-width: 991px) and (orientation : landscape) {
    .section4{
      height: 27rem;
      .section_data {
        .section_data_left {
          p{
            line-height: 1.3;
            font-weight: 600;
            font-size: 18px;
          }
        }
      }
    } 
  }




`;
