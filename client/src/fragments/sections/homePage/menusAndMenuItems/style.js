import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

.reduce-paper-box {
  max-width: 1001px;
  width: 100%;
  margin: 0px auto 128px;
  padding: 48px 132px;
  background-color: #FF453A;
  border: 1px solid #FF453A;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1279px) {
    max-width: 567px;
    padding: 48px 80px;
  }
  @media (max-width: 768px) {
    padding: 32px 36px;
  }
}
.reduce-paper-text {
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #FFFFFF;
  @media (max-width: 1279px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 42px;
  }
}
.start-free-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 0px;
  width: unset;
  padding: 12px 60px;
  background-color: #FFFFFF;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;
}
.start-free-btn:hover {
  background-color: #BFBFBF;
}

  .slider-slide {
    :focus {outline: none;}
  }
  .g-title {
    text-align: center;
    font-family: Poppins,sans-serif;
    line-height: 72px;
    font-size: 48px;
    @media (max-width: 767px) {
      line-height: 36px;
      font-size: 28px;
      margin-bottom: 30px;
    }
  }

  
  .carousel-desktop-mini {
    @media (min-width: 320px) {
      display: none;
    }
    @media (min-width: 767px) {
      display: none;
    }
    @media (min-width: 1279px) {
      display: block;
    }
    @media (min-width: 1919px) {
      display: none;
    }
    
  }
  .carousel-desktop{
    @media (min-width: 320px) {
       display: none;
    }
    @media (min-width: 767px) {
      display: none;
    } 
    @media (min-width: 1279px) {
      display: none;
    }   
    @media (min-width: 1919px) {
      display: block;
    }
  } 
  .carousel-tablet{
    @media (min-width: 320px) {
       display: none;
    }
    @media (min-width: 767px) {
      display: block;
    } 
    @media (min-width: 1279px) {
      display: none;
    }   
    @media (min-width: 1919px) {
      display: none;
    }
  } 
 
  .carousel-mobile{
    .cards {
      @media (min-width: 320px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        
      }
      @media (min-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
      @media (min-width: 320px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 767px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    @media (min-width: 767px) {
      display: none;
    }
    @media (min-width: 1279px) {
      display: none;
    }   
    @media (min-width: 1919px) {
      display: none;
    }
  }
  .add-menu-button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .descr {
    text-align: center;
    font-family: Open Sans, sans-serif;
    line-height: 24px ;
    font-size: 16px;
    @media (min-width: 320px) {
      font-size: 14px;
      line-height:21px ;
      margin-top: 17px;
    }
    @media (min-width: 768px) {
      line-height: 24px ;
      font-size: 16px;
      margin-top: 64px;
    }
  }
 
    text-align: initial;
  }
  .cards {
    //@media (max-width: 767px) {
    //  display: flex;
    //  flex-direction: column;
    //}
    //display: grid;
    padding:0 5px 20px 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 50px 100px;
    margin-top: 80px;
    //padding-bottom: 20px;
    overflow: auto;
    li {
     
      &:nth-child(2n) {
        transform: scale(0.7);
      }
      &:nth-child(7),
      &:nth-child(9) {
        transform: translateY(-60px);
      }
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 300px;

      .image {
        object-fit: cover;
        flex: 1;
        height: 100px;
        border-radius: 8px 8px 0 0;
      }
      p {
        font-family: Open Sans, sans-serif;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 64px;
        font-weight: 600;
        box-shadow: 0px 4px 4px #eaeaea;
        background: white;
      }
    }
  } 
.cardsDesc {
    padding:0 5px 20px 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 50px 100px;
    margin-top: 60px;
    overflow: auto;
    outline: none!important;
    li {
     
      &:nth-child(1) {
        outline: none!important;
        transform: scale(0.7);
      }
      
      &:nth-child(2) {
        //transform: translateY(-60px);
      }
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 300px;

      .image {
        object-fit: cover;
        flex: 1;
        height: 100px;
        border-radius: 8px 8px 0 0;
      }
      p {
        font-family: Open Sans, sans-serif;
        font-weight: 600;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 60px;
        box-shadow: 0px 4px 4px #eaeaea;
        background: white;
      }
    }
  }
  button {
    margin-top: 72px;
    margin-bottom: 160px;
    width: 240px;

    @media (max-width: 767px) {
      width: 201px;
      margin-top: 0;
    }
  }
`;
