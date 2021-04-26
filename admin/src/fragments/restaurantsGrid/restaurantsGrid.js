import { Container } from "./style";
import { Head } from "./core/head";
import { Content } from "./core/content";
import { SearchInput } from "@eachbase/components";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "react-paginate";

export const RestaurantsGrid = () => {
  const restaurants = useSelector(({ restaurants }) => restaurants);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [paginationPage, setPaginationPage] = useState(0);

  useEffect(() => {
    setPaginationPage(0);
  }, [searchBarValue]);

  const searchBarRestaurantsFilter = useCallback(
    () =>
      restaurants.filter(
        (i) => i.name.toLowerCase().indexOf(searchBarValue) !== -1
      ),
    [searchBarValue, restaurants]
  );

  const PAGINATION_RESTAURANTS_PER_PAGE = 10;
  const PAGINATION_OFFSET = paginationPage * PAGINATION_RESTAURANTS_PER_PAGE;
  const PAGINATION_PAGE_COUNT =
    searchBarRestaurantsFilter().length / PAGINATION_RESTAURANTS_PER_PAGE;

  const paginationRestaurantsFilter = useCallback(
    () =>
      searchBarRestaurantsFilter().reduce((accumulator, i, index) => {
        if (
          index >= PAGINATION_OFFSET &&
          accumulator.length < PAGINATION_RESTAURANTS_PER_PAGE
        ) {
          accumulator.push(i);
        }
        return accumulator;
      }, []),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchBarValue, restaurants, paginationPage, PAGINATION_OFFSET]
  );

  return (
    <Container>
      <div className="search-bar">
        <SearchInput
          value={searchBarValue}
          placeholder="Search Event"
          onChange={({ target: { value } }) => setSearchBarValue(value)}
        />
        <div className="noth">
          Total Restaurants: {searchBarRestaurantsFilter().length}
        </div>
      </div>
      <div className="grid-wrapper">
        <Head />
        <Content restaurants={paginationRestaurantsFilter()} />
        <div className="pagination-wrapper">
          <div className="noth">Active Page: {paginationPage + 1}</div>
          <Pagination
            containerClassName="pagination"
            pageCount={PAGINATION_PAGE_COUNT}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
            onPageChange={({ selected }) => setPaginationPage(selected)}
            previousLabel={"<"}
            nextLabel={">"}
          />
        </div>
      </div>
    </Container>
  );
};
