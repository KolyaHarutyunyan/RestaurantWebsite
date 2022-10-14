import { Styled } from "./style";
export const Switch = ({ className = "switch", status, offColor, onClick }) => {
  return (
    <Styled.Block
      className={className}
      status={status}
      offColor={offColor}
      onClick={onClick}
    >
      <Styled.Track className="track" />
    </Styled.Block>
  );
};
