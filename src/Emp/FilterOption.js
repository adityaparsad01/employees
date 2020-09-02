import React from "react";

const FilterOption = ({ nameOption, data }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {data.map((data, i) => (
            <button
              className="btn-primary m-1"
              key={i}
              type="button"
              value={data}
              onClick={nameOption}
            >
              {data}
            </button>
          )) || "All"}
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
