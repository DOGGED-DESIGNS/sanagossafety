import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Serviceblock = ({ id, title, dessm, indus, img1 }) => {
  const [hovv, setHovv] = useState(false);
  return (
    <>
      <div className="service__img ">
        <img
          src={`https://jeffmatthewpatten.com/api2/${img1}`}
          className=""
          alt=""
        />
        <motion.div
          onHoverStart={() => {
            setHovv(true);
          }}
          onHoverEnd={() => {
            setHovv(false);
          }}
          className="service__accent"
        >
          <h5> {indus} </h5>
          <h6> {title} </h6>
          <p>{`${dessm.substring(0, 100)}..`}</p>

          <a
            href={`/services/${id}`}
            className=" text-decoration-none text-danger service__button"
          >
            Explore More
            <motion.img
              transition={{
                type: "spring",
                stiffness: 500,
              }}
              animate={
                hovv
                  ? {
                      x: "10px",
                    }
                  : {
                      x: 0,
                    }
              }
              src="./asset/icons/arrowredright2.svg"
              alt=""
            />
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Serviceblock;
