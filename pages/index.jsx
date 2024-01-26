import React from "react";

import { useState, useEffect } from "react";
import Makepost from "@/hooks/makepost";
import Footer from "../comps/Footer";
// import { motion, AnimatePresence } from "framer-motion";

import { easeInOut, motion, AnimatePresence, delay } from "framer-motion";

const index = () => {
  useEffect(() => {}, []);

  const [toggle, setToggle] = useState(false);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const { postmessage, makePost, setPostmessage } = Makepost();

  const handleSubmitz = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (
      e.target.elements.email.value == " " ||
      e.target.elements.phone.value == "" ||
      e.target.elements.mess.value == "" ||
      e.target.elements.name.value == "" ||
      e.target.elements.budget.value == ""
    ) {
      setError(true);
      setLoading(false);
    } else {
      setError(false);

      e.target.elements.email.value == " " ||
        e.target.elements.phone.value == "" ||
        e.target.elements.mess.value == "" ||
        e.target.elements.name.value == "" ||
        e.target.elements.budget.value == "";

      const form = new FormData();

      console.log(e.target.elements.email.value);

      form.append("message", "addcontact");
      form.append("name", e.target.elements.name.value);
      form.append("mess", e.target.elements.mess.value);
      form.append("email", e.target.elements.email.value);
      form.append("phone", e.target.elements.phone.value);
      form.append("budget", e.target.elements.budget.value);

      await makePost(form);

      setLoading(false);
    }
  };

  return (
    <>
      <main
        className={toggle && " togglez"}
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
                  <img src="/asset/san/sanlogo.svg" alt="" />
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
        <nav className=" main-big navsan  ">
          {/* this is the logo */}
          <div className=" navsan__logo">
            <img src="/asset/san/sanlogo.svg" alt="" />
          </div>

          <div className=" navsan__links">
            <a className="navsan__a" href="">
              home
            </a>
            <a className=" navsan__a" href="">
              {" "}
              about{" "}
            </a>
            <a className="navsan__a" href="">
              contact
            </a>
            <a href="" className="navsan__btn">
              {" "}
              Get quote <img src="/asset/san/arrow.svg" alt="" />{" "}
            </a>
          </div>
          <div>
            <a href="" className="navsan__phone">
              <img src="/asset/san/phone.svg" alt="" />
              +234 9076 1764 85
            </a>
          </div>
        </nav>

        {/* nav 2 */}

        <nav className="navsmall main-big">
          <div className=" main navsmall__flex">
            <div>
              <img src="/asset/san/sanlogo.svg" alt="" />{" "}
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

        {/* import phone just to test */}

        <section className="sanhero main">
          <div className="sanhero__grid">
            <div>
              <div className="sanhero__about">
                <h2>sanagos safety equipment supplier</h2>
                <p className=" mb-5">
                  Sanagos Safety is a leading safety supplier company dedicated
                  to providing comprehensive safety solutions for businesses and
                  industries nationwide. With over a decade of experience, we
                  have established ourselves as a trusted partner, delivering
                  high-quality safety products as well as safety training to
                  ensure the well-being of both employees and customers
                </p>
                <a href="" className="button">
                  request for quote
                </a>
              </div>
            </div>
            <div>
              <div className=" sanhero__img">
                <img src="/asset/san/bg.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* company images */}
        <section className="sancompany main">
          <div className="sancompany__img">
            <img src="/asset/san/ARDOVA-8.png" alt="" />
            <img src="/asset/san/KAB-8.png" alt="" />
            <img src="/asset/san/MRS-8.png" alt="" />
            <img src="/asset/san/oando-8.png" alt="" />
            {/* <img src="/asset/san/ARDOVA-8.png" alt="" /> */}
          </div>
        </section>

        {/* this is the form the main */}
        <section className="sanform main ">
          <h2 className=" text-center mt-6 mb-5">request for quote</h2>
          <div className="sanform__cont">
            <div className="sanform__gif">
              <img src="/asset/san/tss.gif" alt="" />
            </div>
            <form action="">
              <div className="sanform__form">
                {/* form grid */}
                <div className="sanform__form--div1">
                  <div className="sanform__form--div1--flex">
                    <div>
                      <label
                        htmlFor=""
                        className="h4 sanform__form--div1--label"
                      >
                        Name
                      </label>
                      <input
                        className="sanform__form--div1--input"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="h4 sanform__form--div1--label"
                      >
                        Email
                      </label>
                      <input
                        className="sanform__form--div1--input"
                        type="text"
                      />
                    </div>
                  </div>{" "}
                  <div className="sanform__form--div1--flex">
                    <div>
                      <label
                        htmlFor=""
                        className="h4 sanform__form--div1--label"
                      >
                        Phone
                      </label>
                      <input
                        className="sanform__form--div1--input"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="h4 sanform__form--div1--label"
                      >
                        Location
                      </label>
                      <input
                        className="sanform__form--div1--input"
                        type="text"
                      />
                    </div>
                  </div>{" "}
                  <div className="sanform__textarea">
                    <label htmlFor="" className=" h4">
                      {" "}
                      tell us your safety needs{" "}
                    </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>

                {/* ppe safety equipment */}
                <div className="sanform__form--flex">
                  <div className="sanform__form--div2">
                    <h4 className=" mb-4 pb-2 border-b border-sansec border-solid">
                      personal protective equipment (PPE){" "}
                    </h4>

                    <div className="sanform__ppegrid">
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            value="boot"
                            id="r1"
                            className="sanform__radio"
                            type="checkbox"
                          />
                          <div className="label">
                            <label htmlFor="r1"></label>
                          </div>
                          <div>
                            <img src="/asset/san/boot.svg" alt="" />
                          </div>
                        </div>
                        <h4 className=" font-medium text-center   text-sanaccent mb-2">
                          safety boot
                        </h4>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            qunty
                          </label>
                          <input type="number" />
                        </div>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            type
                          </label>
                          <select name="" id="">
                            <option value="">standard</option>
                            <option value="">high</option>
                          </select>
                        </div>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            value="boot"
                            id="r2"
                            className="sanform__radio"
                            type="checkbox"
                          />
                          <div className="label">
                            <label htmlFor="r2"></label>
                          </div>
                          <div>
                            <img src="/asset/san/reflective.svg" alt="" />
                          </div>
                        </div>
                        <h4 className=" font-medium text-center   text-sanaccent mb-2">
                          reflective jacket
                        </h4>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            qunty
                          </label>
                          <input type="number" />
                        </div>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            type
                          </label>
                          <select name="" id="">
                            <option value="">standard</option>
                            <option value="">high</option>
                          </select>
                        </div>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            value="boot"
                            id="r4"
                            className="sanform__radio"
                            type="checkbox"
                          />
                          <div className="label">
                            <label htmlFor="r4"></label>
                          </div>
                          <div>
                            <img src="/asset/san/goggles.svg" alt="" />
                          </div>
                        </div>
                        <h4 className=" font-medium text-center   text-sanaccent mb-2">
                          safety googles
                        </h4>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            qunty
                          </label>
                          <input type="number" />
                        </div>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            type
                          </label>
                          <select name="" id="">
                            <option value="">standard</option>
                            <option value="">high</option>
                          </select>
                        </div>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            value="boot"
                            id="r5"
                            className="sanform__radio"
                            type="checkbox"
                          />
                          <div className="label">
                            <label htmlFor="r5"></label>
                          </div>
                          <div>
                            <img src="/asset/san/helment.svg" alt="" />
                          </div>
                        </div>
                        <h4 className=" font-medium text-center   text-sanaccent mb-2">
                          safety helment
                        </h4>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            qunty
                          </label>
                          <input type="number" />
                        </div>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            type
                          </label>
                          <select name="" id="">
                            <option value="">standard</option>
                            <option value="">high</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* fire safety equipment */}

                  <div className="sanform__form--div2 pt-5">
                    <h4 className=" mb-4 pb-2 border-b border-sansec border-solid">
                      fire safety equipment
                    </h4>

                    <div className="sanform__ppegrid">
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            value="boot"
                            id="r11"
                            className="sanform__radio"
                            type="checkbox"
                          />
                          <div className="label">
                            <label htmlFor="r11"></label>
                          </div>
                          <div>
                            <img src="/asset/san/bucket.svg" alt="" />
                          </div>
                        </div>
                        <h4 className=" font-medium text-center   text-sanaccent mb-2">
                          fire bucket
                        </h4>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            qunty
                          </label>
                          <input type="number" />
                        </div>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            type
                          </label>
                          <select name="" id="">
                            <option value="">standard</option>
                            <option value="">high</option>
                          </select>
                        </div>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            value="boot"
                            id="r22"
                            className="sanform__radio"
                            type="checkbox"
                          />
                          <div className="label">
                            <label htmlFor="r22"></label>
                          </div>
                          <div>
                            <img src="/asset/san/fireextinguisher.svg" alt="" />
                          </div>
                        </div>
                        <h4 className=" font-medium text-center   text-sanaccent mb-2">
                          fire extinguisher
                        </h4>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            qunty
                          </label>
                          <input type="number" />
                        </div>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            type
                          </label>
                          <select name="" id="">
                            <option value="">standard</option>
                            <option value="">high</option>
                          </select>
                        </div>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            value="boot"
                            id="r44"
                            className="sanform__radio"
                            type="checkbox"
                          />
                          <div className="label">
                            <label htmlFor="r44"></label>
                          </div>
                          <div>
                            <img src="/asset/san/smokealarm.svg" alt="" />
                          </div>
                        </div>
                        <h4 className=" font-medium text-center   text-sanaccent mb-2">
                          smoke alarm
                        </h4>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            qunty
                          </label>
                          <input type="number" />
                        </div>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            type
                          </label>
                          <select name="" id="">
                            <option value="">standard</option>
                            <option value="">high</option>
                          </select>
                        </div>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            value="boot"
                            id="r55"
                            className="sanform__radio"
                            type="checkbox"
                          />
                          <div className="label">
                            <label htmlFor="r55"></label>
                          </div>
                          <div>
                            <img src="/asset/san/firealarm.svg" alt="" />
                          </div>
                        </div>
                        <h4 className=" font-medium text-center   text-sanaccent mb-2">
                          fire <br /> alarm
                        </h4>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            qunty
                          </label>
                          <input type="number" />
                        </div>
                        <div className="sanform__smallinput">
                          <label className="h4" htmlFor="">
                            type
                          </label>
                          <select name="" id="">
                            <option value="">standard</option>
                            <option value="">high</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* installation and maintenance */}
                    <div className=" mt-4 sanform__radioflex">
                      <input
                        id="r66"
                        className="sanform__radio"
                        type="checkbox"
                      />
                      <div className="labelsquare">
                        <label htmlFor="r66"></label>
                      </div>
                      <h4>instalation and maintenance</h4>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="button sanform__button">
                send quote
              </button>
            </form>
          </div>
        </section>

        {/* this is the gooter section */}
        <section className="  footer main-big ">
          <div className="main">
            <h3 className=" text-sanwhite text-center my-3">contact</h3>
            <p className=" text-sanwhite text-center my-3">
              17 fabukade street shogunle oshodi lagos
            </p>
            <div className=" footer__socials  ">
              <a href="">
                <img src="/asset/san/facebook.svg" alt="" />
              </a>
              <a href="">
                <img src="/asset/san/twitter.svg" alt="" />
              </a>
              <a href="">
                <img src="/asset/san/insta.svg" alt="" />
              </a>
            </div>

            <h4 className=" text-sanwhite my-2 text-center">
              {" "}
              &copy; 2024 copyright all right reserved{" "}
            </h4>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;
