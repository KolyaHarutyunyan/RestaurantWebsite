import { Container } from "./style";
import { SearchInput } from "@eachbase/components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-paginate";
import { Head } from "./core/head";
import { Content } from "./core/content";
import { ownersActions } from "../../store/owners";
import { FindLoad } from "@eachbase/utils";

export const OwnersGrid = () => {
  const { ownersList, reserveOwners } = useSelector((state) => ({
    ownersList: state.owners.ownersList,
    reserveOwners: state.owners.reserveOwners
  }));
  const dispatch = useDispatch();
  const [searchBarValue, setSearchBarValue] = useState("");
  const [paginationPage, setPaginationPage] = useState(0);
  const owners = ownersList && ownersList.length === 1 ? ownersList[0] : ownersList[paginationPage];
  const loader = FindLoad("GET_OWNERS");

  useEffect(() => {
    setPaginationPage(0);
  }, [searchBarValue]);

  useEffect(() => {
    dispatch(ownersActions.searchOwners(searchBarValue));
  }, [searchBarValue]);

  return (
    <Container>
      <div className="search-bar">
        <SearchInput
          value={searchBarValue}
          placeholder="Search Owner"
          onChange={({ target: { value } }) => setSearchBarValue(value)}
        />
        <div className="noth">
          Total Owners: {reserveOwners?.length}
        </div>
      </div>
      {loader ?
        <div className="loader">
          <h1>Loading...</h1>
        </div>
        :
        <div className="grid-wrapper">
          <Head />
          <Content owners={owners ? owners : []} />
          {ownersList?.length > 1 ?
            <div className="pagination-wrapper">
              <Pagination
                containerClassName="pagination"
                pageCount={ownersList?.length}
                pageRangeDisplayed={3}
                marginPagesDisplayed={3}
                onPageChange={({ selected }) => setPaginationPage(selected)}
                previousLabel={"<"}
                nextLabel={">"}
              />
            </div>
            : ""}
        </div>
      }
    </Container>
  );
}
;
