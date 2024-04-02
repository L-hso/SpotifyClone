import { IoPlay } from "react-icons/io5";
import { FakeData } from "../../sidebarFakeData";
import "./libraryDatabase.scss";

export function LibraryDatabase({ actualFilter, actualLayout }) {
  function compareValuesToSort(a, b) {
    let formatedValueA;
    let formatedValueB;
    if (typeof a == "string") {
      formatedValueA = a[1][actualFilter.sortFilter].toUpperCase();
      formatedValueB = b[1][actualFilter.sortFilter].toUpperCase();
    } else {
      formatedValueA = a[1][actualFilter.sortFilter];
      formatedValueB = b[1][actualFilter.sortFilter];
    }

    if (formatedValueA > formatedValueB) {
      return 1;
    } else if (formatedValueA < formatedValueB) {
      return -1;
    }
  }

  return (
    <ul id="library_database" data-layout={actualLayout}>
      {Object.entries(FakeData)
        .sort(compareValuesToSort)
        .map(([key, data]) => {
          //verificação da pesquisa de titulo

          let parsedTitle = data.title
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(actualFilter.search);

          if (
            (actualFilter.tag == data.category && parsedTitle) ||
            (actualFilter.tag == "all" && parsedTitle)
          ) {
            return (
              <li
                key={key}
                data-layout={actualLayout}
                className="library_data"
                onClick={() => (FakeData[key]["access"] = Date.now() * -1)}
              >
                <div id="thumbnailAndPlayButtonWrapper">
                  <img
                    src={data.thumbnail} 
                    alt="thumbnail"
                    data-category={data.category}
                  /> 
                  <button className="playButton">
                    <IoPlay size={25} fill={"#2e2e2e"}/>
                  </button>
                </div>
                <hgroup>
                  <div>{data.title}</div>
                  <div>
                    <span>
                      {actualLayout != "Compacto"
                        ? data.subtitle.split(" ")[0]
                        : ""}
                    </span>{" "}
                    <span>
                      {actualLayout != "Compacto"
                        ? data.subtitle.split(" ").slice(1).join(" ")
                        : "• " + data.subtitle.split(" ").slice(0, 1)}
                    </span>
                  </div>
                </hgroup>
              </li>
            );
          }
        })}
    </ul>
  );
}