import './footer.scss';

import { TiArrowShuffle } from "react-icons/ti";
import { FaBackwardStep } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { FaForwardStep } from "react-icons/fa6";
import { TiArrowLoop } from "react-icons/ti";

//Os botões estão resetados no index.scss. Obs: apagar esse comentário quando ver.


export function PlayerControl({ children }) {
  return (
      <div id="player">
        <div id="player_control">
          <button><TiArrowShuffle size={22}/></button>
          <button><FaBackwardStep size={22}/></button>
          <button><FaPauseCircle size={32}/></button>
          <button><FaForwardStep size={22}/></button>
          <button><TiArrowLoop size={22}/></button>
        </div>
        {children}
      </div>
  );
}