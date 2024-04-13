import { useContext } from "react";
import { MainGradientColorContext } from "./mainRoot";

export function MainGradientController() {
  
  const { gradientColor } = useContext(MainGradientColorContext);
  
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${ gradientColor }, transparent)`,
        width: "100%",
        height: "45%",
        position:"absolute",
        top:0,
        left:0,
        opacity: 0.65
      }}
    />
  );
}
