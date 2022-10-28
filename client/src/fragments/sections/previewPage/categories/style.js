import styled from "styled-components";
import { colors } from "@eachbase/theme";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  overflow-x:hidden ;
  overflow-y:scroll  ;
  height: 743px;
  background: ${colors.neautralLightGray};
  padding-bottom: 20px;
  .image {
    height: 100px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat ;
    background-color: white;
    border-radius: 44px 44px 0 0;
  }
  
  .image-name-wrapper{
    height: auto;
    width: 99.9%;
    border-radius: 44px 44px 0 0;
    padding: 18px 18px 10px;
    background: white;
  }
  
  .image-wrapper{
    width: 31.12px;
    height: 31.12px;
    border-radius: 40px;
    border: 2px solid #FFECEF;
    margin-right: 10px;
    
    img{
      width: 30px;
      height: 30px;
      border-radius: 40px;
    }
  }
  
  .welcome{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #51566D;
  }
  
  .rest-name{
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #2A374E;
    margin-top: 4px;
  }
  
  .hr-style{
    margin: 13px 0 10px;
    border: 1px solid #E9E9E9;
    background: transparent;
  }
  
  .menu-name{
    margin: 0 auto;
    text-align: center;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #2A374E;
  }
  
  .wrapper-img{
    display: flex;
  }

  .category-active {
    @media (max-width: 767px) {
      margin-top: 104px;
    }
    margin-top: 124px;
  }

  .name {
    font-size: 18px;
    //margin: 39px 16px 39px 16px;
    position: absolute;
    color: white;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    text-shadow: 2px 2px black;
  }

  .category-border {
    border-bottom: 2px solid #2B273C1A;
  }

  //.menu-category {
  //
  //  //margin: 24px 0 -2px 0;
  //  background: white;
  //  width: 100%;
  //  overflow: auto;
  //  display: flex;
  //}

  .passive-category {

    font-size: 16px;
    padding: 0 23px;
    color: #2B273C80;
    font-family: Open Sans, sans-serif;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .active-category {
    font-size: 16px;
    padding: 0 23px;
    color: #2B273C;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    border-bottom: 2px solid #2B273C;
  }

  .category {
    margin-top: 16px;
    margin-bottom: -155px;
  }

  .category-title {

    font-size: 20px;
    margin: 0 16px 8px 16px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
  }

  .scrolled-tab {
    position: fixed;
    width: 100%;
    background: white;
    top: -3px;
    max-width: 768px;
    box-shadow: 0 0 12px #0052E01A;

    hr {
      height: 2px;
      background: #2B273C1A;
      border-color: #2B273C1A
    }
  }
  .tabs-wrapper{
    background: ${colors.neautralLightGray};
    width: 100%;
    margin: -1px 0 ;
    padding: 11px 0;
    
  }
  .menu-category{
    background: ${colors.neautralLightGray};
    width: 100%;
    padding-top: 5px;
    overflow: auto;
    margin: 0 0 -2px 0;
    display: flex;
    height: 40px;
    border-bottom: 2px solid #2B273C1A;
  }
  .category-card {
    display: flex;
    background: white;
    margin: 16px auto 0 auto;
    border-radius: 8px;
    width: 94%;

    height: auto;
    min-height: 110px;
    padding: 10px;

    img {
      width: 89px;
      height: 89px;
      object-fit: cover;
      border-radius: 8px;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }
  
  .menu-description{
    font-family: 'Open Sans',serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #2A374E;
    margin: 0 16px 8px 16px;
  }

  .no-image {
    width: 121px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #0000001A;
    svg{
      width: 89px;
    }
  } 
  .no-image-icon {
    width: 90px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #0000001A;
    svg{
      width: 89px;
    }
  }

  .price{
    margin-right: 20px;
  }
  
  .card-info {
    width: 100%;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: Open Sans, sans-serif;
    color: #313131;
    font-weight: bold;
    font-size: 16px;

  }

  .desc {
    font-family: Open Sans, sans-serif;
    color: #313131;
    font-size: 14px;
  }

  .optional {
    font-family: Open Sans, sans-serif;
    color: #54C762;
    font-size: 14px;
  }
`
