import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { sessionGet, withSessionrap } from "./api/withsession";
import { useRouter } from "next/router";
import Statichook from "@/hooks/statichook";
import Budget from "../comps/Budget";

export const getServerSideProps = withSessionrap(async ({ req, res }) => {
  const session = sessionGet(req);

  console.log(session);

  if (session) {
    if (session?.status == false) {
      return {
        redirect: {
          destination: "/login",
        },
      };
    } else {
      const { displayrecent, countContact } = Statichook();

      const contact = await displayrecent();
      const count = await countContact();
      return {
        props: {
          data: contact,
          count: count,
        },
      };
    }
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
                  <h4>logo</h4>
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
                    } catch (err) {
                      console.log(err);
                    }
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
              <h4>nav</h4>
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
                <h2> {count} </h2>

                <p>potential customer</p>
              </div>
            </div>

            <div></div>
            <div></div>
          </div>

          {/* this is the first table */}

          <div className="admin__tablecon">
            <div className="admin__table">
              <div className="admin__table--head">
                <div>
                  <h4># time</h4>
                </div>
                <div>
                  <h4># phone no</h4>
                </div>
                <div>
                  <h4># email</h4>
                </div>
                <div>
                  <h4># budget</h4>
                </div>
                <div>
                  <h4># message</h4>
                </div>

                <div>
                  <h4># action</h4>
                </div>
              </div>

              {data.map((ma) => {
                return <Budget {...ma} />;
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
