import { useRef } from "react";
import { SortFilterAndLayoutController } from "./sortFilterAndLayoutController";
import { SearchFilter } from "./searchFilter";

export function SidebarBottomFilter({ setActualFilter, setActualLayout }) {
  const searchFilterRef = useRef(null);
  return (
    <div id="search-select">
      <SearchFilter {...{searchFilterRef}}/>
      <SortFilterAndLayoutController {...{setActualFilter, setActualLayout}}/>
    </div>
  );
}
