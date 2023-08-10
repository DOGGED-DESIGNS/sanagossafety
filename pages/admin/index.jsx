import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Animatez from "@/Animate";
import Adminnav from "../../comps/Adminnav";
import Statichook from "@/hooks/statichook";
import { withSessionSsr, getSessionData } from "../api/withsession";

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const data = getSessionData(req);

  const {
    postNum,
    categoryNum,
    contactNum,
    quoteNum,
    quoteNumview,
    contactNumview,
    industryNum,
    hitNum,
    serviceNum,
    commentNum,
  } = Statichook();

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
    const quotenumview = await quoteNumview();
    const contactnumview = await contactNumview();
    const commentnum = await commentNum();
    const servicenum = await serviceNum();
    const hitnum = await hitNum();
    const industrynum = await industryNum();

    return {
      props: {
        quotenumber,
        commentnum,
        industrynum,
        servicenum,
        hitnum,
        quotenumview,
        contactnumview,
        contactnumber,
        postnumber,
        categorynumber,
      },
    };
  }
});

const home = ({
  quotenumber,
  commentnum,
  industrynum,
  servicenum,
  hitnum,
  quotenumview,
  contactnumview,
  contactnumber,
  postnumber,
  categorynumber,
}) => {
  const router = useRouter();
  const { animatenav, supplychild, supplycont, tapanimate } = Animatez();
  return (
    <>
      <main className="admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />

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
                    y: "-30%",
                  }}
                  href="/admin/category"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/categoryicon.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>comment</p>
                  <h4> {commentnum} </h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="/admin/comment"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/commentwhite.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>quote</p>
                  <h4> {quotenumber} </h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="/admin/quote"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/quote.svg" alt="" />
                </motion.a>
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
                    y: "-30%",
                  }}
                  href="/admin/post"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/post.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>industry</p>
                  <h4> {industrynum} </h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="/admin/industry"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/industry.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>services</p>
                  <h4> {servicenum} </h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  href="/admin/services"
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/serviceindus.svg" alt="" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={supplychild}>
              <div className="dash__cat shadow-sm">
                <div className="dash__display">
                  <p>Hits</p>
                  <h4> {hitnum} </h4>
                </div>
                <motion.a
                  whileHover={{
                    y: "-30%",
                  }}
                  className="dash__img"
                >
                  <img src="/asset/icons/adminicon/hits.svg" alt="" />
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
                    y: "-30%",
                  }}
                  className="dash__img"
                  href="/admin/contact"
                >
                  <img src="/asset/icons/adminicon/contact.svg" alt="" />
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
