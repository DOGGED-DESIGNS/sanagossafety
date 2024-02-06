import React from "react";

import { useState, useEffect } from "react";
import Makepost from "@/hooks/makepost";
import Footer from "../comps/Footer";
// import { motion, AnimatePresence } from "framer-motion";

import { easeInOut, motion, AnimatePresence, delay } from "framer-motion";
import Statichook from "@/hooks/statichook";
import { cookies } from "next/dist/client/components/headers";

// export const getServerSideProps = async () => {
//   const { getWholeclient } = Statichook();

//   const data = await getWholeclient();

//   return {
//     props: {
//       data: data,
//     },
//   };
// };

const index = () => {
  // useEffect(() => {
  // }, []);

  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState("");
  const [error, setError] = useState({});
  const [boot, setBoot] = useState(false);
  const [reflective, setReflective] = useState(false);
  const [goggles, setGoggles] = useState(false);
  const [helment, setHelment] = useState(false);
  const [bucket, setBucket] = useState(false);
  const [extinguisher, setExtinguisher] = useState(false);
  const [smokealarm, setSmokealarm] = useState(false);
  const [firealarm, setFirealarm] = useState(false);
  const [install, setInstall] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [needs, setNeeds] = useState("");

  const { sendClient, sendPpe, sendSafety, getWholeclient } = Makepost();

  // check if client want installation

  const installation = () => {
    if (install) {
      return "yes";
    } else {
      return "no";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (
        name != "" &&
        email != "" &&
        location != "" &&
        phone != "" &&
        needs != ""
      ) {
        setError({});

        await sendClient(name, email, phone, location, needs);

        // this is to insert ppe
        if (boot) {
          await sendPpe(
            e.target.elements.ppeboot.value,
            e.target.elements.ppebootqunt.value,
            e.target.elements.ppeboottype.value
          );
        }

        // reflective
        if (reflective) {
          await sendPpe(
            e.target.elements.ppereflective.value,
            e.target.elements.ppereflectivequnt.value,
            e.target.elements.ppereflectivetype.value
          );
        }

        // goggles
        if (goggles) {
          await sendPpe(
            e.target.elements.ppegoggles.value,
            e.target.elements.ppegogglesqunt.value,
            e.target.elements.ppegogglestype.value
          );
        }

        // helment
        if (helment) {
          await sendPpe(
            e.target.elements.ppehelment.value,
            e.target.elements.ppehelmentqunt.value,
            e.target.elements.ppehelmenttype.value
          );
        }

        // this is to insert safety equipment
        if (bucket) {
          await sendSafety(
            e.target.elements.safetybucket.value,
            e.target.elements.safetybucketqunt.value,
            installation(),
            e.target.elements.safetybuckettype.value
          );
        }

        if (extinguisher) {
          await sendSafety(
            e.target.elements.safetyextinguisher.value,
            e.target.elements.safetyextinguisherqunt.value,
            installation(),
            e.target.elements.safetyextinguishertype.value
          );
        }
        if (smokealarm) {
          await sendSafety(
            e.target.elements.safetysmokealarm.value,
            e.target.elements.safetysmokealarmqunt.value,
            installation(),
            e.target.elements.safetysmokealarmtype.value
          );
        }

        if (firealarm) {
          await sendSafety(
            e.target.elements.safetyfirealarm.value,
            e.target.elements.safetyfirealarmqunt.value,
            installation(),
            e.target.elements.safetyfirealarmtype.value
          );
        }

        setError({
          status: true,
          type: "success",
          message:
            " Thank you for reaching out to us, the quotation your just requested will be sent to any of your contact information provided ",
        });

        setLoading(false);
      } else {
        setError({
          status: true,
          type: "error",
          message: "please fill all neccessary fields",
        });
        setLoading(false);
      }
    } catch (err) {
      setError({
        status: true,
        type: "error",
        message: err.message,
      });
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
            <AnimatePresence>
              {error?.message && (
                <motion.div
                  initial={{
                    x: "-100%",
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",

                    // stiffness: 200,
                    // delay: 0.3,
                  }}
                  exit={{
                    x: "-100%",
                    opacity: 0,
                  }}
                  className={`mess ${error.type}`}
                >
                  <div className="">
                    <div className="error">
                      <img className="" src="/asset/error.svg" alt="" />
                    </div>
                    <div className="success">
                      <img className="" src="/asset/success.svg" alt="" />
                    </div>
                  </div>
                  <div className="mess__message"> {error.message}</div>
                  <div>
                    <div
                      onClick={() => {
                        setError({});
                      }}
                      className="mess__close"
                    >
                      <img src="/asset/closegray.svg" alt="" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <form onSubmit={handleSubmit} action="">
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
                        autoComplete="true"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        maxLength={18}
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
                        autoComplete={true}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className="sanform__form--div1--input"
                        type="email"
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
                        autoComplete={true}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        maxLength={14}
                        className="sanform__form--div1--input"
                        type="number"
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
                        autoComplete={true}
                        onChange={(e) => {
                          setLocation(e.target.value);
                        }}
                        maxLength={100}
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
                    <textarea
                      onChange={(e) => {
                        setNeeds(e.target.value);
                      }}
                      maxLength={200}
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
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
                            onChange={() => {
                              setBoot(!boot);
                            }}
                            name="ppeboot"
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

                        <AnimatePresence>
                          {boot && (
                            <motion.div
                              initial={{
                                y: "-30%",
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                // stiffness: 200,
                                // duration: 0.3,
                                // delay: 0.3,
                              }}
                              exit={{
                                y: "-30%",
                                opacity: 0,
                              }}
                            >
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  qunty
                                </label>
                                <input
                                  name="ppebootqunt"
                                  type="number"
                                  max={10}
                                  min={1}
                                />
                              </div>
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  type
                                </label>
                                <select name="ppeboottype" id="">
                                  <option value="stand">standard</option>
                                  <option value="high">high</option>
                                </select>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            onChange={() => {
                              setReflective(!reflective);
                            }}
                            value="reflective"
                            name="ppereflective"
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
                        <AnimatePresence>
                          {reflective && (
                            <motion.div
                              initial={{
                                y: "-30%",
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                // stiffness: 200,
                                // duration: 0.3,
                                // delay: 0.3,
                              }}
                              exit={{
                                y: "-30%",
                                opacity: 0,
                              }}
                            >
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  qunty
                                </label>
                                <input
                                  max={10}
                                  min={1}
                                  type="number"
                                  name="ppereflectivequnt"
                                />
                              </div>
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  type
                                </label>
                                <select name="ppereflectivetype" id="">
                                  <option value="stand">standard</option>
                                  <option value="high">high</option>
                                </select>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            onChange={() => {
                              setGoggles(!goggles);
                            }}
                            value="goggles"
                            name="ppegoggles"
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

                        <AnimatePresence>
                          {goggles && (
                            <motion.div
                              initial={{
                                y: "-30%",
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                // stiffness: 200,
                                // duration: 0.3,
                                // delay: 0.3,
                              }}
                              exit={{
                                y: "-30%",
                                opacity: 0,
                              }}
                            >
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  qunty
                                </label>
                                <input
                                  max={10}
                                  min={1}
                                  name="ppegogglesqunt"
                                  type="number"
                                />
                              </div>
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  type
                                </label>
                                <select name="ppegogglestype" id="">
                                  <option value="stand">standard</option>
                                  <option value="high">high</option>
                                </select>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            onChange={() => {
                              setHelment(!helment);
                            }}
                            value="helment"
                            name="ppehelment"
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

                        <AnimatePresence>
                          {helment && (
                            <motion.div
                              initial={{
                                y: "-30%",
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                // stiffness: 200,
                                // duration: 0.3,
                                // delay: 0.3,
                              }}
                              exit={{
                                y: "-30%",
                                opacity: 0,
                              }}
                            >
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  qunty
                                </label>
                                <input
                                  max={10}
                                  min={1}
                                  name="ppehelmentqunt"
                                  type="number"
                                />
                              </div>
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  type
                                </label>
                                <select name="ppehelmenttype" id="">
                                  <option value="stand">standard</option>
                                  <option value="high">high</option>
                                </select>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                            onChange={() => {
                              setBucket(!bucket);
                            }}
                            value="bucket"
                            name="safetybucket"
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

                        <AnimatePresence>
                          {bucket && (
                            <motion.div
                              initial={{
                                y: "-30%",
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                // stiffness: 200,
                                // duration: 0.3,
                                // delay: 0.3,
                              }}
                              exit={{
                                y: "-30%",
                                opacity: 0,
                              }}
                            >
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  qunty
                                </label>
                                <input
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                  }}
                                  max={10}
                                  min={1}
                                  name="safetybucketqunt"
                                  type="number"
                                />
                              </div>
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  type
                                </label>
                                <select name="safetybuckettype" id="">
                                  <option value="stand">standard</option>
                                  <option value="high">high</option>
                                </select>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            onChange={() => {
                              setExtinguisher(!extinguisher);
                            }}
                            value="extinguisher"
                            name="safetyextinguisher"
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
                        <AnimatePresence>
                          {extinguisher && (
                            <motion.div
                              initial={{
                                y: "-30%",
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                // stiffness: 200,
                                // duration: 0.3,
                                // delay: 0.3,
                              }}
                              exit={{
                                y: "-30%",
                                opacity: 0,
                              }}
                            >
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  qunty
                                </label>
                                <input
                                  max={10}
                                  min={1}
                                  name="safetyextinguisherqunt"
                                  type="number"
                                />
                              </div>
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  type
                                </label>
                                <select name="safetyextinguishertype" id="">
                                  <option value="9kg dcp">9kg dcp</option>
                                  <option value="50kg dcp"> 50kg dcp </option>
                                  <option value="5kg co2"> 5kg CO2 </option>
                                </select>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            onChange={() => {
                              setSmokealarm(!smokealarm);
                            }}
                            value="smokealarm"
                            name="safetysmokealarm"
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

                        <AnimatePresence>
                          {smokealarm && (
                            <motion.div
                              initial={{
                                y: "-30%",
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                // stiffness: 200,
                                // duration: 0.3,
                                // delay: 0.3,
                              }}
                              exit={{
                                y: "-30%",
                                opacity: 0,
                              }}
                            >
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  qunty
                                </label>
                                <input
                                  max={10}
                                  min={1}
                                  name="safetysmokealarmqunt"
                                  type="number"
                                />
                              </div>
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  type
                                </label>
                                <select name="safetysmokealarmtype" id="">
                                  <option value="stand">standard</option>
                                  <option value="high">high</option>
                                </select>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {/* this is the second */}
                      <div>
                        <div className="sanform__radioflex">
                          <input
                            onChange={() => {
                              setFirealarm(!firealarm);
                            }}
                            value="firealarm"
                            name="safetyfirealarm"
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

                        <AnimatePresence>
                          {firealarm && (
                            <motion.div
                              initial={{
                                y: "-30%",
                                opacity: 0,
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                              }}
                              transition={{
                                type: "spring",
                                // stiffness: 200,
                                // duration: 0.3,
                                // delay: 0.3,
                              }}
                              exit={{
                                y: "-30%",
                                opacity: 0,
                              }}
                            >
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  qunty
                                </label>
                                <input
                                  max={10}
                                  min={1}
                                  name="safetyfirealarmqunt"
                                  type="number"
                                />
                              </div>
                              <div className="sanform__smallinput">
                                <label className="h4" htmlFor="">
                                  type
                                </label>
                                <select name="safetyfirealarmtype" id="">
                                  <option value="stand">standard</option>
                                  <option value="high">high</option>
                                </select>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    {/* installation and maintenance */}
                    <div className=" mt-4 sanform__radioflex">
                      <input
                        onChange={() => {
                          setInstall(!install);
                        }}
                        id="r66"
                        name="install"
                        value={"yes"}
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
                send request
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
