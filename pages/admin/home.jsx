import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Animatez from "@/Animate";
import Adminnav from "../../comps/Adminnav";
import Statichook from "@/hooks/statichook";
import { withSessionSsr, getSessionData } from "../api/withsession";

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const data = getSessionData(req);

  const { postNum, categoryNum, contactNum, quoteNum } = Statichook();

  if (!data?.status) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    const quotenumber = await quoteNum();
    const contactnumber = await contactNum();
    const postnumber = await postNum();
    const categorynumber = await categoryNum();

    return {
      props: {
        quotenumber,
        contactnumber,
        postnumber,
        categorynumber,
      },
    };
  }

  return {
    props: {
      data: "data",
    },
  };
});

const home = ({ postnumber, categorynumber, contactnumber, quotenumber }) => {
  const router = useRouter();
  const { animatenav, supplychild, supplycont, tapanimate } = Animatez();
  return (
    <>
      <main className="admin">
        <Adminnav />

        {/* <!-- second nav --> */}
        <section className="dash">
          <motion.div
            variants={supplycont}
            initial="initial"
            whileInView="animate"
            className="dash__grid"
          >
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Categories</p>
                  <h4>{categorynumber}</h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-50%",
                  }}
                  href="#"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/categoryicon.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Request Quotes</p>
                  <h4> {quotenumber} </h4>
                </div>
                <motion.div
                  whileHover={{
                    y: "-50%",
                  }}
                  href="#"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/quote.svg" alt="" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>posts</p>
                  <h4> {postnumber} </h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-50%",
                  }}
                  href=""
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/post.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>contacts</p>
                  <h4> {contactnumber} </h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-50%",
                  }}
                  href="#"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/pages.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default home;
