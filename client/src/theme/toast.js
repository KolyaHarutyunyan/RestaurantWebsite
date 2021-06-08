import { toast } from "react-toastify";
import styled from "styled-components";
import { ErrorFab, SuccessFab } from "./icons";

const MessageContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  .message {
    font-size: 0.9rem;
  }
`;

export const bringToast = (message, type) => {
  const renderIcon = () => {
    switch (type) {
      case "success":
        return <SuccessFab />;
      case "error":
        return <ErrorFab />;
      default:
        return null;
    }
  };

  toast(
    <MessageContainer>
      <div className="icon-container">{renderIcon()}</div>
      <div className="message">{message}</div>
    </MessageContainer>
  );
};
