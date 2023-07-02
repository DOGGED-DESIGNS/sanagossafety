import React from "react";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Adminnav from "../../comps/Adminnav";
import Postbody from "../../comps/postbody";

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

const post = () => {
  return (
    <>
      <main className=" admin">
        <Adminnav />

        <section className="table">
          <div className="table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--name">
                  <h6>Title</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6>Author</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6>Description</h6>
                </div>
              </div>
              <div>
                <div className="table__head--indus">
                  <h6>tags</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6>action</h6>
                </div>
              </div>
            </div>

            {/* this is the post body section */}
            <Postbody />
          </div>
        </section>

        {/* <!-- Button trigger modal --> */}

        {/* <!-- <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button> --> */}

        {/* <!-- Modal --> */}
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
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
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
                  <div className="postdisplay__tag">
                    tag: <span>extinguisher</span>
                    <span>fire</span>
                  </div>
                  <div className="postdisplay__cat">
                    category: <span>fire_extinguisher</span>
                  </div>
                  {/* <!-- description display --> */}

                  <div className="postdisplay__des1">
                    <div className="postdisplay__des1text">
                      <p className="  text-white-50 ">
                        <img
                          className="postdisplay__img"
                          src="/asset/img/presentation-8.png"
                          alt=""
                        />
                        <span className="postdisplay__title">
                          This is the title
                        </span>
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sit pariatur doloribus nobis soluta, aperiam non,
                        ipsa nemo ex impedit consectetur libero temporibus
                        doloremque quas rerum error, nihil rem deserunt? At
                        explicabo, fuga qui unde incidunt quaerat ab tempora
                        vitae et perferendis ipsa soluta modi aliquid maiores
                        quibusdam accusamus, possimus voluptate excepturi illo
                        facilis ex veritatis nobis. Animi veritatis nam, minus
                        repellendus, facilis mollitia assumenda totam adipisci
                        dolorum quae fuga perspiciatis est eum? Necessitatibus,
                        minus quia nulla incidunt placeat, delectus optio
                        itaque, libero voluptas repudiandae ut nesciunt
                        consequatur culpa eaque quaerat quas vero corporis
                        explicabo maiores! Animi impedit recusandae aliquam
                        quisquam.
                      </p>
                    </div>
                  </div>
                  <div className="postdisplay__des1">
                    <div className="postdisplay__des1text">
                      <p className="  text-white-50 ">
                        <img
                          className="postdisplay__img"
                          src="./asset/img/presentation-8.png"
                          alt=""
                        />
                        <span className="postdisplay__title">
                          This is the title
                        </span>
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sit pariatur doloribus nobis soluta, aperiam non,
                        ipsa nemo ex impedit consectetur libero temporibus
                        doloremque quas rerum error, nihil rem deserunt? At
                        explicabo, fuga qui unde incidunt quaerat ab tempora
                        vitae et perferendis ipsa soluta modi aliquid maiores
                        quibusdam accusamus, possimus voluptate excepturi illo
                        facilis ex veritatis nobis. Animi veritatis nam, minus
                        repellendus, facilis mollitia assumenda totam adipisci
                        dolorum quae fuga perspiciatis est eum? Necessitatibus,
                        minus quia nulla incidunt placeat, delectus optio
                        itaque, libero voluptas repudiandae ut nesciunt
                        consequatur culpa eaque quaerat quas vero corporis
                        explicabo maiores! Animi impedit recusandae aliquam
                        quisquam.
                      </p>
                    </div>
                  </div>
                  <div className="postdisplay__des1">
                    <div className="postdisplay__des1text">
                      <p className="  text-white-50 ">
                        <img
                          className="postdisplay__img"
                          src="./asset/img/presentation-8.png"
                          alt=""
                        />
                        <span className="postdisplay__title">
                          This is the title
                        </span>
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sit pariatur doloribus nobis soluta, aperiam non,
                        ipsa nemo ex impedit consectetur libero temporibus
                        doloremque quas rerum error, nihil rem deserunt? At
                        explicabo, fuga qui unde incidunt quaerat ab tempora
                        vitae et perferendis ipsa soluta modi aliquid maiores
                        quibusdam accusamus, possimus voluptate excepturi illo
                        facilis ex veritatis nobis. Animi veritatis nam, minus
                        repellendus, facilis mollitia assumenda totam adipisci
                        dolorum quae fuga perspiciatis est eum? Necessitatibus,
                        minus quia nulla incidunt placeat, delectus optio
                        itaque, libero voluptas repudiandae ut nesciunt
                        consequatur culpa eaque quaerat quas vero corporis
                        explicabo maiores! Animi impedit recusandae aliquam
                        quisquam.
                      </p>
                    </div>
                  </div>
                  {/* <!-- end of description display --> */}
                  <div className="postdisplay__cat">
                    Author: <span>Uzoechi jeremaih</span>
                  </div>
                  <div className="postdisplay__cat">
                    date: <span>4/4/23</span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default post;
