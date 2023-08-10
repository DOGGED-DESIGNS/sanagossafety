import { useState } from "react";
import Statichook from "@/hooks/statichook";
import { useRouter } from "next/router";
import Makepost from "@/hooks/makepost";

import { AnimatePresence, motion } from "framer-motion";
const Commentbody = ({ uuid, title, email, reply, website }) => {
  const [toggleaction, setToggleaction] = useState(false);
  const { deleteComment } = Statichook();
  const { singleComment } = Makepost();
  const router = useRouter();

  return (
    <>
      <div className="shadow-sm table__body">
        <div>
          <div className="table__body--two table__head--des">
            <h6> {`${title.substring(0, 50)}...`} </h6>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {email} </p>
          </div>
        </div>
        <div>
          <div className="table__head--indus">
            <p> {website} </p>
          </div>
        </div>
        <div>
          <div className="table__head--des">
            <p> {`${reply.substring(0, 50)}...`} </p>
          </div>
        </div>
        <div className="">
          <div className="  table__head--act">
            <AnimatePresence>
              {toggleaction && (
                <motion.div
                  initial={{
                    // opacity: 0,
                    translateY: 0,
                    left: "0%",
                    translateX: "-50%",
                  }}
                  animate={{
                    // opacity: 1,
                    left: "0%",
                    translateX: "-50%",
                    translateY: "-5px",
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    translateY: 0,
                  }}
                  className="table__perform"
                >
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={async () => {
                      await deleteComment(uuid);
                      router.reload();
                    }}
                  >
                    <img src="/asset/icons/adminicon/waste.svg" alt="" />
                  </a>
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={async () => {
                      await singleComment(uuid);
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <img src="/asset/icons/adminicon/view.svg" alt="" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* <!-- end of the thing --> */}
            <a
              href="#"
              onClick={() => {
                setToggleaction(!toggleaction);
              }}
            >
              <img
                className="table__menu"
                src="/asset/icons/adminicon/menu_1.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commentbody;
