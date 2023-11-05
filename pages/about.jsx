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
                  <img src="/asset/bensmallestlogo.svg" alt="" />
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
                  href=""
                  className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
                >
                  {" "}
                  <img src="/asset/facebook.svg" alt="" />{" "}
                </a>
                <a
                  href=""
                  className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
                >
                  {" "}
                  <img src="/asset/instagram.svg" alt="" />{" "}
                </a>
                <a
                  href=""
                  className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
                >
                  {" "}
                  <img src="/asset/twitter.svg" alt="" />{" "}
                </a>
                <a
                  href=""
                  className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
                >
                  {" "}
                  <img src="/asset/email.svg" alt="" />{" "}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className=" main-big   ">
          <div className="nav  main ">
            <div className=" logo">
              {" "}
              <img src="/asset/bensmallestlogo.svg" alt="" />{" "}
            </div>
            <div className=" nav__link">
              <a href="/"> Home </a>
              <a href="/about"> about </a>
              <a href="/designs"> designs </a>
            </div>
            <div className=" flex gap-7  foot__grid--link">
              <a
                href=""
                className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
              >
                {" "}
                <img src="/asset/facebook.svg" alt="" />{" "}
              </a>
              <a
                href=""
                className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
              >
                {" "}
                <img src="/asset/instagram.svg" alt="" />{" "}
              </a>
              <a
                href=""
                className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
              >
                {" "}
                <img src="/asset/twitter.svg" alt="" />{" "}
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
              <img src="/asset/bensmallestlogo.svg" alt="" />{" "}
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
      </main>
      <section className=" main pt-24">
        <h2 className=" text-center">About us</h2>

        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum
          distinctio atque, consectetur laboriosam inventore nemo natus quos
          doloremque harum quis pariatur odio, quaerat magnam eum sequi? Omnis,
          suscipit facilis.
        </p>
        <div className="  about__grid">
          <div>
            <div className=" about__grid--img">
              <img src="/asset/benbiggestlogo.svg" alt="" />{" "}
            </div>
          </div>

          <div className=" ">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              vitae ut quisquam accusamus mollitia quas officiis voluptas odit
              reiciendis, blanditiis excepturi dicta natus magni odio saepe illo
              quia corporis id. Sint fugit debitis consequatur aliquid,
              dignissimos consequuntur nisi sed necessitatibus quas, ipsum qui
              incidunt, deserunt magnam voluptates saepe eveniet voluptas.
            </p>
            <div className="  mt-12">
              <a href="tel:+2349076176485" className="  button">
                get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
