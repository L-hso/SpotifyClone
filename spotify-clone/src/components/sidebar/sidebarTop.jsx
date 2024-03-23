import { GoHomeFill, GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

export function SidebarTop() {
  return (
    <menu id="sidebar_top">
      <li>
        <a href="#">
          <GoHomeFill color="#fff" size={24} style={{ background: "none" }} />
          Início
        </a>
      </li>
      <li>
        <a href="#">
          <CiSearch
            color="#fff"
            size={24}
            style={{ background: "none" }}
            strokeWidth={0.5}
          />
          Buscar
        </a>
      </li>
    </menu>
  );
}
