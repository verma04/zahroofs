import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .aboutus {
      background: #fbfbfb;
      position: relative;
      height: 26rem;
      width: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;
      margin-bottom: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .aboutus_section {
        display: flex;
        justify-content: center;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;
        width: 80%;
        height: 100%;
        margin-top: 4rem;
        h2 {
          text-align: left;
          width: 100%;
          position: relative;
          font-size: 46px;
          line-height: 46px;
          padding-left: 0.7rem;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        h2:after {
          position: absolute;
          width: 0.35rem;
          display: block;
          height: 60%;
          left: -1%;
          top: 20%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }
        p {
          text-align: left;
          width: 100%;
          margin-left: 20px;
          font-size: 16px;
          line-height: 28px;
          font-family: Proxima-Bold;
          margin-bottom: 20px;
          margin-left: 20px;
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .aboutus {
      background: #fbfbfb;
      position: relative;
      height: 26rem;
      width: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;
      margin-bottom: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .aboutus_section {
        display: flex;
        justify-content: center;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;
        width: 85%;
        height: 100%;
        margin-top: 4rem;
        h2 {
          text-align: left;
          width: 100%;
          position: relative;
          font-size: 46px;
          line-height: 46px;
          padding-left: 0.7rem;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        h2:after {
          position: absolute;
          width: 0.35rem;
          display: block;
          height: 60%;
          left: -1%;
          top: 20%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }
        p {
          text-align: left;
          width: 100%;
          margin-left: 20px;
          font-size: 16px;
          line-height: 28px;
          font-family: Proxima-Bold;
          margin-bottom: 20px;
          margin-left: 20px;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .aboutus {
      background: #fbfbfb;
      position: relative;
      height: 26rem;
      width: 100%;
      z-index: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;
      margin-bottom: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .aboutus_section {
        display: flex;
        justify-content: center;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;
        width: 90%;
        height: 100%;
        margin-top: 4rem;
        h2 {
          text-align: left;
          width: 100%;
          position: relative;
          font-size: 46px;
          line-height: 46px;
          padding-left: 0.7rem;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        h2:after {
          position: absolute;
          width: 0.35rem;
          display: block;
          height: 60%;
          left: -1%;
          top: 20%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }
        p {
          text-align: left;
          width: 100%;
          margin-left: 20px;
          font-size: 16px;
          line-height: 28px;
          font-family: Proxima-Bold;
          margin-bottom: 20px;
          margin-left: 20px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .aboutus {
      position: relative;
      height: 30rem;
      width: 100%;
      
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      position: relative;
      margin-bottom: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .aboutus_section {
        display: flex;
        justify-content: center;
        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: center;
        width: 95%;
        height: 100%;

        margin-top: 4rem;
        h2 {
          text-align: left;
          width: 95%;
          position: relative;
          font-size: 1.5rem;

          text-transform: uppercase;
          margin-bottom: 20px;
        }
        h2:after {
          position: absolute;
          width: 0.3rem;
          display: block;
          height: 90%;
          left: -3%;
          top: 0%;
          background:  ${(props) => props.theme.colors.blue};
          border-left: 1px white;
          content: "";
        }
        p {
          text-align: left;
          width: 95%;
          font-size: 1rem;
          line-height: 1.4;
          font-family: Proxima-Light;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
    }
  }

  @media (max-width: 414px) {
    .aboutus{
      height: 32rem;
      .aboutus_section {
        h2 {
          margin-left: 1rem;
        }
      }
    }
  }

  @media (max-width: 360px) {
    .aboutus{
      height: 32rem;
      .aboutus_section {
        p {
          font-size: 15px;
        }
      }
    }
  }

`;
