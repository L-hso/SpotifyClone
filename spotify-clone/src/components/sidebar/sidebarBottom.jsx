import { LuLibrary } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";

export function SidebarBottom() {
  return (
    <section id="sidebar_bottom">
      <header>
        <div id="library">
          <div>
            <button><LuLibrary size={24} color="#ffffff"/></button>
            Sua Biblioteca
          </div>
          
          <div>
            <button>
              <FiPlus size={20} color="#ffffff"/>
            </button>
            <button>
              <IoMdArrowForward size={20} color="#ffffff"/>
            </button>
          </div>
        </div>


        <menu id="tags">
          <li>Playlists</li>
          <li>Albums</li>
          <li>Podcasts e programas</li>
          <li>Artistas</li>
          <button id="expandir"><IoIosArrowForward size={14} color="#ffffff"/></button>
        </menu>
      </header>
    </section>
  );
}
