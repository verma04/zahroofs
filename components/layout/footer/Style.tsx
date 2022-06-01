import styled from "styled-components";

export const Foot = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    a {
      font-weight: 900;
    }
    .footer_newsLetter {
      display: flex;
      justify-content: center;

      align-items: center;
      width: 100%;
      align-items: center;
      height: 8rem;
      background-color: #3c4e62;
      border-bottom: 2px solid black;
      h3 {
        color: #b4b4b4;
        margin-right: 1rem;
        line-height: 1.4;
        text-transform: uppercase;
        text-align: left;
        font-size: 1rem;
      }
      form {
        width: 40%;
        height: 2.7rem;
        display: flex;
        justify-content: center;
        background-color: black;
        align-items: center;
        input {
          width: 90%;
          height: 90%;
          border: none;
          color: white;
          font-weight: 1000;
          font-style: 1.2rem;
          padding-left: 2rem;
          background-color: black;
          ::placeholder {
            color: #dddddd;
            opacity: 1; /* Firefox */
          }
        }
        .message {
          width: 10%;
          height: 50%;
          position: relative;
        }
      }
    }

    .footer {
      display: flex;

      flex-direction: column;
      align-items: center;
      width: 100%;
      align-items: center;
      height: 13rem;
      background-color: #3c4e62;
      border-bottom: 2px solid black;
      .footer-top {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
        height: 70%;

        .footer-left {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 70%;
          li {
            a {
              text-transform: uppercase;
            }
          }
        }
        .footer-right {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 30%;
          li {
            position: relative;
            width: 1rem;
            height: 1rem;
          }
        }
      }
      span {
        font-family: Proxima-Bold;
        color: #b2b2b3;
        font-size: 1rem;
        margin-bottom: 3rem;
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    a {
      font-weight: 900;
    }
    .footer_newsLetter {
      display: flex;
      justify-content: center;

      align-items: center;
      width: 100%;
      align-items: center;
      height: 8rem;
      background-color: #3c4e62;
      border-bottom: 2px solid black;
      h3 {
        color: #b4b4b4;
        margin-right: 1rem;
        line-height: 1.4;
        text-transform: uppercase;
        text-align: left;
        font-size: 1rem;
      }
      form {
        width: 50%;
        height: 2.7rem;
        display: flex;
        justify-content: center;
        background-color: black;
        align-items: center;
        input {
          width: 90%;
          height: 90%;
          border: none;
          color: white;
          font-weight: 1000;
          font-style: 1.2rem;
          padding-left: 2rem;
          background-color: black;
          ::placeholder {
            color: #dddddd;
            opacity: 1; /* Firefox */
          }
        }
        .message {
          width: 10%;
          height: 50%;
          position: relative;
        }
      }
    }

    .footer {
      display: flex;

      flex-direction: column;
      align-items: center;
      width: 100%;
      align-items: center;
      height: 13rem;
      background-color: #3c4e62;
      border-bottom: 2px solid black;
      .footer-top {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 60%;
        height: 70%;

        .footer-left {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 70%;
          li {
            a {
              text-transform: uppercase;
            }
          }
        }
        .footer-right {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 30%;
          li {
            position: relative;
            width: 1rem;
            height: 1rem;
          }
        }
      }
      span {
        font-family: Proxima-Bold;
        color: #b2b2b3;
        font-size: 1rem;
        margin-bottom: 3rem;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    a {
      font-weight: 900;
    }

    .footer_newsLetter {
      display: flex;
      justify-content: center;

      align-items: center;
      width: 100%;
      align-items: center;
      height: 8rem;
      background-color: #3c4e62;
      border-bottom: 2px solid black;
      h3 {
        color: #b4b4b4;
        margin-right: 1rem;
        line-height: 1.4;
        text-transform: uppercase;
        text-align: left;
        font-size: 1rem;
      }
      form {
        width: 50%;
        height: 2.7rem;
        display: flex;
        justify-content: center;
        background-color: black;
        align-items: center;
        input {
          width: 90%;
          height: 90%;
          border: none;
          color: white;
          font-weight: 1000;
          font-style: 1.2rem;
          padding-left: 2rem;
          background-color: black;
          ::placeholder {
            color: #dddddd;
            opacity: 1; /* Firefox */
          }
        }
        .message {
          width: 10%;
          height: 50%;
          position: relative;
        }
      }
    }

    .footer {
      display: flex;

      flex-direction: column;
      align-items: center;
      width: 100%;
      align-items: center;
      height: 13rem;
      background-color: #3c4e62;
      border-bottom: 2px solid black;
      .footer-top {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 99%;
        height: 80%;

        .footer-left {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 70%;
          li {
            a {
              text-transform: uppercase;
            }
          }
        }
        .footer-right {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 30%;
          li {
            position: relative;
            width: 1rem;
            height: 1rem;
          }
        }
      }
      span {
        font-family: Proxima-Bold;
        color: #b2b2b3;
        font-size: 1rem;
        margin-bottom: 3rem;
      }
    }
  }

  @media (max-width: 767px) {
    a {
      font-weight: 900;
    }
    .footer_newsLetter {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: space-around;
      width: 100%;
      align-items: center;
      height: 8rem;
      background-color: #3c4e62;
      border-bottom: 2px solid black;
      h3 {
        color: #b2b2b3;
        margin-right: 1rem;
        line-height: 1.3;
        font-size: 1rem;
        text-transform: uppercase;
        text-align: center;
        font-size: 1rem;

      }
      form {
        margin-top: 1rem;
        padding-left: 1rem;
        width: 90%;
        height: 2rem;
        display: flex;
        justify-content: center;
        background-color: black;
        align-items: center;
        input {
          width: 90%;
          height: 90%;
          border: none;
          color: #fafafb;
          font-weight: 1000;
          font-style: 1.2rem;
          padding-left: 2rem;
          background-color: black;
        }
        .message {
          margin-left: -3rem;

          width: 10%;
          height: 50%;
          position: relative;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 20rem;
      background-color: #3c4e62;
      border-bottom: 2px solid black;
      .footer-top {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        width: 70%;
        height: 80%;

        .footer-left {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          width: 70%;
          height: 45%;
          li {
            a {
              text-transform: uppercase;
              font-size: 15px;
            }
          }
        }
        .footer-right {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 80%;

          li {
            position: relative;
            width: 1rem;
            height: 1rem;
          }
        }
      }
      span {
        margin-bottom: 3rem;
        color: #b2b2b3;
        font-size: 1rem;
      }
    }
  }

   @media (max-width: 991px) and (orientation : landscape) {
     .footer {
       .footer-top {
         .footer-left {
           li{
              a {
                  font-size: 14px;
              }
           }
         }
       }
     }
   }

  @media (max-width: 412px) {
    .footer_newsLetter {
      h3 {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }

`;
