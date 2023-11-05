import React from "react";

import { useState, useEffect } from "react";
import Makepost from "@/hooks/makepost";
import Footer from "../comps/Footer";
// import { motion, AnimatePresence } from "framer-motion";

import { easeInOut, motion, AnimatePresence, delay } from "framer-motion";

const index = () => {
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 5000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });

    // this is the second fade

    // second script swiper for scroll

    var swiperz = new Swiper(".iconSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 3,
        },
        950: {
          slidesPerView: 4,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // third swiper for scroll
    var swiperz = new Swiper(".swiperService", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 2,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swipertest = new Swiper(".testSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 1,
        },
        950: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2000, // Set the delay between lside transitions (in milliseconds)
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        dots: false,
        nav: false, // Disable default navigation
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
        },
      });

      // Custom Navigation
      $(".custom-next").click(function () {
        $(".owl-carousel").trigger("next.owl.carousel");
      });

      $(".custom-prev").click(function () {
        $(".owl-carousel").trigger("prev.owl.carousel");
      });
    });
  }, []);

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
        {/* second nav */}
        {/* <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="main__header--img swiper-slide">
                <img className="" src="./asset/img/desk1-8.png" alt="" />
              </div>

              <div className="main__header--img swiper-slide">
                <img
                  className=""
                  src="./asset/img/istockphoto-144877527-612x612.jpg"
                  alt=""
                />
              </div>
              <div className="main__header--img swiper-slide">
                <img
                  className=""
                  src="./asset/img/istockphoto-1466908062-612x612.jpg"
                  alt=""
                />
              </div>

               <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> 
              <div className="swiper-pagination"></div>
            </div>
          </div> */}

        <header className=" main-big header swiper mySwiper ">
          <div className="swiper-wrapper">
            <div className=" swiper-slide ">
              <img className="header__img" src="/asset/img/banner5.png" />
            </div>
            <div className="swiper-slide">
              <img className="header__img" src="/asset/img/banner4.png" />
            </div>
            <div className="swiper-slide">
              <img className="header__img" src="/asset/img/banner3.png" />
            </div>
          </div>

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
                <img src="/asset/img/banner3.png" />
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
                    <img src="/asset/img/imagebig1.png" alt="" />
                    <div className=" smallcard__card--move">
                      <img src="/asset/01.svg" alt="" />
                      <p className=" text-stone-50 font-bold capitalize ">
                        {" "}
                        general_construction
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/img/interiorserviceimg1.png" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/02.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        3D modelling
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/img/interiorserviceimg2.png" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/03.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        interior decoration
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/img/interiorserviceimg3.png" alt="" />
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
                    <img src="/asset/img/serviceimg5.png" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/05.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        structural designs
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="smallcard__card">
                    <img src="/asset/img/serviceimg6.png" alt="" />
                    <div className="smallcard__card--move">
                      <img src="/asset/06.svg" alt="" />
                      <p className=" mt-2  text-stone-50 font-bold capitalize ">
                        {" "}
                        achitectural services
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
                  <img src="/asset/img/imagebig3.png" alt="" />
                </div>
                <h3 className="  mb-3 text-white font-bold  ">Project# 1</h3>
                <p className=" mb-12 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, modi! Fugit ea veniam magni porro unde, rem eos
                  voluptas dolorem dolorum obcaecati excepturi temporibus velit.
                  Dolore ducimus necessitatibus sunt id?
                </p>
                <a href="/designs" className="  button2">
                  see details
                </a>
              </div>
            </div>
            <div>
              <div className=" recent__grid--card">
                <div className=" recent__grid--img">
                  <img src="/asset/img/imagebig2.png" alt="" />
                </div>
                <h3 className="  mb-3 text-white font-bold  ">Project# 2</h3>
                <p className=" mb-12 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, modi! Fugit ea veniam magni porro unde, rem eos
                  voluptas dolorem dolorum obcaecati excepturi temporibus velit.
                  Dolore ducimus necessitatibus sunt id?
                </p>
                <a href="/designs" className="  button2">
                  see details
                </a>
              </div>
            </div>
            <div>
              <div className=" recent__grid--card">
                <div className=" recent__grid--img">
                  <img src="/asset/img/imagebig1.png" alt="" />
                </div>
                <h3 className="  mb-3 text-white font-bold  ">Project# 3</h3>
                <p className=" mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, modi! Fugit ea veniam magni porro unde, rem eos
                  voluptas dolorem dolorum obcaecati excepturi temporibus velit.
                  Dolore ducimus necessitatibus sunt id?
                </p>
                <a href="/designs" className="  button2">
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
              <img src="/asset/img/imagebig3.png" alt="" />
            </div>
            <div className=" opinion__grid--img2">
              <img src="/asset/img/imagebig2.png" alt="" />
              <div className=" owl-carousel owl-theme opinion__mover">
                <div className="item  ">
                  <p className=" font-semibold  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequunt
                  </p>
                  <h4 className=" p-1 rounded-md inline-block  bg-slate-100">
                    Manager
                  </h4>
                </div>
                <div className="item  ">
                  <p className=" font-semibold  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequunt
                  </p>
                  <h4 className=" p-1 rounded-md inline-block  bg-slate-100">
                    Manager
                  </h4>
                </div>
                <div className="item  ">
                  <p className=" font-semibold  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequunt
                  </p>
                  <h4 className=" p-1 rounded-md inline-block  bg-slate-100">
                    Manager
                  </h4>
                </div>
              </div>
              <button className=" custom-next roundbutton roundbutton__left ">
                <img src="/asset/left.svg" />{" "}
              </button>
              <button className=" custom-prev roundbutton roundbutton__right">
                <img src="/asset/right.svg" />
              </button>
            </div>
            <div className="opinion__grid--img1">
              <img src="/asset/img/imagebig1.png" alt="" />
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
                <img src="/asset/img/banner4.png" alt="" />
              </div>
            </div>
            <div>
              {/* feedback message */}

              <AnimatePresence>
                {error && (
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
                    className="mess error"
                  >
                    <div className="">
                      <img className="error" src="/asset/error.svg" alt="" />
                      <img
                        className="success"
                        src="/asset/success.svg"
                        alt=""
                      />
                    </div>
                    <div className="mess__message">
                      {" "}
                      kindly fill all form fields{" "}
                    </div>
                    <div>
                      <div
                        onClick={() => {
                          setError(false);
                        }}
                        className="mess__close"
                      >
                        <img src="/asset/closegray.svg" alt="" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {postmessage?.message && (
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
                    className={`mess ${postmessage.type}`}
                  >
                    <div className="">
                      <img className="error" src="/asset/error.svg" alt="" />
                      <img
                        className="success"
                        src="/asset/success.svg"
                        alt=""
                      />
                    </div>
                    <div className="mess__message">{postmessage.message}</div>
                    <div>
                      <div
                        onClick={() => {
                          setPostmessage({});
                        }}
                        className="mess__close"
                      >
                        <img src="/asset/closegray.svg" alt="" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* end of feedback message */}
              <form onSubmit={handleSubmitz} className=" reach__grid--form">
                <label htmlFor="" className="   h4">
                  {" "}
                  name{" "}
                </label>
                <input type="text" name="name" />
                <label htmlFor="" className=" h4  ">
                  {" "}
                  email{" "}
                </label>
                <input name="email" type="email" />
                <label htmlFor="" className=" h4">
                  {" "}
                  phone number{" "}
                </label>
                <input type="number" name="phone" />
                <label htmlFor="" className=" h4">
                  {" "}
                  budget{" "}
                </label>
                <input type="number" name="budget" maxLength={20} />
                <label htmlFor="" className=" h4">
                  {" "}
                  How can we help you?{" "}
                </label>
                <textarea
                  name="mess"
                  id=""
                  maxLength={200}
                  cols="30"
                  rows="5"
                ></textarea>
                <button type="submit" className="button2">
                  {loading ? "please wait ..." : "submit"}
                </button>
              </form>

              {/* end of the form */}
            </div>
          </div>
        </section>

        {/* footer */}

        <Footer />
      </main>
    </>
  );
};

export default index;
