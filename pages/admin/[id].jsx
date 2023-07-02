import { useEffect, useState } from "react";
import Adminnav from "../../comps/Adminnav";
import { motion, AnimatePresence } from "framer-motion";
import Editor from "../../comps/Editor";
import Statichook from "@/hooks/statichook";
import Makepost from "@/hooks/makepost";
import { withSessionSsr, getSessionData } from "../api/withsession";

// beggining of static props

export const getServerSideProps = withSessionSsr(
  async ({ req, res, params, query }) => {
    const { category, categorydata } = Statichook();

    const data = getSessionData(req);

    console.log(data);

    if (!data?.status) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else {
      const { category, categorydata, selectSingle } = Statichook();
      const { id } = params;

      const data = await category();
      const singledata = await selectSingle(id);
      console.log(singledata);

      if (singledata) {
        return {
          props: { categories: data, singledata },
        };
      } else {
        return {
          notFound: true,
        };
      }
    }
  }
);

// end of static props

const Addedit = ({ categories, singledata }) => {
  //handling submit

  const {
    makePost,
    updatePost,
    updatemessage,
    setUpdatemessage,
    postmessage,
    setPostmessage,
    loading,
  } = Makepost();
  const [des1, setdes1] = useState("");
  const [title, setTitle] = useState("");
  const [des2, setdes2] = useState("");
  const [des3, setdes3] = useState("");
  const [des4, setdes4] = useState("");
  const [des5, setdes5] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [author, setAuthor] = useState("");
  const [authorlink, setAuthorlink] = useState("");
  const [img1des1, setImg1des1] = useState("");
  const [img2des2, setImg2des2] = useState("");
  const [img3des3, setImg3des3] = useState("");
  const [img4des4, setImg4des4] = useState("");
  const [img5des5, setImg5des5] = useState("");
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    if (singledata) {
      setdes1(singledata?.des1);
      setdes2(singledata?.des2);
      setdes3(singledata?.des3);
      setdes4(singledata?.des4);
      setdes5(singledata?.des5);
      setTitle(singledata?.title);
      setCategory(singledata?.id);
      setImg1des1(singledata?.img1);
      setImg2des2(singledata?.img2);
      setImg3des3(singledata?.img3);
      setImg4des4(singledata?.img4);
      setImg5des5(singledata?.img5);
      setUuid(singledata?.uuid);
      setColor(singledata?.color?.toString());
      setTag(singledata?.tag?.toString());
      setAuthor(singledata?.author);
      setAuthorlink(singledata?.authorlink);
    }
  }, []);

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

    form.append("id", category);
    form.append("uuid", uuid);
    form.append("title", title);
    form.append("des1", des1);
    form.append("des2", des2);
    form.append("des3", des3);
    form.append("des4", des4);
    form.append("des5", des5);
    form.append("message", "updatepost");
    form.append("img1", clean(event.target.elements.img1?.files[0]));
    form.append("img2", clean(event.target.elements.img2?.files[0]));
    form.append("img3", clean(event.target.elements.img3?.files[0]));
    form.append("img4", clean(event.target.elements.img4?.files[0]));
    form.append("img5", clean(event.target.elements.img5?.files[0]));
    form.append("author", author);
    form.append("authorlink", authorlink);
    form.append("tag", tag);
    form.append("color", color);
    form.append("img1des1", img1des1);
    form.append("img2des2", img2des2);
    form.append("img3des3", img3des3);
    form.append("img4des4", img4des4);
    form.append("img5des5", img5des5);

    await updatePost(form);
  };

  return (
    <>
      <main className="admin">
        <Adminnav />

        <section className="addpost">
          <AnimatePresence>
            {updatemessage?.message && (
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
                className={`alert show  alert-dismissible alert-${updatemessage.type} fade`}
              >
                <strong> {updatemessage?.message} </strong>

                <button
                  onClick={() => {
                    setUpdatemessage({});
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
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  name="category"
                  id=""
                >
                  {categories.map((ma) => {
                    return (
                      <option
                        selected={ma.title == category && true}
                        value={ma.title}
                      >
                        {ma.title}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label for="">tags:</label>
                <input
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                  name="tag"
                  type="text"
                />
              </div>
              <div>
                <label for="">colors:</label>
                <input
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  name="color"
                  type="text"
                />
              </div>
              <div>
                <label for="">Author:</label>
                <input
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                  name="author"
                  type="text"
                />
              </div>
              <div>
                <label for="">AuthorLinks:</label>
                <input
                  value={authorlink}
                  onChange={(e) => {
                    setAuthorlink(e.target.value);
                  }}
                  name="authorlink"
                  type="text"
                />
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

                <input
                  onChange={() => {
                    setImg1des1("");
                  }}
                  className="d-none"
                  type="file"
                  name="img1"
                  id="des1"
                />
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

                <input
                  onChange={() => {
                    setImg2des2("");
                  }}
                  className="d-none"
                  type="file"
                  name="img2"
                  id="des2"
                />
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

                <input
                  onChange={() => {
                    setImg3des3("");
                  }}
                  className="d-none"
                  type="file"
                  name="img3"
                  id="des3"
                />
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

                <input
                  onChange={() => {
                    setImg4des4("");
                  }}
                  className="d-none"
                  type="file"
                  name="img4"
                  id="des4"
                />
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

                <input
                  onChange={(e) => {
                    setImg5des5("");
                  }}
                  className="d-none"
                  type="file"
                  name="img5"
                  id="des5"
                />
              </div>
            </div>
            <button disabled={title ? false : true} type="submit">
              {loading ? "loading..." : "update"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Addedit;
