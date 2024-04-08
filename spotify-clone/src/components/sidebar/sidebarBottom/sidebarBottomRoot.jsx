import "./sidebarBottom.scss";
import { createContext, useContext, useState } from "react";
import { LibraryDatabase } from "./LibraryDatabase/sidebarBottomLibraryDatabase";
import { SidebarBottomFilter } from "./Filter/sidebarBottomFilter";
import { SidebarBottomHeader } from "./Header/sidebarBottomHeader";
import { layoutSizeContext } from "../../../App";

export const FilterContext = createContext();

export function SidebarBottomRoot() {
  const [actualFilter, setActualFilter] = useState({
    search: "",
    tag: "all",
    sortFilter: "access",
  });

  const [actualLayout, setActualLayout] = useState("Lista");

  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const { layoutSize } = useContext(layoutSizeContext);

  return (
    <FilterContext.Provider
      value={{
        actualFilter,
        setActualFilter,
        actualLayout,
        setActualLayout,
        searchIsOpen,
        setSearchIsOpen,
      }}
    >
      <section id="sidebar_bottom">
        <SidebarBottomHeader />
        <div
          id="library"
          onScroll={ShadowOnScroll}
          style={{ "--dynamicDisplay": layoutSize >= 660 ? "none" : "flex" }}
        >
          <SidebarBottomFilter />
          <LibraryDatabase />
        </div>
      </section>
    </FilterContext.Provider>
  );
}

function ShadowOnScroll(e) {
  if (e.currentTarget.scrollTop != 0) {
    document
      .querySelector("#sidebarBottomHeader")
      .style.setProperty(
        "--sidebarBottomHeaderShadow",
        "12px 0 8px 12px rgba(0, 0, 0, 0.33)"
      );
  } else {
    document
      .querySelector("#sidebarBottomHeader")
      .style.setProperty("--sidebarBottomHeaderShadow", "none");
  }
}
