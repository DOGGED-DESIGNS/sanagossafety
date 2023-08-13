import Head from "next/head";
import { useContext, useReducer, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Animatez from "@/Animate";
// import ReactQuill from "react-quill";

const Navbar = () => {
  const [data, setData] = useState("this is a data from the state");
  const [toggle, setToggle] = useState(false);
  const [hovv, setHovv] = useState(false);

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
  return (
    <div>
      <AnimatePresence>
        {toggle && (
          <motion.nav
            transition={{
              delay: 0.5,
              type: "spring",
              // stiffness: 100,
              // damping: 10,
              // mass: 10,
            }}
            initial={{
              x: "100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100vw",
            }}
            className="smallnav"
          >
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
              className="  smallnav__link"
            >
              <motion.a href="/" variants={genchild}>
                {" "}
                Home{" "}
              </motion.a>
              <motion.a variants={genchild} href="/contact">
                {" "}
                Contact{" "}
              </motion.a>
              <motion.a variants={genchild} href="/about">
                {" "}
                About{" "}
              </motion.a>
              <motion.a variants={genchild} href="/blog">
                {" "}
                News & Blog{" "}
              </motion.a>
              <motion.div variants={genchild}>
                <motion.a
                  onHoverStart={() => {
                    setHovv(true);
                  }}
                  onHoverEnd={() => {
                    setHovv(false);
                  }}
                  className="main__nav--get smallnav__get"
                  href="/contact"
                >
                  Get in touch
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
                    className="ml-2"
                    src="/asset/icons/whitearrow.svg"
                    alt=""
                  />
                </motion.a>
              </motion.div>
              <motion.div variants={genchild}>
                <a
                  className="main__nav--call smallnav__call"
                  href="tel:23476176485"
                >
                  <img
                    className="ml-1"
                    src="/asset/icons/redphone.svg"
                    alt=""
                  />
                  (+234) 907-6176-485
                </a>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* <ReactQuill /> */}
      <motion.nav
        variants={animatenav}
        initial="initial"
        whileInView="animate"
        className="main__nav"
      >
        <a className="main__nav--logo" href="/">
          <img src="/asset/icons/logo.svg" alt="" />
        </a>

        <motion.div variants={gencont} className="main__nav--links">
          <motion.a variants={genchild} href="/">
            {" "}
            Home{" "}
          </motion.a>
          <motion.a variants={genchild} href="/contact">
            {" "}
            Contact{" "}
          </motion.a>
          <motion.a variants={genchild} href="/about">
            {" "}
            About{" "}
          </motion.a>
          <motion.a variants={genchild} href="/blog">
            {" "}
            News & Blog{" "}
          </motion.a>
          <motion.div variants={genchild}>
            <motion.a
              onHoverStart={() => {
                setHovv(true);
              }}
              onHoverEnd={() => {
                setHovv(false);
              }}
              className="main__nav--get"
              href="/contact"
            >
              Get in touch
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
                className="ml-2"
                src="/asset/icons/darkarrow.svg"
                alt=""
              />
            </motion.a>
          </motion.div>
          <motion.div variants={genchild}>
            <a className="main__nav--call" href="tel:23476176485">
              <img className="ml-1" src="/asset/icons/redphone.svg" alt="" />
              (+234) 907-6176-485
            </a>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* <!-- this is for tablets and mobile --> */}
      <motion.div
        variants={animatenav}
        initial="initial"
        whileInView="animate"
        className="main__nav2"
      >
        <a className="main__nav2--logo" href="/">
          <img src="/asset/icons/logo.svg" alt="" />
        </a>

        <motion.div
          variants={menu}
          initial="initial"
          whileHover="animate"
          whileInView="animate"
          onClick={() => {
            setToggle(!toggle);
          }}
          className="main__nav2--menu"
        >
          <motion.span variants={menuchild}></motion.span>
          <motion.span variants={menuchild}></motion.span>
          <motion.span variants={menuchild}></motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
