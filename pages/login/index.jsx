import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import axios from "axios";
import { useRouter } from "next/router";
// import { withSessionSsr, getSessionData } from "../api/withSession";
import { withSessionSsr, getSessionData } from "../api/withsession";

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const da = getSessionData(req);
  console.log(da);

  if (da?.error == false && da?.status == true) {
    return {
      redirect: {
        destination: "/admin/home",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: da ? da : { message: "", type: "", error: "", status: false },
    },
  };
});

const index = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.elements.user.value;
    const pass = e.target.elements.password.value;

    try {
      await axios.post(
        "/api/withsession",
        { name: name, password: pass, message: "login" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {}
    // router.push("/login");
    router.reload();
  };

  const [check, setCheck] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (data.error == "") {
      setCheck(false);
    } else {
      if (data?.error) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    }
  }, []);

  return (
    <>
      <main className="login">
        <div className="shadow login__form">
          <AnimatePresence>
            {check && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: "-20px",
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: "-30px",
                  transition: {
                    // type: "spring",
                    // stiffness: 500,
                  },
                }}
                className={`alert show  alert-dismissible alert-${data?.type} fade`}
              >
                <strong> {data?.message} </strong>

                <button
                  onClick={() => {
                    setCheck(false);
                  }}
                  className="close"
                >
                  {" "}
                  &times;{" "}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <h2 className="login__h2">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="login__form--input">
              <input name="user" placeholder="username" type="text" />
              <span>
                <i className="fas fa-user-alt"></i>
              </span>
            </div>
            <div className="login__form--input">
              <input name="password" placeholder="password" type="password" />
              <span>
                <i className="fas fa-lock-open"></i>
              </span>
            </div>
            <div className="login__form--forget">
              <span className="login__check">
                <input type="checkbox" /> Remember me
              </span>
              <span className="login__forget">
                <a href="">Forgot password? </a>
              </span>

              <div className="clearfix"></div>
            </div>
            <motion.button
              whileHover={{
                origins: 0,
                scale: 0.8,
                boxShadow: "0px 0px 7px white",
              }}
              type="submit"
              whileTap={{
                originx: 0,
                scale: 1.1,
              }}
            >
              Login
            </motion.button>
          </form>
        </div>
        {/* <!-- end of footer --> */}
      </main>
    </>
  );
};

export default index;
