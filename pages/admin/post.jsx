import { useEffect } from "react";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Adminnav from "../../comps/Adminnav";
import Postbody from "../../comps/postbody";
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
      const { ultdrawpost, quoteNumview, contactNumview } = Statichook();

      const ultra = await ultdrawpost();
      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();

      return {
        props: {
          ultra,
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

const post = ({ ultra, contactnumview, quotenumview }) => {
  const {
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

  useEffect(() => {
    console.log(singlepost);
  }, []);

  return (
    <>
      <main className=" admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />

        <section className="table">
          <div class="d-flex mb-5 ">
            <a
              href="/admin/addpost"
              class="catbut text-decoration-none text-white"
            >
              <img src="/asset/icons/adminicon/add.svg" alt="" /> new post
            </a>
          </div>
          <div className="table__cont container-fluid">
            <div className="table__head">
              <div>
                <div className="table__head--phone">
                  <h6 className=" text-capitalize font-weight-bold">
                    Category
                  </h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" text-capitalize font-weight-bold">title</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" text-capitalize font-weight-bold">img1</h6>
                </div>
              </div>

              <div>
                <div className="table__head--indus">
                  <h6 className=" text-capitalize font-weight-bold">time</h6>
                </div>
              </div>

              <div>
                <div className="table__head--act">
                  <h6 className=" text-capitalize font-weight-bold">action</h6>
                </div>
              </div>
            </div>

            {/* this is the post body section */}
            {ultra.map((ult, index) => {
              return <Postbody {...ult} key={index} />;
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
                  Single Post
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

                {loading2 ? (
                  <h3 className=" text-center">Loading...</h3>
                ) : (
                  <>
                    <div className="postdisplay bg-info ">
                      <div className="postdisplay__tag">
                        tag:{" "}
                        {singlepost.tag?.map((ma) => {
                          return <span> {ma} </span>;
                        })}
                      </div>
                      <div className="postdisplay__cat">
                        category: <span> {singlepost.id} </span>
                      </div>
                      {/* <!-- description display --> */}

                      <div className="postdisplay__des1">
                        <div className="postdisplay__des1text">
                          {singlepost.img1 && (
                            <img
                              className="postdisplay__img float-none "
                              src={`https://jeffmatthewpatten.com/api2/${singlepost.img1}`}
                              alt=""
                            />
                          )}

                          <div
                            dangerouslySetInnerHTML={{
                              __html: singlepost.des1,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="postdisplay__des1">
                        <div className="postdisplay__des1text">
                          {singlepost.img2 && (
                            <img
                              className="postdisplay__img float-none "
                              src={`https://jeffmatthewpatten.com/api2/${singlepost.img2}`}
                              alt=""
                            />
                          )}

                          <div
                            dangerouslySetInnerHTML={{
                              __html: singlepost.des2,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="postdisplay__des1">
                        <div className="postdisplay__des1text">
                          {singlepost.img3 && (
                            <img
                              className="postdisplay__img float-none "
                              src={`https://jeffmatthewpatten.com/api2/${singlepost.img3}`}
                              alt=""
                            />
                          )}

                          <div
                            dangerouslySetInnerHTML={{
                              __html: singlepost.des3,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="postdisplay__des1">
                        <div className="postdisplay__des1text">
                          {singlepost.img4 && (
                            <img
                              className="postdisplay__img float-none "
                              src={`https://jeffmatthewpatten.com/api2/${singlepost.img4}`}
                              alt=""
                            />
                          )}

                          <div
                            dangerouslySetInnerHTML={{
                              __html: singlepost.des4,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="postdisplay__des1">
                        <div className="postdisplay__des1text">
                          {singlepost.img5 && (
                            <img
                              className="postdisplay__img float-none "
                              src={`https://jeffmatthewpatten.com/api2/${singlepost.img5}`}
                              alt=""
                            />
                          )}

                          <div
                            dangerouslySetInnerHTML={{
                              __html: singlepost.des5,
                            }}
                          ></div>
                        </div>
                      </div>
                      {/* <!-- end of description display --> */}
                      <div className="postdisplay__cat">
                        Author: <span> {singlepost.author} </span>
                      </div>
                      <div className="postdisplay__cat">
                        date: <span> {singlepost.time} </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default post;
