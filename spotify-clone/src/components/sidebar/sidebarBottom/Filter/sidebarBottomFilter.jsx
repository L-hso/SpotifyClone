import { SortFilterAndLayoutController } from "./sortFilterAndLayoutController";
import { SearchFilter } from "./searchFilter";

export function SidebarBottomFilter({ setActualFilter, setActualLayout }) {
  
  return (
    <div id="search-select">
      <SearchFilter {...{ setActualFilter }}/>
      <SortFilterAndLayoutController {...{ setActualFilter, setActualLayout }}/>
    </div>
  );
}
