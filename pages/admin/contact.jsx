import { useState } from "react";
import Adminnav from "../../comps/Adminnav";
import { motion } from "framer-motion";
import Quotebody from "../../comps/quotebody";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Contactbody from "../../comps/contactbody";
import Animatez from "@/Animate";

export const getServerSideProps = withSessionSsr(({ req, res }) => {
  const data = getSessionData(req);

  console.log(data);

  if (!data?.status) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: "data",
    },
  };
});

const quote = () => {
  const { genchild, gencont } = Animatez();

  return (
    <>
      <main className="admin">
        <Adminnav />
        <section className="table">
          <div className="table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--name">
                  <h6>name</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Phone</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6>message</h6>
                </div>
              </div>
              <div>
                <div className="table__head--indus">
                  <h6>email</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6>action</h6>
                </div>
              </div>
            </div>

            <motion.div
              variants={gencont}
              initial="initial"
              whileInView="animate"
            >
              <motion.div variants={genchild}>
                <Contactbody variants={genchild} />
              </motion.div>
              <motion.div variants={genchild}>
                <Contactbody variants={genchild} />
              </motion.div>
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
                {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                <div className="postdisplay">
                  {/* <!-- <div className="postdisplay__tag">
                  tag: <span>extinguisher</span><span>fire</span>
                </div> --> */}
                  <div className="postdisplay__cat">
                    Name: <span>fire_extinguisher</span>
                  </div>
                  <div className="postdisplay__cat">
                    phone: <span>09076176485</span>
                  </div>
                  <div className="postdisplay__cat">
                    Industry: <span>Retale</span>
                  </div>
                  <div className="postdisplay__cat">
                    description:
                    <span className="text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Earum ratione eveniet corporis laudantium delectus
                      assumenda rem voluptatum reiciendis cum, eius ut aperiam
                      dignissimos maxime consectetur dolore laboriosam explicabo
                      incidunt temporibus cupiditate magnam aspernatur repellat
                      necessitatibus! Voluptas error illo numquam, qui quibusdam
                      esse quos explicabo quam animi rerum doloribus minus
                      vitae!
                    </span>
                  </div>
                  <div className="postdisplay__cat">
                    email: <span>uzoechijerry@gmail.com</span>
                  </div>
                  {/* <!-- description display --> */}

                  {/* <!-- end of description display --> */}
                </div>
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
