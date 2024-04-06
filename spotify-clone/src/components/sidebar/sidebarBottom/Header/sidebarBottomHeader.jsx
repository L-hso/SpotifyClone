import "./header.scss";
import { FilterContext } from "../sidebarBottomRoot";
import { useContext, useRef } from "react";
import { SidebarBottomFilter } from "../Filter/sidebarBottomFilter";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { LuLibrary } from "react-icons/lu";

export function SidebarBottomHeader() {
  const [TagsMenuRef, NextTagsRef] = [useRef(null), useRef(null)];

  const { setActualFilter } = useContext(FilterContext);

  function setTag(givedTag) {
    setActualFilter((state) => {
      return { ...state, tag: state.tag == givedTag ? "all" : givedTag };
    });

    //Define a categoria atual e a posição do botão de avançar
    if (TagsMenuRef.current.dataset.actualtag == givedTag) {
      TagsMenuRef.current.dataset.actualtag = "all";
    } else {
      TagsMenuRef.current.dataset.actualtag = givedTag;

      NextTagsRef.current.style.cssText = "display: none;";
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
    <header id="sidebarBottomHeader">
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
          <button>
            <IoMdArrowForward size={20} fill="#ffffff" />
          </button>
        </div>
      </div>

      <div style={{display:"flex", width: "100%"}}>
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
        <div id="next_tags" ref={NextTagsRef}>
          <button
            onClick={() => {
              const menuref = TagsMenuRef.current;

              if (menuref.scrollLeft == 0) {
                menuref.scrollBy({
                  top: 0,
                  left: menuref.clientWidth,
                  behavior: "smooth",
                });

                NextTagsRef.current.style.setProperty(
                  "--actualPositionLeft",
                  "-1px"
                );

                NextTagsRef.current.style.setProperty(
                  "--actualPositionRight",
                  null
                );

                NextTagsRef.current.style.setProperty("--actualScale", -1);
              } else {
                menuref.scrollBy({
                  top: 0,
                  left: -1 * menuref.clientWidth,
                  behavior: "smooth",
                });

                NextTagsRef.current.style.setProperty(
                  "--actualPositionRight",
                  0
                );

                NextTagsRef.current.style.setProperty(
                  "--actualPositionLeft",
                  null
                );

                NextTagsRef.current.style.setProperty("--actualScale", 1);
              }
            }}
          >
            <IoIosArrowForward {...{ size: 14, fill: "#fff" }} />
          </button>
        </div>
      </div>
      <SidebarBottomFilter/>
      </div>
    </header>
  );
}
