import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const Contactbody = () => {
  const [toggleaction, setToggleaction] = useState(false);
  return (
    <>
      <div className="shadow-sm table__body">
        <div>
          <div className="table__body--two table__head--name">
            <h6>Uzoechi Jeremiah</h6>
            <p>uzoechjeremiah@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p>09076176485</p>
          </div>
        </div>
        <div>
          <div className="table__head--des">
            <p>i need a supply...</p>
          </div>
        </div>
        <div>
          <div className="table__head--indus">
            <p>food beverages</p>
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
                  <a href="" data-toggle="modal" data-target="#exampleModal">
                    <img src="/asset/icons/adminicon/view.svg" alt="" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* <!-- end of the thing --> */}
            <a
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactbody;
