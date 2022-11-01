import styled from "styled-components";
import { colors } from "../../../theme";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background: ${colors.neautralLightGray};
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
  
  .icon-title-wrapper {
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    background: white;
    transition: all .3s;
  }

  .flex-able{
    display: flex;
    align-items: center;
  }
  
  .business-icon {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    object-fit: cover;
    border: 2px solid #FFECEF;
    margin-top: 6px;
  }

  .building-icon {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    //background: #0000002a;
    border: 2px solid #FFECEF;
    margin-top: 6px;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  .hr-style{
    height: 2px;
    background: #E9E9E9;
    border-color: #E9E9E9;
    margin: 13px 0 10px 0;
  }

  .name {
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.secondary};
  }

  .welcome{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.textGray};
    margin-bottom: 4px;
  }

  .menu-name{
    text-align: center;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.secondary};
    margin-bottom: 10px;
  }
  
  .tab-wrapper{
    background: ${colors.neautralLightGray};
    padding: 11px 0;
  }

  .category-active {
    @media (max-width: 767px) {
      margin-top: 104px;
    }
    margin-top: 124px;
  }

  .text-wrapper{
    margin-left: 10px;
  }
  
  .cards-wrapper{
    padding: 0 16px;
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
    background: ${colors.neautralLightGray};
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 0 0 -2px 0;
    display: -webkit-box;
  }
  
  .passive-category {
    padding: 0 16px 10px 16px;
    font-family: Open Sans, sans-serif;
    margin-bottom: 10px;
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    color: #95939E; 
  }
  
  .active-category-wrapper {
    padding-bottom: 10px;
  }

  .active-category {
    padding: 0 16px 10px 16px;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    border-bottom: 2px solid #2B273C;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    color: #313131;
  }

  .category {
    margin-top: 16px;
    margin-bottom: -100px;
  }

  .category-title {
    margin: 0 0 8px 3px;
    font-size: 20px;
    line-height: 30px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
  }
  
    .category-description {
      font-family: Open Sans, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-left: 3px;
      color: ${colors.secondary};
      margin-bottom: 16px;
  }
  
  .scrolled-tab {
    position: fixed;
    width: 100%;
    background: white;
    top: 0;
    max-width: 768px;

    hr {
      height: 2px;
      background: #2B273C1A;
      border-color: #2B273C1A
    }
  }

  .category-card {
    display: flex;
    background: white;
    padding: 10px;
    margin-top: 10px;
    min-height: 116px;
    height: auto;
    width: 100%;
    border-radius: 8px;
    img {
      object-fit: cover;
      width: 89px;
      height: 92px;
      border-radius: 8px;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }

  .no-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 89px;
    height: 92px;
    border-radius: 8px;
    background-color: #0000001A;
  }

  .card-info {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    font-family: Open Sans, sans-serif;
    color: #313131;
    margin-bottom: 4px;
  }
  
  .desc {
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #313131;
    margin-bottom: 8px;
    width: 80%;
  }

  .optional {
    font-family: Open Sans, sans-serif;
    color: #54C762;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ModalContainer = styled.div`
  height: 100%;
  max-width: 768px;
  overflow: auto;
  border-radius: 20px 20px 0 0;
  background: white;
  padding: 16px 15px;

  .modal-image-wrapper{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .item-description{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #313131;
  }
  
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
    font-weight: 700;

    p {
      font-size: 16px;
      line-height: 20px;
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
    width: 320px;
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

  .line-class {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 14px;

    .line {
      width: 60px;
      background: #2B273C80;
      border-radius: 15px;
      height: 3px;
    }
  }
  
  .modal-hr{
    margin-top: 20px;
    border: 1px solid #E9E9EB;
  }

`;

export const RestaurantModalContainer = styled.div`
  height: 100vh;
  max-width: 768px;
  overflow: auto;
  background: ${colors.neautralLightGray};
  padding: 16px;
  
  .rest-info{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .restaurant-icon{
    width: 96px;
    height: 96px;
    border: 4px solid #FFECEF;
    border-radius: 50px;
    object-fit: cover;
  }

  .restaurant-no-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 96px;
    border: 4px solid #FFECEF;
    background: #FFECEF;
    border-radius: 50px;
    object-fit: cover;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  
  .restaurant-name{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.secondary};
    margin: 10px 0;
  }
  
  .social-info{
    height: 40px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 4px;
    
    a:not(:last-child){
      margin-right: 12px;
    }
    
    a{
      width: 32px;
      height: 32px;
    }
  }
  
  .item-card{
    padding: 16px;
    background: #FFFFFF;
    border-radius: 8px;
    margin-top: 16px;
    width: 100%;
  }
  
  .description{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.secondary};
  }
  
  .title-desc{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.secondary};  
    span{
      font-weight: normal;
    }
  }
  
  .title-desc:not(:last-child){
    margin-bottom: 16px;
  }

`;

