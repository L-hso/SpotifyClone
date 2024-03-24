import './footer.scss';

import { TiArrowShuffle } from "react-icons/ti";
import { FaBackwardStep } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { FaForwardStep } from "react-icons/fa6";
import { TiArrowLoop } from "react-icons/ti";

export function PlayerControl({ children }) {
  return (
      <div id="player">
        <div id="player_control">
          <TiArrowShuffle />
          <FaBackwardStep />
          <FaPauseCircle />
          <FaForwardStep />
          <TiArrowLoop />
        </div>
        {children}
      </div>
  );
}