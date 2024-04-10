import "./main.scss";
import { MainGradientController } from "./mainGradientController";

export function MainRoot({ children }) {
  return <main id="main_content">{children}<MainGradientController/></main>;
}
