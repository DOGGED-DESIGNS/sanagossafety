import Head from "next/head";
import { useContext, useReducer, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Statichook from "@/hooks/statichook";
import Animatez from "@/Animate";
import Footermain from "../comps/Footermain";
import Navbar from "../comps/Navbar";
import { Generalget } from "@/context/General";
import Serviceblock from "../comps/Serviceblock/Serviceblock";
import Makepost from "@/hooks/makepost";

// import ReactQuill from "react-quill";

export const getServerSideProps = async () => {
  const { getIndustry, getService, webviewUpdate } = Statichook();

  const getindustry = await getIndustry();
  const getservice = await getService();
  await webviewUpdate();

  return {
    props: {
      getindustry,
      getservice,
    },
  };
};

const Home = ({ getindustry, getservice }) => {
  const [data, setData] = useState("this is a data from the state");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(false);
  const { addQuote, quote, setQuote } = Makepost();
  const { loading2 } = Generalget();
  const [hovv, setHovv] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      e.target.elements.email.value == " " ||
      e.target.elements.phone.value == "" ||
      e.target.elements.name.value == "" ||
      e.target.elements.indus.value == "" ||
      e.target.elements.info.value == ""
    ) {
      setError(true);
    } else {
      setError(false);
      const form = new FormData();
      form.append("message", "addquote");
      form.append("email", e.target.elements.email.value);
      form.append("phone", e.target.elements.phone.value);
      form.append("name", e.target.elements.name.value);
      form.append("indus", e.target.elements.indus.value);
      form.append("info", e.target.elements.info.value);

      await addQuote(form);
    }
  };

  const {
    supplychild,
    tapanimate,
    animatenav,
    menu,
    menuchild,
    supplycont,
    gencont,
    genchild,
    swiperchild,
    swipercont,
  } = Animatez();

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
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sanagos Safety is a leading safety supplier company dedicated to providing comprehensive safety solutions for businesses and industries nationwide. With over a decade of experience, we have established ourselves as a trusted partner, delivering high-quality safety products as well as safety training to ensure the well-being of both employees and customers."
        />

        <meta
          name="keywords"
          content=" Sanagos Safety, Sanagos, fire extinguisher,nigeria, safety boot, safety helment, fire safety, fire"
        />
        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        {/* <link rel="stylesheet" href="./final/index.min.css" /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        ></link>
        <title>SANAGOS SAFETY</title>

        <script src="/jquery.3.4.1.js?cd=123"></script>
        <script src="/swiper/owl.carousel.min.js"></script>
        <script src="/final/all.js"></script>
        <script src="/swiper/js/swiper-bundle.min.js"></script>
      </Head>
      {/* <!-- div nav --> */}

      {/* <!-- this is the navigation bar --> */}
      <main className="main">
        <Navbar />

        <motion.header
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 0.5,
            ease: "easeInOut",
          }}
          whileInView={{
            opacity: 1,
          }}
          className="main__header"
        >
          <div className="swiper mySwiper">
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

              {/* <!-- <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> --> */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="main__header--div">
            <h1>
              Sanagos Safety, is One of the Nataion’s Leading Safety Equipment
              Supplier and Safety Trainer.
            </h1>

            <p>
              Sanagos Safety is a leading safety supplier company dedicated to
              providing comprehensive safety solutions for businesses and
              industries nationwide. With over a decade of experience, we have
              established ourselves as a trusted partner, delivering
              high-quality safety products as well as safety training to ensure
              the well-being of both employees and customers.
            </p>

            <motion.a
              onHoverStart={() => {
                setHovv(true);
              }}
              onHoverEnd={() => {
                setHovv(false);
              }}
              href="#services"
              className="main__header--button"
            >
              <motion.img
                transition={{
                  type: "spring",
                  stiffness: 500,
                }}
                animate={
                  hovv
                    ? {
                        x: "3px",
                      }
                    : {
                        x: 0,
                      }
                }
                className="mr-2"
                src="./asset/icons/lightarrow.svg"
                alt=""
              />
              services
            </motion.a>
          </div>
        </motion.header>

        {/* <!-- end of header --> */}

        <section className="supply">
          <div className="container-fluid supply__grid">
            <motion.div
              initial={{
                opacity: 0,
                x: "-100px",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "spring",
                delay: 0.5,
                stiffness: 500,
              }}
              className="supply__sign"
            >
              <h3>
                supply of high performance safety Equipment for industries and
                small businesses
              </h3>
              <h2>
                Sanagos Sagety, is a company supplying various safety epuipments
                and safety wears for in dustries households and small
                businesses.
              </h2>
              <div className="supply__grid2">
                <div>
                  <h6 className="supply__grid2--h6">
                    <i>
                      " I am immensely proud of the positive impact we have made
                      in enhancing safety across various sectors. Our success
                      lies not just in providing top-quality safety equipment
                      but also in our commitment to empowering workplaces and
                      communities with the tools and knowledge to prevent
                      accidents and save lives "
                    </i>
                  </h6>
                  <img src="./asset/img/sign-8.png" alt="" />
                </div>
                {/* <!-- second div in grid2 --> */}

                <div>
                  <p className="supply__grid2--p">
                    " Safety is not just a priority; it's a fundamental value
                    that underpins every aspect of our lives. Whether in the
                    workplace, at home, or on the road, prioritizing safety is a
                    collective responsibility that ensures the well-being of
                    individuals, communities, and society as a whole.""
                    <br />
                    for that reason sanagos safety is leading the charge in
                    prioritizing safety by supplying our customers with quality
                    safety equipment and gears "
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="supply__image">
              <motion.div
                variants={supplycont}
                initial="initial"
                whileInView="animate"
                className="supply__image--flex"
              >
                <motion.div variants={supplychild}>
                  <div className="supply__image--img">
                    <img src="./asset/img/aboutimg1-8.png" alt="" />
                    <div className="supply__image--ext">
                      <img src="./asset/icons/extinguisher.svg" alt="" />
                      <p>safety first in industries and house holds</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={supplychild}>
                  <div className="supply__image--img2">
                    <img src="./asset/img/aboutimg2-8.png" alt="" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* <!-- icons section --> */}

        <section className="container-fluid icons">
          <div className="swiper iconSwiper">
            <motion.div
              variants={swipercont}
              initial="initial"
              animate="animate"
              className="swiper-wrapper"
            >
              <motion.div variants={swiperchild} div className="swiper-slide">
                <img
                  className="icons__img"
                  src="./asset/icons/serviceing.svg"
                  alt=""
                />

                <h4 className="icons__title">Maintenance ands servicing</h4>
              </motion.div>

              <motion.div variants={swiperchild} div className="swiper-slide">
                <img
                  className="icons__img"
                  src="./asset/icons/delivery.svg"
                  alt=""
                />

                <h4 className="icons__title">
                  On schedule delilvery and supply
                </h4>
              </motion.div>
              <motion.div variants={swiperchild} className="swiper-slide">
                <img
                  className="icons__img"
                  src="./asset/icons/qualified.svg"
                  alt=""
                />

                <h4 className="icons__title">Qualified Trainers</h4>
              </motion.div>
              <motion.div variants={swiperchild} className="swiper-slide">
                <img
                  className="icons__img"
                  src="./asset/icons/satisfaction.svg"
                  alt=""
                />

                <h4 className="icons__title">100% custumers satisfaction</h4>
              </motion.div>
            </motion.div>
            {/* <!-- <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div> --> */}
            <div className="swiper-pagination"></div>
          </div>
        </section>

        {/* <!-- meetings --> */}
        <section className="meeting">
          <div className="meeting__grid">
            <motion.div
              initial={{
                x: "-100px",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
              }}
            >
              <div className="meeting__sch">
                <h2 className="meeting__sch--h2">
                  Sanagos is recognised as one of the leading safety equipment
                  supplier and trainers nationwide.
                </h2>
                <p className="meeting__sch--p">
                  sanagos safety has been building relationship that last,
                  serving impressive list of long-term clients with expertise in
                  multiple industries recognised as one of the world's leading
                  coperations.
                </p>
                <div className="meeting__align">
                  <div className="meeting__service">
                    <img
                      className="meeting__mark"
                      src="./asset/icons/markred.svg"
                      alt=""
                    />
                    100% customer satisfaction
                  </div>
                  <div className="meeting__service">
                    <img
                      className="meeting__mark"
                      src="./asset/icons/markred.svg"
                      alt=""
                    />
                    On Schedule supply and maintenance
                  </div>
                  <div className="meeting__service">
                    <img
                      className="meeting__mark"
                      src="./asset/icons/markred.svg"
                      alt=""
                    />
                    Quality Control
                  </div>
                  <div className="meeting__service">
                    <img
                      className="meeting__mark"
                      src="./asset/icons/markred.svg"
                      alt=""
                    />
                    Highly Professional Staffs
                  </div>
                </div>

                <motion.a
                  onHoverStart={() => {
                    setHovv(true);
                  }}
                  onHoverEnd={() => {
                    setHovv(false);
                  }}
                  href="/contact"
                  className="meeting__button"
                >
                  <motion.img
                    transition={{
                      type: "spring",
                      stiffness: 500,
                    }}
                    animate={
                      hovv
                        ? {
                            x: "3px",
                          }
                        : {
                            x: 0,
                          }
                    }
                    src="./asset/icons/lightarrow.svg"
                    alt=""
                  />
                  schedule an Appointment
                </motion.a>

                {/* <!-- video play --> */}
                <div className="meeting__play">
                  <img
                    className="meeting__play--img"
                    src="./asset/icons/play.svg"
                    alt=""
                  />
                </div>
                <div className="  meeting__accent"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{
                x: "50px",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
              }}
            >
              <div className="meeting__img">
                <img
                  src="./asset/img/istockphoto-1466908062-612x612.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* <!-- servicing --> */}
        <section className="container-fluid service" id="services">
          <div className="service__grid">
            <div>
              <h6 className="service__h6">we work with Global Industries</h6>
              <h2 className="service__h2">
                Providing safety equipment and gears of all types and functions.
              </h2>
            </div>
            <div>
              <p className="service__p">
                We take pride in offering a comprehensive Safety Equipment
                Supply service to meet the diverse needs of workplaces across
                various industries.
              </p>
            </div>
          </div>

          {/* <!-- service image --> */}

          <div className="swiper swiperService">
            <div className="swiper-wrapper">
              {getservice.map((ser) => {
                return (
                  <div className="swiper-slide">
                    <Serviceblock {...ser} />
                  </div>
                );
              })}
            </div>

            <div className="swiper-button-next nnx1">
              <img src="./asset/icons/servicearrow2.svg" alt="" />
            </div>
            <div className="nnx2 swiper-button-prev">
              <img src="./asset/icons/servicearrow1.svg" alt="" />
            </div>
            <div className="swiper-pagination  "></div>
          </div>
        </section>

        {/* <!-- this is the company --> */}

        <section className="border-top pt-5 icons">
          <div className="swiper iconSwiper">
            <div className="swiper-wrapper mb-5">
              <div div className="swiper-slide">
                <img
                  className="d-block m-auto"
                  src="./asset/img/kab-8.png"
                  alt=""
                />
              </div>

              <div div className="swiper-slide">
                <img
                  className="m-auto d-block"
                  src="./asset/img/Ap-8.png"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="m-auto d-block"
                  src="./asset/img/oando-8.png"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  className="m-auto d-block"
                  src="./asset/img/mrs-8.png"
                  alt=""
                />
              </div>
            </div>
            {/* <!-- <div className="swiper-button-next"></div>
    <div className="swiper-button-prev"></div> --> */}
            <div className="swiper-pagination"></div>
          </div>
        </section>

        {/* <!-- this is the footer --> */}
      </main>
      <section className="request">
        <div className="container-fluid request__grid">
          <div>
            <h6 className="service__h6">
              Dedicated Customer Team and Agile Service
            </h6>
            <h2 className="meeting__sch--h2">
              Serving impressive list of long term clients
            </h2>
            <p className="meeting__sch--p">
              sanagos has been serving with experience and expertise, retaining
              relationship as a result of transparent and honesty with all out
              clients
            </p>
          </div>
          <div>
            <motion.div
              initial={{
                y: "100px",
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                type: "spring",
                delay: 0.7,
                stiffness: 500,
              }}
              className="shadow request__form"
            >
              <h5 className="service__h2 mb-4">Request quote</h5>
              <p className="mr-auto service__p mb-5">
                Our complete control over product allows us to ensure our
                customer recieves the best quality price and service
              </p>
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "-20px",
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: "-30px",
                      transition: {
                        type: "spring",
                        // stiffness: 500,
                      },
                    }}
                    className={`alert show  alert-dismissible alert-danger fade`}
                  >
                    <strong> kindly fill all form fields </strong>

                    <button
                      onClick={() => {
                        setError(false);
                      }}
                      className="close"
                    >
                      {" "}
                      &times;{" "}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {quote?.message && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: "-20px",
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: "-30px",
                      transition: {
                        type: "spring",
                        // stiffness: 500,
                      },
                    }}
                    className={`alert show  alert-dismissible alert-${quote.type} fade`}
                  >
                    <strong> {quote?.message} </strong>

                    <button
                      onClick={() => {
                        setQuote({});
                      }}
                      className="close"
                    >
                      {" "}
                      &times;{" "}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <input
                      className="request__name"
                      type="text"
                      placeholder="name"
                      maxLength={20}
                      name="name"
                    />
                    {/* <span className=" text-danger">this is for a test</span> */}
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <input
                      className="   request__email"
                      type="email"
                      placeholder="email"
                      maxLength={30}
                      name="email"
                    />
                  </div>
                </div>

                {/* <!-- select input --> */}
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <input
                      className="request__name"
                      type="number"
                      placeholder="phone"
                      maxLength={15}
                      name="phone"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <select className="request__select" name="indus" id="">
                      {getindustry.map((indus) => {
                        return (
                          <option
                            selected={indus.id == "oil and gas" && true}
                            value={indus.id}
                          >
                            {indus.id}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <textarea
                  className="request__textarea"
                  placeholder="Aditional information"
                  name="info"
                  id=""
                  cols="30"
                  rows="10"
                  maxLength={200}
                ></textarea>

                <motion.button
                  type="submit"
                  variants={tapanimate}
                  whileTap="animate"
                  href=""
                  onHoverStart={() => {
                    setHovv(true);
                  }}
                  onHoverEnd={() => {
                    setHovv(false);
                  }}
                  className="request__button"
                >
                  <motion.img
                    transition={{
                      type: "spring",
                      stiffness: 500,
                    }}
                    animate={
                      hovv
                        ? {
                            x: "3px",
                          }
                        : {
                            x: 0,
                          }
                    }
                    src="./asset/icons/lightarrow.svg"
                    alt=""
                  />
                  {loading2 ? "please waite" : "submit request"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          ease: easeInOut,
        }}
        className="test"
      >
        {/* <div className="container-fluid">
          <h2 className="test__h2">What Our Client Says !</h2>

          <div className="pt-5 swiper testSwiper">
            <div className="swiper-wrapper mb-5">
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                  Sanagos has been my trusted partner for safety equipment and gears. Their premium quality products and timely deliveries ensure my team's safety without compromise
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img src="./asset/img/testimg1-8.png" alt="" />
                    </div>
                    <div className="test__name">
                      <h6>uzoechi Naza</h6>
                      <p>manager</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                  Exceptional service! Sanagos not only offers a wide range of safety gear but also provides expert advice, helping me make informed choices to enhance workplace safety.
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img src="./asset/img/testimg1-8.png" alt="" />
                    </div>
                    <div className="test__name">
                      <h6>Awom Ugumba</h6>
                      <p>manager at Geotech</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="test__mover">
                  <p className="test__p">
                  Reliability meets innovation with Sanagos. Their cutting-edge safety equipment not only meets industry standards but sets a new benchmark for workplace safety.
                  </p>

                  <div className="test__people">
                    <div className="test__img">
                      <img src="./asset/img/testimg1-8.png" alt="" />
                    </div>
                    <div className="test__name">
                      <h6>uzoechi jeremiah</h6>
                      <p>Civil Engineeer</p>
                    </div>
                  </div>

                  <img
                    className="test__quote"
                    src="./asset/icons/quote.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          
            <div className="swiper-pagination"></div>
          </div>
        </div> */}
      </motion.section>
      <Footermain getindustry={getindustry} />
    </>
  );
};

export default Home;
