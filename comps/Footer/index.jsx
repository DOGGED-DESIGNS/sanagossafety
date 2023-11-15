import React from "react";
import { motion } from "framer-motion";

const index = () => {
  return (
    <>
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
              href="https://wa.me/message/YLEYZ357B4JJG1"
            >
              <img src="/asset/watsapp.svg" alt="" />
            </motion.a>
            <div>
              <div className="foot__location--contact">
                <h3 className=" text-slate-200">location</h3>
                <p className="  text-slate-500">
                  N01 Edward Nkwegu close, near all saints cathedrals, Ogoja
                  Road Abakaliki Ebonyi State Nigeria
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3 className=" text-slate-200">contact</h3>
                <p className="  text-slate-500">09036670283, 08088587000</p>
              </div>
            </div>
          </div>
        </div>

        {/* footer grid */}

        <div className="foot__grid main ">
          <div>
            <div className="foot__grid--logo ">
              <img src="/asset/mediumnav.png" alt="" />{" "}
            </div>
            <div className=" flex gap-7 mb-4 mt-5 foot__grid--link">
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

            <div
              className="  flex gap-2 flex-wrap "
              style={{
                alignItems: "center",
              }}
            >
              <a
                href=""
                style={{
                  width: "30px",
                  height: "30px",
                }}
                className=" p-1  transition-all ease-in-out hover:bg-slate-200 rounded-md "
              >
                <img src="/asset/email.svg" alt="" />
              </a>
              <h4>bencodelightlimited @ gmail.com</h4>
            </div>
          </div>
          <div>
            <div className=" foot__grid--a">
              <a href="/">home</a>
              <a href="/about">about</a>
              <a href="/designs">products</a>
            </div>
          </div>
          <div>
            <div className=" sm:mt-7 md:mt-0 foot__grid--button">
              <a href="https://wa.me/message/YLEYZ357B4JJG1" className="button">
                {" "}
                free consultation{" "}
              </a>
            </div>
          </div>
        </div>

        <div className=" main ">
          <h4 className=" text-center pt-7"> all right reserved &copy; 2023</h4>
        </div>
      </footer>
    </>
  );
};

export default index;
