import { useContext } from "react";
import "./libraryTableHead.scss";
import { layoutSizeContext } from "../../../../App";
import { FilterContext } from "../sidebarBottomRoot";

export function LibraryTableHead() {
  const { layoutSize } = useContext(layoutSizeContext);
  const { actualLayout } = useContext(FilterContext);

  return (
    <div id="libraryTableHead" style={{"--libraryTableHeadDisplay":layoutSize>=660 && actualLayout != "Grade"? "flex": "none"}}>
      <span>Titulo</span>
      <hgroup>
        <span>Data de Adição</span>
        <span>Você ouviu</span>
      </hgroup>
    </div>
  );
}
