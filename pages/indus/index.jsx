import React from "react";
import Blognav from "../../comps/blognav";
import { motion } from "framer-motion";
import Footermain from "../../comps/Footermain";
import Statichook from "@/hooks/statichook";
import Navbar from "../../comps/Navbar";

export const getServerSideProps = async ({ query, params }) => {
  const { indus } = query;
  console.log(indus);
  const { getIndustry, singleService, singleIndustry } = Statichook();

  const getindustry = await getIndustry();
  const singleindustry = await singleIndustry(indus);
  console.log(getindustry);

  console.log(singleindustry);

  if (singleindustry) {
    return {
      props: {
        getindustry,
        single: singleindustry,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const index = ({ getindustry, single }) => {
  return (
    <>
      <Navbar />
      <section className="single">
        <div className="single__grid">
          <div>
            <div className="post__recent--tag">
              <br />
              <h1 className=" text-capitalize ">{single.id}</h1>
              <span className="single__span">
                <img src="/asset/icons/Profile.svg" alt="" /> Sanagos <br />
              </span>
            </div>
          </div>
          <div>
            <div className="single__img">
              <img
                src={`https://jeffmatthewpatten.com/api2/${single.img}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="advert">
        <div className="advert__grid advert__grid--modify">
          <div>
            <div className="singlesocial">
              <span>
                <motion.a
                  whileHover={{
                    rotate: "30deg",
                  }}
                  href=""
                >
                  {" "}
                  <i className="fab fa-twitter"></i>{" "}
                </motion.a>
              </span>
              <span>
                <motion.a
                  whileHover={{
                    rotate: "30deg",
                  }}
                  href=""
                >
                  {" "}
                  <i className="fab fa-instagram"></i>{" "}
                </motion.a>
              </span>
              <span>
                <motion.a
                  whileHover={{
                    rotate: "30deg",
                  }}
                  href=""
                >
                  {" "}
                  <i className="fab fa-facebook"></i>{" "}
                </motion.a>
              </span>
              <span>
                <motion.a
                  whileHover={{
                    rotate: "30deg",
                  }}
                  href=""
                >
                  {" "}
                  <i className="fab fa-linkedin"></i>{" "}
                </motion.a>
              </span>
            </div>
            <div className="my-2">
              {single.des && (
                <div
                  className="pb-3 pt-5 "
                  dangerouslySetInnerHTML={{ __html: single.des }}
                ></div>
              )}
            </div>
          </div>
          <div>
            <div>
              <a href="" className="advert__img2">
                <img src="/asset/img/ard1.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footermain getindustry={getindustry} />
    </>
  );
};

export default index;
