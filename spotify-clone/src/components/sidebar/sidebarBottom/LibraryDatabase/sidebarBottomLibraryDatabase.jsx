import "./libraryDatabase.scss";
import { FakeData } from "../../sidebarFakeData";
import { FilterContext } from "../sidebarBottomRoot";
import { useContext, useRef } from "react";
import { IoPlay } from "react-icons/io5";
import { layoutSizeContext } from "../../../../App";

export function LibraryDatabase() {
  const { actualFilter, actualLayout } = useContext(FilterContext);

  const { layoutSize } = useContext(layoutSizeContext);

  const libraryDatabaseRef = useRef(null);

  return (
    <ul
      id="library_database"
      data-layout={actualLayout}
      ref={libraryDatabaseRef}
    >
      {Object.entries(FakeData)
        .sort((a, b) => compareValuesToSort(a, b, actualFilter.sortFilter))
        .map(([id, data]) => {
          //verificação da pesquisa de titulo
          let formatedSearch = actualFilter.search
            .toLowerCase()
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
          //--------------------------------------//

          if (
            (actualFilter.tag == data.category &&
              (titleHasSearch || subtitleHasSearch)) ||
            (actualFilter.tag == "all" && (titleHasSearch || subtitleHasSearch))
          ) {
            return (
              <li
                key={id}
                className="library_data"
                onClick={() => (FakeData[id]["access"] = Date.now() * -1)}
              >
                <div className="library_data_info" data-layout={actualLayout}>
                  <div className="thumbnailAndPlayButtonWrapper">
                    <img
                      src={data.thumbnail}
                      alt="thumbnail"
                      className="thumbnail"
                      data-category={data.category}
                    />
                    <button className="playButton">
                      <IoPlay size={25} fill="#2e2e2e" />
                    </button>
                  </div>
                  <hgroup className="titleAndSubtitle">
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
                </div>
                <div
                  className="library_data_extra_info"
                  style={{
                    "--extraInfoDisplay": layoutSize >= 660 ? "flex" : "none",
                  }}
                >
                  <span className="data_create">
                    {data.data.toLocaleDateString("pt-BR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="data_access">
                    {setTimePast(data.access)}
                  </span>
                </div>
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

function setTimePast(pastDate) {
  let timePast = (Date.now() - pastDate * -1) / 1000;

  if (pastDate == 0) {
    return "";
  }

  if (timePast >= 60 && timePast < 3600) {
    timePast = Math.floor(timePast / 60);

    return `há ${timePast} ${timePast == 1 ? "minuto" : "minutos"}`;
  } else if (timePast >= 3600 && timePast < 86400) {
    timePast = Math.floor(timePast / 3600);

    return `há ${timePast} ${timePast == 1 ? "hora" : "horas"}`;
  } else if (timePast >= 86400 && timePast < 2592000) {
    timePast = Math.floor(timePast / 86400);

    return `há ${timePast} ${timePast == 1 ? "dia" : "dias"}`;
  } else if (timePast >= 2592000 && timePast < 31104000) {
    timePast = Math.floor(timePast / 2592000);

    return `há ${timePast} ${timePast == 1 ? "mês" : "meses"}`;
  } else if (timePast >= 31104000) {
    timePast = Math.floor(timePast / 31104000);

    return `há ${timePast} ${timePast == 1 ? "ano" : "anos"}`;
  }

  return `há ${Math.floor(timePast)} segundos`;
}
