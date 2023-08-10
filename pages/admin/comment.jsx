import { useState, useEffect } from "react";
import Adminnav from "../../comps/Adminnav";
import { motion } from "framer-motion";
import Quotebody from "../../comps/quotebody";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Contactbody from "../../comps/contactbody";
import Animatez from "@/Animate";
import { Generalget } from "@/context/General";
import Statichook from "@/hooks/statichook";
import Commentbody from "../../comps/Commentbody/Commentbody";

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
      const { joinComment, quoteNumview, contactNumview } = Statichook();

      const joincomment = await joinComment();
      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();

      return {
        props: {
          joincomment: joincomment,

          quotenumview,
          contactnumview,
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

const comment = ({ joincomment, contactnumview, quotenumview }) => {
  const { genchild, gencont } = Animatez();
  const { singlecomment, setSinglecomment, loading } = Generalget();

  useEffect(() => {
    console.log(singlecomment);
  }, []);

  return (
    <>
      <main className="admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />
        <section className="table">
          <div className="table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--des">
                  <h6 className=" text-capitalize font-weight-bolder">Topic</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" text-capitalize font-weight-bolder">Email</h6>
                </div>
              </div>

              <div>
                <div className="table__head--indus">
                  <h6 className=" text-capitalize font-weight-bolder">
                    Website
                  </h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6 className=" text-capitalize font-weight-bolder">Reply</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6 className=" text-capitalize font-weight-bolder">
                    action
                  </h6>
                </div>
              </div>
            </div>

            <motion.div variants={gencont} initial="initial" animate="animate">
              {joincomment.map((join) => {
                return (
                  <motion.div variants={genchild}>
                    <Commentbody {...join} variants={genchild} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* <!-- this is the modal section
       --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-lg modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {loading ? (
                <h3>loading..</h3>
              ) : (
                <div className="modal-body">
                  {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                  <div className="postdisplay">
                    {/* <!-- <div className="postdisplay__tag">
                  tag: <span>extinguisher</span><span>fire</span>
                </div> --> */}
                    <div className="postdisplay__cat">
                      Name: <span> {singlecomment?.name} </span>
                    </div>
                    <div className="postdisplay__cat">
                      website: <span> {singlecomment?.website} </span>
                    </div>
                    <div className="postdisplay__cat">
                      Time: <span> {singlecomment?.time} </span>
                    </div>
                    <div className="postdisplay__cat">
                      comment:
                      <span className="text-white">{singlecomment?.reply}</span>
                    </div>
                    <div className="postdisplay__cat">
                      email: <span>{singlecomment?.email} </span>
                    </div>
                    {/* <!-- description display --> */}

                    {/* <!-- end of description display --> */}
                  </div>
                </div>
              )}

              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default comment;
