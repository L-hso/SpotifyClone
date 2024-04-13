import { createContext, useState } from "react";
import "./main.scss";
import { MainGradientController } from "./mainGradientController";

export const MainGradientColorContext = createContext();

export function MainRoot({ children }) {
  const [gradientColor, setGradientColor] = useState("#181818");

  return (
    <MainGradientColorContext.Provider
      value={{ gradientColor, setGradientColor }}
    >
      <main id="main_content">
        <MainGradientController />
        {/*Wrapper para sobreposição do gradiente do topo*/}
        <div id="wrapper">{children}</div>
      </main>
    </MainGradientColorContext.Provider>
  );
}
