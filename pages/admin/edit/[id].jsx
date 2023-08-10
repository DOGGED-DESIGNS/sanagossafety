import { useEffect, useState } from "react";
import Adminnav from "../../../comps/Adminnav";
import { motion, AnimatePresence } from "framer-motion";
import Editor from "../../../comps/Editor";
import Statichook from "@/hooks/statichook";
import Makepost from "@/hooks/makepost";
import { withSessionSsr, getSessionData } from "../../api/withsession";
import { Generalget } from "@/context/General";

// beggining of static props

export const getServerSideProps = withSessionSsr(
  async ({ req, res, params, query }) => {
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
        const { id } = params;
        console.log(id);
        const { singleService } = Statichook();
        const singleservice = await singleService(id);
        if (singleservice) {
          return {
            props: { singleservice },
          };
        } else {
          return {
            notFound: true,
          };
        }
      }
    } else {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  }
);

// end of static props

const Addservice = ({ singleservice }) => {
  //handling submit

  const { loading2 } = Generalget();
  const {
    makePost,
    updatePost,
    updatemessage,
    setUpdatemessage,
    loading,
    updateService,
    setUup,
    uup,
  } = Makepost();
  const [des1, setdes1] = useState("");
  const [title, setTitle] = useState("");
  const [des2, setdes2] = useState("");
  const [des3, setdes3] = useState("");
  const [img1des1, setImg1des1] = useState("");
  const [img2des2, setImg2des2] = useState("");
  const [img3des3, setImg3des3] = useState("");
  const [id, setId] = useState("");
  const [indus, setIndus] = useState("");
  const [dessm, setDessm] = useState("");

  useEffect(() => {
    if (singleservice) {
      setdes1(singleservice?.des1);
      setdes2(singleservice?.des2);
      setdes3(singleservice?.des3);

      setTitle(singleservice?.title);
      setId(singleservice?.id);
      setImg1des1(singleservice?.img1);
      setImg2des2(singleservice?.img2);
      setImg3des3(singleservice?.img3);
      setDessm(singleservice?.dessm);
      setIndus(singleservice?.indus);
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

    form.append("id", id);
    form.append("title", title);
    form.append("des1", des1);
    form.append("des2", des2);
    form.append("des3", des3);
    form.append("message", "updateservice");
    form.append("img1", clean(event.target.elements.img1?.files[0]));
    form.append("img2", clean(event.target.elements.img2?.files[0]));
    form.append("img3", clean(event.target.elements.img3?.files[0]));

    form.append("img1des1", img1des1);
    form.append("img2des2", img2des2);
    form.append("img3des3", img3des3);
    form.append("dessm", dessm);
    form.append("indus", indus);

    await updateService(form);
  };

  return (
    <>
      <main className="admin">
        <Adminnav />

        <section className="addpost">
          <AnimatePresence>
            {uup?.message && (
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
                className={`alert show  alert-dismissible alert-${uup.type} fade`}
              >
                <strong> {uup?.message} </strong>

                <button
                  onClick={() => {
                    setUup({});
                  }}
                  className="close"
                >
                  {" "}
                  &times;{" "}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <form onSubmit={handleSubmit} action="" className="addpost__form">
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
              <input
                value={dessm}
                onChange={(e) => {
                  setDessm(e.target.value);
                }}
                name="dessm"
                className="addpost__title"
                type="text"
              />
            </div>
            <div className="addpost__title">
              <label for="">Industry</label>
              <input
                value={indus}
                onChange={(e) => {
                  setIndus(e.target.value);
                }}
                name="indus"
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
