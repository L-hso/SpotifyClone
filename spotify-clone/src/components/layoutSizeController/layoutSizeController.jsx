import "./layoutSizeController.scss";

export function LayoutSizeController() {
  return (
    <div
      id="LayoutSizeController"
      onDrag={(e) => {
        if (e.pageX > 350 && e.pageX < 500) {
          console.log(e.pageX);
          document
            .querySelector("#root")
            .style.setProperty("--actualSidebarWidth", e.pageX+"px");
        }
      }}
    ></div>
  );
}
