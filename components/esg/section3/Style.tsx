import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
span {
  font-family: "Caveat";
}
  @media (min-width: 1281px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 20rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 9%;
        top: -5rem;
        bottom: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 5rem solid #3c4e62;
        z-index: 1;
      }

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        h3 {
          width: 80%;
          color: white;
          font-size: 30px;
          line-height: 38px;
        }
        p {
          text-transform: uppercase;
          width: 80%;
          color: white;

          font-size: 30px;
          line-height: 38px;
        }
      span {
          text-transform: uppercase;
          width: 80%;
          color: white;
   text-align: right;
          font-size: 30px;
          line-height: 38px;
    
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 20rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 9%;
        top: -5rem;
        bottom: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 5rem solid #3c4e62;
        z-index: 1;
      }

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        h3 {
          width: 80%;
          color: white;
          font-size: 30px;
          line-height: 38px;
        }
        p {
          text-transform: uppercase;
          width: 80%;
          color: white;

          font-size: 30px;
          line-height: 38px;
        }
      span{
          text-transform: uppercase;
          width: 80%;
          color: white;

          font-size: 30px;
          line-height: 38px;
          margin-left: 20%;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 15rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 9%;
        top: -5rem;
        bottom: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 5rem solid #3c4e62;
        z-index: 1;
      }

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        h3 {
          width: 80%;
          color: white;
          font-size: 26px;
          line-height: 32px;
        }
        p {
          text-transform: uppercase;
          width: 90%;
          color: white;

          font-size: 20px;
          line-height: 22px;
        }
      span {
          text-transform: uppercase;
          width: 90%;
          color: white;

          font-size: 20px;
          line-height: 22px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 25rem;
      background-color: #3c4e62;
      .tringle {
        position: absolute;
        left: 9%;
        top: -5rem;
        bottom: -5%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 5rem solid #3c4e62;
        z-index: 1;
      }

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        h3 {
          width: 90%;
          color: white;
          font-size: 26px;
          line-height: 32px;
        }
        p {
          text-transform: uppercase;
          width: 90%;
          color: white;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 600;
        }


      span {
          text-transform: uppercase;
          width: 90%;
          color: white;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 600;
        }


      }
    }
  }


 
  @media (max-width: 991px) and (orientation : landscape) {
    .section2 {
      .section_data {
        h3{
          line-height: 1.3;
          margin-left: -6rem;
        }
        p{
          font-size: 18px;
          line-height: 1.2;
          font-weight: 600;
        }
      }
    }
  }




`;
