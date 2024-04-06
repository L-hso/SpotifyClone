import "./searchFilter.scss";
import { CiSearch } from "react-icons/ci";
import { useContext, useRef } from "react";
import { FilterContext } from "../sidebarBottomRoot";

export function SearchFilter() {
  const searchFilterRef = useRef(null);
  const { setActualFilter } = useContext(FilterContext);

  return (
    <div id="search_filter">
      <button
        onClick={() => {
          const search_filter = searchFilterRef.current;

          search_filter.dataset.open =
            search_filter.dataset.open == "true" ? "false" : "true";
        }}
      >
        <CiSearch size={20} />
      </button>
      <input
        ref={searchFilterRef}
        data-open="false"
        type="text"
        name="search_filter"
        placeholder="Pesquise algo"
        onChange={() => {
          setActualFilter((state) => {
            return {
              ...state,
              search: searchFilterRef.current.value
                .toLowerCase()
                .split(" ")
                .join(""),
            };
          });
        }}
      />
    </div>
  );
}
