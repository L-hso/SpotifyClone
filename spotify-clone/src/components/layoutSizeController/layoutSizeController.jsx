import "./layoutSizeController.scss";

export function LayoutSizeController() {
  return (
    <div
      id="LayoutSizeController"
      onDrag={(e) => {
        if (e.pageX > 350 && e.pageX < 650) {
          document
            .querySelector("#root")
            .style.setProperty("--actualSidebarWidth", e.pageX + "px");

            if(e.pageX>550){
              document.querySelector("#library .search-select").style.display = "none";
              document.querySelector("#sidebarBottomHeader .search-select").style.display = "flex";
            } else {
              document.querySelector("#library .search-select").style.display = "flex";
              document.querySelector("#sidebarBottomHeader .search-select").style.display = "none";
            }
        }

      }}
    ></div>
  );
}
