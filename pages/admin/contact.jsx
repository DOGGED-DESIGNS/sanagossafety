import { useState } from "react";
import Adminnav from "../../comps/Adminnav";
import { motion } from "framer-motion";
import { Generalget } from "@/context/General";
import Quotebody from "../../comps/quotebody";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Contactbody from "../../comps/contactbody";
import Animatez from "@/Animate";
import Statichook from "@/hooks/statichook";

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
      const { contactNumview, quoteNumview, getContact } = Statichook();
      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();
      const getcontact = await getContact();
      return {
        props: {
          contactnumview,
          quotenumview,
          getcontact,
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

const quote = ({ contactnumview, quotenumview, getcontact }) => {
  const { genchild, gencont } = Animatez();

  const {
    singlecontact,
    loading2,
    setLoading2,
    setSinglecontact,
    singlecomment,
    setSinglecomment,
    singleservice,
    setSingleservice,
    singlepost,
    setSinglepost,
    singlecategory,
    cattest,
    setCattest,
    catprev,
    setCatprev,
    setSinglecategory,
    singleindustry,
    setSingleindustry,
  } = Generalget();

  return (
    <>
      <main className="admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />
        <section className="table">
          <div className="table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bolder">name</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bolder">Phone</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bolder">email</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bolder">time</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6 className=" font-weight-bolder">action</h6>
                </div>
              </div>
            </div>

            <motion.div variants={gencont} initial="initial" animate="animate">
              {getcontact.map((con) => {
                return (
                  <motion.div variants={genchild}>
                    <Contactbody {...con} variants={genchild} />
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
              <div className="modal-body">
                {loading2 ? (
                  <h3>Loading..</h3>
                ) : (
                  <div className="postdisplay">
                    {/* <!-- <div className="postdisplay__tag">
                  tag: <span>extinguisher</span><span>fire</span>
                </div> --> */}
                    <div className="postdisplay__cat">
                      Name: <span> {singlecontact.name} </span>
                    </div>
                    <div className="postdisplay__cat">
                      phone: <span> {singlecontact.phone} </span>
                    </div>

                    <div className="postdisplay__cat">
                      description:
                      <span className="text-white">
                        {singlecontact.message}
                      </span>
                    </div>
                    <div className="postdisplay__cat">
                      email: <span> {singlecontact.email} </span>
                    </div>
                    {/* <!-- description display --> */}

                    {/* <!-- end of description display --> */}
                  </div>
                )}
                {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default quote;
