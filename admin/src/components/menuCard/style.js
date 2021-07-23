import styled from "styled-components";
import { CONSTANTS } from "@eachbase/constants";
export const Container = styled.div`
  height: 220px;
  min-width: 220px;
  overflow: hidden;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 0px 0px 10px 1px #dedede;
  padding: 16px 8px 0 8px;
  color: var(--text);
  .action-bar {
    display: flex;
    margin-top: 16px;
    .title {
      cursor: pointer;
      font-weight: bold;
      flex: 2;
      height: 100%;
      font-size: 1rem;
      padding: inherit;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .action {
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }
  }
  .descr {
    margin-top: 5px;
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cover {
    background: ${({ coverImg }) =>
      coverImg ? `url(${coverImg})` : `url(${CONSTANTS.ASSETS.DEFAULT_COVER})`};
    background-position: center;
    background-size: cover;
    height: 60%;
  }
`;
