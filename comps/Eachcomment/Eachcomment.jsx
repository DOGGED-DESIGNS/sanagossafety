import React from "react";

const Eachcomment = ({ name, reply }) => {
  return (
    <>
      <div className="answer__comment--div">
        <div className="answer__comment--flex">
          <div className="answer__comment--img">
            <img src="/asset/icons/Profile.svg" alt="" />
          </div>

          <p className="answer__comment--name"> {name} </p>
        </div>
        <i>
          <p className="answer__comment--message">{reply}</p>
        </i>
      </div>
    </>
  );
};

export default Eachcomment;
