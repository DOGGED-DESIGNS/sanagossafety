import React from "react";
import Blognav from "../../comps/blognav";
import { motion } from "framer-motion";
import Footermain from "../../comps/Footermain";
import Statichook from "@/hooks/statichook";
import Navbar from "../../comps/Navbar";

export const getStaticPaths = async () => {
  const { getService, getIndustry } = Statichook();

  const serve = await getService();

  const paths = serve.map((se) => {
    return {
      params: { id: se.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const { getIndustry, singleService } = Statichook();

  const getindustry = await getIndustry();
  const singleservice = await singleService(id);

  console.log(id);

  return {
    props: {
      getindustry,
      single: singleservice,
    },
  };
};

const index = ({ getindustry, single }) => {
  return (
    <>
      <Navbar />
      <section className="single">
        <div className="single__grid">
          <div>
            <div className="post__recent--tag">
              <a className="post__recent--cat">{single.indus}</a>
              <br />
              <h4 className="single__h4">{single.title}</h4>
              <span className="single__span">
                <img src="/asset/icons/Profile.svg" alt="" /> Sanagos <br />
              </span>
              <p className="mt-3 mr-2">{single.dessm}</p>
            </div>
          </div>
          <div>
            <div className="single__img">
              <img
                src={`https://jeffmatthewpatten.com/api2/${single.img1}`}
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
              {single.des1 && (
                <div
                  className="pb-3 pt-5 "
                  dangerouslySetInnerHTML={{ __html: single.des1 }}
                ></div>
              )}

              {single.img2 && (
                <div className="imagepreset  ">
                  <img
                    src={`https://jeffmatthewpatten.com/api2/${single.img2}`}
                    alt=""
                  />
                </div>
              )}

              {single.des2 && (
                <div
                  className="pb-3 pt-5 "
                  dangerouslySetInnerHTML={{ __html: single.des2 }}
                ></div>
              )}
            </div>
            <div className="my-2">
              {single.img3 && (
                <div className=" imagepreset">
                  <img
                    className=" "
                    src={`https://jeffmatthewpatten.com/api2/${single.img3}`}
                    alt=""
                  />
                </div>
              )}

              {single.des3 && (
                <div
                  className="pb-3 pt-5 "
                  dangerouslySetInnerHTML={{ __html: single.des3 }}
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
