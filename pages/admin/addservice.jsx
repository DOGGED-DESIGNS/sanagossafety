import { useEffect, useState } from "react";
import Adminnav from "../../comps/Adminnav";
import { motion, AnimatePresence } from "framer-motion";
import Editor from "../../comps/Editor";
import Statichook from "@/hooks/statichook";
import Makepost from "@/hooks/makepost";
import { Generalget } from "@/context/General";
import { withSessionSsr, getSessionData } from "../api/withsession";

// beggining of static props

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const data = getSessionData(req);

  console.log(data);
  if (data) {
    if (!data?.status) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else {
      const { category, categorydata, contactNumview, quoteNumview } =
        Statichook();
      const data = await category();
      const contactnumview = await contactNumview();
      const quotenumview = await quoteNumview();
      console.log(data);
      return {
        props: { categories: data, contactnumview, quotenumview },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
});

// end of static props

const Addservice = ({ categories, contactnumview, quotenumview }) => {
  const { loading2 } = Generalget();
  //handling submit

  const {
    makePost,
    servicemessage,
    setServicemessage,
    addService,
    setservicemessage,
    loading,
  } = Makepost();

  const [des1, setdes1] = useState("");
  const [title, setTitle] = useState("");
  const [des2, setdes2] = useState("");
  const [des3, setdes3] = useState("");
  const [des4, setdes4] = useState("");
  const [des5, setdes5] = useState("");

  const handleChange1 = (data, des) => {
    setdes1(data);
  };
  const handleChange2 = (data, des) => {
    setdes2(data);
  };
  const handleChange3 = (data, des) => {
    setdes3(data);
  };
  const handleChange4 = (data, des) => {
    setdes4(data);
  };
  const handleChange5 = (data, des) => {
    setdes5(data);
    console.log(des5);
  };
  const clean = (para) => {
    if (para) {
      return para;
    } else {
      return "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();

    form.append("title", event.target.elements.title.value);
    form.append("dessm", event.target.elements.dessm.value);
    form.append("indus", event.target.elements.indus.value);
    form.append("des1", des1);
    form.append("des2", des2);
    form.append("des3", des3);

    form.append("message", "addservice");
    form.append("img1", clean(event.target.elements.img1?.files[0]));
    form.append("img2", clean(event.target.elements.img2?.files[0]));
    form.append("img3", clean(event.target.elements.img3?.files[0]));

    await addService(form);
  };

  return (
    <>
      <main className="admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />

        <section className="addpost">
          <AnimatePresence>
            {servicemessage?.message && (
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
                    type: "spring",
                    // stiffness: 500,
                  },
                }}
                className={`alert show  alert-dismissible alert-${servicemessage.type} fade`}
              >
                <strong> {servicemessage?.message} </strong>

                <button
                  onClick={() => {
                    setServicemessage({});
                  }}
                  className="close"
                >
                  {" "}
                  &times;{" "}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <form action="" onSubmit={handleSubmit} className="addpost__form">
            <div className="addpost__title">
              <label for="">Title</label>
              <input
                value={title}
                onChange={(e) => {
                  console.log(e.target.value);
                  setTitle(e.target.value);
                }}
                name="title"
                className="addpost__title"
                type="text"
              />
            </div>
            <div className="addpost__title">
              <label for="">Small description</label>
              <input name="dessm" className="addpost__title" type="text" />
            </div>
            <div className="addpost__title">
              <label for="">Industry</label>
              <input name="indus" className="addpost__title" type="text" />
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor value={des1} onChange={handleChange1} />
              <div>
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="img1" id="des1" />
              </div>
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor value={des2} onChange={handleChange2} />
              <div>
                <label for="des2">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="img2" id="des2" />
              </div>
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor value={des3} onChange={handleChange3} />
              <div>
                <label for="des3">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="img3" id="des3" />
              </div>
            </div>

            <button disabled={title ? false : true} type="submit">
              {loading2 ? "loading..." : "submit"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Addservice;
