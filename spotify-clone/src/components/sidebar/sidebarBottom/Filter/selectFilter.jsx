import { useRef } from "react";
import {
  IoCheckmark,
  IoGridOutline,
  IoListSharp,
  IoMenu,
} from "react-icons/io5";

export function SelectFilter({ setActualFilter }) {
  const sortMenuRef = useRef(null);
  const wrapperRef = useRef(null);

  function setFilter(menuState, sortFilter) {
    setActualFilter((state) => {
      return { ...state, sortFilter };
    });
    sortMenuRef.current.dataset.sort = menuState;
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
      <div id="menu_wrapper" ref={wrapperRef} data-open="false">
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

        <menu>
          <span>Ver como</span>
          {[
            ["Compacto", <IoMenu size={20} />],
            ["Lista", <IoListSharp size={17} />],
            ["Grade", <IoGridOutline size={17} />],
          ].map((value, index) => (
            <li key={`menu-2-${index}`}>
              <button>
                {value[1]}
                {value[0]}
              </button>
            </li>
          ))}
        </menu>
      </div>
    </div>
  );
}
