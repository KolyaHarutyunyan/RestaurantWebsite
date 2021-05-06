import { Styled } from "./style";
export const Switch = ({ className = "switch", status, onClick }) => {
  return (
    <Styled.Block className={className} status={status} onClick={onClick}>
      <Styled.Track className="track" />
    </Styled.Block>
  );
};
