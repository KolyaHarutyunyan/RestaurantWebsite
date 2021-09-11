import styled from "styled-components";

export const Container = styled.div`
  //margin: 0 auto;
  width: 418px;
  //right: 15px;
  height: 842px;
  position: relative;
  background-image: url(/assets/images/phone_mock.png);
  background-position: center;
  background-size: auto;
  background-color: white;
  border-radius: 49px;
  
  .wrapper {
    width: 91%;
    z-index: 1;
    height: 96%;
    position: absolute;
    left: 19px;
    top: 23px;
    border-radius: 48px;
    padding: 60px 3px 48px 3px;
    overflow: hidden;
  }
`;
