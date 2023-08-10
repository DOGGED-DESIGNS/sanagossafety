import { useState } from "react";
import Statichook from "@/hooks/statichook";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Industrybody = ({ id, des, img }) => {
  const [toggleaction, setToggleaction] = useState(false);
  const { deleteIndustry } = Statichook();
  const router = useRouter();
  return (
    <>
      <div className="shadow-sm table__body">
        <div>
          <div className="table__body--two table__head--phone">
            <h6> {id} </h6>
          </div>
        </div>
        <div>
          <div className="table__head--des">
            <div
              dangerouslySetInnerHTML={{ __html: `${des.substring(0, 20)}..` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="table__head--phone d-flex align-items-center">
            <div className="desimg">
              <img src={`https://jeffmatthewpatten.com/api2/${img}`} alt="" />
            </div>
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
                      await deleteIndustry(id);
                      router.reload();
                    }}
                  >
                    <img src="/asset/icons/adminicon/waste.svg" alt="" />
                  </a>
                  {/* <a href="" data-toggle="modal" data-target="#exampleModal">
                    <img src="/asset/icons/adminicon/view.svg" alt="" />
                  </a> */}
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

export default Industrybody;
