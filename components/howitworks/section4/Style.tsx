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
      height: 50rem;
      background-color: #23344e;
      .tringle {
        position: absolute;
        right: 10%;
        width: 0;
        top: -6%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid #23344e;
      }

      .section2_data {
        width: 90%;
        height: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .section2_data_left {
          display: flex;
          width: 55%;
          height: 100%;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          h2 {
            width: 124%;
            position: relative;
            padding-left: 0.5rem;
            font-size: 55px;
    line-height: 46px;
            color: white;
            position: relative;

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
          }
          .img_wrapper {
            position: relative;
            height: 60%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            line-height: 1.1;
            width: 80%;
            color: white;
            font-style: italic;
            font-size:2rem;
          }
          p {
            width: 80%;
            color: white;
            line-height: 1.5;
          }
        }

        .section2_data_right {
          display: flex;
          width: 40%;
          height: 100%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          
          position: relative;
          .img_wrapper {
            position: relative;
            height: 55%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            color: white;

            font-size: 1.5rem;
            text-align: left;
            width: 109%;
            text-transform: uppercase;
          }

          p {
            width: 109%;
    line-height: 1.5;
    color: white;
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
      height: 55rem;
      background-color: #23344e;
      .tringle {
        position: absolute;
        right: 10%;
        width: 0;
        top: -6%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid #23344e;
      }

      .section2_data {
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .section2_data_left {
          display: flex;
          width: 50%;
          height: 100%;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 3rem;
            color: white;
            position: relative;

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
          }
          .img_wrapper {
            position: relative;
            height: 60%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            line-height: 1.1;
            color: white;
            font-style: italic;
            font-size:2rem;
          }
          p {
            color: white;
            line-height: 1.5;
          }
        }

        .section2_data_right {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          
          position: relative;
          .img_wrapper {
            position: relative;
            height: 45%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            color: white;

            font-size: 1.5rem;
            text-align: left;
            width: 80%;
            text-transform: uppercase;
          }

          p {
            width: 80%;
            line-height: 1.2;
            color: white;
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
      
      background-color: #23344e;
      .tringle {
        position: absolute;
        right: 10%;
        width: 0;
        top: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid #23344e;
      }

      .section2_data {
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .section2_data_left {
          display: flex;
          width: 100%;
          height: 30rem;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 2.5rem;
            color: white;
            position: relative;

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
          }
          .img_wrapper {
            position: relative;
            height: 60%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            line-height: 1.1;
            color: white;
            font-style: italic;
            font-size:2rem;
          }
          p {
            color: white;
            line-height: 1.5;
          }
        }

        .section2_data_right {
          display: flex;
          width: 95%;
          height: 40rem;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
        
          position: relative;
          .img_wrapper {
            position: relative;
            height: 45%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            color: white;
 
            font-size: 1.5rem;
            text-align: left;
            width: 100%;
            text-transform: uppercase;
          }

          p {
            width: 100%;
            line-height: 1.2;
            color: white;
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
      
      background-color: #23344e;
   

      .section2_data {
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .section2_data_left {
          display: flex;
          width: 90%;
          height: 45rem;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          h2 {            
            font-size: 1.5rem;
            color: white;
            position: relative;
            text-transform: uppercase;
            margin-top: 15px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            height: 100%;
            width: 0.4rem;
            top: 0;
            left: -0.3rem;
          }
          .img_wrapper {
            position: relative;
            height: 60%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            line-height: 1.3;
            color: white;
            font-style: italic;
            font-size:2rem;
          }
          p {
            color: white;
            line-height: 1.3;
            font-weight: 600;
            font-size: 18px;
          }
        }

        .section2_data_right {
          display: flex;
          width: 90%;
          height: 45rem;         
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;        
          position: relative;
          .img_wrapper {
            position: relative;
            height: 30%;
            width: 100%;
            line-height: 1.1;
          }
          h3 {
            color: white;
 
            font-size: 1.5rem;
            text-align: left;
            width: 100%;
            text-transform: uppercase;
          }

          p {
            width: 100%;
            line-height: 1.3;
            color: white;
            font-weight: 600;
            font-size: 18px;
            margin-top: 15px;
          }
        }
      }
    }

 
  }


   @media (max-width: 991px) and (orientation : landscape) {
     .section4 {
       .section2_data {
         .section2_data_left{
            height: 26rem;
            margin-top: 10px;
            margin-bottom: 10px;
         }
         .section2_data_right {
            height: 30rem;
            justify-content: end;
            h3{
              margin-top: 20px;
            }
            p {
              margin-top: 10px;
            }
         }
       }
     }
   }





`;
