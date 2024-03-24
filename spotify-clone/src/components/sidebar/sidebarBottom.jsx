import { LuLibrary } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward, IoMdArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useState, useRef } from "react";
import { FakeData } from "./sidebarFakeData";

export function SidebarBottom() {
  const searchFilterRef = useRef(null);
  const [actualFilter, setActualFilter] = useState("all");

  return (
    <section id="sidebar_bottom">
      <header>
        <div id="library_title">
          <div>
            <button>
              <LuLibrary size={24} color="#ffffff" />
            </button>
            Sua Biblioteca
          </div>

          <div>
            <button>
              <FiPlus size={20} color="#ffffff" />
            </button>
            <button>
              <IoMdArrowForward size={20} color="#ffffff" />
            </button>
          </div>
        </div>
        <menu id="tags">
          <li onClick={() => setActualFilter("artist")}>Artistas</li>
          <li onClick={() => setActualFilter("playlists")}>Playlists</li>
          <li onClick={() => setActualFilter("album")}>Albums</li>
          <li onClick={() => setActualFilter("podcasts")}>
            Podcasts e programas
          </li>
          <div id="next_tags">
            <button>
              <IoIosArrowForward size={14} color="#ffffff" />
            </button>
          </div>
        </menu>
      </header>

      <div id="library">
        <div id="search-select">
          <div id="search_filter">
            <button
              onClick={() => {
                const search_filter = searchFilterRef.current;

                search_filter.dataset.open =
                  search_filter.dataset.open == "true" ? "false" : "true";
                console.log(search_filter.dataset);
              }}
            >
              <CiSearch size={20} />
            </button>
            <input
              ref={searchFilterRef}
              data-open={false}
              type="text"
              name="search_filter"
              placeholder="Pesquise algo"
              onChange={(e) =>
                setActualFilter(
                  e.currentTarget.value.split("").join("") == ""
                    ? "all"
                    : e.currentTarget.value
                )
              }
            />
          </div>
          <div id="select"></div>
        </div>
        <LibraryDatabase actualFilter={actualFilter} />
      </div>
    </section>
  );
}

function LibraryDatabase({ actualFilter }) {
  return (
    <ul id="library_database">
      {Object.entries(FakeData).map(([key, data]) => {
        if (
          data.title.toLowerCase().includes(actualFilter.toLowerCase()) ||
          data.category == actualFilter ||
          actualFilter == "all"
        ) {
          return (
            <li key={key} class="library_data">
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
