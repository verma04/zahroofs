import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: #3b546a;
        height: 350px;
        #top {
          font-size: 51px;
          line-height: 60px;
          width: 80%;

          font-family: "Caveat";

          color:  ${(props) => props.theme.colors.blue};
        }
        span {
          font-family: "Caveat-Light";
          font-size: 2rem;
          width: 60%;
          margin-top: 2rem;
          line-height: 1.3;
          color:  ${(props) => props.theme.colors.blue};
          text-align: right;
        }
      }

      .tringle {
        position: absolute;
        left: 10%;
        width: 0;
        top: -11%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid #3b546a;
        z-index: 1;
      }
      .section-bottom {
        background-color:  ${(props) => props.theme.colors.blue};
        height: 36px;
        width: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: #3b546a;

        #top {
          font-size: 1.5rem;

          width: 90%;
          text-align: left;
          line-height: 1.3;
          color:  ${(props) => props.theme.colors.blue};
          font-family: "Caveat-Light";
          padding-top: 2rem;
        }
        span {
          font-family: "Caveat-Light";
          font-size: 1.5rem;
          width: 80%;

          color:  ${(props) => props.theme.colors.blue};
          text-align: right;
          padding-bottom: 2rem;
        }
      }

    
      .section-bottom {
        background-color:  ${(props) => props.theme.colors.blue};
        height: 36px;
        width: 100%;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: #3b546a;

        height: 10rem;

        #top {
          font-size: 1.5rem;
          width: 80%;
          text-align: left;
          line-height: 1.3;
          color:  ${(props) => props.theme.colors.blue};
          font-family: "Caveat-Light";
        }
        span {
          font-family: "Caveat-Light";
          font-size: 1.5rem;
          width: 80%;

          color:  ${(props) => props.theme.colors.blue};
          text-align: right;
        }
      }

      .tringle {
        position: absolute;
        left: 10%;
        width: 0;
        top: -11%;
        height: 0;
        border-left: 3rem solid transparent;
        border-right: 3rem solid transparent;
        border-bottom: 2rem solid #3b546a;
        z-index: 1;
      }
      .section-bottom {
        background-color:  ${(props) => props.theme.colors.blue};
        height: 36px;
        width: 100%;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: #3b546a;

        height: 10rem;

        #top {
          font-size: 1.5rem;

          width: 80%;
          text-align: left;
          line-height: 1.3;
          color:  ${(props) => props.theme.colors.blue};
          font-family: "Caveat-Light";
        }
        span {
          font-family: "Caveat-Light";
          font-size: 1.5rem;
          width: 80%;

          color:  ${(props) => props.theme.colors.blue};
          text-align: right;
        }
      }

      .tringle {
        position: absolute;
        left: 10%;
        width: 0;
        top: -11%;
        height: 0;
        border-left: 3rem solid transparent;
        border-right: 3rem solid transparent;
        border-bottom: 2rem solid #3b546a;
        z-index: 1;
      }
      .section-bottom {
        background-color:  ${(props) => props.theme.colors.blue};
        height: 36px;
        width: 100%;
      }
    }
  }

   @media (max-width: 991px) and (orientation : landscape) {
     .section {
       .section_top {
         #top {
            font-size: 2rem;
        }
       }
     }
   }

  @media (max-width: 414px) {
    .section {
      .section_top {
        #top{
          font-size: 1.7rem;
        }
      }
    }
  }

`;
