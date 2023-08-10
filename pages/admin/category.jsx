import React from "react";
import { useRouter } from "next/router";
import Adminnav from "../../comps/Adminnav";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Categorybody from "../../comps/categorybody";
import { AnimatePresence, motion } from "framer-motion";
import Animatez from "@/Animate";
import { Generalget } from "@/context/General";
import Statichook from "@/hooks/statichook";
import Makepost from "@/hooks/makepost";

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const data = getSessionData(req);

  if (data) {
    if (!data?.status) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else {
      const { category, quoteNumview, contactNumview } = Statichook();

      const cat = await category();
      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();

      return {
        props: {
          cat,
          contactnumview,
          quotenumview,
        },
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

const category = ({ cat }) => {
  const { genchild, gencont } = Animatez();
  const router = useRouter();

  const { cattest, setCattest, catprev, contactnumview, quotenumview } =
    Generalget();

  const {
    postCategory,
    catupdate,
    setCatupdate,
    catmessage,
    loading,
    setCatmessage,
    updateCategory,
  } = Makepost();
  return (
    <>
      <main className="main">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />
        <section class="table">
          <div class="d-flex">
            <button
              data-toggle="modal"
              data-target="#exampleModal"
              class="catbut"
            >
              <img src="/asset/icons/adminicon/add.svg" alt="" /> new category
            </button>
          </div>
          <div class="table__cont container-fluid">
            <div class="table__head">
              <div>
                <div class="table__head--phone">
                  <h6 className=" text-capitalize font-weight-bolder">
                    Category
                  </h6>
                </div>
              </div>
              <div>
                <div class="table__head--des">
                  <h6 className=" text-capitalize font-weight-bolder">time</h6>
                </div>
              </div>
              <div>
                <div class="table__head--des">
                  <h6 className=" text-capitalize font-weight-bolder">color</h6>
                </div>
              </div>
              <div>
                <div class="table__head--des">
                  <h6 className=" text-capitalize font-weight-bolder">
                    action
                  </h6>
                </div>
              </div>
            </div>
            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              {cat.map((c) => {
                return (
                  <motion.div>
                    <Categorybody {...c} variants={genchild} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* <!-- modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-lg modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    router.reload();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {/* <!-- <div class="spinner-grow m-auto d-block"></div> --> */}
                <AnimatePresence>
                  {catmessage?.message && (
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
                      className={`alert show  alert-dismissible alert-${catmessage.type} fade`}
                    >
                      <strong> {catmessage?.message} </strong>

                      <button
                        onClick={() => {
                          setCatmessage({});
                        }}
                        className="close"
                      >
                        {" "}
                        &times;{" "}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await postCategory(e.target.elements.cat.value);
                  }}
                  action=""
                >
                  <label for="" class="col-form-label">
                    New Category
                  </label>
                  <input type="text" class="form-control" name="cat" id="" />
                  <button
                    type="submit"
                    class="d-block w-100 ml-auto my-3 btn btn-danger"
                  >
                    submit
                  </button>
                </form>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>

        {/* update modal */}
        <div
          class="modal fade"
          id="updateModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-lg modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    router.reload();
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {/* <!-- <div class="spinner-grow m-auto d-block"></div> --> */}
                <AnimatePresence>
                  {catupdate?.message && (
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
                      className={`alert show  alert-dismissible alert-${catupdate.type} fade`}
                    >
                      <strong> {catupdate?.message} </strong>

                      <button
                        onClick={() => {
                          setCatupdate({});
                        }}
                        className="close"
                      >
                        {" "}
                        &times;{" "}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await updateCategory(
                      e.target.elements.cat.value,
                      e.target.elements.hidden.value
                    );
                  }}
                  action=""
                >
                  <label for="" class="col-form-label">
                    New Category
                  </label>
                  <input
                    onChange={(e) => {
                      setCattest(e.target.value);
                    }}
                    type="text"
                    class="form-control"
                    name="cat"
                    id=""
                    value={cattest}
                  />
                  <input
                    onChange={(e) => {
                      setCattest(e.target.value);
                    }}
                    type="hidden"
                    class="form-control"
                    name="hidden"
                    id=""
                    value={catprev}
                  />
                  <button
                    type="submit"
                    class="d-block w-100 ml-auto my-3 btn btn-danger"
                  >
                    submit
                  </button>
                </form>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default category;
