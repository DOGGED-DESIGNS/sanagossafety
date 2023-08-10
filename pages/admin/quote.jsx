import { useState } from "react";
import Adminnav from "../../comps/Adminnav";
import Quotebody from "../../comps/quotebody";
import { withSessionSsr, getSessionData } from "../api/withsession";
import Statichook from "@/hooks/statichook";
import { Generalget } from "@/context/General";

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
      const { quoteNumview, contactNumview, getQuote } = Statichook();

      const quotenumview = await quoteNumview();
      const contactnumview = await contactNumview();
      const getquote = await getQuote();

      return {
        props: {
          quotenumview,
          contactnumview,
          getquote,
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

const quote = ({ contactnumview, quotenumview, getquote }) => {
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
      <main className="admin">
        <Adminnav contactnum={contactnumview} quotenum={quotenumview} />
        <section className="table">
          <div className="table__cont container-fluid">
            <div className="table__head mb-5 ">
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bolder text-capitalize">
                    {" "}
                    industry{" "}
                  </h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bolder text-capitalize">name</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bolder text-capitalize">Email</h6>
                </div>
              </div>
              <div>
                <div className="table__head--phone">
                  <h6 className=" font-weight-bolder text-capitalize">phone</h6>
                </div>
              </div>
              <div>
                <div className="table__head--act">
                  <h6 className=" font-weight-bolder text-capitalize">
                    action
                  </h6>
                </div>
              </div>
            </div>

            {getquote.map((get) => {
              return <Quotebody {...get} />;
            })}
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

              {loading2 ? (
                <h2 className=" text-center">loading..</h2>
              ) : (
                <div className="modal-body">
                  {/* <!-- <div className="spinner-grow m-auto d-block"></div> --> */}
                  <div className="postdisplay">
                    {/* <!-- <div className="postdisplay__tag">
                  tag: <span>extinguisher</span><span>fire</span>
                </div> --> */}
                    <div className="postdisplay__cat">
                      Name: <span> {singlequote.name} </span>
                    </div>
                    <div className="postdisplay__cat">
                      phone: <span> {singlequote.phone} </span>
                    </div>
                    <div className="postdisplay__cat">
                      Industry: <span> {singlequote.id} </span>
                    </div>
                    <div className="postdisplay__cat">
                      description:
                      <span className="text-white">
                        {singlequote.description}
                      </span>
                    </div>
                    <div className="postdisplay__cat">
                      email: <span> {singlequote.email} </span>
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

export default quote;
