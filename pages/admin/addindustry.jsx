import { useEffect, useState } from "react";
import Adminnav from "../../comps/Adminnav";
import { motion, AnimatePresence } from "framer-motion";
import Editor from "../../comps/Editor";
import Statichook from "@/hooks/statichook";
import Makepost from "@/hooks/makepost";
import { withSessionSsr, getSessionData } from "../api/withsession";
import { Generalget } from "@/context/General";

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
      const { category, categorydata, quoteNumview, contactNumview } =
        Statichook();
      const data = await category();
      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();
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

const Addpost = ({ categories, contactnumview, quotenumview }) => {
  //handling submit

  const {
    makePost,
    setindusmessage,
    loading,
    addIndustry,
    setIndusmessage,
    indusmessage,
  } = Makepost();
  const { loading2, setLoading2 } = Generalget();

  const [des1, setdes1] = useState("");
  const [title, setTitle] = useState("");
  const [des2, setdes2] = useState("");
  const [des3, setdes3] = useState("");
  const [des4, setdes4] = useState("");

  const handleChange1 = (data, des) => {
    setdes1(data);
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

    form.append("id", event.target.elements.title.value);
    form.append("des", des1);
    form.append("message", "addindustry");
    form.append("img", clean(event.target.elements.img?.files[0]));

    await addIndustry(form);
  };

  return (
    <>
      <main className="admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />

        <section className="addpost">
          <AnimatePresence>
            {indusmessage?.message && (
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
                className={`alert show  alert-dismissible alert-${indusmessage.type} fade`}
              >
                <strong> {indusmessage?.message} </strong>

                <button
                  onClick={() => {
                    setIndusmessage({});
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
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor value={des1} onChange={handleChange1} />
              <div>
                <label for="des1">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="img" id="des1" />
              </div>
            </div>

            <button disabled={title ? false : true} type="submit">
              {loading2 ? "Loading..." : "submit"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Addpost;
