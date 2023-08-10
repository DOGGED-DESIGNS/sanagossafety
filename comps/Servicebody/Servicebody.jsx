import { useState } from "react";
import Statichook from "@/hooks/statichook";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import Makepost from "@/hooks/makepost";

const Servicebody = ({ id, title, dessm, img1, indus }) => {
  const [toggleaction, setToggleaction] = useState(false);
  const { deleteService } = Statichook();
  const router = useRouter();

  const { singleService } = Makepost();
  return (
    <>
      <div className="shadow-sm table__body">
        <div>
          <div className="table__body--two table__head--name">
            <h6> {`${title.substring(0, 20)}...`} </h6>
          </div>
        </div>
        <div>
          <div className="table__head--des">
            <p> {`${dessm.substring(0, 20)}...`} </p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p> {indus} </p>
          </div>
        </div>
        <div>
          <div className="table__head--phone d-flex align-items-center">
            <div className="desimg">
              <img src={`https://jeffmatthewpatten.com/api2/${img1}`} alt="" />
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
                      await deleteService(id);
                      router.reload();
                    }}
                  >
                    <img src="/asset/icons/adminicon/waste.svg" alt="" />
                  </a>
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={async () => {
                      await singleService(id);
                    }}
                  >
                    <img src="/asset/icons/adminicon/view.svg" alt="" />
                  </a>
                  <a
                    href={`/admin/edit/${id}`}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <img src="/asset/icons/adminicon/update.svg" alt="" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* <!-- end of the thing --> */}
            <a
              style={{
                cursor: "pointer",
              }}
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

export default Servicebody;
