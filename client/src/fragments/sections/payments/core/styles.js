import styled from "styled-components";


export const ActivePlanContainer = styled.div`

  .active-plan-wrapper {
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .title {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 24px;
  }

  .items-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .standart-text {
      margin-left: 16px;
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #7E7E7E;
    }
    
    .features-text {
      margin-left: 16px;
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
  }
  
  .upgrade-button-wrapper{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    
    .upgrade{
      width: 132px;
      height: 38px;
      background: #F03939;
      border-radius: 24px;
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #FFFFFF;
      margin-top: 24px;
    }
  }
  
  .plan-line{
    margin: 42px 0 24px;
    border: 1px solid #E9E9EB;
    background: transparent;
  }

  .plan-info{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #7E7E7E;
    @media (min-width: 320px) {
      font-size: 12px;
    }
    @media (min-width: 1440px) {
      font-size: 14px;
    }
  }
  
  .icon-wrapper{
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flex-able-wrapper{
    display: flex;
    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 1440px) {
      flex-direction: row;
    }
    
    .first-wrap{
      width: 240px;
      text-align: start;
    }
    
    .second-wrap{
      @media (min-width: 320px) {
        margin-left: 0;
      }
      @media (min-width: 1440px) {
        margin-left: 33px;
      }
    }
  }

`;

export const CardContainer = styled.div`
  .title {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 24px;
  }
  
  .cards-wrapper-section{
    display: flex;

    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 767px) {
      flex-direction: row;
    }
  }
  
  .card-wrapper{
    width: 100%;
    max-width: 285px;
    height: 164px;
    background: #F9F9F9;
    border: 1px solid #007AFF;
    border-radius: 8px;
    padding: 26px 24px;
    margin-right: 10px;
  }
  
  .visa-info{
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    p{
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #007AFF;
    }
  }
  
  .card-date{
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin: 16px 0 32px 0;
  }
  
  .delete-wrapper{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    p{
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #FF453A;
      margin-left: 10px;
    }
  }
  
  .we-accept-wrapper{
    display: flex;
    align-items: center;
    margin-top: 18px;
  }
  
  .we-accept{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #313131;
    margin-right: 12px;
  }
  
  .add-card{
    width: 275px;
    height: 164px;
    border: 1px solid #E9E9EB;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) {
      margin-top: 16px;
    }

    @media (min-width: 767px) {
      margin-top: 0;
    }
    .add-card-info{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #007AFF;
      p{
        margin-top: 19px;
      }
    }
  }
`

export const InvoiceContainer = styled.div`
  width: 100%;
  .mobile-cards-table{
    @media (min-width: 320px) {
      display: block;
    }
    @media (min-width: 767px) {
      display: none;
    }
    
    .mobile-cards-item{
      width: auto;
      min-height: 152px;
      height: auto;
      margin-bottom: 8px;
      background: #FFFFFF;
      border-radius: 8px;
      padding: 16px 24px;
    }
    
    .title-info-wrapper{
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      
      .title{
        width: 80px;
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #2A374E;
        margin-right: 22px;
      }
      
      .info{
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #51566D;
      }
    }
    .buttons-wrapper{
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  
  .cards-table {
    width: 100%;
    height: auto;
    background: white;
    border: 1px solid #E9E9EB;
    border-radius: 8px;
    
    @media (min-width: 320px) {
      display: none;
    }
    @media (min-width: 767px) {
      display: block;
    }
    .cards-table-head {
      display: flex;
      justify-content: space-between;
      background: #cacacb;
      border-radius: 8px 8px 0 0;
      width: 100%;
      padding: 16px 32px;

      p {
        width: 100%;
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #2A374E;
      }
    }

    .cards-table-body {
      background: #FFFFFF;
      border-radius: 8px;
      height: 200px;
    }

    .cards-table-body-item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 15px 32px;
      border-bottom: 1px solid #CED8E5;

      p {
        width: 100%;
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #51566D;
      }
    }
  }
`

export const PayInfoContainer = styled.div`
  width: auto;
  height: auto;
  background: white;
  border-radius: 8px;
  @media (min-width: 320px) {
    margin: 8px 16px 0;
    padding: 16px;
    width: 340px;
  }
  @media (min-width: 768px) {
    width: 499px;
  }
  @media (min-width: 1440px) {
    width: 330px;
    margin: 0;
  }

  .items-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
   p {
     margin-left: 12px;
     font-family: Open Sans, sans-serif;
     font-style: normal;
     font-weight: 400;
     font-size: 16px;
     line-height: 24px;
     color: #000000;
   }
  }
  
  .price-title{
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }
  
  .plane-type{
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }
  
  .check-wrapper{
    display: flex;
    align-items: start;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    a{
      color: #FF453A;
    }
  }
  
  .check-text-style{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-left: 8px;
    color: #2B273C;
  }
`

export const InvoiceInfoContainer = styled.div`
  .invoice-head{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }



`