import { Container } from "./style";
import { Head } from "./core/Head";
import { Content } from "./core/Content";
import { SearchInput } from "@eachbase/components";
import { useState } from "react";
export const RestaurantsGrid = () => {
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <Container>
      <div className="search-bar">
        <SearchInput
          value={searchBarValue}
          placeholder="Search Event"
          onChange={({ target: { value } }) => setSearchBarValue(value)}
        />
        <div className="noth">Total Restaurants: 0</div>
      </div>
      <div className="grid-wrapper">
        <Head />
        <Content />
      </div>
    </Container>
  );
};
