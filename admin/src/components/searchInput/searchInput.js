import { Container } from "./style";
import { IoMdSearch } from "react-icons/all";
export const SearchInput = ({ value = "", onChange = () => {}, ...rest }) => {
  return (
    <Container>
      <input value={value} onChange={(e) => onChange(e)} {...rest} />
      <div className="icon">
        <IoMdSearch />
      </div>
    </Container>
  );
};
