import React from "react";
import logo from "./emp-logo.svg";

const EmpCard = ({ name, post, img, id, empcode }) => {
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18vw" }}>
        <img src={img || logo} className="card-img-top p-2" alt={img} />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <div className=" text-wrap" style={{ width: " 10rem" }}>
            <small>{post}</small>
          </div>
          <p className="card-text">{empcode || "Not Avaliable"}</p>
          <a href="/" className="btn btn-primary">
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmpCard;
