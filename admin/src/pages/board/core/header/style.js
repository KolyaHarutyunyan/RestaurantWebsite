import styled from "styled-components";

export const Style = {
  Container: styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    width: 100%;
    height: 60px;
    background-color: var(--filling);
  `,
  Menu: {
    Wrapper: styled.ul`
      display: flex;
    `,
    Item: {
      Wrapper: styled.li`
        cursor: pointer;
        display: flex;
        margin-left: 30px;
      `,
      Logo: styled.div`
        margin-right: 5px;
      `,
      Title: styled.div`
        font-weight: 400;
      `,
    },
  },
  Logo: {
    Wrapper: styled.div`
      display: flex;
      align-items: center;
    `,
    Title: styled.div`
      margin-left: 5px;
      font-size: 1.2rem;
      font-weight: bold;
    `,
    Img: styled.img`
      width: 30px;
      height: 30px;
    `,
  },
};
