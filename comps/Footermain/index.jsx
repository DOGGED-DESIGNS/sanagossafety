import React from "react";
import Head from "next/head";
import { useContext, useReducer, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Animatez from "@/Animate";
import Statichook from "@/hooks/statichook";
// import ReactQuill from "react-quill";

const Footermain = ({ getindustry }) => {
  const [data, setData] = useState("this is a data from the state");
  const [toggle, setToggle] = useState(false);

  const {
    supplychild,
    tapanimate,
    animatenav,
    menu,
    menuchild,
    supplycont,
    gencont,
    genchild,
    swiperchild,
    swipercont,
  } = Animatez();
  return (
    <>
      <footer className="footer mt-5 ">
        <motion.div
          variants={supplycont}
          initial="initial"
          whileInView="animate"
          className="footer__grid container-fluid"
        >
          <motion.div variants={supplychild}>
            <h5 className="footer__h5">Quick Contact</h5>
            <p className="footer__p">
              if you have any problem or need feel free to contact our team
            </p>
            <motion.div variants={supplychild}>
              <a class="main__nav--call smallnav__call" href="#">
                <img class="ml-1" src="/asset/icons/redphone.svg" alt="" />
                +234 761 764 85
              </a>
              <p class="footer__p mt-3">
                visit no 17 lekki face two off ijoke road
              </p>
            </motion.div>
            <motion.div
              variants={supplychild}
              className="blogfooter__grid--link d-block"
            >
              <h4>Follow us on social media</h4>
              <div className="mt-3">
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
            </motion.div>
          </motion.div>

          <motion.div variants={supplychild}>
            <h5 className="footer__h5">Company</h5>
            <a className="footer__link" href="#">
              About
            </a>
            <a className="footer__link" href="#">
              Meet Our Team
            </a>
            <a className="footer__link" href="#">
              News & Media
            </a>
            <a className="footer__link" href="#">
              Contact
            </a>
          </motion.div>
          <motion.div variants={supplychild}>
            <h5 className="footer__h5">Industries</h5>
            {getindustry.map((indus) => {
              return (
                <a className="footer__link" href={`/indus?indus=${indus.id}`}>
                  <img src="/asset/icons/whitearrow.svg" alt="" /> {indus.id}
                </a>
              );
            })}
          </motion.div>
          <motion.div variants={supplychild}>
            <p className="footer__sign">
              signup for our safety tips sights and insights from sanagos
            </p>

            <form className="footer__form">
              <input type="text" />
              <button className="footer__form--button">
                <img className="" src="/asset/icons/inputbut2.svg" alt="" />
              </button>
            </form>
          </motion.div>
        </motion.div>
        {/* <!-- logo and terms and condtion --> */}
        <motion.div
          variants={supplycont}
          initial="initial"
          whileInView="animate"
          className="footer__grid2"
        >
          <motion.div variants={supplychild}>
            <div className="footer__grid2--logo">
              <img src="/asset/icons/logo.svg" alt="" />
            </div>
          </motion.div>
          <motion.div variants={supplychild} className="container-fluid">
            <div className="footer__terms">
              <a className="footer__link" href="#">
                Term & conditions
              </a>
              <a className="footer__link" href="#">
                Site Map
              </a>
              <a className="footer__link">Employee Login</a>
            </div>
            <p className="footer__copy">
              &copy; 2023 Copyright all rights reserved
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footermain;
