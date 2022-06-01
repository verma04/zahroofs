import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section {
      /* margin-bottom: 3rem; */
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 40rem;

      .section_data {
        margin-bottom: 3rem;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        align-items: center;
        label {
          color: #7c7c7c;
        }

        .section_left {
          width: 100%;
          height: 20%;

          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;

          .section-left-top {
            height: 80%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            h2 {
              width: 100%;
              font-size: 46px;
              line-height: 40px !important;
              text-align: center;
              position: relative;
            }
            h2:after {
              bottom: -49%;
              left: 49%;
              position: absolute;
              height: 5px;
              display: block;
              width: 3%;
              background: #0f5885;
              border-left: 1px white;
              content: "";
            }
            h3 {
              font-size: 18px;
              text-align: center;
              width: 100%;
              color: #7c7c7c;
              line-height: 28px;
              
            }
          }
          .section-left-bottom {
            width: 70%;
            height: 25%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 10px;
              display: block;
              width: 100%;
              background: #0f5885;
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;

              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;

              line-height: 1.5;
            }
          }
        }
        .section_right {
          margin-top: 2rem;

          width: 60%;
          height: 70%;
          display: flex;
          justify-content: space-evenly;

          align-items: center;
          .icon {
            width: 20%;
            height: 100%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            ul {
              width: 100%;
              height: 40%;

              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              li:nth-child(1) {
                margin-bottom: 1rem;
                position: relative;
                height: 2rem;
                width: 100%;
              }
              li {
                margin-top: 1.5rem;
                font-family: Proxima-Bold;
                width: 100%;
                text-align: center;
                color: #7c7c7c;
              }
            }
          }
          .form {
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            input {
              opacity: 0.8;
              background: #f8f8f8;
              font-size: 14px;
              line-height: 33px;
            }
            textarea {
              opacity: 0.8;
              resize: none;
              width: 100%;
              font-size: 14px;
              line-height: 33px;
            }
            select {
              width: 100%;
              height: 60%;
              font-size: 14px;
              line-height: 33px;
              padding: 5px;
              border: none;
              color: #7c7c7c;
              opacity: 0.8;
             
              background-position-x: 97%;
              background-size: 10px;
              -webkit-appearance: none;
              -moz-appearance: none;
              border: 1px solid #efeae4;
            }
            form {
              display: flex;
              justify-content: space-between;
              align-items: center;

              width: 90%;
              height: 100%;

              flex-direction: column;
              .input-field {
                width: 100%;
                height: 20%;

                display: flex;
                justify-content: space-between;
                button {
                  margin-top: 5%;
                  margin-left: 0.5rem;
                  position: relative;
                  font-size: 14px;
                  line-height: 24px;
                  padding: 1rem;
                  height: 60px;
                  width: 175px;
                  border-radius: 1px;
                  text-transform: uppercase;
                  background-color: #3c4e62;
                }
                button:after {
                  top: 0%;
                  left: -3%;
                  position: absolute;
                  height: 100%;
                  display: block;
                  width: 10px;
                  background:  ${(props) => props.theme.colors.blue};;
                  border-left: 1px white;
                  content: "";
                }
                .field {
                  width: 47%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 60%;
                    background-color: #f8f8f8;
                    /* border-radius:5px; */
                    color: #7c7c7c;
                    font-size: 14px;
                    line-height: 33px;
                  }
                }

                .field-1 {
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 65%;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    line-height: 33px;
                    /* border-radius:5px; */
                  }
                }
              }
              .input-field-1 {
                width: 100%;
                height: 45%;

                display: flex;
                justify-content: center;
                flex-direction: column;
                .field {
                  width: 100%;
                  height: 95%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  textarea {
                    width: 100%;
                    height: 84%;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    line-height: 33px;
                    /* border-radius:5px; */
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      /* margin-bottom: 3rem; */
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 40rem;

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        align-items: center;
        label {
          color: #7c7c7c;
        }

        .section_left {
          width: 100%;
          height: 20%;

          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;

          .section-left-top {
            height: 85%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            h2 {
              width: 100%;
              font-size: 46px;
              line-height: 40px;
              text-align: center;
              position: relative;
            }
            h2:after {
              bottom: -25%;
              left: 49%;
              position: absolute;
              height: 5px;
              display: block;
              width: 4%;

              background: #0f5885;
              border-left: 1px white;
              content: "";
            }
            h3 {
              font-size: 18px;
              text-align: center;
              width: 100%;
              color: #7c7c7c;
              line-height: 28px;
              margin-top: 3rem;
            }
          }
          .section-left-bottom {
            width: 70%;
            height: 25%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 10px;
              display: block;
              width: 100%;
              background: #0f5885;
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;

              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;

              line-height: 1.5;
            }
          }
        }
        .section_right {
          margin-top: 2rem;

          width: 90%;
          height: 70%;
          display: flex;
          justify-content: space-evenly;

          align-items: center;
          .icon {
            width: 20%;
            height: 100%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            ul {
              width: 100%;
              height: 40%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              li:nth-child(1) {
                position: relative;
                height: 2rem;
                width: 100%;
              }
              li {
                margin-top: 1.5rem;
                font-family: Proxima-Bold;
                width: 100%;
                text-align: center;
                color: #7c7c7c;
              }
            }
          }
          .form {
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            input {
              opacity: 0.8;
              background: #f8f8f8;
              font-size: 14px;
              line-height: 33px;
            }
            textarea {
              opacity: 0.8;
              resize: none;
              width: 100%;
              font-size: 14px;
              line-height: 33px;
            }
            select {
              width: 100%;
              height: 60%;
              font-size: 14px;
              line-height: 33px;
              padding: 5px;
              border: none;
              color: #7c7c7c;
              opacity: 0.8;
             
              background-position-x: 97%;
              background-size: 10px;
              -webkit-appearance: none;
              -moz-appearance: none;
              border: 1px solid #efeae4;
            }
            form {
              display: flex;
              justify-content: space-between;
              align-items: center;

              width: 90%;
              height: 100%;

              flex-direction: column;
              .input-field {
                width: 100%;
                height: 20%;

                display: flex;
                justify-content: space-between;
                button {
                  margin-top: 5%;
                  margin-left: 0.5rem;
                  position: relative;
                  font-size: 14px;
                  line-height: 24px;
                  padding: 1rem;
                  height: 60px;
                  width: 175px;
                  border-radius: 1px;
                  text-transform: uppercase;
                  background-color: #3c4e62;
                }
                button:after {
                  top: 0%;
                  left: -3%;
                  position: absolute;
                  height: 100%;
                  display: block;
                  width: 10px;
                  background: ${(props) => props.theme.colors.blue};
                  border-left: 1px white;
                  content: "";
                }
                .field {
                  width: 47%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 60%;
                    background-color: #f8f8f8;
                    /* border-radius:5px; */
                    color: #7c7c7c;
                    font-size: 14px;
                    line-height: 33px;
                  }
                }

                .field-1 {
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 65%;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    line-height: 33px;
                    /* border-radius:5px; */
                  }
                }
              }
              .input-field-1 {
                width: 100%;
                height: 45%;

                display: flex;
                justify-content: center;
                flex-direction: column;
                .field {
                  width: 100%;
                  height: 95%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  textarea {
                    width: 100%;
                    height: 84%;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    line-height: 33px;
                    /* border-radius:5px; */
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .section {
      /* margin-bottom: 3rem; */
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 35rem;

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        align-items: center;
        label {
          color: #7c7c7c;
        }

        .section_left {
          width: 100%;
          height: 20%;

          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;

          .section-left-top {
            height: 80%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            h2 {
              width: 100%;
              font-size: 46px;
              line-height: 40px;
              text-align: center;
              position: relative;
            }
            h2:after {
              bottom: -25%;
              left: 49%;
              position: absolute;
              height: 5px;
              display: block;
              width: 4%;

              background: #0f5885;
              border-left: 1px white;
              content: "";
            }
            h3 {
              font-size: 18px;
              text-align: center;
              width: 100%;
              color: #7c7c7c;
              line-height: 28px;
              margin-top: 3rem;
            }
          }
          .section-left-bottom {
            width: 80%;
            height: 25%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 10px;
              display: block;
              width: 100%;
              background: #0f5885;
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;

              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;

              line-height: 1.5;
            }
          }
        }
        .section_right {
          margin-top: 1rem;

          width: 100%;
          height: 70%;
          display: flex;
          justify-content: space-evenly;

          align-items: center;
          .icon {
            width: 20%;
            height: 100%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            ul {
              width: 100%;
              height: 40%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              li:nth-child(1) {
                position: relative;
                height: 2rem;
                width: 100%;
              }
              li {
                font-size: 0.9rem;
                margin-top: 1.5rem;
                font-family: Proxima-Bold;
                width: 100%;
                text-align: center;
                color: #7c7c7c;
              }
            }
          }
          .form {
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            input {
              opacity: 0.8;
              background: #f8f8f8;
              font-size: 14px;
              line-height: 33px;
            }
            textarea {
              opacity: 0.8;
              resize: none;
              width: 100%;
              font-size: 14px;
              line-height: 33px;
            }
            select {
              width: 100%;
              height: 60%;
              font-size: 14px;
              line-height: 33px;
              padding: 5px;
              border: none;
              color: #7c7c7c;
              opacity: 0.8;
             
              background-position-x: 97%;
              background-size: 10px;
              -webkit-appearance: none;
              -moz-appearance: none;
              border: 1px solid #efeae4;
            }
            form {
              display: flex;
              justify-content: space-between;
              align-items: center;

              width: 90%;
              height: 100%;

              flex-direction: column;
              .input-field {
                width: 100%;
                height: 20%;

                display: flex;
                justify-content: space-between;
                button {
                  margin-top: 5%;
                  margin-left: 0.5rem;
                  position: relative;
                  font-size: 14px;
                  line-height: 24px;
                  padding: 1rem;
                  height: 60px;
                  width: 175px;
                  border-radius: 1px;
                  text-transform: uppercase;
                  background-color: #3c4e62;
                }
                button:after {
                  top: 0%;
                  left: -3%;
                  position: absolute;
                  height: 100%;
                  display: block;
                  width: 10px;
                  background: ${(props) => props.theme.colors.blue};
                  border-left: 1px white;
                  content: "";
                }
                .field {
                  width: 47%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 60%;
                    background-color: #f8f8f8;
                    /* border-radius:5px; */
                    color: #7c7c7c;
                    font-size: 14px;
                    line-height: 33px;
                  }
                }

                .field-1 {
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 65%;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    line-height: 33px;
                    /* border-radius:5px; */
                  }
                }
              }
              .input-field-1 {
                width: 100%;
                height: 45%;

                display: flex;
                justify-content: center;
                flex-direction: column;
                .field {
                  width: 100%;
                  height: 95%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  textarea {
                    width: 100%;
                    height: 84%;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    line-height: 33px;
                    /* border-radius:5px; */
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .section {
      /* margin-bottom: 3rem; */
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      height: 40rem;

      .section_data {
        margin-bottom: 1rem;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        align-items: center;
        label {
          color: #7c7c7c;
        }

        .section_left {
          width: 100%;
          height: 15%;

          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;

          .section-left-top {
            height: 85%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            h2 {
              width: 100%;
              font-size: 1.5rem;
              text-align: center;
              position: relative;
            }
            h2:after {
              bottom: -15%;
              left: 49%;
              position: absolute;
              height: 5px;
              display: block;
              width: 4%;

              background: #0f5885;
              border-left: 1px white;
              content: "";
            }
            h3 {
              font-size: 13px;
              text-align: center;
              width: 100%;
              color: #7c7c7c;
              line-height: 28px;
            }
          }
          .section-left-bottom {
            width: 90%;
            height: 25%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 10px;
              display: block;
              width: 100%;
              background: #0f5885;
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;

              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;

              line-height: 1.5;
            }
          }
        }
        .section_right {
          margin-top: 2rem;

          width: 100%;
          height: 70%;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;
          .icon {
            width: 100%;
            height: 20%;

            display: flex;
            justify-content: flex-start;

            align-items: center;
            ul {
              width: 50%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              li:nth-child(1) {
                position: relative;
                height: 2rem;
                width: 2rem;
              }
              li {
                margin-top: 0.5rem;
                font-family: Proxima-Bold;
                width: 100%;
                text-align: center;
                color: #7c7c7c;
              }
            }
          }
          .form {
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            input {
              opacity: 0.8;
              background: #f8f8f8;
              font-size: 14px;
              line-height: 33px;
            }
            textarea {
              opacity: 0.8;
              resize: none;
              width: 100%;
              font-size: 14px;
              line-height: 33px;
            }
            select {
              width: 100%;
              height: 60%;
              font-size: 14px;
              line-height: 33px;
              padding: 5px;
              border: none;
              color: #7c7c7c;
              opacity: 0.8;
             
              background-position-x: 97%;
              background-size: 10px;
              -webkit-appearance: none;
              -moz-appearance: none;
              border: 1px solid #efeae4;
            }
            form {
              display: flex;
              justify-content: space-between;
              align-items: center;

              width: 90%;
              height: 100%;

              flex-direction: column;
              .input-field {
                width: 100%;
                height: 20%;

                display: flex;
                justify-content: space-between;
                button {
                  margin-top: 5%;
                  margin-left: 0.5rem;
                  position: relative;
                  font-size: 14px;
                  line-height: 24px;
                  padding: 1rem;
                  height: 60px;
                  width: 175px;
                  border-radius: 1px;
                  text-transform: uppercase;
                  background-color: #3c4e62;
                }
                button:after {
                  top: 0%;
                  left: -3%;
                  position: absolute;
                  height: 100%;
                  display: block;
                  width: 10px;
                  background: ${(props) => props.theme.colors.blue};
                  border-left: 1px white;
                  content: "";
                }
                .field {
                  width: 47%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 60%;
                    background-color: #f8f8f8;
                    /* border-radius:5px; */
                    color: #7c7c7c;
                    font-size: 14px;
                    line-height: 33px;
                  }
                }

                .field-1 {
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 65%;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    line-height: 33px;
                    /* border-radius:5px; */
                  }
                }
              }
              .input-field-1 {
                width: 100%;
                height: 45%;

                display: flex;
                justify-content: center;
                flex-direction: column;
                .field {
                  width: 100%;
                  height: 95%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  textarea {
                    width: 100%;
                    height: 84%;
                    background-color: #f8f8f8;
                    font-size: 14px;
                    line-height: 33px;
                    /* border-radius:5px; */
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
