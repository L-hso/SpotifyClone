import "./mainHeader.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useContext } from "react";
import { MainGradientColorContext } from "../mainRoot";

export function MainHeader() {
  const { gradientColor } = useContext(MainGradientColorContext);

  return (
    <header
      id="main_content_header"
      style={{
        background: `linear-gradient(to bottom, ${gradientColor}, transparent)`,
      }}
    >
      <div id="page_control">
        <button>
          <IoIosArrowBack size={20} />
        </button>
        <button>
          <IoIosArrowForward size={20} />
        </button>
      </div>
      <menu id="header_menu_options">
        <li>
          <button id="premium">Ver planos Premium</button>
        </li>
        <li>
          <button id="install_app">
            <HiDownload size={15} /> Instalar aplicativo
          </button>
        </li>
        <li>
          <button id="notifications">
            <IoNotificationsOutline size={20} />
          </button>
        </li>
        <li>
          <button id="profile">
            <img src="https://pbs.twimg.com/media/EovVI0YXUAIJJ3U.jpg" alt="" />
          </button>
        </li>
      </menu>
    </header>
  );
}
