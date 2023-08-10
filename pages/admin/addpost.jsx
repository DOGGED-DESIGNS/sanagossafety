import { useEffect, useState } from "react";
import Adminnav from "../../comps/Adminnav";
import { motion, AnimatePresence } from "framer-motion";
import Editor from "../../comps/Editor";
import Statichook from "@/hooks/statichook";
import Makepost from "@/hooks/makepost";
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
      const { category, categorydata, quoteNumview, contactNumview } =
        Statichook();
      const data = await category();
      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();
      console.log(data);
      return {
        props: { categories: data, quotenumview, contactnumview },
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

  const { makePost, postmessage, setPostmessage, loading } = Makepost();

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

    form.append("id", event.target.elements.category.value);
    form.append("title", event.target.elements.title.value);
    form.append("des1", des1);
    form.append("des2", des2);
    form.append("des3", des3);
    form.append("des4", des4);
    form.append("des5", des5);
    form.append("message", "post");
    form.append("img1", clean(event.target.elements.img1?.files[0]));
    form.append("img2", clean(event.target.elements.img2?.files[0]));
    form.append("img3", clean(event.target.elements.img3?.files[0]));
    form.append("img4", clean(event.target.elements.img4?.files[0]));
    form.append("img5", clean(event.target.elements.img5?.files[0]));
    form.append("author", clean(event.target.elements.author.value));
    form.append("authorlink", clean(event.target.elements.authorlink.value));
    form.append("tag", event.target.elements.tag.value);
    form.append("color", event.target.elements.color.value);

    await makePost(form);
  };

  return (
    <>
      <main className="admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />

        <section className="addpost">
          <AnimatePresence>
            {postmessage?.message && (
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
                className={`alert show  alert-dismissible alert-${postmessage.type} fade`}
              >
                <strong> {postmessage?.message} </strong>

                <button
                  onClick={() => {
                    setPostmessage({});
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
            <div className="addpost__select">
              <div>
                <label for="">category</label>
                <select name="category" id="">
                  {categories.map((ma) => {
                    return <option value={ma.title}>{ma.title} </option>;
                  })}
                </select>
              </div>
              <div>
                <label for="">tags:</label>
                <input name="tag" type="text" />
              </div>
              <div>
                <label for="">colors:</label>
                <input name="color" type="text" />
              </div>
              <div>
                <label for="">Author:</label>
                <input name="author" type="text" />
              </div>
              <div>
                <label for="">AuthorLinks:</label>
                <input name="authorlink" type="text" />
              </div>
            </div>
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
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor value={des4} onChange={handleChange4} />
              <div>
                <label for="des4">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="img4" id="des4" />
              </div>
            </div>
            <div className="addpost__text">
              <label for=""> description </label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <Editor value={des5} onChange={handleChange5} />
              <div>
                <label for="des5">
                  <img src="/asset/icons/adminicon/upload.svg" alt="" />
                  choose file
                </label>

                <input className="d-none" type="file" name="img5" id="des5" />
              </div>
            </div>
            <button disabled={title ? false : true} type="submit">
              {loading ? "loading..." : "submit"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Addpost;
