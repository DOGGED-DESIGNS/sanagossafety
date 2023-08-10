import { useEffect } from "react";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Adminnav from "../../comps/Adminnav";
import Postbody from "../../comps/postbody";
import Servicebody from "../../comps/Servicebody/Servicebody";
import Statichook from "@/hooks/statichook";
import { Generalget } from "@/context/General";

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
      const { getService, quoteNumview, contactNumview } = Statichook();

      const getservice = await getService();
      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();
      return {
        props: {
          getservice,
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

const services = ({ getservice, contactnumview, quotenumview }) => {
  const {
    singlecontact,
    singlequote,
    setSinglequote,
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
      <main className=" admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />

        <section className="table">
          <div class="d-flex mb-5 ">
            <a
              href="/admin/addservice"
              class="catbut text-decoration-none text-white"
            >
              <img src="/asset/icons/adminicon/add.svg" alt="" /> new service
            </a>
          </div>
          <div className="table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--name">
                  <h6 className=" font-weight-bold">Title</h6>
                </div>
              </div>
              <div>
                <div className="table__head--des">
                  <h6 className=" font-weight-bold">Dessm</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bold">Industry</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bold">Image</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6 className=" font-weight-bold">action</h6>
                </div>
              </div>
            </div>

            {getservice.map((se) => {
              return <Servicebody {...se} />;
            })}
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
                {loading2 ? (
                  <h2 className=" text-center text-capitalize">Loading</h2>
                ) : (
                  <div className="postdisplay  bg-info ">
                    {/* <!-- description display --> */}

                    <div className="postdisplay__des1 float-none ">
                      <div className="postdisplay__des1text  ">
                        <div className="postdisplay__cat">
                          Small_talk: <span> {singleservice.dessm} </span>
                        </div>
                        <div className="postdisplay__cat">
                          Date: <span> {singleservice.time} </span>
                        </div>

                        <img
                          className="postdisplay__img float-none"
                          src={`https://jeffmatthewpatten.com/api2/${singleservice.img1}`}
                          alt=""
                        />

                        <div
                          className=" text-white-50"
                          dangerouslySetInnerHTML={{
                            __html: singleservice.des1,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="postdisplay__des1">
                      <div className="postdisplay__des1text">
                        <img
                          className="postdisplay__img float-none"
                          src={`https://jeffmatthewpatten.com/api2/${singleservice.img2}`}
                          alt=""
                        />

                        <div
                          className=" text-white-50"
                          dangerouslySetInnerHTML={{
                            __html: singleservice.des2,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="postdisplay__des1">
                      <div className="postdisplay__des1text">
                        <img
                          className="postdisplay__img float-none "
                          src={`https://jeffmatthewpatten.com/api2/${singleservice.img3}`}
                          alt=""
                        />

                        <div
                          style={{
                            color: "white",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: singleservice.des3,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* <!-- end of description display --> */}
                    {/* <div className="postdisplay__cat">
                      Author: <span>Uzoechi jeremaih</span>
                    </div> */}

                    <div className=" clearfix"></div>
                  </div>
                )}
                {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default services;
