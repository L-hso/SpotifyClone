import "./libraryDatabase.scss";
import { FakeData } from "../../sidebarFakeData";
import { FilterContext } from "../sidebarBottomRoot";
import { useContext } from "react";
import { IoPlay } from "react-icons/io5";

export function LibraryDatabase() {
  const { actualFilter, actualLayout } = useContext(FilterContext);

  return (
    <ul id="library_database" data-layout={actualLayout}>
      {Object.entries(FakeData)
        .sort((a, b) => compareValuesToSort(a, b, actualFilter.sortFilter))
        .map(([id, data]) => {
          //verificação da pesquisa de titulo
          let formatedSearch = actualFilter.search.toLowerCase()
          .split(" ")
          .join("");

          let titleHasSearch = data.title
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(formatedSearch);

          let subtitleHasSearch = data.subtitle
            .toLowerCase()
            .split(" ")
            .slice(2)
            .join("")
            .includes(formatedSearch);

          if (
            (actualFilter.tag == data.category &&
              (titleHasSearch || subtitleHasSearch)) ||
            (actualFilter.tag == "all" && (titleHasSearch || subtitleHasSearch))
          ) {
            return (
              <li
                key={id}
                data-layout={actualLayout}
                className="library_data"
                onClick={() => (FakeData[id]["access"] = Date.now() * -1)}
              >
                <div id="thumbnailAndPlayButtonWrapper">
                  <img
                    src={data.thumbnail}
                    alt="thumbnail"
                    data-category={data.category}
                  />
                  <button className="playButton">
                    <IoPlay size={25} fill="#2e2e2e" />
                  </button>
                </div>
                <hgroup>
                  <div>{data.title}</div>
                  <div>
                    <span>
                      {actualLayout != "Compacto"
                        ? data.subtitle.split(" ")[0]
                        : ""}
                    </span>
                    <span>
                      {actualLayout != "Compacto"
                        ? data.subtitle.split(" ").slice(1).join(" ")
                        : " • " + data.subtitle.split(" ").slice(0, 1)}
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

// Essa função compara os titulos, subtitulos e datas dos elementos da biblioteca

function compareValuesToSort(a, b, filter) {
  let formatedValueA = a[1][filter];
  let formatedValueB = b[1][filter];

  if (typeof a == "string") {
    formatedValueA = a[1][filter].toUpperCase();
    formatedValueB = b[1][filter].toUpperCase();
  }

  if (formatedValueA > formatedValueB) {
    return 1;
  } else if (formatedValueA < formatedValueB) {
    return -1;
  }
}
