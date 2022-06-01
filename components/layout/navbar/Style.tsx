import styled from "styled-components";

export const Nav = styled.nav`
  z-index: 1000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: absolute;

  top: 0%;
  #active  {
    color:  ${(props) => props.theme.colors.blue};
  }
  .active  {
    color:  ${(props) => props.theme.colors.blue}  !important;
  }
  .navbar1,
  #fixed-sm{

    transition: background-color .5s,color .5s,opacity .5s ease-in-out;
    transition: background-color .5s,color .5s,transform .5s,opacity .5s ease-in-out;
    transition: background-color .5s,color .5s,transform .5s,opacity .5s ease-in-out;
  }

  @media (min-width: 1281px) {
    width: 100%;
    height: 6rem;
    background-color: #3c4e62a8;
    .navbar {
   
      width: 95%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar_left {
        position: relative;
        width: 19%;

        height: 50%;
      }
      .navbar_right {
        display: flex;
        justify-content: space-between;
        height: 53%;
        width: 70%;

        li {
          margin-top: 1rem;
          a {
            font-family: Proxima-Bold;
            font-size: 0.9rem;
            word-spacing: 0.2rem;
            font-weight: 1000;
            color: white;
            text-transform: uppercase;
           
          }
          a:hover {
    color:  ${(props) => props.theme.colors.blue};
  }
  #act:hover {
    color: white;
  }
          .active {
               color:  ${(props) => props.theme.colors.blue};
            }
        }

        li:nth-child(3)  {

position: relative;
.valve {
 position: absolute;
 width: 110%;

height: 100%;

bottom: -53%;


display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};
}


}
li:nth-child(3):hover {
        
         .valve {
           display: flex;
         }

         
          
          }

          li:nth-child(5)  {

position: relative;
.valve {
 position: absolute;
 width: 110%;




 top: 65%;
height: 8rem;


display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};

a {
  justify-content: center;
align-items: center;
height: 33%;
  display: flex;
 
}
}


}
li:nth-child(5):hover {
        
         .valve {
           display: flex;
           flex-direction: column;
        
         }
       

         
          
          }

          li:nth-child(6)  {

position: relative;
.valve {
  position: absolute;
 width: 6rem;

height: 100%;

bottom: -53%;


display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};

}


}

          li:nth-child(6):hover {
        
        .valve {
          display: flex;
          flex-direction: column;
       
        }
      

        
         
         }


          

      }
    }

    .navbar1 {

      background-color: #3c4e62;
 
      z-index: 1000;
      position: fixed;


      top: 0%;

      width: 100%;
      height: 4rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar_left {
        margin-left: 3%;
        position: relative;
        width: 24%;

        height: 50%;
      }
      .navbar_right {
        margin-right: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:100%;
        width: 75%;

        li {
         
           display: flex;
           justify-content: center;
           align-items: center;
          height: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        
          a {
            font-family: Proxima-Bold;
            font-size: 0.9rem;
            word-spacing: 0.2rem;
            font-weight: 1000;
            color: white;
            align-items: center;
           
            text-transform: uppercase;
          }
          a:hover {
    color:  ${(props) => props.theme.colors.blue};
  }
          .active:hover {
            color:  white;
            
            }

          .active:hover {
            color:  white;
            
            }
   
   
         
        }
        li:nth-child(3):hover {
         background-color:  ${(props) => props.theme.colors.blue};;
         a {
           color:white;
         }
         a:hover {
          color:white;
         }
         #active:hover {
          color:white;
         }
         .valve {
           display: flex;
           #act:hover {
    color: white;
  }
         }
         
          
          }


          li:nth-child(3)  {

           position: relative;
           .valve {
            position: absolute;
    width: 100%;
  
    height: 100%;
    bottom: -100%;
   
           display: none;
           justify-content: center;
           align-items: center;
    background-color:  ${(props) => props.theme.colors.blue};;
           }
    
          
          }

          li:nth-child(6):hover {
         background-color:  ${(props) => props.theme.colors.blue};;
         a {
           color:white;
         }
         a:hover {
          color:white;
         }
         #active:hover {
          color:white;
         }
         .valve {
           display: flex;
           #act:hover {
    color: white;
  }
         }
         
          
          }


          li:nth-child(6)  {

           position: relative;
           .valve {
            position: absolute;
    width: 100%;
  
    height: 100%;
    bottom: -100%;
   
           display: none;
           justify-content: center;
           align-items: center;
    background-color:  ${(props) => props.theme.colors.blue};;
           }
    
          
          }


          li:nth-child(5)  {

position: relative;
.valve {
 position: absolute;
width: 100%;

height: 10rem;
    top: 100%;

display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};;
flex-direction: column;
a {
  height: 33%;
}
}



}

li:nth-child(5):hover {
  background-color:  ${(props) => props.theme.colors.blue};;
  a {
           color:white;
         }
         a:hover {
          color:white;
         }
         #active:hover {
          color:white;
         }
         .valve {
           display: flex;
           #act:hover {
    color: white;
  }
}

        
         
         }   

          
      
      }
    }

    .nav-sm {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 100%;
    height: 6rem;
    background-color: #3c4e62a8;;
    .navbar {
      width: 95%;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar_left {
        position: relative;
        width: 20%;

        height: 100%;
      }
      .navbar_right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 53%;
        width: 75%;

        li {
          a {
            font-family: Proxima-Bold;
            font-size: 0.9rem;
            word-spacing: 0.2rem;
            font-weight: 1000;
            color: white;
            text-transform: uppercase;
          }
          .active {
             color:  ${(props) => props.theme.colors.blue};
            }
        }
        li:nth-child(3)  {

position: relative;
.valve {
 position: absolute;
width: 110%;

height: 3rem;
top:120%;

display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};;
a {
  justify-content: center;
align-items: center;
height: 100%;
  display: flex;
  width: 100%;
 
}
}


}
li:nth-child(3):hover {
        
        .valve {
          display: flex;
          flex-direction: column;
       
        }
      

        
         
         }

         li:nth-child(6)  {

position: relative;
.valve {
 position: absolute;
width: 110%;

height: 3rem;
top:120%;

display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};;
a {
  justify-content: center;
align-items: center;
height: 100%;
  display: flex;
  width: 100%;
 
}
}


}
li:nth-child(6):hover {
        
        .valve {
          display: flex;
          flex-direction: column;
       
        }
      

        
         
         }

li:nth-child(5)  {

position: relative;
.valve {
 position: absolute;
 width: 110%;




 top: 108%;
height: 8rem;


display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};

a {
  justify-content: center;
align-items: center;
height: 33%;
  display: flex;
 
}
}


}
li:nth-child(5):hover {
        
         .valve {
           display: flex;
           flex-direction: column;
        
         }
       

         
          
          }


      }
    }

    .navbar1 {
      z-index: 1000;
      position: fixed;
     
      top: 0%;

      background-color: #3c4e62;
      width: 100%;
      height: 4rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar_left {
      
        position: relative;
        width: 20%;

        height: 50%;
      }
      .navbar_right {
        
        display: flex;
        justify-content: space-around;
    height: 53%;
    width: 80%;

        align-items: center;

        li {
          display: flex;
           justify-content: center;
           align-items: center;
          height: 100%;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          a {
            font-family: Proxima-Bold;
            font-size: 0.9rem;
            word-spacing: 0.2rem;
            font-weight: 1000;
            color: white;
            align-items: center;
           
            text-transform: uppercase;
          }
        }

        li:nth-child(3)  {

position: relative;
.valve {
 position: absolute;
width: 100%;

height: 100%;
bottom: -100%;

display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};;
}


}
li:nth-child(3):hover {
         background-color:  ${(props) => props.theme.colors.blue};;
         .valve {
           display: flex;
         }
         
          
          }

          li:nth-child(6)  {

position: relative;
.valve {
 position: absolute;
width: 100%;

height: 100%;
bottom: -100%;

display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};;
}


}
li:nth-child(6):hover {
         background-color:  ${(props) => props.theme.colors.blue};;
         .valve {
           display: flex;
         }
         
          
          }
          li:nth-child(5)  {

position: relative;
.valve {
 position: absolute;
width: 100%;

height: 10rem;
    top: 100%;

display: none;
justify-content: center;
align-items: center;
background-color:  ${(props) => props.theme.colors.blue};;
flex-direction: column;
a {
  height: 33%;
}
}



}


          li:nth-child(5):hover {
  background-color:  ${(props) => props.theme.colors.blue};;
  a {
           color:white;
         }
         a:hover {
          color:white;
         }
         #active:hover {
          color:white;
         }
         .valve {
           display: flex;
           #act:hover {
    color: white;
  }
}

        
         
         }   

          
      }
    }

    .nav-sm {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
    width: 100%;
    height: 6rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: absolute;

    top: 0%;
    z-index: 99999;
    .navbar {
      display: none;
    }

    .nav-sm {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      .nav-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        height: 100%;
        .nav-left {
          i {
            font-size: 2rem;
            color: white;
          }
        }
        .nav-right {
          i {
            font-size: 3rem;
            color: white;
          }
        }
        .nav-center {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40%;

          height: 100%;
          position: relative;
        }
      }
    }
    #fixed-sm {
      z-index: 99999;
      height: 6rem;
      position: fixed;
      background-color: #3c4e62a8;;
      top: 0%;
    }
    .sm {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      align-items: center;
      background-color: rgb(60 78 98 / 95%);
      .logo {
        width: 90%;
        height: 10%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        .img {
          width: 50%;
          position: relative;
          height: 100%;
          img {
            width: 100%;
          }
        }
        i {
          font-size: 2rem;
          color: white;
        }
      }
      .link {
        width: 100%;
        height: 7%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
          color: white;
          font-size: 1.2rem;
          color: white;
          cursor: pointer;
          font-weight: 900;
          text-transform: uppercase;
        }
      }
      #first {
        width: 100%;
       
  
        h2 {
          height: 15%;
          min-height: 5rem;
          margin-top: 2%;
        }

        .list {
          height: 85%;
          margin-top: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            height: 20%;
            min-height: 3rem;
            a {
              font-weight: 0;
              text-transform: uppercase;
            }
          }
        }
      }
      #last {
        width: 100%;
        height: 20.6%;
        margin-top: 1%;
        h3 {
          height: 10%;
        }
        .list {
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            height: 29%;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    display: none;
    width: 100%;
    height: 4rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: absolute;

    top: 0%;
    z-index: 999;
    .navbar {
      display: none;
    }

    .nav-sm {
      width: 100%;
      height: 100%;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .nav-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        height: 100%;
        .nav-left {
          i {
            font-size: 1.5rem;
            color: white;
          }
        }
        .nav-right {
          i {
            font-size: 1.8rem;
            color: white;
          }
        }
        .nav-center {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40%;

          height: 100%;
          position: relative;
        }
      }
    }
    #fixed-sm {
      
      
      position: fixed;
      background-color: #3c4e62a8;;
      top: 0%;
    }
    .sm {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
     
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      align-items: center;
      background-color: rgb(60 78 98 / 95%);
      .logo {
        width: 90%;
        height: 10%;

        display: flex;
        justify-content: space-between;
        align-items: center;
        .img {
          width: 50%;
          position: relative;
          height: 100%;
          img {
            width: 100%;
          }
        }
        i {
          font-size: 2rem;
          color: white;
        }
      }
      .link {
        width: 100%;
        height: 7%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
          color: white;
          font-size: 1.2rem;
          color: white;
          cursor: pointer;
          font-weight: 900;
          text-transform: uppercase;
        }
      }
      #first {
        width: 100%;
        height: 30%;
       
    margin-top: 6rem;

        h2 {
          min-height: 3rem;
          height: 15%;
          margin-top: 2%;
        }

        .list {
          height: 100%;
          display: flex;
          
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            height: 20%;
            min-height: 3rem;
            a {
              font-weight: 0;
              text-transform: uppercase;
            }
          }
        }
      }
      #last {
        width: 100%;
        height: 20.6%;
        margin-top: 1%;
        h3 {
          height: 10%;
        }
        .list {
          height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            height: 29%;
          }
        }
      }
    }
  }


  


`;
