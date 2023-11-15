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
                <div className="navtrans__logo ">
                  <img src="/asset/smallestnav.png" alt="" />
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
                  <img src="/asset/product.svg" className=" " alt="" /> Designs
                </a>
              </div>
              <div className=" flex gap-7 mb-4 mt-5 pt-3 border-t-2 foot__grid--link">
                <a
                  href="https://www.facebook.com/profile.php?id=100094464217223"
                  className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
                >
                  {" "}
                  <img src="/asset/facebook.svg" alt="" />{" "}
                </a>
                <a
                  href="https://instagram.com/bencodelight?igshid=MmVlMjlkMTBhMg=="
                  className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
                >
                  {" "}
                  <img src="/asset/instagram.svg" alt="" />{" "}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className=" main-big   ">
          <div className="nav  main ">
            <div className=" logo">
              {" "}
              <img src="/asset/smallestnav.png" alt="" />{" "}
            </div>
            <div className=" nav__link">
              <a href="/"> Home </a>
              <a href="/about"> about </a>
              <a href="/designs"> designs </a>
            </div>
            <div className=" flex gap-7  foot__grid--link">
              <a
                href="https://www.facebook.com/profile.php?id=100094464217223"
                className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
              >
                {" "}
                <img src="/asset/facebook.svg" alt="" />{" "}
              </a>
              <a
                href="https://instagram.com/bencodelight?igshid=MmVlMjlkMTBhMg=="
                className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
              >
                {" "}
                <img src="/asset/instagram.svg" alt="" />{" "}
              </a>
            </div>
            <div className=" ">
              <a className=" button-sm"> contact </a>
            </div>
          </div>
        </nav>

        {/* nav 2 */}

        <nav className="navsmall main-big">
          <div className=" main navsmall__flex">
            <div>
              <img src="/asset/smallestnav.png" alt="" />{" "}
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
          <h2 className="  text-center">Designs</h2>

          <p className=" mt-8">
            Bencodelight is an architectural firm renowned for its breathtaking
            and innovative designs that seamlessly blend functionality with
            aesthetic appeal. With a commitment to innovative designs and
            pushing the boundaries of traditional architecture, Bencodelight
            consistently delivers projects that captivate the imagination and
            redefine the built environment
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
