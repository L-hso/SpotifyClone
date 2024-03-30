import { FakeData } from "../sidebarFakeData";
import { useEffect } from "react";
export function LibraryDatabase({ actualFilter }) {
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
    <ul id="library_database">
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
                className="library_data"
                onClick={() => (FakeData[key]["access"] = Date.now() * -1)}
              >
                <img
                  src={data.thumbnail}
                  alt="thumbnail"
                  data-category={data.category}
                />
                <hgroup>
                  <div>{data.title}</div>
                  <div>{data.subtitle}</div>
                </hgroup>
              </li>
            );
          }
        })}
    </ul>
  );
}
