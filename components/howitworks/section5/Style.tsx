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

      width: 90%;
      align-items: center;
      position: relative;
      height: 35rem;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .section2_data_left {
        display: flex;
        width: 50%;
        height: 100%;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        h2 {
          width: 118%;
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
          background-color:  ${(props) => props.theme.colors.blue};
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
          padding-left: 0.5rem;
          margin-bottom: 1.5rem;
          width: 80%;
          line-height: 2;
          font-weight: 800;
        }
      }

      .section2_data_right {
        display: flex;
        width: 45%;
        height: 100%;
        justify-content: flex-start;
        align-items: center;

        .wrapper {
          position: relative;
          width: 48%;
          height: 100%;
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    

    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 90%;
      align-items: center;
      position: relative;
      height: 35rem;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .section2_data_left {
        display: flex;
        width: 50%;
        height: 100%;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        h2 {
          position: relative;
          padding-left: 0.5rem;
          font-size: 3rem;
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
          background-color:  ${(props) => props.theme.colors.blue};
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
          margin-bottom: 1.5rem;
          width: 80%;
          line-height: 1.5;
        }
      }

      .section2_data_right {
        display: flex;
        width: 45%;
        height: 100%;
        justify-content: flex-start;
        align-items: center;

        .wrapper {
          position: relative;
          width: 48%;
          height: 100%;
        }
      }
    }



  
 

    
     
       
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    

    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 90%;
      align-items: center;
      position: relative;
      height: 40rem;

      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column-reverse;

      .section2_data_left {
        display: flex;
        width: 100%;
        height: 48%;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        h2 {
          position: relative;
          padding-left: 0.5rem;
          font-size: 3rem;
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
          background-color:  ${(props) => props.theme.colors.blue};
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
          margin-bottom: 1.5rem;
          width: 80%;
          line-height: 1.5;
        }
      }

      .section2_data_right {
        display: flex;
        width: 100%;
        height: 48%;
        justify-content: flex-start;
        align-items: center;

        .wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
      }
    }
    


  }

  @media (max-width: 767px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 90%;
      align-items: center;
      position: relative;
      
    height: 38rem;

      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column-reverse;

      .section2_data_left {
        display: flex;
        width: 100%;
        height: 70%;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        h2 {
          
          position: relative;
          padding-left: 0.5rem;
          font-size: 1.5rem;
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
          background-color:  ${(props) => props.theme.colors.blue};
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
          margin-bottom: 1.5rem;
          width: 100%;
          line-height: 1.3;
          font-weight: 600;
        }
      }

      .section2_data_right {
        display: flex;
        width: 100%;
        height: 30%;
        justify-content: flex-start;
        align-items: center;

        .wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
      }
    }

 
  }



  @media (max-width: 991px) and (orientation : landscape) {
    .section4 {
      .section2_data_left {
        h2{
          margin-bottom: 1rem;
        }
        p{
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 414px) {
    .section4{
       .section2_data_left {
         h2 {
           margin-left: 5px;
         }
       }
    }
  }

`;
