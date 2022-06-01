import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  h2 {
    text-transform: uppercase;
  }

  @media (min-width: 1281px) {
    .section4 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 40rem;

      position: relative;

      .section2_data {
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
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
            font-size: 3.438rem;
            color: white;
            position: relative;
          }

          p {
            color: white;
            line-height: 2;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          display: flex;
          width: 45%;
          height: 80%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
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

      position: relative;

      .section2_data {
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
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
            font-size: 3rem;
            color: white;
            position: relative;
          }

          p {
            color: white;
            line-height: 2;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          display: flex;
          width: 45%;
          height: 80%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
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

      position: relative;

      .section2_data {
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        flex-direction: column-reverse;
        .section2_data_left {
          display: flex;
          width: 100%;
          height: 50%;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            padding-left: 0.5rem;
            font-size: 1.5rem;
            color: white;
            position: relative;
          }

          p {
            color: white;
            line-height: 1.3;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          display: flex;
          width: 100%;
          height: 45%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
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
      height: 50rem;

      position: relative;

      .section2_data {
        width: 90%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        flex-direction: column-reverse;
        .section2_data_left {
          display: flex;
          width: 100%;
          height: 50%;
          justify-content: space-around;
          align-items: left;
          flex-direction: column;
          h2 {
            position: relative;
            
            font-size: 1.5rem;
            color: white;
            position: relative;
          }

          p {
            color: white;
            line-height: 1.3;
            font-weight: 600;
            font-size: 18px;
            margin-top: 15px;
          }
          h3 {
            line-height: 1.1;
            color: white;
          }
        }

        .section2_data_right {
          display: flex;
          width: 59%;

          height: 45%;
          margin-bottom: 5%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          position: relative;
        }
      }
    }

 
  }

  @media (max-width: 991px) and (orientation : landscape) {
    .section4 {
      height: 27rem;
      .section2_data{
        flex-direction: row;
        .section2_data_right{
          height: 70%;
        }
      }
    }
  }

   @media (max-width: 414px) {
  }


`;
