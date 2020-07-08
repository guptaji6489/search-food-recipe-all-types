import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-1 icon-b">Food Recipe</h1>
        <div className="input-group mx-auto w-50 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search Your Recipe..."
            value={props.search}
            onChange={props.onInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-dark">Search Recipe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
