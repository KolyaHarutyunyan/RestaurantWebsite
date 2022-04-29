import styled from "styled-components";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background: white;
  padding-bottom: 50px;
  
  .image {
    @media (max-width: 767px) {
      height: 100px;
    }
    background: red;
    height: 204px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    object-fit: cover;
    background-size: 100%;
  }

  .category-active {
    @media (max-width: 767px) {
      margin-top: 104px;
    }
    margin-top: 124px;
  }

  .name {
    @media (max-width: 767px) {
      font-size: 16px;
      //margin: 39px 16px 39px 16px
    }
    //position: absolute;
    color: black;
    font-size: 28px;
    margin-left: 12px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    //margin: 83px 0 83px 40px;
  }

  .category-border {
    //margin-top: 143px;
    //border-bottom: 2px solid #2B273C1A;
  }

  .menu-body {
    transition: all .3s;
    @media (min-width: 767px) {
      margin-top: 120px;
      background: white;
    }
  }

  .menu-category {
    border-bottom: 2px solid #2B273C1A;
    @media (max-width: 767px) {
      margin: 20px 0 -2px 0;
    }
    background: white;
    width: 100%;
    overflow: auto;
    margin: 24px 0 -2px 0;
    display: -webkit-box;
  }

  .icon-title-wrapper {
     display: flex;
     align-items: center;
     margin-left: 12px;
     transition: all .3s;
  }

  .business-icon {
     width: 70px;
     height: 70px;
     border-radius: 40px;
     object-fit: cover;
  }

  .building-icon {
     width: 70px;
     height: 70px;
     border-radius: 40px;
     object-fit: cover;
     display: flex;
     justify-content: center;
     align-items: center;
     background: #0000002a;
    svg {
      width: 45px;
      height: 45px;
    }
  }

  .passive-category {
    @media (max-width: 767px) {
       font-size: 16px;
       padding: 0 23px 12px 23px;
    }
    padding: 0 32px 12px 32px;
    font-size: 20px;
    color: #2B273C80;
    font-family: Open Sans, sans-serif;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .active-category-wrapper {
     padding-bottom: 10px;
  }

  .active-category {
    @media (max-width: 767px) {
        font-size: 16px;
        padding: 0 23px 12px 23px;
    }
     padding: 0 23px 12px 23px;
     font-size: 20px;
     color: #2B273C;
     font-family: Open Sans, sans-serif;
     font-weight: 600;
     border-bottom: 2px solid #2B273C;
  }

  .category {
    margin-top: 16px;
    margin-bottom: -100px;
  }

  .category-title {
    @media (max-width: 767px) {
      font-size: 20px;
      margin: 0 16px 8px 16px;
    }
    margin: 24px 16px 8px 16px;
    font-size: 28px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
  }

  .scrolled-tab {
    position: fixed;
    width: 100%;
    background: white;
    top: 0;
    max-width: 768px;
    //box-shadow: 0px 0px 12px #0052E01A;

    hr {
      height: 2px;
      background: #2B273C1A;
      border-color: #2B273C1A
    }
  }

  .category-card {
    display: flex;
    background: white;
    padding: 16px;
    margin-top: 16px;
    height: 150px;
    width: 100%;
    box-shadow: 0 0 6px #0000002a;
    @media (max-width: 767px) {
      height: 109px;
      padding: 10px;
    }

    img {
      @media (max-width: 767px) {
        width: 89px;
        height: 89px;
      }
      object-fit: cover;
      width: 118px;
      height: 118px;
      border-radius: 8px;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }

  .no-image {
    @media (max-width: 767px) {
      width: 89px;
      height: 89px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 118px;
    height: 118px;
    border-radius: 8px;
    background-color: #0000001A;
  }

  .card-info {
    width: 100%;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title {
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

  .desc {
    font-size: 16px;
    font-family: Open Sans, sans-serif;
    color: #313131;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  .optional {
    font-size: 14px;
    font-family: Open Sans, sans-serif;
    color: #54C762;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
`


export const ModalContainer = styled.div`
  height: 550px;
  max-width: 768px;
  overflow: auto;
  border-top: 7px solid #FF453A;
  border-radius: 20px 20px 0 0;
  background: white;
  padding: 16px 15px;

  .no-image {
    width: 100%;
    height: 270px;
    object-fit: cover;
    border-radius: 8px;
    background: #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 70px;
      height: 70px;
    }
  }

  .title {
    font-weight: bold;
    font-size: 18px;
    margin: 25px 0 10px 0;
  }

  .priceName {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    p {
      font-size: 16px;
      line-height: 20px;
      font-weight: bold;
      color: #2B273C;
    }
  }

  .option-style {
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
    color: #54C762;
    margin-top: 8px;
  }

  .image-name {
    display: flex;
    align-items: center;

    p {
      margin-left: 16px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .slider-slide {
       :focus {
         outline: none;
       }
    }
  }

  .image {
    width: 343px;
    height: 270px;
    object-fit: cover;
    border-radius: 15px;
    //padding: 10px 10px 0 10px;
  }

  .description-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #2B273C;
    margin: 8px 0;
  }

  .description-text {
    height: 80px;
    overflow: auto;
  }

  .option-text {
    height: 50px;
    overflow: auto;
  }

  .line-class {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 14px;

    .line {
      width: 60px;
      background: #2B273C80;
      border-radius: 15px;
      height: 3px;
    }
  }

`