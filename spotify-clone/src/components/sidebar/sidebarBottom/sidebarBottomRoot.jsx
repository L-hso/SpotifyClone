import "./sidebarBottom.scss";
import { useState } from "react";
import { LibraryDatabase } from "./LibraryDatabase/sidebarBottomLibraryDatabase";
import { SidebarBottomFilter } from "./Filter/sidebarBottomFilter";
import { SidebarBottomHeader } from "./Header/sidebarBottomHeader";

export function SidebarBottomRoot() {
  const [actualFilter, setActualFilter] = useState({
    search: "",
    tag: "all",
    sortFilter: "data",
  });

  const [actualLayout, setActualLayout] = useState("Lista");

  return (
    <section id="sidebar_bottom">
      <SidebarBottomHeader {...{ setActualFilter }} />
      <div
        id="library"
        onScroll={(e) => {
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
        }}
      >
        <SidebarBottomFilter {...{ setActualFilter, setActualLayout }} />
        <LibraryDatabase {...{ actualFilter, actualLayout }} />
      </div>
    </section>
  );
}
