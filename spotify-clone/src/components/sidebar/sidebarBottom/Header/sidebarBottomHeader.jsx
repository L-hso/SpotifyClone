import "./header.scss";
import { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { LuLibrary } from "react-icons/lu";

export function SidebarBottomHeader({ setActualFilter }) {
  const TagsMenuRef = useRef(null);
  const NextTagsRef = useRef(null);
  function setTag(givedTag) {
    setActualFilter((state) => {
      return { ...state, tag: state.tag == givedTag ? "all" : givedTag };
    });

    //Define a o filtro (tag) atual e a posição do botão de avançar
    if (TagsMenuRef.current.dataset.actualtag == givedTag) {
      TagsMenuRef.current.dataset.actualtag = "all";

      NextTagsRef.current.style.cssText =
        "transform: scale(1); right: 0; display: block;";
    } else {
      TagsMenuRef.current.dataset.actualtag = givedTag;

      NextTagsRef.current.style.cssText = "display: none;";
    }
  }

  function setDataAtivo(tag) {
    return tag == TagsMenuRef?.current?.dataset.actualtag
      ? "true"
      : ["all", undefined].includes(TagsMenuRef.current?.dataset.actualtag)
      ? "all"
      : "false";
  }

  return (
    <header>
      <div id="library_title">
        <div>
          <button>
            <LuLibrary size={24} color="#ffffff" />
          </button>
          Sua Biblioteca
        </div>

        <div>
          <button>
            <FiPlus size={20} color="#ffffff" />
          </button>
          <button>
            <IoMdArrowForward size={20} color="#ffffff" />
          </button>
        </div>
      </div>
      <menu ref={TagsMenuRef} data-actualtag="all" id="tags">
        
        {[
          ["artist", "Artistas"],
          ["playlist", "Playlists"],
          ["album", "Albums"],
          ["podcast", "Podcasts e programas"],
        ].map((values, index) => (
          <li
            key={`tags-${index}`}
            data-ativo={setDataAtivo(values[0])}
            onClick={() => setTag(values[0])}
          >
            {values[1]}
          </li>
        ))}

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
                NextTagsRef.current.style.cssText =
                  "transform: scale(-1); left: 0;";
              } else {
                menuref.scrollBy({
                  top: 0,
                  left: -1 * menuref.clientWidth,
                  behavior: "smooth",
                });
                NextTagsRef.current.style.cssText =
                  "transform: scale(1); right: 0;";
              }
            }}
          >
            <IoIosArrowForward {...{ size: 14, color: "#fff" }} />
          </button>
        </div>
      </menu>
    </header>
  );
}
