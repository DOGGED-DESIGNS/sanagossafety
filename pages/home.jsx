import { useState, useEffect } from "react";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { sessionGet, withSessionrap } from "./api/withsession";
import { useRouter } from "next/router";
import Statichook from "@/hooks/statichook";
import Budget from "../comps/Budget";
import { compileString } from "sass";

export const getServerSideProps = withSessionrap(async ({ req, res }) => {
  const session = sessionGet(req);

  if (session) {
    if (session?.status == false) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    } else {
      const { getWholeclient } = Statichook();

      const allclient = await getWholeclient();

      // const contact = await displayrecent();
      // const count = await countContact();
      return {
        props: {
          data: allclient,
          count: "",
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
});

const index = ({ count, data }) => {
  const [toggle, setToggle] = useState(false);

  const route = useRouter();

  return (
    <>
      <div className="admin">
        <AnimatePresence>
          {toggle && (
            <motion.nav
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              className=" sidenav"
            >
              <div className=" ">
                <div className="sidenav__logo">
                  <img src="/asset/san/sanlogo.svg" alt="" />
                </div>
              </div>

              <div className=" sidenav__link">
                <a href="">
                  {" "}
                  <img src="/asset/customerwhite.svg" alt="" /> potential
                  customer
                </a>
              </div>

              {/* sidenav extra */}

              <div className=" sidenav__extra">
                <form
                  action=""
                  onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                      const result = await axios.post(
                        "/api/withsession",
                        {
                          message: "logout",
                        },
                        {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        }
                      );

                      route.reload();
                    } catch (err) {}
                  }}
                >
                  <button className="sidenav__extra--a" href="" type="submit">
                    {" "}
                    <img src="/asset/logout.svg" alt="" /> logout{" "}
                  </button>
                </form>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        <main className="admin__main">
          <nav className="admin__main--nav">
            <div>
              <a href="/home">
                <img src="/asset/san/sanlogo.svg" alt="" />
              </a>
            </div>

            <div>
              <button
                className="admin__main--nav--menu"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <img src="/asset/smallmenu.svg" alt="" />
              </button>
            </div>
          </nav>
          <div className="admin__main--info">
            <div className="bg-amber-800 admin__main--card">
              <div className="admin__main--card--img">
                <img src="/asset/customerwhite.svg" alt="" />
              </div>

              <div className="  admin__main--cardinfo">
                <h2> 3 </h2>

                <p>potential customer</p>
              </div>
            </div>

            <div></div>
            <div></div>
          </div>

          {/* this is the first table */}

          <div className="admin__tablecon">
            <div className="admin__table">
              <h3 className=" mt-3 ">Potential Clients</h3>
              <div className="admin__table--head">
                <div>
                  <h4># Name</h4>
                </div>
                <div>
                  <h4># Contact</h4>
                </div>
                <div>
                  <h4># PPE</h4>
                </div>
                <div>
                  <h4># Fire Safety</h4>
                </div>
                <div>
                  <h4># Tell us your safety needs </h4>
                </div>

                <div>
                  <h4># action</h4>
                </div>
              </div>

              {/* <h2 className=" text-center"> No Potential Clients Available </h2> */}
              {data?.map((da) => {
                return <Budget {...da} key={da.id} />;
              })}

              {/* <div className="admin__table--body">
                <div className="">
                  <div className=" admin__table--body--time">
                    <img src="/asset/clock.svg" alt="" />
                    12:00AM
                  </div>
                </div>
                <div>
                  <p>09076176485</p>
                </div>
                <div>
                  <p>uzoechijeremiah@gmail.com</p>
                </div>
                <div>
                  <p>40000</p>
                </div>
                <div>
                  <p className=" text-justify">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, eos nobis sequi assumenda similique illo. Corrupti
                    rerum quis ullam unde, necessitatibus qui. Natus aliquam
                    possimus debitis non, iste quos? Optio?{" "}
                  </p>
                </div>
                <div>
                  <div className=" mt-3">
                    <a href="" className=" button-sm">
                      delete
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default index;
