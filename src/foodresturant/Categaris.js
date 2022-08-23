import React from "react";

const Categaris = ({ category, FliterItems }) => {
  return (
    <div className="btn_container">
      {category.map((category, Index) => {
        return (
          <button
            type="button"
            className="fliter_btn"
            key={Index}
            onClick={() => FliterItems(category)}
          >
            {" "}
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categaris;
