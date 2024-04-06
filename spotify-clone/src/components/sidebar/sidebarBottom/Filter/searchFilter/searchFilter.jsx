import "./searchFilter.scss";
import { CiSearch } from "react-icons/ci";
import { useContext, useRef } from "react";
import { FilterContext } from "../../sidebarBottomRoot";

export function SearchFilter() {
  const searchFilterRef = useRef(null);

  const { setActualFilter, actualFilter, searchIsOpen, setSearchIsOpen } =
    useContext(FilterContext);

  return (
    <div id="search_filter">
      <button onClick={() => setSearchIsOpen((state) => !state)}>
        <CiSearch size={20} />
      </button>
      <input
        ref={searchFilterRef}
        data-open={searchIsOpen}
        type="text"
        name="search_filter"
        placeholder="Pesquise algo"
        value={actualFilter.search}
        onInput={() => {
          setActualFilter((state) => {
            return {
              ...state,
              search: searchFilterRef.current.value,
            };
          });
        }}
      />
    </div>
  );
}
