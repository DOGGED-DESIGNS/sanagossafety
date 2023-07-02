import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="blogfooter">
        <div className="blogfooter__grid border-bottom">
          <div>
            <div className="blogfooter__grid--logo">
              <img src="/asset/icons/logo.svg" alt="" />
            </div>
          </div>
          <div>
            <div className="blogfooter__grid--link">
              <h4>Follow us on social media</h4>
              <div>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-twitter"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-instagram"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-facebook"></i>{" "}
                  </a>
                </span>
                <span>
                  <a href="">
                    {" "}
                    <i className="fab fa-linkedin"></i>{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {/* // <!-- this is the link and copyright section --> */}
        <div className="blogfooter__link">
          <a href="">Home</a>
          <a href="">Safety</a>
          <a href="">Fire</a>
          <a href="">Fire_extinguisher</a>
        </div>

        <p className="blogfooter__copy">
          &copy; 2023 copyright all right reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
