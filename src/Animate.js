import React from "react";

const Animatez = () => {
  const gencont = {
    initial: {
      opacity: 0,
      y: "100px",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delay: 0.1,
        stiffness: 200,
      },
    },
  };

  // scale container

  // scale child

  const genchild = {
    initial: {
      opacity: 0,
      y: "100px",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const menu = {
    initial: {
      width: "22px",
    },
    animate: {
      width: "22px",
      transition: {
        type: "string",
        when: "beforechildren",
        staggerChildren: 0.2,
      },
    },
  };

  const menuchild = {
    initial: {
      width: "22px",
      bacground: "red",
    },

    animate: {
      width: [22, 0, 22],
      bacground: "red",
    },
  };

  const supplycont = {
    initial: {
      y: "-100px",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        stiffness: 500,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const supplychild = {
    initial: {
      y: "-100px",
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };

  // swiper
  const swipercont = {
    initial: {
      opacity: 0,
      x: "-100px",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        staggerChildren: 0.2,
        delay: 0.2,
        stiffness: 500,
        when: "beforeChildren",
      },
    },
  };
  const swiperchild = {
    initial: {
      opacity: 0,
      x: "-100px",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };
  const animatenav = {
    initial: {
      y: "-70%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };

  const tapanimate = {
    animate: {
      scale: 0.9,
      originx: 0,
    },
  };
  return {
    swiperchild,
    tapanimate,
    menu,
    animatenav,
    swipercont,
    supplychild,
    supplycont,
    menu,
    menuchild,
    genchild,
    gencont,
  };
};

export default Animatez;
