import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section3 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 735px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .section2_data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .section2_data_left {
          display: flex;
          width: 55%;
          height: 80%;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          margin-left: 5%;
          h2 {
            padding-left: 0.5rem;
            font-size: 55px;
            line-height: 46px;
            color: white;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
            
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 150%;
            width: 0.3rem;
            top: -20%;
            left: -0.3rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }
          p {
            width: 90%;
            color: #2e3031;
            font-weight: 600;
            font-size: 18px;
            margin-top: 50px;
            line-height: 40px;
          }
          .img_wrapper {
            position: relative;
            height: 50%;
            width: 100%;
            line-height: 1.1;
          }
        }

        .section2_data_right {
          display: flex;
         
          width: 30%;
          background-color: #2f3032;
          height: 100%;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
          h3 {
            margin-top: 15%;
            color:  white;
          
            font-size: 26.64px;
            text-align: left;
            width: 80%;

            text-transform: uppercase;
          }

          p {
            margin-top: 55px;
            width: 80%;
            line-height: 30px;
            text-align: left;
            font-size: 15px;
            color:  white;
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section3 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 735px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .section2_data {
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .section2_data_left {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 55px;
            line-height: 46px;
            color: white;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 150%;
            width: 0.3rem;
            top: -20%;
            left: -0.3rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }
          p {
            width: 90%;
            color: #2e3031;
            font-weight: 600;
            font-size: 18px;
            margin-top: 50px;
            line-height: 40px;
          }
          .img_wrapper {
            position: relative;
            height: 50%;
            width: 100%;
            line-height: 1.1;
          }
        }

        .section2_data_right {
          display: flex;
          width: 45%;
       
          height: 100%;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
          h3 {
            color: #24334d;
            margin-top: 10px;

            font-size: 26.64px;
            text-align: left;
            width: 100%;

            text-transform: uppercase;
          }

          p {
            margin-top: 55px;
            width: 100%;
            line-height: 30px;
            text-align: left;
            font-size: 15px;
            color: #2e3031;
          }
        }
      }
    }



  
 

    
     
       
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .section3 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 50rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      .section2_data {
        width: 100%;
        height: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .section2_data_left {
          margin-top: 1rem;
          display: flex;
          width: 95%;
          height: 50%;
          justify-content: space-around;
          align-items: left;
          .set {
            width: 70%;
            height: 100%;
            h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 55px;
            line-height: 46px;
            color: white;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 150%;
            width: 0.3rem;
            top: -20%;
            left: -0.3rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }
          p {
            width: 90%;
            color: #2e3031;
            font-weight: 600;
            font-size: 18px;
            margin-top: 50px;
            line-height: 40px;
          }

          }
         
        
          .img_wrapper {
           
            position: relative;
            height: 20rem;
            width: 50%;
            line-height: 1.1;
          }
        }

        .section2_data_right {
          display: flex;
          width: 95%;
       
          height: 50%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
          
          h3 {
            color: #24334d;
       margin-bottom: 1rem;

            font-size: 26.64px;
            text-align: left;
            width: 100%;

            text-transform: uppercase;
          }

          p {
          
            width: 100%;
            line-height: 30px;
            text-align: left;
            font-size: 15px;
            color: #2e3031;
          }
        }
      }
    }
    


  }

  @media (max-width: 767px) {
    .section3 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
     
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      .section2_data {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .section2_data_left {
          margin-top: 1rem;
          display: flex;
          width: 90%;
          height: 50%;
          justify-content: space-around;
          align-items:center;
          flex-direction: column-reverse;
          .set {
            width: 100%;
            height: 100%;
            h2 {
            padding-left: 0.5rem;
            font-size: 35px;
            line-height: 1.3;
            color: white;
            position: relative;
            color: #24334d;
            text-transform: uppercase;
            margin-top: 15px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 150%;
            width: 0.3rem;
            top: -20%;
            left: -0.3rem;
            background-color:  ${(props) => props.theme.colors.blue};
          }
          p {
            width: 100%;
            color: #2e3031;
            font-weight: 600;
            font-size: 18px;
            margin-top: 20px;
            line-height: 25px;
          }

          }
         
        
          .img_wrapper {
           
            position: relative;
            height: 20rem;
            width: 100%;
            line-height: 1.1;
          }
        }

        .section2_data_right {
          margin-bottom: 2rem;
          display: flex;
          width: 90%;
       
          height: 50%;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
          
          h3 {
            color: #24334d;
            margin-top: 2rem;
            font-size: 26.64px;
            text-align: left;
            width: 100%;
            text-transform: uppercase;
          }

          p {           
            width: 100%;
            line-height: 1.3;
            text-align: left;
            font-size: 18px;
            color: #2e3031;
            font-weight: 600;
            margin-top: 15px;
          }
        }
      }
    }

 
  }

  @media (max-width: 991px) and (orientation : landscape) {
    .section3 {
      height: 38rem;
      .section2_data{
         .section2_data_left {
            height: 40%;
           .set {
             p{
                line-height: 1.4;
             }
           }
         }
         .section2_data_right {
            p{
              line-height: 1.3;
              font-size: 18px;
              font-weight: 600;
            }
          }
      }
    }
  }

  @media (max-width: 414px) {
    .section3 {
      .section2_data {
        .section2_data_left {
          .set {
            h2 {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }

`;
