import { useRef } from "react";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { LuLibrary } from "react-icons/lu";

export function SidebarBottomHeader({ setActualFilter }) {
  const TagsMenuRef = useRef(null);
  function setTag(givedTag) {
    setActualFilter((state) => {
      return { ...state, tag: state.tag == givedTag ? "all" : givedTag };
    });
    TagsMenuRef.current.dataset.actualTag =
      TagsMenuRef.current.dataset.actualTag == givedTag ? "all" : givedTag;
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
      <menu ref={el =>TagsMenuRef.current=el} data-actualTag="all" id="tags">
        <li
          data-ativo={"artist" == TagsMenuRef.current.dataset.actualTag }
          onClick={() => setTag("artist")}
        >
          Artistas
        </li>
        <li
          data-ativo={"playlist" == TagsMenuRef.current.dataset.actualTag}
          onClick={() => setTag("playlist")}
        >
          Playlists
        </li>
        <li
          data-ativo={"album" == TagsMenuRef.current.dataset.actualTag}
          onClick={() => setTag("album")}
        >
          Albums
        </li>
        <li
          data-ativo={"podcasts" == TagsMenuRef.current.dataset.actualTag}
          onClick={() => setTag("podcasts")}
        >
          Podcasts e programas
        </li>
        <div id="next_tags">
          <button>
            <IoIosArrowForward {...{ size: 14, color: "#fff" }} />
          </button>
        </div>
      </menu>
    </header>
  );
}
