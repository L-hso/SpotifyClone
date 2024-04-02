import "./searchFilter.scss";
import { CiSearch } from "react-icons/ci";

export function SearchFilter({searchFilterRef}){
  return (<div id="search_filter">
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
    data-open={false}
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
</div>)
}