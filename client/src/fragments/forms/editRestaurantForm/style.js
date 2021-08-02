import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      text-align: center;
    }
  }
  .active{
    @media (max-width: 768px) {
      font-size: 14px;
    }
    color: #007AFF;
    font-size: 18px;
  }
  .title-drag{
    margin-top: 6px;
    font-family: Open Sans, sans-serif;
    font-size: 18px; 
    color: #2B273C;
    @media (max-width: 768px) {
      font-size: 14px;
  }
  }
  .acceptable-file-size-noth{
    font-family: Open Sans, sans-serif;
    font-size: 12px;
    color:#2B273C80 ;
    margin-top: 8px;
  }
  .uploaded {
    font-family: Open Sans, sans-serif;
    text-align: center;
    @media (max-width: 768px) {
      height: 170px;
    }
    height: 213px;
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #2B273C80;
    border-radius: 8px;
  }
  .input-padding{
    margin-bottom: 8px;
  }
  .title {
    @media (max-width: 768px) {
      font-size: 18px;
    }
    text-align: center;
    font-size: 24px;
    font-family: Poppins,sans-serif;
    margin-bottom: 17px;
  }
  .max-characters {
    font-family: Open Sans, sans-serif;
    font-size: 12px;
    margin-left: 13px;
    margin-bottom: 16px;
  }
  .save-button{
    margin-top: 20px;
  }
`;
