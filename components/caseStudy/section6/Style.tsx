import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color:  ${(props) => props.theme.colors.darkblue};
 

h2 {
  text-transform: uppercase;
}
 /* Used if the image is unavailable */
      /* You must set a specified height */
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover;
  position: relative;
  padding-bottom: 2em;
  @media (min-width: 1281px) {
    .section {
      background-color:#9ca6ad;
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      
        height: 8rem;
        

        .section_top_left {
          width: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
   height: 100%;
   flex-direction: column;
          .img-wrapper {
            margin-top: 1rem;
            position: relative;
             width:20%;
             height: 100%;
          

          }
          .text {
            display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          text-transform: uppercase;
          height: 100%;
      h4 {
       color:white;
       
     
      
      }
          }

        }
        .section_top_right {
          width: 35%;
          display: flex;
          justify-content: center;
          align-items: center;

            h3 {
              color:white;
              text-transform: uppercase;
            padding: 0.5rem;
            color:  white;
              background-color:  #3c4e62;;
;
            }
          

        }
      }

      .section_mid {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40em;
        position: relative;

        .section_mid_left {
          width: 50%;
          display: flex;
          height: 100%;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          h2 {
            color:white;
            font-size: 40px;
    line-height: 40px;
    width: 80%;
    span {
   color:  #3d4144;
   font-weight: bold;
    }
          }
          h3 {
            color:   white;
            font-size: 40px;
    line-height: 40px;
     background-color:    #3c4e62;;
     padding: 0.5rem;
     padding-left: 2em;
     padding-right: 2rem;
    text-transform: uppercase;
    margin-right: 24%;
          }
          p {
            
            color:white;
            width: 100%;
            display: flex;
            justify-content: flex-start;
        
            flex-wrap: wrap;
            font-size: 1.3rem;
    line-height: 19px;
    line-height: 31px;
     p {
        width: 60%;
     }
     .set {
       margin-left:10%;
       margin-top: 3%;
     }
   
  

            .img-wrapper {
            position: relative;
             width:10%;
             height: 2rem;
             z-index: 1;

          }
            
          }

        

        }
        .section_mid_right {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100%;
        
          .img-wrapper {
            width: 100%;
            height: 80%;
            position: relative;
          }

          .text {
            width: 95%;
            height: 20%;
            display: flex;
          justify-content: space-between;
            align-items: center;
         
           ul {
             
             display: flex;
          justify-content: space-evenly;
            
            flex-direction: column;
             height: 80%;
             li {
               color:white;
               font-size: 1.2rem;
               span {
                 font-weight: 1000;
               }
             }
           }
          }

          

        }
       
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 25em;
        position: relative;

        .section_bottom_left {
          width: 50%;
          display: flex;
          height: 100%;
          justify-content: space-evenly;
          align-items: center;
          
          
          .img-wrapper {
   position: relative;
   width: 10%;
   height: 26%;

efore {

position: absolute;
content: '';
width: 100%;
height: 1%;
  top: -20%;

background-color:  white;
}
          }

          h2 {
            color:white;
            font-size: 35px;
    line-height: 35px;
    width: 80%;
   text-transform: uppercase;

   position: relative;

          }
  

        
          :after {

position: absolute;
content: '';

width: 40%;
height: 1%;
  bottom: 30%;
  left: 1%;
background-color:  white;
}

:before {

position: absolute;
content: '';
width: 40%;
height: 1%;
  top: 30%;
  left: 1%;

background-color:  white;
}
        }
        .section_bottom_right {
      
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100%;
        position: relative;
         
          .text {
            width: 95%;
            height: 80%;
            display: flex;
          justify-content: space-between;
            align-items: center;
         
           ul {
              
             display: flex;
          justify-content: space-evenly;
       
            flex-direction: column;
             height: 80%;
             width: 48%;
               .top {
                 h3 {
                   color:white;
                    
                 }
                 width: 100%;
                 height: 20%;
                 display: flex;
                 justify-content: center;
                 align-items: center;

               }
               .bottom {
                 width: 100%;
                 height: 80%;
                 display: flex;
                 justify-content: space-between;
                 align-items: center;
                 .img-wrapper {
            width: 48%;
            height: 100%;
            position: relative;
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
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      
        height: 8rem;
        

        .section_top_left {
          width: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
   height: 100%;
          .img-wrapper {
            position: relative;
             width:20%;
             height: 100%;
          

          }
          .text {
            display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          text-transform: uppercase;
          height: 100%;
      h4 {
       color:white;
       
     
       :after {

        position: absolute;
        content: '';
        width: 100%;
        height: 0.5rem;
        bottom: 30%;
        left: 5%;
        background-color:  ${(props) => props.theme.colors.blue};
       }
      }
          }

        }
        .section_top_right {
          width: 30%;
          display: flex;
          justify-content: center;
          align-items: center;

            h3 {
              color:white;
              text-transform: uppercase;
            padding: 0.5rem;
            color:  ${(props) => props.theme.colors.darkblue};
              background-color:  ${(props) => props.theme.colors.blue};
            }
          

        }
      }

      .section_mid {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40em;
        position: relative;

        .section_mid_left {
          width: 50%;
          display: flex;
          height: 100%;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          h2 {
            color:white;
            font-size: 35px;
    line-height: 35px;
    width: 80%;
    text-transform: uppercase;
    span {
   color:  ${(props) => props.theme.colors.blue};
   font-weight: bold;
    }
          }
          h3 {
            color:   ${(props) => props.theme.colors.darkblue};;
            font-size: 35px;
    line-height: 35px;
     background-color:     ${(props) => props.theme.colors.blue};;
     padding: 0.5rem;
     padding-left: 2em;
     padding-right: 2rem;
    text-transform: uppercase;
    
          }
          p {
            
            color:white;
            width: 80%;
            display: flex;
            justify-content: flex-start;
            font-size: 1.3rem;
    line-height: 19px;
    line-height: 31px;
br {
  display: none;
}
            .img-wrapper {
            position: relative;
             display: none;
             z-index: 1;

          }
            
          }

        

        }
        .section_mid_right {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100%;
        
          .img-wrapper {
            width: 100%;
            height: 80%;
            position: relative;
          }

          .text {
            width: 95%;
            height: 20%;
            display: flex;
          justify-content: space-between;
            align-items: center;
         
           ul {
             
             display: flex;
          justify-content: space-evenly;
            
            flex-direction: column;
             height: 80%;
             li {
               color:white;
               font-size: 1.2rem;
               span {
                 font-weight: 1000;
               }
             }
           }
          }

          

        }
       
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 25em;
        position: relative;

        .section_bottom_left {
          width: 50%;
          display: flex;
          height: 100%;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          h2 {
            color:white;
            font-size: 35px;
    line-height: 35px;
    width: 80%;
   text-transform: uppercase;
 br{
   display: none;
 }
   position: relative;
   :after {

position: absolute;
content: '';
width: 0.5rem;
height: 100%;
  bottom: 3%;
left: -5%;
background-color:  ${(props) => props.theme.colors.blue};
}
          }
  

        

        }
        .section_bottom_right {
      
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100%;
          position: relative;
         
         
          }

          

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
      flex-direction: column;

      .section_top {
        display: none;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      
        height: 8rem;
        

        .section_top_left {
          width: 55%;
          display: flex;
          justify-content: center;
          align-items: center;
   height: 100%;
          .img-wrapper {
            position: relative;
             width:20%;
             height: 100%;
          

          }
          .text {
            display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          text-transform: uppercase;
          height: 100%;
          width: 45%;
      h4 {
       color:white;
       
     
       :after {

        position: absolute;
        content: '';
        width: 100%;
        height: 0.5rem;
        bottom: 30%;
        left: 5%;
        background-color:  ${(props) => props.theme.colors.blue};
       }
      }
          }

        }
        .section_top_right {
          width: 30%;
          display: flex;
          justify-content: center;
          align-items: center;

            h3 {
              color:white;
              text-transform: uppercase;
            padding: 0.5rem;
            color:  ${(props) => props.theme.colors.darkblue};
              background-color:  ${(props) => props.theme.colors.blue};
            }
          

        }
      }

      .section_mid {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    
        position: relative;
        flex-direction: column-reverse;

        .section_mid_left {
          width: 100%;
          display: flex;
          height: 54rem;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          h2 {
            color:white;
            font-size: 35px;
    line-height: 35px;
    width: 90%;
    br {
      display: none;
    }
    span {
   color:  ${(props) => props.theme.colors.blue};
   font-weight: bold;
    }
          }
          h3 {
            color:   ${(props) => props.theme.colors.darkblue};;
            font-size: 35px;
    line-height: 35px;
     background-color:     ${(props) => props.theme.colors.blue};;
     padding: 0.5rem;
      align-items: center;
    text-transform: uppercase;
    width: 90%;
          }
          p {
            
            color:white;
            width: 90%;
            display: flex;
            justify-content: flex-start;
            font-size: 1.3rem;
    line-height: 19px;
    line-height: 31px;
br {
  display: none;
}
            .img-wrapper {
            position: relative;
             display: none;
             z-index: 1;

          }
            
          }

        

        }
        .section_mid_right {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 32rem;
        
          .img-wrapper {
            width: 100%;
            height: 80%;
            position: relative;
          }

          .text {
            width: 95%;
            height: 20%;
            display: flex;
          justify-content: space-between;
            align-items: center;
         
           ul {
             
             display: flex;
          justify-content: space-evenly;
            
            flex-direction: column;
             height: 80%;
             li {
               color:white;
               
               span {
                 font-weight: 1000;
               }
             }
           }
          }

          

        }
       
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
     
        position: relative;
        flex-direction: column-reverse;
        
        .section_bottom_left {
          width: 100%;
          display: flex;
          height: 25em;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          h2 {
            color:white;
            font-size: 35px;
    line-height: 35px;
    width: 80%;
   text-transform: uppercase;
 br{
   display: none;
 }
   position: relative;
   :after {

position: absolute;
content: '';
width: 0.5rem;
height: 100%;
  bottom: 3%;
left: -5%;
background-color:  ${(props) => props.theme.colors.blue};
}
          }
  

        

        }
        .section_bottom_right {
      
          width: 90%;
          display: flex;
          justify-content: center;
          align-items: center;

        
         
          .text {
            width: 95%;
      
            display: flex;
          justify-content: space-between;
            align-items: center;
            flex-direction: column;
           ul {
              
             display: flex;
          justify-content: space-evenly;
          background-color:  ${(props) => props.theme.colors.blue};
            flex-direction: column;
            height: 46em;
             width: 100%;
               .top {
                 width: 100%;
                 height: 5%;
                 display: flex;
                 justify-content: center;
                 align-items: center;

               }
               .bottom {
                 width: 100%;
                 height: 95%;
                 display: flex;
                 justify-content: space-between;
                 flex-direction: column;
                 align-items: center;
                 .img-wrapper {
            width: 100%;
            height: 100%;
            position: relative;
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
      position: relative;
      background-color:rgba(156,166,173,255);
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      flex-direction: column;

      .section_top {
        display: none;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      
        height: 8rem;
        

        .section_top_left {
          width: 55%;
          display: flex;
          justify-content: center;
          align-items: center;
   height: 100%;
          .img-wrapper {
            position: relative;
             width:20%;
             height: 100%;
          

          }
          .text {
            display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          text-transform: uppercase;
          height: 100%;
          width: 45%;
      h4 {
       color:white;
       
     
    
      }
          }

        }
        .section_top_right {
          width: 30%;
          display: flex;
          justify-content: center;
          align-items: center;

            h3 {
              color:white;
              text-transform: uppercase;
            padding: 0.5rem;
            color:  ${(props) => props.theme.colors.darkblue};
              background-color:  ${(props) => props.theme.colors.blue};
            }
          

        }
      }

      .section_mid {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    
        position: relative;
        flex-direction: column-reverse;

        .section_mid_left {
          width: 100%;
          display: flex;
          height: 60rem;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          h2 {
            color:white;
            font-size: 35px;
    line-height: 35px;
    width: 90%;
    br {
      display: none;
    }
    span {

   font-weight: bold;
    }
          }
          h3 {
          
            font-size: 35px;
    line-height: 35px;
  
              color:white;
              text-transform: uppercase;
            padding: 0.5rem;
            color:  white;
              background-color:  #3c4e62;;

     padding: 0.5rem;
      align-items: center;
    text-transform: uppercase;
    width: 90%;
          }
          p {
            
            color:white;
            width: 90%;
            display: flex;
            justify-content: flex-start;
            font-size: 1.3rem;
    line-height: 19px;
    line-height: 31px;
br {
  display: none;
}
            .img-wrapper {
            position: relative;
             display: none;
             z-index: 1;

          }
            
          }

        

        }
        .section_mid_right {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 32rem;
        
          .img-wrapper {
            width: 100%;
            height: 80%;
            position: relative;
          }

          .text {
            width: 95%;
            height: 20%;
            display: flex;
          justify-content: space-between;
            align-items: center;
         
           ul {
             
             display: flex;
          justify-content: space-evenly;
            
            flex-direction: column;
             height: 80%;
             li {
               color:white;
               
               span {
                 font-weight: 1000;
               }
             }
           }
          }

          

        }
       
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
     
        position: relative;
        flex-direction: column-reverse;
        
        .section_bottom_left {
          width: 100%;
          display: flex;
          height: 25em;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
           .img-wrapper {
     display: none;

   }
          h2 {
            color:white;
            font-size: 35px;
    line-height: 35px;
    width: 90%;
   text-transform: uppercase;
  
 br{
   display: none;
 }
   position: relative;

  
 
          }
  

        

        }
        .section_bottom_right {
      
          width: 90%;
          display: flex;
          justify-content: center;
          align-items: center;

        
         
          .text {
            width: 95%;
      
            display: flex;
          justify-content: space-between;
            align-items: center;
            flex-direction: column;
           ul {
              
             display: flex;
          justify-content: space-evenly;
         
            flex-direction: column;
            height: 46em;
             width: 100%;
               .top {
                 width: 100%;
                 height: 5%;
                 display: flex;
                 justify-content: center;
                 align-items: center;

               }
               .bottom {
                 width: 100%;
                 height: 95%;
                 display: flex;
                 justify-content: space-between;
                 flex-direction: column;
                 align-items: center;
                 .img-wrapper {
            width: 100%;
            height: 100%;
            position: relative;
          }

               }

             }
           }
          }

          

        }
      }
    }



`;
