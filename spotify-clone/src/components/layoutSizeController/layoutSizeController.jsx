import { useContext } from "react";
import "./layoutSizeController.scss";
import { layoutSizeContext } from "../../App";

export function LayoutSizeController() {

  const { setLayoutSize } = useContext(layoutSizeContext);

  return (
    <div
      id="LayoutSizeController"
      onDragCapture={(e) => {
        //Define o tamanho da sidebar
        if (e.pageX > 350 && e.pageX < 750) {
          document
            .querySelector("#root")
            .style.setProperty("--actualSidebarWidth", e.pageX + "px");

        setLayoutSize(e.pageX);
        }
      }}
    ></div>
  );
}
