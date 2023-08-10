import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Statichook from "@/hooks/statichook";
import { useRouter } from "next/router";
import Makepost from "@/hooks/makepost";

const Contactbody = ({ id, time, email, phone, name }) => {
  const [toggleaction, setToggleaction] = useState(false);
  const { deleteContact } = Statichook();
  const { singleContact } = Makepost();

  const router = useRouter();
  return (
    <>
      <div className="shadow-sm table__body">
        <div>
          <div className="table__body--two table__head--phone">
            <h6> {name} </h6>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {phone} </p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {email} </p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {time} </p>
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
                    href=""
                    onClick={async () => {
                      await deleteContact(id);

                      router.reload();
                    }}
                  >
                    <img src="/asset/icons/adminicon/waste.svg" alt="" />
                  </a>
                  <a
                    onClick={async () => {
                      await singleContact(id);
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
              onClick={() => {
                setToggleaction(!toggleaction);
              }}
              style={{
                cursor: "pointer",
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

export default Contactbody;
