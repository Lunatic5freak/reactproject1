import React from "react";
import fulldata from "./data/data1.json";

function Getdata(index) {
  index = index - 1;
  const element = fulldata[index];
  return element;
}
const styl={
        color: "black",
        fontSize: "20px",
        fontWeight: "bold",
        borderBottom: "1px solid black"

}

const Subjectdetailtenth = (props) => {
  const el = Getdata(props.match.params.id);
  return (
    <div className="card details">
      <img
        src={el.image}
        alt="image"
        className="card-img-top img2"
      />
      <div className="card-body">
        <h5 className="card-title">{el.subject}</h5>
        <p
          className="card-text"
          style={styl}
        >
          Description
        </p>
        <p className="card-text">{el.description}</p>
        <p
          className="card-text"
          style={styl}
        >
          Topics to be covered
        </p>
        <p className="card-text">{el.topics + "   "}</p>
        <p
        className="card-text"
        style={styl}
      >
        Faculty
      </p>
      <p className="card-text">{el.faculty}</p>
      </div>
    </div>
  );
};

export default Subjectdetailtenth;
