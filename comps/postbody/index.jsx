import { useState } from "react";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Makepost from "@/hooks/makepost";
import Statichook from "@/hooks/statichook";

const Postbody = ({ uuid, id, title, img1, time }) => {
  const [toggleaction, setToggleaction] = useState(false);
  const { singlePost2 } = Makepost();
  const { deletePost } = Statichook();
  const router = useRouter();
  return (
    <>
      <div className="shadow-sm table__body">
        <div>
          <div className="table__head--phone">
            <p>{id} </p>
          </div>
        </div>
        <div>
          <div className="table__head--phone">
            <p>{`${title.substring(0, 20)}..`}</p>
          </div>
        </div>
        <div>
          <div className="table__head--phone d-flex align-items-center">
            <div className="desimg">
              <img src={`https://jeffmatthewpatten.com/api2/${img1}`} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="table__head--indus">
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
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={async () => {
                      await deletePost(uuid);
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
                      await singlePost2(uuid);
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <img src="/asset/icons/adminicon/view.svg" alt="" />
                  </a>
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    href={`/admin/${uuid}`}
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
              className="p-2"
            >
              <img
                className="table__menu "
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

export default Postbody;
