import styled from "styled-components";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  overflow-x:hidden ;
  overflow-y:scroll  ;
  height: 743px;
  background: white;
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

  .category-active {
    @media (max-width: 767px) {
      margin-top: 104px;
    }
    margin-top: 124px;
  }

  .name {
    font-size: 18px;
    margin: 39px 16px 39px 16px;
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
    top: -1px;
    max-width: 768px;
    box-shadow: 0 0 12px #0052E01A;

    hr {
      height: 2px;
      background: #2B273C1A;
      border-color: #2B273C1A
    }
  }
  .menu-category{
    background: white;
    width: 100%;
    padding-top: 25px;
    overflow: auto;
    margin: 0 0 -2px 0;
    display: flex;
    height: 60px;
    border-bottom: 2px solid #2B273C1A;
  }
  .category-card {
    display: flex;
    background: white;
    margin-top: 16px;
    width: 100%;
    box-shadow: 0 0 6px #0000002a!important;

    height: 109px;
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