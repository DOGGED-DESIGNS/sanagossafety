import React from "react";

import { useState } from "react";
import Makepost from "@/hooks/makepost";

import { AnimatePresence, motion } from "framer-motion";

const Categorybody = ({ title, time, color }) => {
  const [toggleaction, setToggleaction] = useState(false);
  const { singleCategory } = Makepost();
  return (
    <>
      <div className=" mb-5 shadow-sm table__body">
        <div>
          <div className="table__head--phone">
            <p> {title} </p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {time} </p>
          </div>
        </div>

        <div>
          <div className="table__head--phone">
            <div className="desimg" style={{ background: color }}>
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

                  <a
                    data-toggle="modal"
                    data-target="#updateModal"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={async () => {
                      await singleCategory(title);
                    }}
                  >
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
