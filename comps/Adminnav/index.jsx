import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { motion } from "framer-motion";
import Animatez from "@/Animate";

const Adminnav = () => {
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/withsession",
        { message: "logout" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("sucess");
    } catch (err) {
      console.log(err);

      console.log("there was an error");
    }
    router.reload();
  };

  const { animatenav, supplychild, supplycont, tapanimate } = Animatez();
  return (
    <>
      <motion.nav
        variants={animatenav}
        initial="initial"
        whileInView="animate"
        className="admin__nav"
      >
        <a class="admin__nav--logo" href="/admin">
          <img src="/asset/icons/logo.svg" alt="" />
        </a>

        <div class="admin__nav--link">
          <div class="admin__nav--input">
            <input type="text" placeholder=" find " />
            <motion.a variants={tapanimate} whileTap="animate" href="#">
              <img
                class="admin__nav--search"
                src="/asset/icons/adminicon/search.svg "
                alt=""
              />
            </motion.a>
          </div>
          <motion.a
            variants={tapanimate}
            whileTap="animate"
            href="/admin/contact"
            className="mx-3  admin__nav--notification"
          >
            <img
              class="admin__nav--notificationimg"
              src="/asset/icons/adminicon/notification.svg"
              alt=""
            />
            <div class="admin__nav--info1 text-decoration-none">29</div>
          </motion.a>
          <motion.a
            variants={tapanimate}
            whileTap="animate"
            href="/admin/quote"
            className=" mx-3  admin__nav--quote"
          >
            <img
              class=" admin__nav--quoteimg"
              src="/asset/icons/adminicon/quotedark.svg"
              alt=""
            />
            <div class="text-decoration-none admin__nav--info2">7</div>
          </motion.a>
          <motion.a
            variants={tapanimate}
            whileTap="animate"
            href="#"
            className="mx-3  admin__nav--quote"
          >
            <form onSubmit={handleLogout}>
              <button type="submit" className=" btn-sm btn btn-outline-dark">
                <i className="text-black  fa-1x  fas fa-sign-out-alt "></i>
              </button>
            </form>
          </motion.a>
        </div>

        {/* <!-- this is just what i want to do --> */}
      </motion.nav>

      {/* this is the end
       */}
    </>
  );
};

export default Adminnav;
