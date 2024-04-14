import "./Recent_playlists_and_mixes.scss";
import { FakeRecent } from "../mainFakeData";
import { IoPlay } from "react-icons/io5";
import { useContext } from "react";
import { layoutSizeContext } from "../../../App";
import { MainGradientColorContext } from "../mainRoot";

export function Recent_playlists_and_mixes() {
  const { layoutSize } = useContext(layoutSizeContext);
  const { setGradientColor } = useContext(MainGradientColorContext);

  return (
    <article>
      <menu
        id="recent_playlists_and_mixes"
        style={{ "--column_amount": layoutSize >= 500 ? 2 : 4 }}
      >
        {Object.entries(FakeRecent).map(([id, values]) => (
          <li
            key={id}
            onMouseOver={() =>
              setGradientColor(
                 values.color
              )
            }
            
          >
            <img src={values.thumbnail} alt="" className="recent_thumbnail" />
            <span className="recent_title">{values.title}</span>
            <button className="play_button">
              <IoPlay size={15} fill="#2e2e2e" />
            </button>
          </li>
        ))}
      </menu>
    </article>
  );
}
