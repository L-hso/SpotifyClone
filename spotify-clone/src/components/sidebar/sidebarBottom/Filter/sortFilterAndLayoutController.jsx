import "./sortFilterAndLayoutController.scss";
import { useContext, useRef } from "react";
import {
  IoCheckmark,
  IoGridOutline,
  IoListSharp,
  IoMenu,
} from "react-icons/io5";
import { FilterContext } from "../sidebarBottomRoot";

export function SortFilterAndLayoutController() {

  const sortFilters = {access:"Recentes", data:"Adicionado Recentemente", title:"Ordem Alfabética", owner:"Criador"};

  const [sortMenuRef, layoutMenuRef, wrapperRef] = [useRef(null), useRef(null), useRef(null)];

  const {actualFilter, setActualFilter, setActualLayout } = useContext(FilterContext);

  function setFilter(menuState, sortFilter) {
    setActualFilter((state) => {
      return { ...state, sortFilter };
    });
    sortMenuRef.current.dataset.sort = menuState;
  }

  function setLayout(layoutOption) {
    setActualLayout(layoutOption);
    layoutMenuRef.current.dataset.layout = layoutOption;
  }

  return (
    <div className="select_filter">
      <button
        onClick={() => {
          wrapperRef.current.dataset.open =
            wrapperRef.current.dataset.open == "false" ? "true" : "false";
        }}
      >
        {sortFilters[actualFilter.sortFilter]}{" "}
        <IoListSharp size={18} />
      </button>
      <div id="menu_wrapper" ref={wrapperRef} data-open="false">
        <menu data-sort={sortFilters[actualFilter.sortFilter]} ref={sortMenuRef}>
          <span>Classificar por</span>

          {Object.entries(sortFilters).map((value, index) => (
            <li
              key={`menu-${index}`}
              data-ativo={
                sortMenuRef.current != null
                  ? sortMenuRef.current.dataset.sort == value[1]
                  : value[1] == "Recentes"
              }
            >
              <button onClick={() => setFilter(value[1], value[0])}>
                {value[1]}
              </button>{" "}
              {value[1] == sortMenuRef?.current?.dataset.sort ||
              (sortMenuRef.current == null && value[1] == "Recentes") ? (
                <IoCheckmark size={20} />
              ) : (
                <></>
              )}
            </li>
          ))}
        </menu>

        <menu data-layout="Lista" ref={layoutMenuRef}>
          <span>Ver como</span>
          {[
            ["Compacto", <IoMenu size={20} />],
            ["Lista", <IoListSharp size={17} />],
            ["Grade", <IoGridOutline size={17} />],
          ].map((value, index) => (
            <li
              key={`menu-2-${index}`}
              data-ativo={
                layoutMenuRef.current != null
                  ? layoutMenuRef.current.dataset.layout == value[0]
                  : value[0] == "Lista"
              }
            >
              <button onClick={() => setLayout(value[0])}>
                <div>
                  {value[1]}
                  {value[0]}
                </div>
                {value[0] == layoutMenuRef.current?.dataset.layout ||
                (layoutMenuRef.current == null && value[0] == "Lista") ? (
                  <IoCheckmark size={20} />
                ) : (
                  <></>
                )}
              </button>

              {value[0] == "Grade" &&
              layoutMenuRef.current?.dataset.layout == "Grade" ? (
                <input
                  type="range"
                  onInput={(e) => {
                    const library_database =
                      document.querySelector("#library_database");

                    library_database.style.setProperty(
                      "--libraryDataWidth",
                      `${e.currentTarget.value}%`
                    );

                    if (e.currentTarget.value < 33.4) {
                      library_database.style.setProperty(
                        "--textDisplayOnGrid",
                        "none"
                      );
                    } else {
                      library_database.style.setProperty(
                        "--textDisplayOnGrid",
                        "block"
                      );
                    }
                  }}
                  min={25}
                  max={35}
                  step={0.1}
                />
              ) : (
                <></>
              )}
            </li>
          ))}
        </menu>
      </div>
    </div>
  );
}
