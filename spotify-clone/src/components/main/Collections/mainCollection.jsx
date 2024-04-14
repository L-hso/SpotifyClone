import { IoPlay } from "react-icons/io5";
import "./mainCollection.scss";
import { useContext } from "react";
import { layoutSizeContext } from "../../../App";

export function MainCollection({ collectionTitle, fakeData }) {
  const { layoutSize } = useContext(layoutSizeContext);
  let columns_amount =
    layoutSize <= 450 ? 5 : layoutSize <= 600 ? 4 : layoutSize <= 660 ? 3 : 2;
  let qnt_items = columns_amount * -1;

  return (
    <section className="collection">
      <div className="collection_header_wrapper">
        <span className="collection_title">{collectionTitle}</span>
        <button className="collection_show_all">Mostrar Tudo</button>
      </div>

      <ul
        className="collection_list"
        style={{ "--collection-list-columns": columns_amount }}
      >
        {Object.entries(fakeData)
          .slice(qnt_items)
          .map(([id, data]) => (
            <li key={id} className="items">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1/1",
                }}
              >
                {/* <img src={data.thumbnail} alt="" className="thumbnail"/> */}
                <div className="thumbnail" />
                <button className="play_button">
                  <IoPlay size={25} fill="#2e2e2e" />
                </button>
              </div>
              <hgroup>
                <span>{data.title}</span>
                <span>{data.subtitle}</span>
              </hgroup>
            </li>
          ))}
      </ul>
    </section>
  );
}
