import React from "react";
import Adminnav from "../../comps/Adminnav";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Categorybody from "../../comps/categorybody";
import Animatez from "@/Animate";
import { motion } from "framer-motion";
import Statichook from "@/hooks/statichook";
import Industrybody from "../../comps/Industrybody/Industrybody";

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const data = getSessionData(req);

  console.log(data);

  if (data) {
    if (!data?.status) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else {
      const { getIndustry, quoteNumview, contactNumview } = Statichook();
      const industry = await getIndustry();
      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();
      return {
        props: {
          industry,
          contactnumview,
          quotenumview,
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
});

const industry = ({ industry, contactnumview, quotenumview }) => {
  const { genchild, gencont } = Animatez();
  return (
    <>
      <main className="main">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />
        <section class="table">
          <div class="d-flex">
            <a
              href="/admin/addindustry"
              class="catbut text-decoration-none  text-white "
            >
              <img src="/asset/icons/adminicon/add.svg" alt="" /> new industry
            </a>
          </div>
          <div class="table__cont container-fluid">
            <div class="table__head">
              <div>
                <div class="table__head--phone">
                  <h6 className=" text-capitalize font-weight-bold">
                    Industry
                  </h6>
                </div>
              </div>
              <div>
                <div class="table__head--des">
                  <h6 className=" text-capitalize font-weight-bold">
                    description
                  </h6>
                </div>
              </div>
              <div>
                <div class="table__head--phone">
                  <h6 className=" text-capitalize font-weight-bold">img</h6>
                </div>
              </div>
              <div>
                <div class="table__head--act">
                  <h6 className=" text-capitalize font-weight-bold">action</h6>
                </div>
              </div>
            </div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              {industry.map((indus) => {
                return (
                  <motion.div variants={genchild}>
                    <Industrybody {...indus} variants={genchild} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* <!-- modal --> */}
      </main>
    </>
  );
};

export default industry;
