import React from "react";
import variable from "../styles/variable.module.scss";

const inquire = () => {
  return (
    <>
      <div className="main all2">
        <nav
          className={`${variable.primaryz} py-2  px-3  d-flex justify-content-between`}
        >
          <div className=" logoz">
            <img src="/asset/gtblogo.png" alt="logo" />
          </div>

          <a href=" /" className=" btn  btn-outline-light btn-sm">
            {" "}
            <i className=" fa fa-sign-out-alt"> logout </i>{" "}
          </a>
        </nav>
        <nav
          className={`${variable.secondaryz}   py-2  px-3   justify-content-between`}
        >
          <h4 className=" text-center font-weight-bold     ">
            welcome to Gtb bank plc... project implimentation by ifeanyi
          </h4>
          <h6 className=" text-center text-capitalize small">
            <span
              className=" font-weight-bolder"
              style={{
                color: "orange",
              }}
            >
              Note:
            </span>{" "}
            ensure you ware face mask covid 19 is real
          </h6>
        </nav>
        <div className=" all d-flex h-100 mt-4  px-3 justify-content-between ">
          <div className=" h-75  justify-content-between buttonset1 d-flex flex-column ">
            <button className=" btn-lg  btn btn-info my-3 text-capitalize font-weight-bold ">
              {" "}
              <i className=" fa fa-chevron-circle-left text-white "></i> inquiry{" "}
            </button>
            <button className=" btn-lg  btn btn-info my-3 text-capitalize font-weight-bold ">
              {" "}
              <i className=" fa fa-chevron-circle-left text-white "></i>{" "}
              transfer{" "}
            </button>
            <button className=" btn-lg  btn btn-info my-3 text-capitalize font-weight-bold ">
              {" "}
              <i className=" fa fa-chevron-circle-left text-white "></i> change
              pin{" "}
            </button>
          </div>{" "}
          <div className=" h-75  justify-content-between buttonset1 d-flex flex-column ">
            <button className=" btn-lg  btn btn-info my-3 text-capitalize font-weight-bold ">
              {" "}
              account balance{" "}
              <i className=" fa fa-chevron-circle-right text-white "></i>
            </button>
            <button className=" btn-lg  btn btn-info my-3 text-capitalize font-weight-bold ">
              {" "}
              pay amount{" "}
              <i className=" fa fa-chevron-circle-right text-white "></i>
            </button>
            <button className=" btn-lg  btn btn-info my-3 text-capitalize font-weight-bold ">
              {" "}
              end <i className=" fa fa-chevron-circle-right text-white "></i>
            </button>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default inquire;
