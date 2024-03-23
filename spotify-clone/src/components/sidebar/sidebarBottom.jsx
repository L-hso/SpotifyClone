import { LuLibrary } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export function SidebarBottom() {
  return (
    <section id="sidebar_bottom">
      <header>
        <div id="library">
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
        <div id="filter_container">
          <menu id="tags">
            <li>Artistas</li>
            <li>Playlists</li>
            <li>Albums</li>
            <li>Podcasts e programas</li>
            <div id="next_tags">
              <button>
                <IoIosArrowForward size={14} color="#ffffff" />
              </button>
            </div>
          </menu>
          <div id="search-select">
            <CiSearch />
            <select name="sidebarbottomfilter" id="select_filter" >
              <option value="recent">Recentes</option>
              <option value="add_recent">Adicionados Recentemente</option>
              <option value="sorted">Ordem Alfabética</option>
              <option value="creator">Criador</option>
            </select>
          </div>
        </div>
      </header>
    </section>
  );
}
