import { useContext } from "react";
import "./libraryTableHead.scss";
import { layoutSizeContext } from "../../../../App";

export function LibraryTableHead() {
  const { layoutSize } = useContext(layoutSizeContext);

  return (
    <div id="libraryTableHead" style={{"--libraryTableHeadDisplay":layoutSize>=660? "flex": "none"}}>
      <span>Titulo</span>
      <hgroup>
        <span>Data de Adição</span>
        <span>Você ouviu</span>
      </hgroup>
    </div>
  );
}
