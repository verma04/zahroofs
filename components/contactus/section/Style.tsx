import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  option {
    text-transform: uppercase;
  }
button {
  color:  ${(props) => props.theme.colors.darkblue} !important;
}
  @media (min-width: 1281px) {
    .section-1 {
      display: none;
    }
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      height: 773px;
      background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/08/rfrkr499ec2ow6izav59.jpg"); /* The image used */

      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .section_left {
          width: 45%;
          height: 100%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-end;

          .section-left-top {
            
            width: 65%;
            height: 55%;
            padding-top: 5%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-end;

            h2 {
              font-size: 56px;
              line-height: 0.9;

              text-align: right;

              width: 65%;
              color: white;
              position: relative;
            }
            h2:after {
              top: 0%;
              left: -10%;
              position: absolute;
              height: 100%;
              display: block;
              width: 5px;
              background: ${(props) => props.theme.colors.blue};
              border-left: 1px white;
              content: "";
            }
            h3 {
              font-family: 'Proxima-Light';
              margin-top: 2rem;
              font-size: 20px;
              text-align: right;

              width: 100%;
              color: white;
              line-height: 30px;
            }
          }
          .section-left-bottom {
            width: 60%;
            height: 30%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 7px;
              display: block;
              width: 100%;
              background: ${(props) => props.theme.colors.blue};
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
          }
        }
        .section_right {
          width: 50%;
          height: 100%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          .form {

    margin-left: 6%;

            width: 70%;
            height: 85%;
            display: flex;
            justify-content: center;
            input {
              opacity: 0.8;
            }
            textarea {
              opacity: 0.8;
            }
            select {
              opacity: 0.8;
            }
            form {
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              width: 90%;
              height: 100%;

              flex-direction: column;
              .input-field {
                width: 100%;
                height: 8%;

                display: flex;
                justify-content: space-between;
                button {
                  background-color:  ${(props) => props.theme.colors.blue} !important;
                  width: 25%;
                  font-size: 1.1rem;
                  font-weight: 1000;
             
                  
                  
                }
                .field {
                  width: 49%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
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
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
              .input-field-1 {
                width: 100%;
                height: 30%;

                display: flex;
                justify-content: space-between;
                flex-direction: column;
                .field {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: space-evenly;
                  align-items: flex-start;
                  flex-direction: column;

                  textarea {
                    width: 100%;
                    height: 80%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
              .input-field-2 {
                width: 100%;
                height: 7%;

                display: flex;
                justify-content: space-between;

                .field {
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;
                  flex: 1;
                  select {
                    width: 100%;
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                    font-family: Proxima-Light;
                  }
                  input {
                    font-family: Proxima-Light;
                  }
                  label {
                    color: #c1c4ca;
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
    .section-1 {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      height: 80rem;
      background-image: url("https://app.zahroofvalves.com/wp-content/uploads/2021/08/rfrkr499ec2ow6izav59.jpg"); /* The image used */

      /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */

      .section_data {
        position: absolute;
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        flex-direction: column;

        .section_left {
          width: 100%;
          height: 25%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;

          .section-left-top {
            width: 95%;
            height: 55%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;

            h2 {
              font-size: 55px;
              line-height: 0.9;

              text-align: right;

              width: 78%;

              color: white;
              position: relative;
            }
            h2:after {
              top: 0%;
              left: -10%;
              position: absolute;
              height: 100%;
              display: block;
              width: 5px;
              background: ${(props) => props.theme.colors.blue};
              border-left: 1px white;
              content: "";
            }
            h3 {
              margin-top: 2rem;
              font-size: 20px;
              text-align: right;
              font-family: 'Proxima-Light';
              width: 100%;
              color: white;
              line-height: 30px;
            }
          }
          .section-left-bottom {
            width: 95%;
            height: 30%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 7px;
              display: block;
              width: 100%;
              background: ${(props) => props.theme.colors.blue};
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
          }
        }
        .section_right {
          width: 100%;
          height: 50%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          .form {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            input {
              opacity: 0.8;
            }
            textarea {
              opacity: 0.8;
            }
            select {
              opacity: 0.8;
            }
            form {
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              width: 90%;
              height: 100%;

              flex-direction: column;
              .input-field {
                width: 100%;
                height: 8%;

                display: flex;
                justify-content: space-between;
                button {
                  width: 25%;
                  font-size: 1.1rem;
                  font-weight: 1000;
                  background:  ${(props) => props.theme.colors.blue};
                 
                }
                .field {
                  width: 49%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
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
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
              .input-field-1 {
                width: 100%;
                height: 30%;

                display: flex;
                justify-content: space-between;
                flex-direction: column;
                .field {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: space-evenly;
                  align-items: flex-start;
                  flex-direction: column;

                  textarea {
                    width: 100%;
                    height: 80%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
              .input-field-2 {
                width: 100%;
                height: 7%;

                display: flex;
                justify-content: space-between;

                .field {
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;
                  flex: 1;
                  select {
                    width: 100%;
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                    font-family: Proxima-Light;
                  }
                  input {
                    font-family: Proxima-Light;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
            }
          }
        }

          .section_left_bottom {
          width: 100%;
          height: 25%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;

        
          .section-left-bottom {
            width: 95%;
            height: 70%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 7px;
              display: block;
              width: 100%;
              background: ${(props) => props.theme.colors.blue};
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
          }
        }
      }
    }

    .section {
      display: none;
    }


  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section-1 {
      display: none;
    }
    
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      height: 773px;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg"); /* The image used */

      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .section_left {
          width: 45%;
          height: 100%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-end;

          .section-left-top {
            width: 88%;
            height: 55%;
            padding-top: 5%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-end;

            h2 {
              font-size: 55px;
              line-height: 0.9;

              text-align: right;

              width: 65%;
              color: white;
              position: relative;
            }
            h2:after {
              top: 0%;
              left: -10%;
              position: absolute;
              height: 100%;
              display: block;
              width: 5px;
              background: ${(props) => props.theme.colors.blue};
              border-left: 1px white;
              content: "";
            }
            h3 {
              margin-top: 2rem;
              font-size: 20px;
              text-align: right;

              width: 100%;
              color: white;
              line-height: 30px;
            }
          }
          .section-left-bottom {
            width: 60%;
            height: 30%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 7px;
              display: block;
              width: 100%;
              background: ${(props) => props.theme.colors.blue};
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
          }
        }
        .section_right {
          width: 50%;
          height: 100%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          .form {
            width: 82%;

            height: 80%;
            display: flex;
            justify-content: center;
            input {
              opacity: 0.8;
            }
            textarea {
              opacity: 0.8;
            }
            select {
              opacity: 0.8;
            }
            form {
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              width: 90%;
              height: 100%;

              flex-direction: column;
              .input-field {
                width: 100%;
                height: 8%;

                display: flex;
                justify-content: space-between;
                button {
                  width: 25%;
                  font-size: 1.1rem;
                  font-weight: 1000;
                
                  background-image: ${(props) => props.theme.colors.blue};
                }
                .field {
                  width: 49%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
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
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
              .input-field-1 {
                width: 100%;
                height: 30%;

                display: flex;
                justify-content: space-between;
                flex-direction: column;
                .field {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: space-evenly;
                  align-items: flex-start;
                  flex-direction: column;

                  textarea {
                    width: 100%;
                    height: 80%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
              .input-field-2 {
                width: 100%;
                height: 7%;

                display: flex;
                justify-content: space-between;

                .field {
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;
                  flex: 1;
                  select {
                    width: 100%;
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                    font-family: Proxima-Light;
                  }
                  input {
                    font-family: Proxima-Light;
                  }
                  label {
                    color: #c1c4ca;
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
    .section-1 {
      display: none;
    }
    
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      height: 773px;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1625296161/rfrkr499ec2ow6izav59.jpg"); /* The image used */

      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */

      .section_data {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .section_left {
          width: 45%;
          height: 100%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-end;

          .section-left-top {
            width: 99%;

            height: 55%;
            padding-top: 5%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-end;

            h2 {
              font-size: 48px;
              line-height: 0.9;
              text-align: right;

              width: 65%;
              color: white;
              position: relative;
            }
            h2:after {
              top: 0%;
              left: -10%;
              position: absolute;
              height: 100%;
              display: block;
              width: 5px;
              background: ${(props) => props.theme.colors.blue};
              border-left: 1px white;
              content: "";
            }
            h3 {
              margin-top: 2rem;
              font-size: 20px;
              text-align: right;

              width: 100%;
              color: white;
              line-height: 30px;
            }
          }
          .section-left-bottom {
            width: 60%;
            height: 30%;

            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            position: relative;
            :after {
              top: 0%;
              position: absolute;
              height: 7px;
              display: block;
              width: 100%;
              background: ${(props) => props.theme.colors.blue};
              border-top: 1px white;
              content: "";
            }
            li {
              font-size: 1.5rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
            h3 {
              font-size: 1.2rem;
              text-align: left;

              width: 100%;
              color: white;
              line-height: 1.5;
            }
          }
        }
        .section_right {
          width: 50%;
          height: 100%;

          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          .form {
            width: 100%;

            height: 80%;
            display: flex;
            justify-content: center;
            input {
              opacity: 0.8;
            }
            textarea {
              opacity: 0.8;
            }
            select {
              opacity: 0.8;
            }
            form {
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              width: 90%;
              height: 100%;

              flex-direction: column;
              .input-field {
                width: 100%;
                height: 8%;

                display: flex;
                justify-content: space-between;
                button {
                  width: 25%;
                  font-size: 1.1rem;
                  font-weight: 1000;
                  background: ${(props) => props.theme.colors.blue};
                   color:  ${(props) => props.theme.colors.darkBlue};
  
                }
                .field {
                  width: 49%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;

                  input {
                    width: 100%;
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
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
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
              .input-field-1 {
                width: 100%;
                height: 30%;

                display: flex;
                justify-content: space-between;
                flex-direction: column;
                .field {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: space-evenly;
                  align-items: flex-start;
                  flex-direction: column;

                  textarea {
                    width: 100%;
                    height: 80%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
              .input-field-2 {
                width: 100%;
                height: 7%;

                display: flex;
                justify-content: space-between;

                .field {
                  width: 100%;
                  display: flex;
                  justify-content: flex-end;
                  align-items: flex-start;
                  flex-direction: column;
                  flex: 1;
                  select {
                    width: 100%;
                    height: 60%;
                    background-color: #c1c4ca;
                    border-radius: 5px;
                    font-family: Proxima-Light;
                  }
                  input {
                    font-family: Proxima-Light;
                  }
                  label {
                    color: #c1c4ca;
                  }
                }
              }
            }
          }
        }
      }
    }
  }


    @media (max-width: 414px) {
      
      .section-1 {
        background-image: url('https://app.zahroofvalves.com/wp-content/uploads/2021/07/e92mprbfemr6lekh6lyp.jpg');
        .section_data {
          .section_left {

            .section-left-top {
              height: 50%;
              h2{
                font-size: 50px;
                text-align: left;
                margin-right: 15px;
              }
              h3 {
                text-align: left;
              }
            }
            .section-left-bottom:after {
              height: 5px;
            }
          }
          
        }
      }

    }


`;
