import "./header.scss";
import { FilterContext } from "../sidebarBottomRoot";
import { useContext, useRef } from "react";
import { SidebarBottomFilter } from "../Filter/sidebarBottomFilter";
import { IoIosArrowForward, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";
import { layoutSizeContext } from "../../../../App";
import { LibraryTableHead } from "./libraryTableHead";

export function SidebarBottomHeader() {
  const [TagsMenuRef, NextTagsRef] = [useRef(null), useRef(null)];

  const { setActualFilter, actualLayout } = useContext(FilterContext);

  const { layoutSize, setLayoutSize } = useContext(layoutSizeContext);

  let nextTagsStyle;

  if (layoutSize >= 390) {
    nextTagsStyle = { "--nextTagsDisplay": "none" };
    TagsMenuRef.current.scrollLeft = 0;
  } else {
    nextTagsStyle = {
      "--nextTagsDisplay": "block",
      "--actualPositionLeft": "none",
      "--actualPositionRight": 0,
      "--actualScale": 1,
    };
  }

  //Define a categoria atual
  function setTag(givedTag) {
    setActualFilter((state) => {
      return { ...state, tag: state.tag == givedTag ? "all" : givedTag };
    });

    if (TagsMenuRef.current.dataset.actualtag == givedTag) {
      if (TagsMenuRef.current.parentElement.clientWidth < 390) {
        NextTagsRef.current.style = "";
      }
      TagsMenuRef.current.dataset.actualtag = "all";
    } else {
      if (TagsMenuRef.current.parentElement.clientWidth < 390) {
        NextTagsRef.current.style = "display:none;";
      }
      TagsMenuRef.current.dataset.actualtag = givedTag;
    }
  }

  function isSelected(tag) {
    return tag == TagsMenuRef?.current?.dataset.actualtag
      ? "true"
      : ["all", undefined].includes(TagsMenuRef?.current?.dataset.actualtag)
      ? "all"
      : "false";
  }

  return (
    <header
      id="sidebarBottomHeader"
      style={{
        "--dynamicDisplay": layoutSize >= 660 ? "flex" : "none",
        borderBottom:
          layoutSize >= 660 && actualLayout != "Grade"
            ? "1.5px solid #666"
            : "none",
      }}
    >
      <div id="library_title">
        <div>
          <button>
            <LuLibrary size={24} fill="#ffffff" />
          </button>
          Sua Biblioteca
        </div>

        <div>
          <button>
            <FiPlus size={20} fill="#ffffff" />
          </button>
          <button
            onClick={() => {
              if (layoutSize < 750) {
                document
                  .querySelector("#root")
                  .style.setProperty("--actualSidebarWidth", "750px");

                setLayoutSize(750);
              } else {
                document
                  .querySelector("#root")
                  .style.setProperty("--actualSidebarWidth", "350px");

                setLayoutSize(350);
              }
            }}
          >
            {layoutSize < 750 ? <IoMdArrowForward size={20} fill="#ffffff" /> : <IoMdArrowBack size={20} fill="#ffffff"/>}
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div id="tagsAndNextButtonWrapper">
          <menu ref={TagsMenuRef} data-actualtag="all" id="tags">
            {[
              ["artist", "Artistas"],
              ["playlist", "Playlists"],
              ["album", "Albums"],
              ["podcast", "Podcasts e programas"],
            ].map((values, index) => (
              <li
                key={`tags-${index}`}
                data-ativo={isSelected(values[0])}
                onClick={() => setTag(values[0])}
              >
                {values[1]}
              </li>
            ))}
          </menu>
          <div id="next_tags" ref={NextTagsRef} style={nextTagsStyle}>
            <button
              onClick={() => {
                const menuref = TagsMenuRef.current;

                if (menuref.scrollLeft == 0) {
                  menuref.scrollBy({
                    top: 0,
                    left: menuref.clientWidth,
                    behavior: "smooth",
                  });

                  NextTagsRef.current.style =
                    "--actualPositionRight: none; --actualPositionLeft: -1px; --actualScale: -1;";
                } else {
                  menuref.scrollBy({
                    top: 0,
                    left: -1 * menuref.clientWidth,
                    behavior: "smooth",
                  });

                  NextTagsRef.current.style =
                    "--actualPositionRight: 0; --actualPositionLeft: none; --actualScale: 1;";
                }
              }}
            >
              <IoIosArrowForward {...{ size: 14, fill: "#fff" }} />
            </button>
          </div>
        </div>
        <SidebarBottomFilter />
      </div>
      <LibraryTableHead />
    </header>
  );
}
