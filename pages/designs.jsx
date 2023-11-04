import React from "react";

import { useState } from "react";
import Footer from "../comps/Footer";
import { easeInOut, motion, AnimatePresence, delay } from "framer-motion";

const index = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <main
        className={toggle && " togglez "}
        onClick={() => {
          if (toggle) {
            setToggle(false);
          }
        }}
      >
        <AnimatePresence>
          {toggle && (
            <motion.nav
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              transition={{
                type: "spring",
                // stiffness: 200,
                // delay: 0.3,
              }}
              exit={{
                x: "-100%",
              }}
              className=" navtrans"
            >
              <div className="navtrans__flex">
                <div className="navtrans__logo">
                  <h4>logo</h4>
                </div>
                <div className="">
                  {" "}
                  <div
                    className="navtrans__close"
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    <img src="/asset/close.svg" alt="" />{" "}
                  </div>
                </div>
              </div>
              <div className="navtrans__link">
                <a href="/" className="   ">
                  {" "}
                  <img src="/asset/home.svg" className=" " alt="" /> home
                </a>
                <a href="/about" className=" ">
                  {" "}
                  <img src="/asset/aboutus.svg" className=" " alt="" /> about us
                </a>
                <a href="/designs" className=" h4">
                  {" "}
                  <img src="/asset/product.svg" className=" " alt="" /> designs
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className=" main-big   ">
          <div className="nav  main ">
            <div className=" logo"> this is the log </div>
            <div className=" nav__link">
              <a href="/"> Home </a>
              <a href="/about"> about </a>
              <a href="/designs"> designs </a>
            </div>
            <div className=" ">
              <a className=" button-sm"> contact </a>
            </div>
          </div>
        </nav>

        {/* nav 2 */}

        <nav className="navsmall  main-big">
          <div className=" main navsmall__flex">
            <div>
              <h3>logo</h3>
            </div>
            <div
              className=" navsmall__menu"
              onClick={() => {
                setToggle(true);
              }}
            >
              <div className="  navsmall__img">
                <img src="/asset/menu.svg" alt="" />
              </div>
            </div>
          </div>

          <div></div>
        </nav>
        {/* first section */}

        <section className=" main    pt-20">
          <h2 className="  text-center">Design</h2>

          <p className=" mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            exercitationem fugit mollitia, accusamus placeat quo optio eveniet
            error veniam! Minus voluptatibus ullam culpa labore sit temporibus
            corrupti. Inventore, magnam facere.
          </p>

          <div className="  mt-20  grid place-items-center">
            <img src="/asset/designimg.png" alt="" />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default index;
