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

  @media (min-width: 1281px) {
    width: 100%;
    height: 10rem;
   

    .navbar1 {
      z-index: 1000;
      position: fixed;
      background-color: #3c4e62a8;
      top: 0%;

      width: 100%;
      height: 5rem;

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
        height: 53%;
        width: 60%;

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
        }
      }
    }

    .nav-sm {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 100%;
    height: 10rem;
    .navbar1 {
      z-index: 1000;
      position: fixed;
      background-color: #3c4e62a8;
      top: 0%;

      width: 100%;
      height: 5rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
      .navbar_left {
        margin-left: 3%;
        position: relative;
        width: 18%;

        height: 50%;
      }
      .navbar_right {
        margin-right: 2%;
        display: flex;
        justify-content: space-between;
        height: 53%;
        width: 71%;

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
    z-index: 1;
    .navbar1 {
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
      background-color: #3c4e62;
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
        height: 30%;

        h2 {
          height: 15%;
          margin-top: 2%;
        }

        .list {
          height: 85%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            height: 20%;
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
    z-index: 1;
    .navbar1 {
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
      z-index: 1000;
      
      position: fixed;
      background-color: #3c4e62;
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
        height: 30%;

        h2 {
          height: 15%;
          margin-top: 2%;
        }

        .list {
          height: 85%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            height: 20%;
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
