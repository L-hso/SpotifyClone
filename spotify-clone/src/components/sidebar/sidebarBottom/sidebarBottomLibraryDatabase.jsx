import { FakeData } from "../sidebarFakeData";

export function LibraryDatabase({ actualFilter }) {
  return (
    <ul id="library_database">
      {Object.entries(FakeData).map(([key, data]) => {
        //verificação da pesquisa de titulo

        let parsedTitle = data.title
          .toLowerCase()
          .includes(actualFilter.search.toLowerCase());

        if (
          (actualFilter.tag == data.category && parsedTitle) ||
          (actualFilter.tag == "all" && parsedTitle)
        ) {
          return (
            <li key={key} className="library_data">
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
