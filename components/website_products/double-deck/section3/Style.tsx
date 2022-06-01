import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {

    .header {
      margin-top: 5rem;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 6em;
      li {
        display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
 
      height: 100%;
      h3 {
       text-transform: uppercase;
      }
      }
      #active {
 background-color:  ${(props) => props.theme.colors.darkblue};
 h3 {
 color:white;
 }     
}
    }
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 500px;
      background-color:  ${(props) => props.theme.colors.darkblue};
    

      .section2_data {
        width: 76%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 50%;
          height: 100%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            color:  white;
            position: relative;

            font-size: 20px;
            line-height: 46px;
         
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            width: 100%;
            height: 0.5rem;
            bottom: 0;
          bottom: -27px;
            background-color:  white;
          }

          span {
            color:  white;
            position: relative;
            text-transform: uppercase;
            font-size: 20px;
            line-height: 46px;
             
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          span:after {
            position: absolute;
            content: "";
            display: block;
            width: 40%;
            height: 0.1rem;
            bottom: 0;
          bottom: -2px;
            background-color:  white;
          }

          ul {
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            height: 40%;
            margin-top: 2em;
            li {
       color: white;
       list-style: circle;
       height: 20%;
       font-size: 1.5rem;
            }
          }
          p {
            width: 80%;
             color: ${(props) => props.theme.colors.darkblue};
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            
            line-height: 1.1;
             color: ${(props) => props.theme.colors.darkblue};
          }
        }

        .section2_data_right {
          display: flex;
          width: 50%;
          height: 30%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          color: white;
          li {
      
       list-style: circle;
       height: 20%;
       font-size: 1.7rem;
            }
            span {
              font-size: 20px;
            }
       
      
        }
        .img-wrapper {
          position: relative;
          width: 30%;
          height: 60%;
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .header {
      margin-top: 5rem;
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 6em;
      li {
        display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
 
      height: 100%;
      h3 {
       text-transform: uppercase;
      }
      }
      #active {
 background-color:  ${(props) => props.theme.colors.darkblue};
 h3 {
 color:white;
 }     
}
    }
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 500px;
      background-color:  ${(props) => props.theme.colors.darkblue};
    

      .section2_data {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 50%;
          height: 100%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            color:  white;
            position: relative;

            font-size: 20px;
            line-height: 46px;
         
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            width: 100%;
            height: 0.5rem;
            bottom: 0;
          bottom: -27px;
            background-color:  white;
          }

          span {
            color:  white;
            position: relative;
            text-transform: uppercase;
            font-size: 20px;
            line-height: 46px;
             
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          span:after {
            position: absolute;
            content: "";
            display: block;
            width: 40%;
            height: 0.1rem;
            bottom: 0;
          bottom: -2px;
            background-color:  white;
          }

          ul {
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            height: 40%;
            margin-top: 2em;
            li {
       color: white;
       list-style: circle;
       height: 20%;
       font-size: 1.2rem;
            }
          }
          p {
            width: 80%;
             color: ${(props) => props.theme.colors.darkblue};
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            
            line-height: 1.1;
             color: ${(props) => props.theme.colors.darkblue};
          }
        }

        .section2_data_right {
          display: flex;
          width: 50%;
          height: 30%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          color: white;
          li {
      
       list-style: circle;
       height: 20%;
       font-size: 1.2rem;
            }
            span {
              font-size: 20px;
            }
       
      
        }
        .img-wrapper {
          position: relative;
          width: 30%;
          height: 60%;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .header {
      margin-top: 5rem;
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4em;
      li {
        display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
 
      height: 100%;
      h3 {
       text-transform: uppercase;
      }
      }
      #active {
 background-color:  ${(props) => props.theme.colors.darkblue};
 h3 {
 color:white;
 }     
}
    }
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 500px;
      background-color:  ${(props) => props.theme.colors.darkblue};
    

      .section2_data {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        .section2_data_left {
          display: flex;
          width: 50%;
          height: 100%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            color:  white;
            position: relative;

            font-size: 20px;
            line-height: 46px;
         
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            width: 100%;
            height: 0.5rem;
            bottom: 0;
          bottom: -27px;
            background-color:  white;
          }

          span {
            color:  white;
            position: relative;
            text-transform: uppercase;
            font-size: 20px;
            line-height: 46px;
             
            margin-bottom: 38px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          span:after {
            position: absolute;
            content: "";
            display: block;
            width: 40%;
            height: 0.1rem;
            bottom: 0;
          bottom: -2px;
            background-color:  white;
          }

          ul {
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            height: 40%;
            margin-top: 2em;
            li {
       color: white;
       list-style: circle;
       height: 20%;
       font-size: 1.2rem;
            }
          }
          p {
            width: 80%;
             color: ${(props) => props.theme.colors.darkblue};
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            
            line-height: 1.1;
             color: ${(props) => props.theme.colors.darkblue};
          }
        }

        .section2_data_right {
          display: flex;
          width: 50%;
          height: 30%;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          color: white;
          li {
      
       list-style: circle;
       height: 20%;
       font-size: 1.2rem;
            }
            span {
              font-size: 20px;
            }
       
      
        }
        .img-wrapper {
          position: relative;
          width: 30%;
          height: 60%;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .header {
      margin-top: 4rem;
      width: 95%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4em;
      li {
        display: flex;
      justify-content: center;
      align-items: center;
      width: 32%;
 
      height: 100%;
      h3 {
       text-transform: uppercase;
      }
      }
      #active {
 background-color:  ${(props) => props.theme.colors.darkblue};
 h3 {
 color:white;
 }     
}
    }
    .section6 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 500px;
      background-color:  ${(props) => props.theme.colors.darkblue};
    

      .section2_data {
        width: 95%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        flex-wrap: wrap;
        flex-direction: column;
        .section2_data_left {
          display: flex;
          width: 100%;
          height: 60%;
          justify-content: center;
          align-items: left;
          flex-direction: column;
          h2 {
            width: 100%;
            color:  white;
            position: relative;

            font-size: 20px;
       
         
    
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          h2:after {
            position: absolute;
            content: "";
            display: block;
            width: 100%;
            height: 0.1rem;
            bottom: 0;
        
            background-color:  white;
          }

          span {
            color:  white;
            position: relative;
            text-transform: uppercase;
            font-size: 20px;
            line-height: 46px;
             
     
            text-transform: uppercase;
            position: relative;
            padding: 5px 0px;
          }
          span:after {
            position: absolute;
            content: "";
            display: block;
            width: 40%;
            height: 0.1rem;
            bottom: 0;
          bottom: -2px;
            background-color:  white;
          }

          ul {
            display: flex;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            height: 40%;
            width: 90%;
            margin-top: 2em;
            li {
       color: white;
       list-style: circle;
       height: 20%;
       font-size: 1rem;
            }
          }
          p {
            width: 80%;
             color: ${(props) => props.theme.colors.darkblue};
            font-size: 20px;
            line-height: 35px;
            color: #2e3031;
          }
          h3 {
            
            line-height: 1.1;
             color: ${(props) => props.theme.colors.darkblue};
          }
        }

        .section2_data_right {
          display: flex;
          width: 100%;
          height: 40%;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          color: white;
          li {
      
       list-style: circle;
       height: 20%;
       font-size: 1rem;
       margin-top: 1rem;
            }
            span {
              font-size: 20px;
            }
       
      
        }
        .img-wrapper {
          position: relative;
          width: 50%;
          height: 30%;
        }
      }
    }
  }



`;
