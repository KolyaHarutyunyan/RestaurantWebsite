import styled from "styled-components";

export const Container = styled.div`
   max-width: 768px;
   margin: 0 auto;
   background: white;
   padding-bottom: 50px;
  .image{
    @media (max-width: 767px) {
      height: 100px;
    }
    height: 204px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    background-position: top;
    background-size: auto;
    background-color: white;
  }
  .category-active{
    @media (max-width: 767px) {
      margin-top: 104px;
    }
    margin-top: 124px;
  }
  
  .name{
    @media (max-width: 767px) {
      font-size: 16px;
      margin: 39px 16px 39px 16px
    }
    position: absolute;
    color: white; 
    font-size: 28px;
    font-family: Poppins,sans-serif;
    font-weight: bold;
    margin: 83px 0 83px 40px;
  }
  .category-border{
    margin-top: 143px;
    border-bottom: 2px solid #2B273C1A;
  }
  .menu-category{
  
    @media (max-width: 767px) {
      margin: 24px 0 -2px 0;
    }
    background: white;
    width: 100%;
    overflow: auto;
    margin: 32px 0 -2px 0;
    display: flex;
  }
  .passive-category{
    @media (max-width: 767px) {
      font-size: 16px;
      padding: 0 23px;
    }
    padding: 0 32px;
    font-size: 20px;
    color: #2B273C80;
    font-family: Open Sans, sans-serif;
    margin-bottom: 10px;
    font-weight: 600;
  }  
 
  .active-category{
    @media (max-width: 767px) {
      font-size: 16px;
      padding: 0 23px;
    }
    padding: 0 32px;
    font-size: 20px;
    color: #2B273C;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    border-bottom: 2px solid #2B273C;
  }
  .category{
    margin-top: 16px;
  }
  .category-title{
    @media (max-width: 767px) {
      font-size: 20px;
      margin: 0 16px 8px 16px;
    }
    margin: 24px 16px 8px 16px;
    font-size: 28px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
  }
  .scrolled-tab{
    position:fixed;
    width:100%; 
    background:white;
    top: 0;
    max-width:768px;
    //box-shadow: 0px 0px 12px #0052E01A;
    
    hr{
      height:2px;
      background:#2B273C1A;
      border-color:#2B273C1A
    }
  }
  .category-card{
    display: flex;
    background: white;
    padding: 16px;
    margin-top: 16px;
    height: 150px;
    width: 100%;
    box-shadow: 0 0 6px #0000001a;
    @media (max-width: 767px) {
      height: 109px;
      padding: 10px;
    }
    img{
      @media (max-width: 767px) {
        width: 89px;
        height: 89px;
      }
      object-fit: cover;
      width: 118px;
      height: 118px;
      border-radius: 8px;
    }
    svg{
      width: 50px;
      height: 50px;
    }
  }
  .no-image{
    @media (max-width: 767px) {
      width: 121px;
      height: 89px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 118px;
    border-radius: 8px;
    background-color: #0000001A;
  }
  .card-info{
    width: 100%;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-family: Open Sans, sans-serif;
    color: #313131;
    font-weight: bold;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
 
  .desc{
    font-size: 16px;
    font-family: Open Sans, sans-serif;
    color: #313131;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
  .optional{
    font-size: 14px;
    font-family: Open Sans, sans-serif;
    color: #54C762;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`