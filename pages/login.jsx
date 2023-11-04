import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { withSessionrap, sessionGet } from "./api/withsession";
import axios from "axios";
import { cookies, headers } from "next/dist/client/components/headers";
import { easeInOut, motion, AnimatePresence, delay } from "framer-motion";

export const getServerSideProps = withSessionrap(async ({ req, res }) => {
  const session = sessionGet(req);
  console.log(session);
  console.log("testing");

  if (session) {
    console.log(session);

    if (session?.status == true && session?.error == false) {
      return {
        redirect: {
          destination: "/home",
        },
      };
    } else {
      console.log(session);
      console.log("this is not working");
      return {
        props: {
          data: session,
        },
      };
    }
  } else {
    return {
      props: {
        data: {
          message: "",
          type: "",
          error: "",
        },
      },
    };
  }
});

const index = ({ data }) => {
  const [error, setError] = useState(false);
  const route = useRouter();
  // console.log(data);
  // handlsubmit

  useEffect(() => {
    if (data?.error) {
      setError(true);
    } else {
      setError(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "/api/withsession",
        {
          message: "login",
          username: e.target.elements.username.value,
          password: e.target.elements.password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      route.reload();
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <>
      <nav className=" main-big">
        <div className="login__nav">
          <h3>logo</h3>
        </div>
      </nav>
      <div className="login">
        <div className=" main">
          <form onSubmit={handleSubmit} className="login__form">
            <h2 className=" text-center">login</h2>
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{
                    x: "-100%",
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",

                    // stiffness: 200,
                    // delay: 0.3,
                  }}
                  exit={{
                    x: "-100%",
                    opacity: 0,
                  }}
                  className={`mess ${data?.type}`}
                >
                  <div className="">
                    <img className="error" src="/asset/error.svg" alt="" />
                    <img className="success" src="/asset/success.svg" alt="" />
                  </div>
                  <div className="mess__message">{data?.message}</div>
                  <div>
                    <div
                      onClick={() => {
                        setError(false);
                      }}
                      className="mess__close"
                    >
                      <img src="/asset/closegray.svg" alt="" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <label className="h4" htmlFor="">
              username
            </label>
            <input name="username" type="text" />
            <label className="h4" htmlFor="">
              password
            </label>
            <input name="password" type="password" />
            <button type="submit" className=" button">
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
