import React from "react";
import fulldata from "./data/data.json";
import { Link } from "react-router-dom";

function Getdata(index) {
  index = index - 1;
  const element = fulldata[index];
  return element;
}
var url="https://picsum.photos/id/1/200/300";

const Subjectdetail = (props) => {
  const el = Getdata(props.match.params.id);
  return (
    <div>
    <div className="card details">
      <img
        src={url}
        alt="image"
        className="card-img-top img2"
      />
      <div className="card-body">
        <h5 className="card-title">{el.subject}</h5>
        <p
          className="card-text"
          style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
            borderBottom: "1px solid black",
          }}
        >
          Description
        </p>
        <p className="card-text">{el.description}</p>
        <p
          className="card-text"
          style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
            borderBottom: "1px solid black",
          }}
        >
          Topics to be covered
        </p>
        <p className="card-text">{el.topics + "   "}</p>
        <p
        className="card-text"
        style={{
          color: "black",
          fontSize: "20px",
          fontWeight: "bold",
          borderBottom: "1px solid black",
        }}
      >
        Faculty
      </p>
      <p className="card-text">{el.faculty}</p>
      </div>
    </div>
    </div>
  );
};

export default Subjectdetail;
