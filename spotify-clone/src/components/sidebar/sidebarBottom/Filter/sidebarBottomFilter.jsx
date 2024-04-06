import './sidebarBottomFilter.scss'
import { SortFilterAndLayoutController } from "./sortFilterAndLayoutController/sortFilterAndLayoutController";
import { SearchFilter } from "./searchFilter/searchFilter";

export function SidebarBottomFilter() {

  
  return (
    <div className="search-select">
      <SearchFilter/>
      <SortFilterAndLayoutController />
    </div>
  );
}
