import { useState } from "react";
import { LibraryDatabase } from "./sidebarBottomLibraryDatabase";
import { SidebarBottomFilter } from "./sidebarBottomFilter";
import { SidebarBottomHeader } from "./sidebarBottomHeader";

export function SidebarBottomRoot() {
  
  const [actualFilter, setActualFilter] = useState({
    search: '',
    tag: "all"
  });

  return (
    <section id="sidebar_bottom">
      <SidebarBottomHeader {...{setActualFilter}}/>
      <div id="library"> 
        <SidebarBottomFilter {...{setActualFilter}}/>
        <LibraryDatabase {...{actualFilter}} />
      </div>
    </section>
  );
}


