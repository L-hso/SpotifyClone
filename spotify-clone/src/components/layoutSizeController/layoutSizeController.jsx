import "./layoutSizeController.scss";

export function LayoutSizeController() {
  return (
    <div
      id="LayoutSizeController"
      onDrag={(e) => {
        if (e.pageX > 350 && e.pageX < 650) {
          console.log(e.pageX);
          document
            .querySelector("#root")
            .style.setProperty("--actualSidebarWidth", e.pageX+"px");
        }
      }}
    ></div>
  );
}
