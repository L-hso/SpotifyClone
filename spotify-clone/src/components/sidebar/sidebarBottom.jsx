import { LuLibrary } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";

export function SidebarBottom() {
  return (
    <section id="sidebar_bottom">
      <header>
        <div id="library">
          <div>
            <LuLibrary size={24} />
            Sua Biblioteca
          </div>
          <div>
            <FiPlus size={20} />
            <IoMdArrowForward size={20} />
          </div>
        </div>
        <menu id="tags">
          <li>Playlists</li>
          <li>Podcasts e programas</li>
          <li>Artistas</li>
        </menu>
      </header>
      <ul></ul>
    </section>
  );
}
