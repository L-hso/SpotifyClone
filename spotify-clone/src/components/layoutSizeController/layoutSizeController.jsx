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

        //Define o tamanho da sidebar
        if (e.pageX > 350 && e.pageX < 750) {
          document
            .querySelector("#root")
            .style.setProperty("--actualSidebarWidth", e.pageX + "px");

          //Define o funcionamento do botão de avançar das tags
          if (e.pageX > 450) {
            document
              .querySelector("#next_tags")
              .style.setProperty("--nextTagsDisplay", "none");
          } else {
            document.querySelector("#next_tags").style = "";
          }
          //Define a posição do filtro da biblioteca (search e select)
          if (e.pageX >= 660) {
            library.style.setProperty("--dynamicDisplay", "none");

            sidebarBottomHeader.style.setProperty("--dynamicDisplay", "flex");

            
          } else {
            library.style.setProperty("--dynamicDisplay", "flex");

            sidebarBottomHeader.style.setProperty("--dynamicDisplay", "none");

            //Define se a data de criação e a data de acesso estão a mostra
            
          }
        }
      }}
    ></div>
  );
}
