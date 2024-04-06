import "./layoutSizeController.scss";

export function LayoutSizeController() {
  return (
    <div
      id="LayoutSizeController"
      onDrag={(e) => {
        const library = document.querySelector("#library");
        const sidebarBottomHeader = document.querySelector(
          "#sidebarBottomHeader"
        );

        if (e.pageX > 350 && e.pageX < 650) {
          document
            .querySelector("#root")
            .style.setProperty("--actualSidebarWidth", e.pageX + "px");

          if (e.pageX > 550) {
            library.style.setProperty("--dynamicDisplay", "none");

            sidebarBottomHeader.style.setProperty("--dynamicDisplay", "flex");
          } else {
            library.style.setProperty("--dynamicDisplay", "flex");

            sidebarBottomHeader.style.setProperty("--dynamicDisplay", "none");
          }

          if (e.pageX > 450) {
            document
              .querySelector("#next_tags")
              .style.setProperty("--nextTagsDisplay", "none");
          } else {
            document.querySelector("#next_tags").style = "";
          }
        }
      }}
    ></div>
  );
}
