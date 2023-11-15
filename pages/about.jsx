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
      </main>
      <section className=" main pt-24">
        <h2 className=" text-center">About us</h2>

        <p className="text-center">
          Bencodelight Construction Limited is a dynamic construction company
          known for its commitment to quality and innovation. With a focus on
          modern design and construction practices, Bencodelight brings
          creativity and functionality to every project.
        </p>
        <div className="  about__grid">
          <div>
            <div className=" about__grid--img">
              <img src="/asset/biggestnav.png" alt="" />{" "}
            </div>
          </div>

          <div className=" ">
            <p>
              Benco De Light Limited have the recommendation of State Government
              projects, Federal government projects, world bank assisted
              projects, uropan union assisted projects, Catholic Cathedrals
              Abakaliki,Emmaculate Hearth parish, Okpuitumo, St. Joseph parish
              odageri Idda, St. Pual parish Amaudo izza, St Benedict parish
              Effiom, Lumen Christi College. And many others individual work Hrh
              eze Stephen Ukpa, of Okpuitumo athonomus Community, chief Stephen
              Where Nwogba Executive chairman Abakaliki Local Government area,
              chief Mathew Nwobasi hon. Commissioner for lands and survey Ebonyi
              State. Hon Joseph Ununu member Ebonyi house of assembly and many
              others. <br />.
              <span className=" pr-1 font-bold text-doggedsec font-popins ">
                {" "}
                BENCO DE LIGHT LIMITED
              </span>
              provides you with Building designs both architectural drawings
              structure drawings mechanical and Electrical, building
              constructions, Land Survey, Estate management, Bornhole drilling
              and installations Road constructions building materials sales,
              Restaurants, piggery farm, fish farm, bird firms, and general
              machandas.
            </p>
            <div className="  mt-12">
              <a
                href=" https://wa.me/message/YLEYZ357B4JJG1"
                className="  button"
              >
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
