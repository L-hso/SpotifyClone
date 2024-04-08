import './sidebarBottomFilter.scss'
import { useContext } from 'react';
import { SortFilterAndLayoutController } from "./sortFilterAndLayoutController/sortFilterAndLayoutController";
import { SearchFilter } from "./searchFilter/searchFilter";
import { layoutSizeContext } from '../../../../App';

export function SidebarBottomFilter() {

  const { layoutSize } = useContext(layoutSizeContext);
  
  return (
    <div className="search-select" >
      <SearchFilter/>
      <SortFilterAndLayoutController />
    </div>
  );
}
