import React from "react";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
      <footer className=" foot  ">
        <div className=" main">
          <div className="  foot__location">
            <motion.a
              initial={{
                y: 10,
              }}
              animate={{
                y: -15,
              }}
              transition={{
                repeat: Infinity,
                duration: 0.3,
                type: "spring",
                stiffness: 500,
              }}
              className="foot__mover"
              href="tel: +2349076176483"
            >
              <img src="/asset/watsapp.svg" alt="" />
            </motion.a>
            <div>
              <div className="foot__location--contact">
                <h3 className=" text-slate-200">location</h3>
                <p className="  text-slate-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-slate-200">contact</h3>
                <p className="  text-slate-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* footer grid */}

        <div className="foot__grid main ">
          <div>
            <div className="foot__grid--logo">this is te logo</div>
          </div>
          <div>
            <div className=" foot__grid--a">
              <a href="/">home</a>
              <a href="/about">about</a>
              <a href="/designs">products</a>
            </div>
          </div>
          <div>
            <div className=" sm:mt-7 md:mt-0 foot__grid--button">
              <button className="button"> free consultation </button>
            </div>
          </div>
        </div>

        <div className=" main ">
          <h4 className=" text-center pt-7"> all right reserved &copy; 2023</h4>
        </div>
      </footer>
    </>
  );
};

export default index;
