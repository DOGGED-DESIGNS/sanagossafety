import React from "react";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const Categorybody = () => {
  const [toggleaction, setToggleaction] = useState(false);
  return (
    <>
      <div className=" mb-5 shadow-sm table__body">
        <div>
          <div className="table__head--phone">
            <p>09076176485</p>
          </div>
        </div>

        <div>
          <div className="table__head--indus">
            <div className="desimg" style={{ background: "red" }}>
              {/* <img src="/asset/img/presentation-8.png" alt="" /> */}
            </div>
          </div>
        </div>
        <div className="">
          <div className="  table__head--act">
            <AnimatePresence>
              {toggleaction && (
                <motion.div
                  initial={{
                    // opacity: 0,
                    translateY: 0,
                    left: "0%",
                    translateX: "-50%",
                  }}
                  animate={{
                    // opacity: 1,
                    left: "0%",
                    translateX: "-50%",
                    translateY: "-5px",
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 0,
                  }}
                  className="table__perform"
                >
                  <a href="">
                    <img src="/asset/icons/adminicon/waste.svg" alt="" />
                  </a>

                  <a href="">
                    <img src="/asset/icons/adminicon/update.svg" alt="" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* <!-- end of the thing --> */}
            <div
              style={{ cursor: "pointer" }}
              href="#"
              onClick={() => {
                setToggleaction(!toggleaction);
              }}
            >
              <img
                className="table__menu"
                src="/asset/icons/adminicon/menu_1.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorybody;
