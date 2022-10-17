import { StyledNoItemsCard } from "./style";

export const NoItemsCard = ({ text }) => {
  return (
    <StyledNoItemsCard>
      <span className="no-items-text">{text}</span>
    </StyledNoItemsCard>
  );
};
