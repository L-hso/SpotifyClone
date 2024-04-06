import './sidebarBottomFilter.scss'
import { SortFilterAndLayoutController } from "./sortFilterAndLayoutController";
import { SearchFilter } from "./searchFilter";

export function SidebarBottomFilter() {
  return (
    <div className="search-select">
      <SearchFilter />
      <SortFilterAndLayoutController />
    </div>
  );
}
