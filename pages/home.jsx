import React from "react";

const index = () => {
  return (
    <>
      <div className="admin">
        <nav className=" sidenav">
          <div className=" ">
            <div className="sidenav__logo">
              <h4>logo</h4>
            </div>
          </div>

          <div className=" sidenav__link">
            <a href="">
              {" "}
              <img src="/asset/customerwhite.svg" alt="" />{" "}
            </a>
            <a href="">
              {" "}
              <img src="/asset/customerwhite.svg" alt="" />{" "}
            </a>
            <a href="">
              {" "}
              <img src="/asset/customerwhite.svg" alt="" /> potential customer
            </a>
          </div>

          {/* sidenav extra */}

          <div className=" sidenav__extra">
            <a href="">
              {" "}
              <img src="/asset/logout" alt="" /> logout{" "}
            </a>
          </div>
        </nav>

        <main className="admin__main">
          <nav className="admin__main--nav">
            <h4>nav</h4>
          </nav>
          <div className="admin__main--info">
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* this is the first table */}

          <div className="admin__tablecon">
            <div className="admin__table">
              <div className="admin__table--head">
                <h4># time</h4>
                <h4>message</h4>
                <h4>phone no</h4>
                <h4>email</h4>
                <h4>action</h4>
              </div>
              <div className="admin__table--body">
                <div className="admin__table--body--time">
                  <div className=" h4">
                    <img src="/asset/clock.svg" alt="" />
                    12:00AM
                  </div>
                </div>
                <div>
                  <div>www.sldj</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default index;
