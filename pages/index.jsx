import React from "react";

import { useState } from "react";

import { easeInOut, motion, AnimatePresence, delay } from "framer-motion";

const index = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
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
              <a href="" className="   ">
                {" "}
                <img src="/asset/home.svg" className=" " alt="" /> home
              </a>
              <a href="" className=" ">
                {" "}
                <img src="/asset/aboutus.svg" className=" " alt="" /> about us
              </a>
              <a href="" className=" h4">
                {" "}
                <img src="/asset/product.svg" className=" " alt="" /> Products
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <main
        className={toggle && " test toggle"}
        onClick={() => {
          if (toggle) {
            setToggle(false);
          }
        }}
      >
        <nav className=" main-big   ">
          <div className="nav  main ">
            <div className=" logo"> this is the log </div>
            <div className=" nav__link">
              <a href=""> Home </a>
              <a href=""> about </a>
              <a href=""> products </a>
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
        {/* second nav */}

        <header className=" main-big header">
          <img src="/asset/gen.jpg" />
          <div className="  construct ">
            <div className=" construct__div1">
              <h1 className=" leading-normal  capitalize text-white ">
                {" "}
                <span className=" text-doggedaccent ">construction </span> is
                not all <br /> about building
              </h1>

              <p className=" leading-normal text-slate-200  my-16  max-w-2xl ">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                nostrum alias assumenda repudiandae provident minus dolorum aut
                dolores aperiam. Vel, facere reiciendis. Tenetur, corrupti harum
                distinctio veritatis dolorum iste id sit aut sapiente similique
                expedita soluta corporis vitae dicta sed! Corrupti veritatis
                dolorem tempora magnam repellendus, est temporibus inventore
                maxime!
              </p>

              <div className="">
                <a className=" hover:text-white button"> free consultation </a>
              </div>
            </div>
            <div className=" construct__div2 ">
              <a
                href=""
                className=" italic font-popins text-white align-middle flex h4"
              >
                Our services{" "}
                <motion.img
                  initial={{
                    x: "-3px",
                  }}
                  animate={{
                    x: "3px",
                  }}
                  transition={{
                    type: "spring",
                    repeat: "infinity",
                    easeInOut: true,
                  }}
                  className=" ml-4 "
                  src="/asset/arrow.svg"
                  alt=""
                />{" "}
              </a>
            </div>
          </div>
        </header>
        <section className=" service ">
          <div className=" main  service__grid">
            <div>
              <div className=" service__grid--img">
                <img src="/asset/gen.jpg" />
              </div>
            </div>
            <div>
              <h2>Our Expertise</h2>
              <p className=" my-10 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit sed dolore hic numquam aut quidem modi voluptatibus at
                dolor, natus praesentium nostrum optio facere, repellendus
                pariatur nesciunt beatae accusamus animi voluptatem aspernatur?
                Excepturi libero culpa tempore eum aut ipsa voluptatibus dicta
                earum atque, delectus, aspernatur quasi. Neque accusantium
                repellat ratione.
              </p>
              <div className=" smallcard">
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/gen.jpg" alt="" />
                    <div className=" smallcard__card--move">
                      <img src="/asset/01.svg" alt="" />
                      <p className=" text-stone-50 font-bold capitalize ">
                        {" "}
                        flooring{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/gen.jpg" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/02.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        flooring{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/gen.jpg" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/03.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        flooring{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/gen.jpg" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/04.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        flooring{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/gen.jpg" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/05.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        flooring{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/gen.jpg" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/06.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        flooring{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* recent project */}

        <section className="main-big recent">
          <div className="main">
            <h1 className=" text-white mb-20 mt-0 ">Recent Project</h1>
          </div>
          <div className=" main recent__grid">
            <div>
              <div className=" recent__grid--card">
                <div className=" recent__grid--img">
                  <img src="/asset/gen.jpg" alt="" />
                </div>
                <h3 className="  mb-3 text-white font-bold  ">Project# 1</h3>
                <p className=" mb-12 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, modi! Fugit ea veniam magni porro unde, rem eos
                  voluptas dolorem dolorum obcaecati excepturi temporibus velit.
                  Dolore ducimus necessitatibus sunt id?
                </p>
                <a href="#" className="  button2">
                  see details
                </a>
              </div>
            </div>
            <div>
              <div className=" recent__grid--card">
                <div className=" recent__grid--img">
                  <img src="/asset/gen.jpg" alt="" />
                </div>
                <h3 className="  mb-3 text-white font-bold  ">Project# 1</h3>
                <p className=" mb-12 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, modi! Fugit ea veniam magni porro unde, rem eos
                  voluptas dolorem dolorum obcaecati excepturi temporibus velit.
                  Dolore ducimus necessitatibus sunt id?
                </p>
                <a href="#" className="  button2">
                  see details
                </a>
              </div>
            </div>
            <div>
              <div className=" recent__grid--card">
                <div className=" recent__grid--img">
                  <img src="/asset/gen.jpg" alt="" />
                </div>
                <h3 className="  mb-3 text-white font-bold  ">Project# 1</h3>
                <p className=" mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, modi! Fugit ea veniam magni porro unde, rem eos
                  voluptas dolorem dolorum obcaecati excepturi temporibus velit.
                  Dolore ducimus necessitatibus sunt id?
                </p>
                <a href="#" className="  button2">
                  see details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* customers opinion */}

        <section className=" main-big opinion">
          <div className="main">
            <h2 className=" mb-24">Customer's Opinion</h2>
          </div>
          <div className="  opinion__grid">
            <div className="opinion__grid--img1">
              <img src="/asset/gen.jpg" alt="" />
            </div>
            <div className=" opinion__grid--img2">
              <img src="/asset/gen.jpg" alt="" />
              <div className=" opinion__mover">
                <p className=" font-bold text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
                  id.
                </p>
                <h3>Manager</h3>
              </div>
              <button className="roundbutton roundbutton__left ">
                <img src="/asset/left.svg" />{" "}
              </button>
              <button className="roundbutton roundbutton__right">
                <img src="/asset/right.svg" />
              </button>
            </div>
            <div className="opinion__grid--img1">
              <img src="/asset/gen.jpg" alt="" />
            </div>
          </div>
        </section>

        {/* steps */}

        <section className="steps main-big">
          <div className="main">
            <h2 className=" mb-20">
              {" "}
              Every step's <br /> in our{" "}
              <span className=" text-doggedaccent">procces</span> proccess{" "}
            </h2>
          </div>
          <div className=" main steps__grid">
            <div>
              <div className="steps__card">
                <img src="./asset/analyze.svg" alt="" />
                <h3>analyze</h3>
                <p className="    ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nesciunt numquam magnam rem accusantium et hic
                  perferendis beatae molestias excepturi optio itaque, eos
                  consectetur odit, temporibus placeat nostrum soluta fuga?
                </p>
              </div>
            </div>
            <div>
              <div className="steps__card">
                <img src="./asset/design.svg" alt="" />
                <h3>Design</h3>
                <p className="    ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nesciunt numquam magnam rem accusantium et hic
                  perferendis beatae molestias excepturi optio itaque, eos
                  consectetur odit, temporibus placeat nostrum soluta fuga?
                </p>
              </div>
            </div>
            <div>
              <div className="steps__card">
                <img src="./asset/develop.svg" alt="" />
                <h3>Develop</h3>
                <p className="    ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nesciunt numquam magnam rem accusantium et hic
                  perferendis beatae molestias excepturi optio itaque, eos
                  consectetur odit, temporibus placeat nostrum soluta fuga?
                </p>
              </div>
            </div>
            <div>
              <div className="steps__card">
                <img src="./asset/finishing.svg" alt="" />
                <h3>Finishing</h3>
                <p className="    ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nesciunt numquam magnam rem accusantium et hic
                  perferendis beatae molestias excepturi optio itaque, eos
                  consectetur odit, temporibus placeat nostrum soluta fuga?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="reach">
          <div className=" main">
            <h2 className=" capitalize mb-16">How to reach us</h2>
          </div>

          <div className=" main reach__grid">
            <div>
              <div className="reach__grid--img">
                <img src="/asset/gen.jpg" alt="" />
              </div>
            </div>
            <div>
              <div className=" reach__grid--form">
                <label htmlFor="" className="   h4">
                  {" "}
                  name{" "}
                </label>
                <input type="text" />
                <label htmlFor="" className=" h4  ">
                  {" "}
                  email{" "}
                </label>
                <input type="text" max={5} />
                <label htmlFor="" className=" h4">
                  {" "}
                  phone number{" "}
                </label>
                <input type="number" />
                <label htmlFor="" className=" h4">
                  {" "}
                  budget{" "}
                </label>
                <input type="number" maxLength={20} />
                <label htmlFor="" className=" h4">
                  {" "}
                  How can we help you?{" "}
                </label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button className="button2">submit</button>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}

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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quos
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h3 className=" text-slate-200">contact</h3>
                  <p className="  text-slate-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quos
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
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">products</a>
              </div>
            </div>
            <div>
              <div className=" sm:mt-7 md:mt-0 foot__grid--button">
                <button className="button"> free consultation </button>
              </div>
            </div>
          </div>

          <div className=" main ">
            <h4 className=" text-center pt-7">
              {" "}
              all right reserved &copy; 2023
            </h4>
          </div>
        </footer>
      </main>
    </>
  );
};

export default index;
