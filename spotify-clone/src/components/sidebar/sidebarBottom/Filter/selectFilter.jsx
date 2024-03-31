import { useEffect, useRef } from "react";
import {
  IoCheckmark,
  IoGridOutline,
  IoListSharp,
  IoMenu,
} from "react-icons/io5";

export function SelectFilter({ setActualFilter, setActualLayout }) {
  const sortMenuRef = useRef(null);
  const layoutMenuRef = useRef(null);
  const wrapperRef = useRef(null);

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
    <div id="select_filter">
      <button
        onClick={() => {
          wrapperRef.current.dataset.open =
            wrapperRef.current.dataset.open == "false" ? "true" : "false";
        }}
      >
        {sortMenuRef.current?.dataset.sort ?? "Recentes"}{" "}
        <IoListSharp size={18} />
      </button>
      <div id="menu_wrapper" ref={wrapperRef} data-open="true">
        {wrapperRef.current?.dataset.open == "true" ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              left: "0",
              top: "0",
              zIndex: "9999",
              background: "red",
            }}
          />
        ) : (
          <></>
        )}
        <menu data-sort="Recentes" ref={sortMenuRef}>
          <span>Classificar por</span>

          {[
            ["Recentes", "access"],
            ["Adicionado Recentemente", "data"],
            ["Ordem Alfabética", "title"],
            ["Criador", "owner"],
          ].map((value, index) => (
            <li
              key={`menu-${index}`}
              data-ativo={
                sortMenuRef.current != null
                  ? sortMenuRef?.current?.dataset.sort == value[0]
                  : value[0] == "Recentes"
              }
            >
              <button onClick={() => setFilter(value[0], value[1])}>
                {value[0]}
              </button>{" "}
              {value[0] == sortMenuRef?.current?.dataset.sort ||
              (sortMenuRef.current == null && value[0] == "Recentes") ? (
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
